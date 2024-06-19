import { Button, Grid, Paper, Typography } from "@mui/material";
import { useAuth } from "../../contexts/authProvider";

function LoginSocialNetworksPage() {
  const { setAuthenticationForm } = useAuth();

  const handleGoogleAuthentication = () => {
    window.open("/api/v1/auth/social-auth/google", "_self");
    setAuthenticationForm("social based authentication");
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid item xs={10} md={7} lg={5}>
        <Paper
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">
                Choose Your Social Network Account to Login In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleGoogleAuthentication}
                color="success"
                fullWidth
                variant="contained"
              >
                Log In With Google
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LoginSocialNetworksPage;
