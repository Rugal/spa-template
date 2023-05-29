import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useMutation } from "@apollo/client";
import { createLoginToken } from "./request";
import { store } from "../../store";
import { CreateLoginTokenMutation } from "../../generated/graphql/graphql";

const loginProcess = (mutationFunction: any, id: number, password: string) => {
  /* TODO: login process
    1. show circle progress with backdrop
    2. try to get token
    3. save to valtio if ok, 
    4. otherwise show error message and back to login screen
    5. finally, route to the dashboard page
  */
  const option = {
    onCompleted: (data: CreateLoginTokenMutation) => {
      store.token = data.createToken!;
      window.location.href = "/dashboard";
    }, // 3. save to valtio store
    variables: { id: id, password: password },
  };
  mutationFunction(option);
};

const Login = (): JSX.Element => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  // TODO: reset when graphql on error and show error notification
  const [mutationFunction, { loading, reset }] = useMutation(createLoginToken);

  return <React.Fragment>
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      // 1. show circle progress with backdrop
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}><LockOutlinedIcon /></Avatar>
      <Typography component="h1" variant="h5">Sign in</Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={id}
          onChange={(e) => setId(e.target.value)}
          autoFocus />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => loginProcess(mutationFunction, parseInt(id), password)}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs={true}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </React.Fragment>;
};

export default Login;
