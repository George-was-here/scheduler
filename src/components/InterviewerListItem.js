import React from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";

export default function InterviewListItem (props) {
  const InterviewerClassName = classNames('interviewers__item', { "interviewers__item--selected": props.selected});

  return (
    <li className={InterviewerClassName} onClick={() => props.setInterviewer(props.id)}>
    <img 
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
      {props.name}
    </li>
  );
}