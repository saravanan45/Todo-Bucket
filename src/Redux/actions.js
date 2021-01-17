import {
  CREATEBUCKET,
  UPDATEBUCKET,
  GETBUCKETSLIST,
  UPDATEBUCKETSLIST,
  GETTODOINFO,
  UPDATETODOSINFO,
  CREATENEWTODO,
  UPDATENEWTODO,
  UPDATEEXISTINGTODO,
  UPDATEEXISTINGTODOINSTORE,
  DELETEONETODO,
  DELETEONETODOINSTORE,
  CHANGESTATUSFORTODOINAPI,
  CHANGESTATUSFORTODOINSTORE,
} from "./constants";

export const createBucketInfoInStore = (payload) => ({
  type: CREATEBUCKET,
  payload,
});

export const updateBucketInfoInStore = (payload) => ({
  type: UPDATEBUCKET,
  payload,
});

export const getBucketsListFromStore = (payload) => ({
  type: GETBUCKETSLIST,
  payload,
});

export const updateBucketsListInStore = (payload) => ({
  type: UPDATEBUCKETSLIST,
  payload,
});

export const getTodoInfoFromAPI = (payload) => ({
  type: GETTODOINFO,
  payload,
});

export const updateTodosInfoInStore = (payload) => ({
  type: UPDATETODOSINFO,
  payload,
});

export const createNewTodoInAPI = (payload) => ({
  type: CREATENEWTODO,
  payload,
});

export const updateNewTodoInStore = (payload) => ({
  type: UPDATENEWTODO,
  payload,
});

export const deleteTodoInAPI = (payload) => ({
  type: DELETEONETODO,
  payload,
});

export const deleteTodoInSTORE = (id) => ({
  type: DELETEONETODOINSTORE,
  id,
});

export const updateExisitngTodoInAPI = (payload) => ({
  type: UPDATEEXISTINGTODO,
  payload,
});

export const updateExisitngTodoInStore = (payload) => ({
  type: UPDATEEXISTINGTODOINSTORE,
  payload,
});

export const changeStatusforTodoInAPI = (payload) => ({
  type: CHANGESTATUSFORTODOINAPI,
  payload,
});

export const changeStatusforTodoInStore = (payload) => ({
  type: CHANGESTATUSFORTODOINSTORE,
  payload,
});
