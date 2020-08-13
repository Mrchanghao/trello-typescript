import React, { useState } from 'react';
import { AddItemButton } from './sytles';
import { NewItemForm } from './NewItemForm';

interface AddItemProps {
  onAdd: (text: string) => void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddItem = ({
  onAdd,
  toggleButtonText,
  dark,
}: AddItemProps) => {
  const [showForm, setShowForm] = useState(false);
  
  if(showForm) {
    return (
      <NewItemForm 
      onAdd={text => {
        onAdd(text);
        setShowForm(false);
      }}
    />
    )
  }
  return (
    <AddItemButton
      dark={dark}
      onClick={() => {
        return setShowForm(true);
      }}
    >
      {toggleButtonText}
    </AddItemButton>
  )

};
