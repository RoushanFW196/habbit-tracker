import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice";
import { BASE_URL } from "../utils/api";

const Login = () => {
  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, error } = useSelector(selectAuth);

  if (loading) return <h1>LOading................</h1>;
  if (error) return <Error message={error} />;

  const handlechange = (e) => {
    const { name, value } = e.target;

    setLogindata({ ...logindata, [name]: value });
  };
  const handleLogin = async () => {
    let logindata = {
      username: "helloroushan2",
      password: "12324",
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Correct header
        },
        body: JSON.stringify(logindata), // Convert the data to JSON string
      });
      console.log("response", response);
      if (!response.ok) {
        // Handle non-200 status codes
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        return;
      }

      const data = await response.json(); // Parse the response JSON
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          name="username"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          name="password"
          onChange={handlechange}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
