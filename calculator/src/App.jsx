import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { orange, yellow } from "@mui/material/colors";
import React, { useEffect, useState } from "react";

const Card = styled(Box)`
  width: 600px;
  max-width: 97%;
  border-radius: 10px;
  background: #fff;
  margin: 4rem auto 0;
  padding: 20px;

  @media (max-width: 890px) {
    padding: 10px;
  }
`;

const Buttons = styled(Box)`
  padding: 20px 35px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (max-width: 890px) {
    padding: 15px 0px;
  }
`;

const CalcBtn = styled(Button)`
  @media (max-width: 890px) {
    margin: 0 7px;
  }
`;

const App = () => {
  const theme = createTheme({
    palette: {
      primary: yellow,
      secondary: orange,
    },
  });

  var [value, setValue] = useState("");
  var [intergerBtns, setIntergersBtns] = useState([]);

  useEffect(() => {
    const intergerBtnsList = document.querySelectorAll("#interger_btn");
    setIntergersBtns(intergerBtnsList);
  }, []);

  intergerBtns &&
    Array.from(intergerBtns).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        value += e.target.innerText;
        setValue(value);
      });
    });

  const handleEqual = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue("Not Valid");
    }
  };

  const handleClear = () => setValue("");
  const handleDel = () => setValue(String(value).slice(0, -1));

  return (
    <Container maxWidth="md">
      <Typography className="Typography head">
        Calculator Application
      </Typography>
      <ThemeProvider theme={theme}>
        <Card>
          <Grid container spacing={2} alignItems="center">
            <Grid item md={10} sm={10} xs={9}>
              <FormControl fullWidth>
                <TextField focused value={value} aria-readonly />
              </FormControl>
            </Grid>
            <Grid item md={2} sm={2}>
              <Button variant="contained" onClick={handleDel}>
                Del
              </Button>
            </Grid>
          </Grid>

          <Buttons>
            <Grid container alignItems="center">
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  1
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  2
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  3
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn
                  variant="contained"
                  color="secondary"
                  style={{ width: "100%" }}
                  id="interger_btn"
                >
                  +
                </CalcBtn>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  4
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  5
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  6
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn
                  variant="contained"
                  color="secondary"
                  style={{ width: "100%" }}
                  id="interger_btn"
                >
                  -
                </CalcBtn>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  7
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  8
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  9
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn
                  variant="contained"
                  color="secondary"
                  style={{ width: "100%" }}
                  id="interger_btn"
                >
                  *
                </CalcBtn>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid md={3}>
                <CalcBtn variant="contained" id="interger_btn">
                  0
                </CalcBtn>
              </Grid>
              <Grid md={3}>
                <CalcBtn
                  variant="contained"
                  color="secondary"
                  id="interger_btn"
                >
                  /
                </CalcBtn>
              </Grid>
              <Grid md={6} xs={6}>
                <CalcBtn
                  variant="contained"
                  color="secondary"
                  style={{ width: "100%" }}
                  onClick={handleEqual}
                >
                  =
                </CalcBtn>
              </Grid>
            </Grid>

            <Button
              style={{ width: "100%", marginTop: "9px" }}
              variant="contained"
              color="success"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Buttons>
        </Card>
      </ThemeProvider>
    </Container>
  );
};

export default App;
