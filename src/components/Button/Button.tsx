import React from 'react';

import './Button.scss';

export const Button: React.FC<any> = ({ children }) => {
  return <button className="button">{children}</button>;
};
