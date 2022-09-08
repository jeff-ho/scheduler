export function getAppointmentsForDay(state, day) {

  const selectedDay = state.days.find(({ name }) => day === name);

  if(state.days.length === 0 || !selectedDay ) return [];
  
  return selectedDay.appointments.map((appointmentId) => state.appointments[appointmentId])
  
};