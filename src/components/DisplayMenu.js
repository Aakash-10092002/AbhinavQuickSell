import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as DisplayIcon } from '../assets/display.svg';
import { ReactComponent as DownIcon } from '../assets/down.svg';
import './DisplayMenu.css';

const DisplayMenu = ({ onGroupBy, onSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="display-menu" ref={dropdownRef}>
      <button className="display-button" onClick={toggleDropdown}>
        <DisplayIcon />
        Display <DownIcon />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div>
            <label>Grouping:</label>
            <select onChange={(e) => onGroupBy(e.target.value)}>
              <option value="status">By Status</option>
              <option value="user">By User</option>
              <option value="priority">By Priority</option>
            </select>
          </div>
          <div>
            <label>Ordering:</label>
            <select onChange={(e) => onSortBy(e.target.value)}>
              <option value="title">By Title</option>
              <option value="priority">By Priority</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;
