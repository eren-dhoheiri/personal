import React from 'react';

export const Title: React.FC = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{children}</h1>
  );
};
