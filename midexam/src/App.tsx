import React, { useState } from "react";
import "./App.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) {
      setUsernameError("아이디를 입력하지 않았습니다.");
      return;
    }

    if (!password) {
      setPasswordError("비밀번호를 입력하지 않았습니다.");
      return;
    }

    // 로그인 로직 구현
  };

  return (
    <div id="app">
      <h1>로그인 폼</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">아이디  </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && (
            <span style={{ color: "red" }}>{usernameError}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">비밀번호  </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <span style={{ color: "red" }}>{passwordError}</span>
          )}
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginForm;
