import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './sytles';

interface NewItemFormProps {
  onAdd: (text: string) => void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  
  const [text, setText] = useState('');
  
  return (
    <NewItemFormContainer>
      <NewItemInput 
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={e => setText(e.target.value)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}