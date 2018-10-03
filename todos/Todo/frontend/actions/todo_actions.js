import * as TodoAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const fetchTodos = function() {
  return function (dispatch) {
    return TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
  };
};

window.fetchTodos = fetchTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
