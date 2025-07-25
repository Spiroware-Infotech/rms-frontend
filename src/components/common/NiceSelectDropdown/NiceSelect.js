import React, { useState, useRef, useEffect } from 'react';
// import './NiceSelect.css'; // Write styles to match the original plugin



const NiceSelect = ({
  options,
  value,
  onChange,
  disabled = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const selected = options.find((opt) => opt.value === value) || { label: 'All Categories' };


  const toggleDropdown = () => {
    if (!disabled) setOpen((prev) => !prev);
  };

  const handleOptionClick = (val) => {
    onChange(val);
    setOpen(false);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  return (
    <div
      className={`nice-select wide ${className} ${disabled ? 'disabled' : ''} ${open ? 'open' : ''}`}
      tabIndex={disabled ? -1 : 0}
      onClick={toggleDropdown}
      ref={wrapperRef}
    >
      <span className="current">{selected?.label}</span>
      <ul className="list">
        {options.map((opt) => (
          <li
            key={opt.value}
            className={`option${value === opt.value ? ' selected' : ''}${opt.disabled ? ' disabled' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (!opt.disabled) handleOptionClick(opt.value);
            }}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;
