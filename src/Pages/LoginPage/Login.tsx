import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
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
            onSubmit={(values) => {
              console.log({ values });
            }}
          >
            <Form style={{ width: "60%" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    This is a Form Based Authentication User Session ID
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontWeight={"bold"}>
                    Please Enter you User Name and Password
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper name="userName" label="User Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper
                    name="password"
                    label="Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonWrapper>Submit</ButtonWrapper>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            {false ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
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
