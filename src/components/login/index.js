import "./style.css";

const Login = () => {
  return (
    <body className="login">
      <div className="center">
        <h1>Welcome to Grocify</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>

          <input type="submit" value="Login" />
          <div className="singup_link">
            Not a member? <a href="/signup">Signup</a>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Login;
