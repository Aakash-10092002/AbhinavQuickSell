import React from 'react';
import KanbanCard from './KanbanCard';
import { ReactComponent as TodoIcon } from '../assets/To-do.svg';
import { ReactComponent as InProgressIcon } from '../assets/in-progress.svg';
import { ReactComponent as DoneIcon } from '../assets/done.svg';
import { ReactComponent as BacklogIcon } from '../assets/backlog.svg';
import { ReactComponent as AddIcon } from '../assets/add.svg'; 
import { ReactComponent as MenuIcon } from '../assets/menu.svg'; 
import './KanbanColumn.css';
import { ReactComponent as LowPriorityIcon } from '../assets/priority-low.svg';
import { ReactComponent as MediumPriorityIcon } from '../assets/priority-medium.svg';
import { ReactComponent as HighPriorityIcon } from '../assets/priority-high.svg';
import { ReactComponent as UrgentPriorityIcon } from '../assets/priority-urgent.svg';

const statusIcons = {
  Todo: <TodoIcon />,
  "In progress": <InProgressIcon />,
  Done: <DoneIcon />,
  Backlog: <BacklogIcon />,
};

const priorityNames = {
  0: { name: 'No Priority', icon: null }, 
  1: { name: 'Low Priority', icon: <LowPriorityIcon /> },
  2: { name: 'Medium Priority', icon: <MediumPriorityIcon /> },
  3: { name: 'High Priority', icon: <HighPriorityIcon /> },
  4: { name: 'Urgent Priority', icon: <UrgentPriorityIcon /> },
};

const KanbanColumn = ({ status, tickets }) => {
  const heading = priorityNames[status] ? priorityNames[status] : { name: status, icon: statusIcons[status] };

  return (
    <div className={`kanban-column ${status.toLowerCase()}`}>
      <div className="column-header">
        {heading.icon} 
        <h2>{heading.name}</h2> 
        <div className="column-actions">
          <AddIcon className="action-icon" /> 
          <MenuIcon className="action-icon" /> 
        </div>
      </div>
      {tickets.map(ticket => (
        <KanbanCard 
          key={ticket.id} 
          id={ticket.id} 
          title={ticket.title} 
          priority={ticket.priority} 
          tag={ticket.tag} 
        />
      ))}
    </div>
  );
};

export default KanbanColumn;
