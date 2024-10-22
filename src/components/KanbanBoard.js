import React, { useEffect, useState } from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

const KanbanBoard = ({ groupBy, sortBy }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users); 
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (tickets.length > 0 && users.length > 0) {
      sortAndGroupTickets(tickets);
    }
  }, [tickets, users, groupBy, sortBy]); 

  const sortAndGroupTickets = (tickets) => {
    // Sort tickets based on sortBy criteria
    const sortedTickets = [...tickets].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'priority') {
        return b.priority - a.priority; 
      }
      return 0; 
    });

    // Create a mapping of userId to userName
    const userMapping = users.reduce((acc, user) => {
      acc[user.id] = user.name; 
      return acc;
    }, {});

    const groups = {};
    sortedTickets.forEach(ticket => {
  
      const key = groupBy === 'user' 
        ? userMapping[ticket.userId] || ticket.userId 
        : groupBy === 'priority' 
        ? ticket.priority 
        : ticket.status;
        
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(ticket);
    });

    setGroupedTickets(groups);
  };

  return (
    <div className="kanban-board">
      <div className="columns-container">
        {Object.entries(groupedTickets).map(([key, tickets]) => (
          <KanbanColumn key={key} status={key} tickets={tickets} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
