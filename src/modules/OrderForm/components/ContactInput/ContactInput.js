import React from 'react';

export const ContactInput = ({ value, change, placeholderText }) => {
  return (
    <input
      type="text"
      onChange={(e) => change(e.target.value)}
      value={value}
      placeholder={placeholderText}
      required
    />
  );
};
