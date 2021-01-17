import { takeLatest, takeEvery, put } from "redux-saga/effects";

import {
  CHANGESTATUSFORTODOINAPI,
  CREATEBUCKET,
  CREATENEWTODO,
  DELETEONETODO,
  GETBUCKETSLIST,
  GETTODOINFO,
  UPDATEEXISTINGTODO,
} from "../Redux/constants";
import {
  updateBucketInfoInStore,
  updateBucketsListInStore,
  updateTodosInfoInStore,
  updateNewTodoInStore,
  updateExisitngTodoInStore,
  deleteTodoInSTORE,
  changeStatusforTodoInStore,
} from "../Redux/actions";
import {
  createNewBucket,
  getBucketsList,
  getTodosInfo,
  createNewTodo,
  EditTodo,
  deleteTodo,
  updateStatus,
} from "../services/index";

function* postNewBucketInfo(data) {
  const message = yield createNewBucket(data.payload);
  yield put(updateBucketInfoInStore(data.payload));
}

function* getBucketsListInfo(data) {
  const buckets = yield getBucketsList(data.payload);
  yield put(updateBucketsListInStore(buckets));
}

function* getTodoInfo(data) {
  const todos = yield getTodosInfo(data.payload);
  yield put(updateTodosInfoInStore(todos));
}

function* submitNewTodo(data) {
  const todos = yield createNewTodo(data.payload);
  data.payload.id = todos.id;
  yield put(updateNewTodoInStore(data.payload));
}

function* updateExisTodo(data) {
  const todos = yield EditTodo(data.payload);
  yield put(updateExisitngTodoInStore(data.payload));
}

function* deleteTodoSaga(data) {
  const todos = yield deleteTodo(data.payload);
  yield put(deleteTodoInSTORE(data.payload));
}

function* changeStatusSaga(data) {
  const todos = yield updateStatus(data.payload);
  yield put(changeStatusforTodoInStore(data.payload));
}

export default function* sagas() {
  yield takeLatest(CREATEBUCKET, postNewBucketInfo);
  yield takeLatest(GETBUCKETSLIST, getBucketsListInfo);
  yield takeLatest(GETTODOINFO, getTodoInfo);
  yield takeLatest(CREATENEWTODO, submitNewTodo);
  yield takeLatest(UPDATEEXISTINGTODO, updateExisTodo);
  yield takeLatest(DELETEONETODO, deleteTodoSaga);
  yield takeLatest(CHANGESTATUSFORTODOINAPI, changeStatusSaga);
}
