import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import TodoNav from '../components/todo/TodoNav';

const Todo = () => {
  return (
    <div>
      <h1>Todo React + Typescript </h1>
      <TodoNav />

      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todo;
