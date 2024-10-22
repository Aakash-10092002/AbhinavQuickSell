import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayMenu from './components/DisplayMenu';
import './App.css';

const App = () => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('');

  const handleGroupBy = (criteria) => {
    setGroupBy(criteria);
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
  };

  return (
    <div className="app">
      <DisplayMenu onGroupBy={handleGroupBy} onSortBy={handleSortBy} />
      <KanbanBoard groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
