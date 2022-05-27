import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState(prev => ({ ...prev, day }));

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return new Promise((resolve, reject) => {
      axios.put(`/api/appointments/${appointment.id}`, {interview}).then(() => {
        const days = updateSpots(state, appointments);
        setState(prev => ({...prev, appointments, days}));
        resolve();
      }).catch(() => {
        reject()
      })
    })
  }

  function cancelInterview(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/appointments/${id}`).then(() => {
        const stateAppointments = {...state.appointments};
        stateAppointments[id].interview = null;
        const days = updateSpots(state, stateAppointments);
        setState(prev => ({...prev, appointments: stateAppointments, days}));
        resolve();
      }).catch(() => {
        reject()
      })
    });
  }

  function updateSpots(localState, appointments) {
    const localStateCopy = Object.assign({}, localState);
    const currentDayIndex = localStateCopy.days.findIndex(day => day.name === localStateCopy.day);
    const currentDay = Object.assign({}, localStateCopy.days[currentDayIndex])
    let spots = 0; 
    localStateCopy.days[currentDayIndex].appointments.forEach((appointmentId) => {
      if(!appointments[appointmentId].interview) {
        spots++;
      }
    });
    currentDay.spots = spots;
  
    const retArray = [...localStateCopy.days.filter(day => day.name !== localStateCopy.day), currentDay].sort((a, b) =>  a.id - b.id)
    return retArray;
  }

  return { state, setDay, bookInterview, cancelInterview }
}