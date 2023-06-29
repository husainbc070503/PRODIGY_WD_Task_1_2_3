import styled from "@emotion/styled";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context/TodoContext";
import Todo from "./Todo";

const TableHeading = styled(TableCell)`
  font-size: 18px;
  color: #fff;
  text-align: center;
  color: #64ccc5;
  font-weight: bold;
`;

const Notodo = styled(Typography)`
  color: #fff;
  margin: 30px 0;
  font-size: 22px;
`;

const TaskList = () => {
  const { todos } = useGlobalContext();

  return todos.length > 0 ? (
    <TableContainer sx={{ margin: "36px auto 0" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeading>Sr. No.</TableHeading>
            <TableHeading sx={{ minWidth: "450px" }}>Task</TableHeading>
            <TableHeading>Completed</TableHeading>
            <TableHeading>Action</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo, index) => {
            return <Todo todo={todo} key={todo.id} index={index} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Notodo>No Todos. Add Some</Notodo>
  );
};

export default TaskList;
