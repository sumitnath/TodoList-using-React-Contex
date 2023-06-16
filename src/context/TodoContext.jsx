import React, { useState, useEffect } from "react";

const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "ToDO1",
      isActive: true,
      show: true,
    },
    {
      id: 2,
      title: "ToDO2",
      isActive: true,
      show: true,
    },
  ]);
  const [todoCount, setTodoCount] = useState(0);
  const handleTodoCount = () => {
    let newCount = todoItems.filter((item) => item.isActive === true);
    setTodoCount(newCount.length);
  };
  const addTodoItem = (newTodoItem) => {
    setTodoItems([
      ...todoItems,
      {
        id: `${todoItems.length + 1}`,
        title: `${newTodoItem}`,
        isActive: true,
        show: true,
      },
    ]);
  };
  const removeTodoItems = (todoItemToRemove) => {
    const existingItem = todoItems.find(
      (item) => item.id === todoItemToRemove.id
    );

    if (existingItem) {
      const newTodoItems = todoItems.filter(
        (item) => item.id !== todoItemToRemove.id
      );
      setTodoItems(newTodoItems);
    }
  };
  const clearCompleted = () => {
    let newTodoItems = todoItems.filter((item) => item.isActive === true);
    setTodoItems(newTodoItems);
  };

  useEffect(() => {
    handleTodoCount();
  }, [todoItems]);

  return (
    <TodoContext.Provider
      value={{
        todoItems: todoItems,
        addTodoItem: addTodoItem,
        removeTodoItems: removeTodoItems,
        handleTodoCount: handleTodoCount,
        todoCount: todoCount,
        clearCompleted: clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
