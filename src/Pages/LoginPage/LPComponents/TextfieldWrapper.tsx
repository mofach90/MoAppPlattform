import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useField } from "formik";
import { useState } from "react";

type TextfieldWrapperProps = { name: string } & TextFieldProps;

function TextfieldWrapper(props: Readonly<TextfieldWrapperProps>) {
  const [field, meta] = useField(props.name);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handlMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const configOption: TextFieldProps = {
    ...field,
    ...props,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configOption.error = true;
    configOption.helperText = meta.error;
  }
  if (props.type === "password") {
    configOption.type = showPassword ? "text" : "password";
    configOption.InputProps = {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={handlMouseDownPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    };
  }

  return <TextField {...configOption} />;
}

export default TextfieldWrapper;
