import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import SignupPage from "./screens/SignupPage";
import LoginPage from "./screens/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
