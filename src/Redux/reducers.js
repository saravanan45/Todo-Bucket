import {
  UPDATEBUCKET,
  UPDATEBUCKETSLIST,
  UPDATETODOSINFO,
  UPDATENEWTODO,
  UPDATEEXISTINGTODOINSTORE,
  DELETEONETODOINSTORE,
  CHANGESTATUSFORTODOINSTORE,
} from "./constants";

const initialState = {
  bucketInfo: {
    name: "",
    category: "important",
  },
  bucketsList: [],
  todolist: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEBUCKET:
      return {
        ...state,
        bucketInfo: {
          name: action.payload.bucketName,
          category: action.payload.category,
        },
      };
    case UPDATEBUCKETSLIST:
      return {
        ...state,
        bucketsList: [...action.payload.data],
      };
    case UPDATETODOSINFO:
      return {
        ...state,
        todolist: [...action.payload.data],
      };

    case UPDATENEWTODO:
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };
    case DELETEONETODOINSTORE:
      return {
        ...state,
        todolist: state.todolist.filter((todo) => todo.id !== action.id),
      };
    case UPDATEEXISTINGTODOINSTORE:
      return {
        ...state,
        todolist: state.todolist.map((todo) => {
          if (todo.id == action.payload.id) {
            todo.message = action.payload.message;
          }
          return todo;
        }),
      };
    case CHANGESTATUSFORTODOINSTORE:
      return {
        ...state,
        todolist: state.todolist.map((todo) => {
          if (todo.id == action.payload.id) {
            todo.status = action.payload.status;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default reducers;
