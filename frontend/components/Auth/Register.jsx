import { useState } from "react";
import API from "../../services/api";

function Register() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default role
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", formData);

      alert("Registration successful");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Role Selection */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;