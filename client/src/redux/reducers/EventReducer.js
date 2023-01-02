import {
  add_toDo,
  delete_toDo,
  edit_toDo,
  complete_toDo,
} from '../constants/ActionTypes';

const initialState = {
  toDo: [
    {
      id: 0,
      text: 'Local Event 1',
      desc: 'The datails of this event go here.',
      eventDate: '2023-01-17',
      isCompleted: false,
    },
    {
      id: 1,
      text: 'Local Event 2',
      desc: 'The datails of this event go here.',
      eventDate: '2023-01-17',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Local Event 3',
      desc: 'The datails of this event go here.',
      eventDate: '2023-01-17',
      isCompleted: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case add_toDo:
      return {
        ...state,
        toDo: state.toDo.concat(action.payload),
      };

    case delete_toDo:
      return {
        ...state,
        toDo: state.toDo.filter((el, i) => el.id !== action.payload),
      };

    case edit_toDo:
      return {
        ...state,
        toDo: state.toDo.map((el, i) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.text, isCompleted: false }
            : el
        ),
      };

    case complete_toDo:
      return {
        ...state,
        toDo: state.toDo.map((el, i) =>
          el.id === action.payload
            ? { ...el, isCompleted: !el.isCompleted }
            : el
        ),
      };

    default:
      return state;
  }
};

export default todos;
