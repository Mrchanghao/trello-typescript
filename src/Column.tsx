import React, { PropsWithChildren, useRef } from 'react';
import { ColumnContainer, ColumnTitle } from './sytles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './context/AppState';
import { Card } from './Card';
import { useItemDrag } from './utils/useItemDrag';
import { useDrop } from 'react-dnd';
import { DragItem } from './DragItem';
import { isHidden } from './utils/isHidden';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}

export const Column = ({ 
  text, 
  index,
  id,
  isPreview,
  children }: PropsWithChildren<ColumnProps>) => {
    const { state, dispatch } = useAppState()
    const ref = useRef<HTMLDivElement>(null);
    const { drag } = useItemDrag({type: 'COLUMN', id, index, text });
    const [, drop] = useDrop({
      accept: 'COLUMN',
      hover(item: DragItem) {
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        dispatch({type: 'MOVE_LIST', payload: { dragIndex, hoverIndex }})
        item.index = hoverIndex;
      }
    })
    drag(drop(ref));
    return (
    <ColumnContainer ref={ref} isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)} isPreview={isPreview}>
      <ColumnTitle>
        {text}
      </ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i}  />
      ))}
      {/* {children} */}
      <AddNewItem toggleButtonText={"+ Add task"} onAdd={text => dispatch({type: 'ADD_TASK', payload: { text, listId: id }})} 
        dark
        />
    </ColumnContainer>
  )
};
