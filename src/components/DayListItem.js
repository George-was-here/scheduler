import React from "react";

export default function DayListItem(props) {
  const dayName = props.name;
  return (
    <li onClick={() => props.setDay(dayName)}>
      <h2 className="text--regular">{dayName}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}