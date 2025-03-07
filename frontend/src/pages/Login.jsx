import "./style.css";

export default function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="login-input">Email</label>
        <input type="text" id="login-input" placeholder="Enter your email" />
        <label htmlFor="login-input">Password</label>
        <input type="text" id="login-input" placeholder="Enter your password" />
        <div className="SignUp">
            <a a href="#">Forget your password?</a> 
            <a href="#">Create an account</a>
        </div>
      </div>
      <button className="login-button">Submit</button>
    </div>
  );
}


