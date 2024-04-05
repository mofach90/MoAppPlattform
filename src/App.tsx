import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `    body {
        background: linear-gradient(to right, rgb(0, 0, 0), #010d45);
        color: rgb(55, 255, 255);
      }`,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
