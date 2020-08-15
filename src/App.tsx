import * as React from 'react';
import { AppContainer } from './sytles';
import { Column } from './Column';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './context/AppState';


const App = () => {
  const { state } = useAppState();
  console.log(state);
  return (
    <AppContainer>
      { state.lists.map((list, i) => (
        <Column text={list.text} index={i} key={list.id} />
      ))}
      <AddNewItem toggleButtonText={"+ Add list"} onAdd={console.log} />
      {/* <Column text={'To do'}>
        <Card text={"generate To App"} />
      </Column>
      <Column text={'In Progress'}>
        <Card text={"Learn Typescript"} />
      </Column>
      <Column text={'Completed'}>
        <Card text={"use static type"} />
      </Column> */}
      
    </AppContainer>
  )
};

export default App;