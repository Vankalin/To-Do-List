import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      <TransitionGroup>
        {todos.map((todo, index) => (
          <CSSTransition
          key={todo.id}
          timeout={500}
          classNames="todo-row">
            <div
              className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
              //onClick={(e) => completeTodo(todo.id)}
              >
              <div>              
                <span
                className='todo-check'
                onClick={(e) => completeTodo(todo.id)}
                >✔</span>
                <span
                className='todo-name'
                >{todo.text}</span>
              </div>
              <div className='icons'>
                <img src='https://res.cloudinary.com/vankalin/image/upload/v1651753836/ToDo/cancel_cylhr5.png'
                  onClick={() => removeTodo(todo.id)}
                  className='delete-icon'
                />
                <img src='https://res.cloudinary.com/vankalin/image/upload/v1651753836/ToDo/edit_dbzfpm.png'
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  className='edit-icon'
                />
              </div>
            </div>
          </CSSTransition> 
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Todo;
