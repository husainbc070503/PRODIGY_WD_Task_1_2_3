import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const Heading = styled(Typography)`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  margin: 3% 0;
  text-align: start;
`;

const Header = () => {
  return <Heading>To-Do Application</Heading>;
};

export default Header;
