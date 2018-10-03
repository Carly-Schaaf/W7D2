import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';
import {uniqueId} from '../../util/unique_id';


const TodoList = ({todos, receiveTodo}) => {
  return(
    <section>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => <TodoListItem todo={todo}/>)}
      </ul>
      <h3>New Todo:</h3>
        <TodoForm receiveTodo={receiveTodo} />
    </section>
  );
};

export default TodoList;
