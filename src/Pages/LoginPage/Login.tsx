import { Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../contexts/authProvider";
import ButtonWrapper from "./LPComponents/ButtonWrapper";
import TextfieldWrapper from "./LPComponents/TextfieldWrapper";

const INITIAL_FORM_STATE = {
  userName: "",
  password: "",
};
const FORM_VALIDATION = Yup.object().shape({
  userName: Yup.string().required("Required Field"),
  password: Yup.string()
    .required("Required FIeld")
    .min(8, "password is too short, -should be 8 chars minimum")
    .matches(/[a-zA-Z]/, " must include only chars"),
});

function LoginPage() {
  const navigate = useNavigate();
  const { recheckAuthentication, setAuthenticationForm } = useAuth();
  const handleonSubmit = async (values: object) => {
    const newValues = JSON.stringify(values);
    await triggerFormBasedAuth(newValues);
  };
  const triggerFormBasedAuth = async (values: string) => {
    try {
      const result = await fetch("http://localhost:8000/auth/login-sessionid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: values,
        credentials: "include",
      });
      setAuthenticationForm("form-based-authentication using session-id");
      if (result.ok) {
        await recheckAuthentication();
        navigate("/dashboard");
      } else {
        console.error("Failed to submit form", result.statusText);
      }
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
      <Grid item xs={10} md={9} lg={9}>
        <Paper
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          <Formik
            validationSchema={FORM_VALIDATION}
            initialValues={{ ...INITIAL_FORM_STATE }}
            onSubmit={handleonSubmit}
          >
            <Form style={{ width: "60%" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    This is a Form Based Authentication Using Session ID
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontWeight={"bold"}>
                    Please Enter you User Name and Password
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper
                    name="userName"
                    label="User Name"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper
                    name="password"
                    label="Password"
                    type="password"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonWrapper>Submit</ButtonWrapper>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
