export function getAppointmentsForDay(state, day) {

  const selectedDay = state.days.find(({ name }) => day === name);

  if(state.days.length === 0 || !selectedDay ) return [];

  return selectedDay.appointments.map((appointmentId) => state.appointments[appointmentId])
  
};


export function getInterview(state, interview) {
  if (!interview) return null;

  const interviewerArray = Object.values(state.interviewers)
  const student = interview.student;
  const interviewer = interviewerArray.find(({id}) => id === interview.interviewer )
   
  return {student, interviewer};
  
}

export function getInterviewersForDay(state, day) {

  const selectedDay = state.days.find(({ name }) => day === name);

  if(state.days.length === 0 || !selectedDay ) return [];

  return selectedDay.interviewers.map((interviewerId) => state.interviewers[interviewerId])
  
};