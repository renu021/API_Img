import React from 'react';
import "./formStyle.css";

const LoginForm = () => {
  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <table className="login-table">
          <tbody>
            <tr>
              <td>Email-Id</td>
              <td><input type="email" className="input-Box" /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="password" className="input-Box" /></td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="login-btn">
        <button type="button">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
