import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useApplicationData() {
  const setDay = day => setState({ ...state, day });
  
  const[state, setState] = useState({
    day: 'Monday',
    days:[],
    appointments:{},
    interviewers:{}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  },[]);

  function calculateSpots(id, appointments) {
    const dayIndex = state.days.findIndex(day => state.day === day.name);
    const currentDay = state.days[dayIndex];
    const spots = currentDay.appointments.filter(appointmentId => !appointments[appointmentId].interview).length
  
    const day = {
      ...state.days[dayIndex],
      spots
    };
    const days = [...state.days];
    days[dayIndex] = day;
    return days;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
     
    return axios.put(`/api/appointments/${id}`, appointment)
    .then(() => {
      let days = calculateSpots(id, appointments);
      setState(prev => ({...prev, days }));
      setState(prev => ({...prev, appointments}));
    });
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      let days = calculateSpots(id,appointments)
      setState(prev => ({...prev, days }))
      setState(prev => ({...prev, appointments}))
    });
  };
  return { state, setDay, bookInterview, cancelInterview};
};




