import React from 'react';

export const NameInput = ({ value, change }) => {
  return (
    <input
      type='text'
      onChange={(e) => change(e.target.value)}
      value={value}
      placeholder='Представьтесь пожалуйста'
    />
  );
};
