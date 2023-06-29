import { FormControl, TableCell, TableRow, TextField } from "@mui/material";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalContext } from "../Context/TodoContext";

const Todo = ({ todo, index }) => {
  const { id, taskToDo, updateTodoValue, completed } = todo;
  const { handleComplete, handleEdit, updateTodo, deleteTodo } =
    useGlobalContext();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center" sx={{ color: "#fff" }}>
        {index + 1}
      </TableCell>
      <TableCell
        align="center"
        className={`TableCell task ${completed && "strike"}`}
      >
        {updateTodoValue ? (
          <FormControl fullWidth>
            <TextField
              value={updateTodoValue}
              variant="outlined"
              sx={{ input: { color: "white" } }}
              onChange={(e) => handleEdit(id, e.target.value)}
              onKeyDown={(e) =>
                e.keyCode === 13 && updateTodo(id, e.target.value)
              }
              focused
            />
          </FormControl>
        ) : (
          taskToDo
        )}
      </TableCell>
      <TableCell align="center">
        <CheckCircleIcon
          sx={{ color: completed ? "#00DFA2" : "#C4DFDF", cursor: "pointer" }}
          onClick={() => handleComplete(id)}
        />
      </TableCell>
      <TableCell align="center">
        {!completed && (
          <EditIcon
            sx={{ color: "#F2BE22", cursor: "pointer" }}
            onClick={() => handleEdit(id, taskToDo)}
          />
        )}
        <DeleteIcon
          sx={{ color: "#F24C3D", cursor: "pointer" }}
          onClick={() => deleteTodo(id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default Todo;
