'use client'
import React, { useState } from "react";
import "./LoginForm.css"; // Import der CSS-Datei

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { email, password };
    onSubmit(credentials);

    setEmail("");
    setPassword("");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Passwort</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
