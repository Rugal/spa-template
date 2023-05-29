import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useMutation } from "@apollo/client";
import { createLoginToken } from "./request";

const Login = (): JSX.Element => {
  const variable = { variables: { id: 1, password: "1" } };
  const [invoker, { data, loading, error }] = useMutation(createLoginToken);

  if (loading) return <div>Submitting...</div>;
  if (error) return <div>Submission error! ${error.message}</div>;

  console.log(data);

  return <React.Fragment>
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password" />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me" />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => invoker(variable)}
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
