import React from 'react'; //optional

import DayListItem from "components/DayListItem";

export default function DayList(props) {

  return (
  <ul>
    {props.days.map(day =>(
    <DayListItem
      key={day.id} 
      setDay={props.onChange}
      spots={day.spots}
      selected={day.name === props.value}
      name={day.name}
    />))}
  </ul>
  );
}
