import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import SignupPage from "./screens/SignupPage";
import LoginPage from "./screens/LoginPage";
import JobListingPage from "./screens/JobListingPage";
<<<<<<< HEAD:apps/client/src/App.tsx
import EmployerDashboardPage from "./screens/Employer/EmployerDashboardPage";
import CandidateDashboardPage from "./screens/Candidate/CandidateDashboardPage";
import AdminDashboardPage from "./screens/Admin/AdminDashboardPage";
import RecruiterDashboardPage from "./screens/Recruiter/RecruiterDashboardPage";
=======
import AdminPage from "./screens/AdminPage";
import DashboardPage from "./screens/DashboardPage";
>>>>>>> parent of 986bb1b (Merge pull request #4 from SumanKisku/job-curd-methods):client/src/App.tsx

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/jobs" Component={JobListingPage} />
<<<<<<< HEAD:apps/client/src/App.tsx
        <Route path="/admin/dashboard" Component={AdminDashboardPage} />
        <Route path="/candidate/dashboard" Component={CandidateDashboardPage} />
        <Route path="/employer/dashboard" Component={EmployerDashboardPage} />
        <Route path="/recruiter/dashboard" Component={RecruiterDashboardPage} />
=======
        <Route path="/admin" Component={AdminPage} />
        <Route path="/dashboard" Component={DashboardPage} />
>>>>>>> parent of 986bb1b (Merge pull request #4 from SumanKisku/job-curd-methods):client/src/App.tsx
      </Routes>
    </BrowserRouter>
  );
}

export default App;
