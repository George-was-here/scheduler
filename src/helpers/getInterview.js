export function getInterview(state, interview) {
  return interview && interview.interviewer ? 
  {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  }
  : null;
};