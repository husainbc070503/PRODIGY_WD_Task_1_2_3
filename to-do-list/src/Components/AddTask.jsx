import styled from "@emotion/styled";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context/TodoContext";

const AddTask = () => {
  const { task, handleChange, addTodo } = useGlobalContext();

  return (
    <Box>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={8} xs={12}>
          <FormControl fullWidth>
            <TextField
              label="TO-DO"
              variant="outlined"
              focused
              sx={{ input: { color: "white" } }}
              value={task}
              onChange={(e) => handleChange(e.target.value)}
              onKeyDown={(e) =>
                e.keyCode === 13 && e.target.value !== "" && addTodo()
              }
              placeholder="Type here.."
            />
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <Button variant="contained" onClick={() => task !== "" && addTodo()}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTask;
