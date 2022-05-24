import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";

import { useVisualMode } from "hooks/useVisualMode";

import "./styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const SAVING = "SAVING";
const CREATE = "CREATE";

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
          onDelete={deleteInterview}
        />
      )}
      {mode === CREATE && (
        <Form
          student={props.interview ? props.interview.student: null}
          interviewer={props.interview ? props.interview.interviewer: null}
          onAdd={() => {}}
          onCancel={back}
          interviewers={props.interviewers}
          onSave={save}
        />
      )}
      {mode === SAVING && (
        <Status message="Loading..."/>
      )}
    </article>
  );
};