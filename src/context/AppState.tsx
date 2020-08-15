import React, { 
  createContext, 
  PropsWithChildren, 
  useContext, 
  useReducer 
} from 'react';

type Action = | {type: 'ADD_LIST', payload: string} | {type: 'ADD_TASK', payload: { text: string; listId: string}}

interface Task {
  id: string;
  text: string;
};

interface List {
  id: string;
  text: string;
  tasks: Task[]
}

interface AppStateContextProps {
  state: AppState;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

const appState: AppState =  {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  lists: [
    {
      id: "0",
      text: 'To Do',
      tasks: [{id: 'c0', text: 'Generate App'},],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{id: 'c2', text: 'learn typescript'}],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{id: 'c3', text: 'Begin to learn interface'}]
    }
  ]
}

export interface AppState {
  lists: List[]
}

export const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{state: appState}}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext);
}