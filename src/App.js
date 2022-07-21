import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import { StyledContainer } from "./components/Styles";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter as Router,
  Routes,
 
  Route,
} from "react-router-dom";
import ForgottenPassword from "./pages/ForgottenPassword";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <StyledContainer>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/forgottenpassword" element={<ForgottenPassword />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/passwordreset" element={<PasswordReset />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </StyledContainer>
  );
}

export default App;
