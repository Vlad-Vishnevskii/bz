import React from 'react';

export const ContactInput = ({ value, change }) => {
  return (
    <input
      type='text'
      onChange={(e) => change(e.target.value)}
      value={value}
      placeholder='Оставьте свой email или номер телефона'
    />
  );
};
