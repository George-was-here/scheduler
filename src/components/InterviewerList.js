import React from 'react';

import PropTypes from 'prop-types';

import InterviewerListItem from "components/InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} setInterviewer={() => props.onChange(interviewer.id)} name={interviewer.name} selected={interviewer.id === props.value} avatar={interviewer.avatar}/>)}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};





