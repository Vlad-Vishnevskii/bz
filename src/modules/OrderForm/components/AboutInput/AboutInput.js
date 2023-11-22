import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export const AboutInput = ({ value, change, className }) => {
  return (
    <TextareaAutosize
      value={value}
      onChange={(e) => change(e.target.value)}
      className={className}
      placeholder="Кратко опишите ваш проект"
      minRows={1}
    />
  );
};
