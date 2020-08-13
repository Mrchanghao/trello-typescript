import React, { PropsWithChildren } from 'react';
import { ColumnContainer, ColumnTitle } from './sytles';

interface ColumnProps {
  text?: string;
}

export const Column = ({ 
  text, 
  children }: PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>
        {text}
      </ColumnTitle>
      {children}
    </ColumnContainer>
  )
};
