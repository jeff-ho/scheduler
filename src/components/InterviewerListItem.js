import React from 'react';
import './InterviewerListItem.scss';
import classNames from "classnames";

export default function InterviewerListItem(props) {

  const interviewerName = (
    props.selected ? props.name : ""
  );

  const interviewerClass = classNames(
    'interviewers__item',
    {
      'interviewers__item--selected': props.selected
    }
  );

  return (
    <li className={interviewerClass}  onClick={props.setInterviewer}>
    <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {interviewerName}
  </li>
  )
};
