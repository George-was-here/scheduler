import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import { useVisualMode } from "hooks/useVisualMode";

import "./styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const SAVING = "SAVING";
const CREATE = "CREATE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment (props) {
  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer: interviewer.id
    };
    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW);
    }) 
  }

  function deleteInterview() {
    transition(SAVING);
    props.cancelInterview(props.id).then(() => {
      transition(EMPTY);
    }) 
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => {transition(CONFIRM)}}
          onEdit={() => {transition(EDIT)}}
        />
      )}
      {mode === CREATE && (
        <Form
          student={props.interview ? props.interview.student: null}
          interviewer={props.interview ? props.interview.interviewer: null}
          onCancel={back}
          interviewers={props.interviewers}
          onSave={save}
        />
      )}
      {mode === SAVING && (
        <Status message="Loading..."/>
      )}
      {mode === CONFIRM && (
        <Confirm message="Are you sure you'd like to delete my friend?"
        onCancel={back}
        onConfirm={deleteInterview}
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onCancel={() => {transition(SHOW)}}
          interviewers={props.interviewers}
          onSave={save}
        />
      )}
    </article>
  );
};