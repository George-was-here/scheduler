import React from 'react'; //optional

import InterviewerListItem from "components/InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList (props) {
  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
    {props.interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} setInterviewer={() => props.onChange(interviewer.id)} name={interviewer.name} selected={interviewer.id === props.value} avatar={interviewer.avatar}/>)}
    </ul>
  </section>
  );
}

// setInterviewer={() => props.setInterviewer(interviewer.id)}
// return (
//   <ul>
//     {props.days.map(day => <DayListItem key={day.id} setDay={props.setDay} spots={day.spots} selected={day.name === props.day} name={day.name}/>)}
//   </ul>
//   );
// }

// const interviewers = [
//   { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
//   { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
//   { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
//   { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
//   { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
// ];






