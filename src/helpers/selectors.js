export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const dayObj = state.days.find(d => d.name === day);
  
  return dayObj ? dayObj.appointments.map(appie => state.appointments[appie]) : [];
};