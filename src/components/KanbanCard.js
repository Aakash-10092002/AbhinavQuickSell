import React from 'react';
import { ReactComponent as LowPriorityIcon } from '../assets/priority-low.svg';
import { ReactComponent as MediumPriorityIcon } from '../assets/priority-medium.svg';
import { ReactComponent as HighPriorityIcon } from '../assets/priority-high.svg';
import { ReactComponent as UrgentPriorityIcon } from '../assets/priority-urgent.svg';
import './KanbanCard.css';


const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4:
      return <UrgentPriorityIcon />;
    case 3:
      return <HighPriorityIcon />;
    case 2:
      return <MediumPriorityIcon />;
    case 1:
      return <LowPriorityIcon />;
    default:
      return null;
  }
};

const KanbanCard = ({ id, title, priority, tag }) => (
  <div className="kanban-card">
    <div className="card-header">
      <div className="card-id">ID: {id}</div>
      <div className="priority-icon">{getPriorityIcon(priority)}</div>
    </div>
    <h3>{title}</h3>
    <div className="card-tag">{tag}</div>
  </div>
);

export default KanbanCard;
