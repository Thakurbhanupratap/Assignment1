import "./App.css";

// Router
import { Route, Routes } from "react-router-dom";

// Components
import Signin from "./Component/Signin/Signin.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import DashboardContainer from "./Component/Dashboard/DashboardContainer.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Routes>
    </div>
  );
}

export default App;
