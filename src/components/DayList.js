import React from 'react'
import DayListItem from './DayListItem'
import {useState} from 'react'


export default function DayList(props) {
  //const [day, setDay] = useState(props.day)

  const days = props.days.map((day) => {
    return(
      <DayListItem 
      name = {day.name}
      spots = {day.spots}
      key = {day.id}
      selected = {day.name === props.day}
      setDay = {props.setDay}
      />
    )
  })

  return (
    <ul>
      {days}
    </ul>
  )
};

