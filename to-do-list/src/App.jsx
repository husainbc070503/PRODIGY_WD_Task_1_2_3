import styled from "@emotion/styled";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import { lightBlue } from "@mui/material/colors";
import TaskList from "./Components/TaskList";

function App() {
  const theme = createTheme({
    palette: {
      primary: lightBlue,
    },
  });

  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        <Header />
        <AddTask />
        <TaskList />
      </ThemeProvider>
    </Container>
  );
}

export default App;
