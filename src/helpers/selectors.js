export function getAppointmentsForDay(state, day) {

  const selectedDay = state.days.filter((individualDay) => {
    return day === individualDay.name
  })

  if(state.days.length === 0 || selectedDay.length === 0 ) {
    return [];
  }

  const selectedDayAppointmentArray = selectedDay[0].appointments;
  
  const dayAppointments = selectedDayAppointmentArray.map((individualAppointment) => {

    return Object.values(state.appointments).filter((appointment) => {
      if(individualAppointment === appointment.id) {
       
        return appointment;
      }
    })
  })
  return dayAppointments.flat();
};