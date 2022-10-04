import "./style.css";

const Signup = () => {
  return (
    <body className="signup">
      <div className="center">
        <h1>Welcome to Grocify</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Full Name</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Email Id</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Re-Enter Password</label>
          </div>
          <div className="pass">Forgot Password?</div>

          <input type="submit" value="Login" />
          <div className="singup_link">
            Already a member? <a href="">Sign-in</a>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Signup;
