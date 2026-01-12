import React, { useState } from "react"; //useState is a hook that allows us to store data like passwords and emails.
import "./Login.css"; // Importing CSS for styling the login component

function Login() { // Login component definition
  const [email, setEmail] = useState(""); //setEmail is a function that updates the email state variable.
  const [password, setPassword] = useState("");//setPassword is a function that updates the password state variable.

  const handleSubmit = (e) => { // Function to handle form submission
    e.preventDefault(); // Prevents the default form submission behavior(refreshing the page).

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Email:", email); //Prints entered data in browser console.
//(Later this is where backend API call will go.)
    console.log("Password:", password);

    // Later: send data to backend
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
