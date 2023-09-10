import { FormEvent, useState } from 'react';
import { useTodos } from '../../store/todosContext';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const { handleAddToDo } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);

    setTodo('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo || ''}
        onChange={(e) => setTodo(e.target.value)}
        name="todo"
      />
      <button type="submit"> Add todo</button>
    </form>
  );
};

export default AddTodo;
