export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const dayObj = state.days.find(d => d.name === day);

  return dayObj ? dayObj.appointments.map(appie => state.appointments[appie]) : [];
}

export function getInterview(state, interview) {
  return interview && interview.interviewer ?
    {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer]
    }
    : null;
}

export function getInterviewersForDay(state, day) {
  //... returns an array of appointments for that day
  const dayObj = state.days.find(d => d.name === day);
  
  return dayObj ? dayObj.interviewers.map(interviewer => state.interviewers[interviewer]) : [];
}