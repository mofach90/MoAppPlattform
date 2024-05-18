import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./Pages/LandingPage/AboutPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LicencePage from "./Pages/LandingPage/LicencePage";
import UseragreementPage from "./Pages/LandingPage/UseragreementPage";
import Klaro from "./components/Klaro";
import data from "./data/KlaroConfig.json";
import LoginPage from "./Pages/Login"

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `    
      html {
        height: 100%;
      }
      
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: linear-gradient(to right, rgb(0, 0, 0), #010d45);
        color: rgb(55, 255, 255);
      }
      
      #root {
        height: 100%;
      }
      
      `,
    },
  },
});

function App() {
  return (
    <Router>
      <Klaro config={data}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/licence" element={<LicencePage />} />
            <Route path="/useragreement" element={<UseragreementPage />} />
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </ThemeProvider>
      </Klaro>
    </Router>
  );
}

export default App;
