import React from "react";
import { Box, TextField, Typography, Link, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RoundedButton from "..//RoundedButton";

const Login = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Anmeldung
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField label="Username" variant="outlined" fullWidth required />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
          />

          <RoundedButton
            label="Anmelden"
            onClick={() => console.log("Anmelden geklickt")}
          />
          <RoundedButton
            label="Als Admin Anmelden"
            onClick={() => console.log("Als Admin Anmelden geklickt")}
          />
        </Box>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Sie haben noch kein Account?{" "}
          <Link href="/register" color="primary">
            Account anfragen
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
