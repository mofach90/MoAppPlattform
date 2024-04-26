import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./Pages/LandingPage/AboutPage";
import PrivacyPage from "./Pages/LandingPage/PrivacyPage";
import LicencePage from "./Pages/LandingPage/LicencePage";
import UseragreementPage from "./Pages/LandingPage/UseragreementPage";

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/privacy" element={<PrivacyPage/>} />
          <Route path="/licence" element={<LicencePage/>} />
          <Route path="/useragreement" element={<UseragreementPage/>} />
        </Routes>
        {/* <LandingPage /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
