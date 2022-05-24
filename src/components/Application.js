import React, { useState, useEffect } from "react";
import axios from 'axios';
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterviewersForDay } from "helpers/selectors";


import "components/Application.scss";

import DayList from "./DayList";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

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
      axios.put(`http://localhost:8001/api/appointments/${appointment.id}`, {interview}).then(() => {
        setState(prev => ({...prev, appointments}));
        resolve();
      }).catch(() => {
        reject()
      })
    })
  }

  function cancelInterview(id) {
    return new Promise((resolve, reject) => {
    axios.delete(`http://localhost:8001/api/appointments/${id}`).then(() => {
      const stateAppointments = {...state.appointments};
      delete stateAppointments[id].interview;
      setState(prev => ({...prev, appointments: stateAppointments}));
      resolve();
    }).catch(() => {
      reject()
    })
  })
}

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const setDay = day => setState(prev => ({ ...prev, day }));

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:8001/api/days`),
      axios.get(`http://localhost:8001/api/appointments`),
      axios.get(`http://localhost:8001/api/interviewers`)
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"x
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
       {dailyAppointments.map(appointment => (
         <Appointment
          key={appointment.id} 
          interviewers={dailyInterviewers}
          {...appointment}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview} 
         />
       ))}
       {/* Last appointment  */}
       <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
