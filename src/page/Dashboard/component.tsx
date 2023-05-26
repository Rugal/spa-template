import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import App from "../../component/App";

const Dashboard = (): JSX.Element => <React.Fragment>
  <CssBaseline />
  <Container maxWidth="lg">
    <App />
  </Container>
</React.Fragment>;

export default Dashboard;
