import React from "react";

import DayListItem from "components/DayListItem";


export default function DayList(props) {
  return (
  <ul>
    {props.days.map(day => <DayListItem key={day.id} setDay={props.setDay} spots={day.spots} selected={day.name === props.day} name={day.name}/>)}
  </ul>
  );
}
