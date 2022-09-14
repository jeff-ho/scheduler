import React from 'react'
import DayListItem from './DayListItem'

export default function DayList({ value, onChange, days }) {
  const dayList = days.map(({ id, name, spots }) => {
    return(
      <DayListItem 
      key = {id}
      name = {name}
      spots = {spots}
      selected = {name === value}
      setDay = {onChange}
      />
    );
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
};

