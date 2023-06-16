import React, { useContext } from "react";
import "./todo-item.css";
import { ReactComponent as Cross } from "../../assets/icon-cross.svg";
import { ReactComponent as Check } from "../../assets/icon-check.svg";

//context
import TodoContext from "../../context/TodoContext";

const TodoItem = ({ todoItem }) => {
  const { removeTodoItems ,handleTodoCount} = useContext(TodoContext);

  const checkList = (todoItemSelected) => {
    let todoCircle = document.querySelector(
      `#todo-icon-${todoItemSelected.id}`
    );
    let check = document.querySelector(`#check-${todoItemSelected.id}`);
    let todoItemTitle = document.querySelector(
      `#todo-item-${todoItemSelected.id}`
    );

    todoCircle.classList.toggle("checked");
    check.classList.toggle("hidden");
    todoItemTitle.classList.toggle("checked");
    // if the item is selected, then its completed, otherwise its not
    if (todoItemTitle.classList.contains("checked")) {
      todoItemSelected.isActive = false;
    } else {
      todoItemSelected.isActive = true;
    }
// update the count on click
handleTodoCount()

  };

  const handleDelete = (todoItemToRemove) => {
    removeTodoItems(todoItemToRemove);
  };

  return (
    <div className="todo-item-container">
      <div className="todo-items" onClick={() => checkList(todoItem)}>
        <div className="todo-icon" id={`todo-icon-${todoItem.id}`}>
          <Check id={`check-${todoItem.id}`} className="hidden" />
        </div>
        <div className="todo-item" id={`todo-item-${todoItem.id}`}>
          {todoItem.title}
        </div>
      </div>
      <Cross className="cross" onClick={() => handleDelete(todoItem)} />
    </div>
  );
};

export default TodoItem;
