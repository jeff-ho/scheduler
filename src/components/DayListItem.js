import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem({selected, spots, setDay, name}) {
  //selected, spots, setDay, name

  const dayClass = classNames(
  'day-list__item',
  {
  'day-list__item--selected':selected,
  'day-list__item--full':spots === 0
  });

  const formatSpots = (
    (spots === 0 && <h3 className="text--light">no spots remaining</h3> ) ||
    (spots === 1 && <h3 className="text--light">1 spot remaining</h3> ) ||
    (spots  && <h3 className="text--light">{spots} spots remaining</h3> )
    ); 

  return (
    <li className={dayClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2> 
       {formatSpots}
    </li>
  );
} 



