import React, { 
  createContext, 
  PropsWithChildren, 
  useContext, 
  useReducer 
} from 'react';
import {nanoid} from 'nanoid';
import { findItemIndexById } from '../utils/findItemIndexById';
import { moveItem } from '../utils/moveItem';
import { DragItem } from '../DragItem';

type Action = | {type: 'ADD_LIST', payload: string} | {type: 'ADD_TASK', payload: { text: string; listId: string}} | { type: 'MOVE_LIST', payload: {
  dragIndex: number;
  hoverIndex: number;
}} | {
  type: 'SET_DRAGGED_ITEM',
  payload: DragItem | undefined,
}
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
  dispatch: any;
}



const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

const appState: AppState =  {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  draggedItem: undefined,
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
  draggedItem: DragItem | undefined;
  lists: Array<List>;
}

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch(action.type) {
    case 'ADD_LIST':
      // const visibilityExample = 'Too visible';
      return {
        ...state,
        lists: [
          ...state.lists,
          {id: nanoid(), text: action.payload, tasks: []},
        ]
      };
    case 'ADD_TASK':
      const targetLaneIndex = findItemIndexById(state.lists, action.payload.listId);
      state.lists[targetLaneIndex].tasks.push({
        id: nanoid(),
        text: action.payload.text
      })
      // const visibilityExample = 'Too visible';
      return {
        ...state,
      };
    case 'MOVE_LIST':
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex)
      return {
        ...state,
      }
    case 'SET_DRAGGED_ITEM':
      return {
        ...state,
        draggedItem: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appState);
  return (
    <AppStateContext.Provider value={{state, dispatch}}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext);
}