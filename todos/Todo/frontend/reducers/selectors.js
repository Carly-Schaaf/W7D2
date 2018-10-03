import React from 'react';

const allTodos = (state) => {
  let result = [];
  Object.values(state.todos).forEach((todo)=>
  result.push(todo));
  return result;
};
window.allTodos = allTodos;
export default allTodos;
