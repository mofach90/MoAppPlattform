import { Button, Grid, Paper, Typography } from "@mui/material";

function LoginSocialNetworksPage() {
  // const navigate = useNavigate();
  // const { recheckAuthentication, setAuthenticationForm } = useAuth();
  // const handleonSubmit = async (values: object) => {
  //   const newValues = JSON.stringify(values);
  //   await triggerFormBasedAuth(newValues);
  // };
  const handleGoogleAuthentication = async () => {
    try {
      // window.open("http://[server:port]/auth/google", "_self")
      // const result = await fetch("/api/v1/auth/social-auth/google", {
      //   method: "GET",
      // });
      // setAuthenticationForm("form-based-authentication using session-id");
      // console.log("this is the result of api/v1/auth/social-auth/google ", result);
      // const data = await result.json()
      // console.log("auth/social-auth/google  response",data)
      // if (result.redirected) {
      //   console.log("enter if before");
      //   window.location.href = result.url;
      //   console.log("enter if after");
      // } else {
      //   console.log("enter else");
      //   console.error("Failed to redirect", result.statusText);
      // }
      // if (result.ok) {
      //   await recheckAuthentication();
      //   navigate("/dashboard");
      // } else {
      //   console.error("Failed to submit form", result.statusText);
      // }
    } catch (error) {
      console.log({ error });
    }
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
                onClick={()=>{window.open("/api/v1/auth/social-auth/google", "_self")}}
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
