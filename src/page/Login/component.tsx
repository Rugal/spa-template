import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LoginComponent from "../../component/Login";

const Login = (): JSX.Element => <React.Fragment>
  <CssBaseline />
  <Container maxWidth="lg">
    <LoginComponent />
  </Container>
</React.Fragment>;

export default Login;
