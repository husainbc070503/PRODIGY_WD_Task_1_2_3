import React, { createContext, useContext, useEffect, useReducer } from "react";
import { TodoReducer } from "../Reducers/TodoReducer";

const Context = createContext();
const storedTodos = localStorage.getItem("your-todos");

const initialState = {
  todos: storedTodos ? JSON.parse(storedTodos) : [],
  task: "",
};

const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleChange = (value) =>
    dispatch({ type: "SET_TASK", payload: value });

  const addTodo = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: String(Math.floor(Math.random() * 100000)),
        taskToDo: state.task,
        completed: false,
        updateTodoValue: "",
      },
    });

  const handleComplete = (id) =>
    dispatch({ type: "SET_COMPLETE", payload: id });

  const handleEdit = (_id, val) =>
    dispatch({ type: "SET_EDITING", payload: { _id, val } });

  const updateTodo = (id, value) =>
    dispatch({ type: "UPDATE_TODO", payload: { id, value } });

  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });

  useEffect(() => {
    localStorage.setItem("your-todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <Context.Provider
      value={{
        ...state,
        handleChange,
        addTodo,
        handleComplete,
        handleEdit,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => useContext(Context);

export { useGlobalContext, TodoContext };
