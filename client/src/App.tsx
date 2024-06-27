import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import SignupPage from "./screens/SignupPage";
import LoginPage from "./screens/LoginPage";
import JobListingPage from "./screens/JobListingPage";
import AdminPage from "./screens/AdminPage";
import DashboardPage from "./screens/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/jobs" Component={JobListingPage} />
        <Route path="/admin" Component={AdminPage} />
        <Route path="/dashboard" Component={DashboardPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
