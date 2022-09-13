import React from 'react'
import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss';
import PropTypes from 'prop-types';

export default function InterviewerList({value, onChange, interviewers}) {

  const interviewersList = interviewers.map(({id, name, avatar})=> {
    return(
    <InterviewerListItem 
    key={id}
    name={name}
    avatar={avatar}
    selected={value === id}
    setInterviewer={() => onChange(id)}
    />
    )
  });

  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewersList}</ul>
    </section>
  )
}


InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}
