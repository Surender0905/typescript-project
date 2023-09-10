import { ReactNode, createContext, useState, useContext } from 'react';

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void; // call signature
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddToDo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];

      console.log(newTodos);

      // localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todosContext.Provider value={{ todos, handleAddToDo }}>
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(todosContext);

  if (!todosConsumer) {
    throw new Error('useTodos used outside of Provider');
  }
  return todosConsumer;
};
