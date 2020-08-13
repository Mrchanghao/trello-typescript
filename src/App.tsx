import * as React from 'react';
import { AppContainer } from './sytles';
import { Column } from './Column';
import { Card } from './Card';


const App = () => {
  return (
    <AppContainer>
      <Column text={'To do'}>
        <Card text={"generate To App"} />
      </Column>
      <Column text={'In Progress'}>
        <Card text={"Learn Typescript"} />
      </Column>
      <Column text={'Completed'}>
        <Card text={"use static type"} />
      </Column>
    </AppContainer>
  )
};

export default App;