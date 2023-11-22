import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export const AboutInput = ({ value, change, className, placeholderText }) => {
  return (
    <TextareaAutosize
      value={value}
      onChange={(e) => change(e.target.value)}
      className={className}
      placeholder={placeholderText}
      minRows={1}
    />
  );
};
