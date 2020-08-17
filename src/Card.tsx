import React from 'react';
import { CardContainer } from './sytles';

interface CardProps {
  text: string;
  index?: number;
};


export const Card = ({ text, index }: CardProps) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
}