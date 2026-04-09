import { useState } from "react";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";

function App() {
  // State to toggle between login & register
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>Classroom Q&A App</h1>

      {/* Toggle Buttons */}
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Register</button>

      {/* Conditional Rendering */}
      {isLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;