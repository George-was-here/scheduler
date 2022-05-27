import React from "react";

import "components/DayListItem.scss";

import classNames from "classnames";

export default function DayListItem(props) {
  const dayName = props.name;
  const dayListClassName = classNames('dayClass day-list__item', { "day-list__item--selected": props.selected, "day-list__item--full": props.spots === 0});
  
  return (
    <li className={dayListClassName} onClick={() => props.setDay(dayName)} data-testid="day">
      <h2 className="text--regular">{dayName}</h2>
      <h3 className="text--light">{props.spots === 0 ? "no" : props.spots} {props.spots === 1 ? "spot" : "spots"} remaining</h3>
    </li>
  );
}