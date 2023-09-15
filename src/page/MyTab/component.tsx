import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LogGroup from "../../component/LogGroup";
import NavigationBar from "../../component/NavigationBar";

const MyTab: React.FC = () =>
  <>
    <NavigationBar />
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <LogGroup />
      </Box>
    </Container>
  </>;

export default MyTab;
