import * as React from 'react';
import { AppContainer } from './sytles';
import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './context/AppState';
import { CustomDragLayer } from './CustomDragLayer';


const App = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomDragLayer />
      { state.lists.map((list, i) => (
        <Column text={list.text} index={i} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText={"+ Add list"} onAdd={text => dispatch({type: 'ADD_LIST', payload: text})} />
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