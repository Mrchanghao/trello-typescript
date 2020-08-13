import React from 'react';
import { CardContainer } from './sytles';

interface CardProps {
  text: string;
};


export const Card = ({ text }: CardProps) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
}