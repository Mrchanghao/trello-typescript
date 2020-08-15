import React, { PropsWithChildren } from 'react';
import { ColumnContainer, ColumnTitle } from './sytles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './context/AppState';
import { Card } from './Card';

interface ColumnProps {
  text?: string;
  index: number;
}

export const Column = ({ 
  text, 
  index,
  children }: PropsWithChildren<ColumnProps>) => {
    const { state } = useAppState()
    console.log(index);
    return (
    <ColumnContainer>
      <ColumnTitle>
        {text}
      </ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id}  />
      ))}
      {/* {children} */}
      <AddNewItem toggleButtonText={"+ Add task"} onAdd={console.log} 
        dark
        />
    </ColumnContainer>
  )
};
