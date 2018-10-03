import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  }
  // 2: {
  //   id: 2,
  //   title: 'wash dog',
  //   body: 'with shampoo',
  //   done: true
  // },
};

 const todosReducer = function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      const result = {};
      action.todos.forEach((todo) => result[todo.id] = todo);
      return result;
    case RECEIVE_TODO:
      return Object.assign({}, state, {[action.todo.id]: action.todo});
    default:
      return state;
  }

};

export default todosReducer;
