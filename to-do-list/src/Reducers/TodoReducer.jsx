export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        task: action.payload,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        task: "",
      };

    case "SET_COMPLETE":
      const tempTodos1 = state.todos.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, completed: !todo.completed };

        return todo;
      });

      return {
        ...state,
        todos: tempTodos1,
      };

    case "SET_EDITING":
      const { _id, val } = action.payload;
      const tempTodos2 = state.todos.map((todo) => {
        if (todo.id === _id) return { ...todo, updateTodoValue: val };

        return todo;
      });

      return {
        ...state,
        todos: tempTodos2,
      };

    case "UPDATE_TODO":
      const { id, value } = action.payload;
      const tempTodos3 = state.todos.map((todo) => {
        if (todo.id === id)
          return { ...todo, taskToDo: value, updateTodoValue: "" };
        return todo;
      });

      return {
        ...state,
        todos: tempTodos3,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
