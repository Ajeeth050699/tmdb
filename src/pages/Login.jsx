import React from "react";
import {
  emailValidator,
  passwordValidator,
} from "../components/regexValidator";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [input, setInput] = React.useState({ email: "", password: "" });

  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (localStorage.getItem("auth")) history.push("/");
  }, []);

  const formSubmitter = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (!emailValidator(input.email))
      return setErrorMessage("Please enter valid email id");

    if (!passwordValidator(input.password))
      return setErrorMessage(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialCharacters"
      );
    // setsuccessMessage('Successfully Validated');
    if (input.email !== "ajuukuty@gmail.com" || input.password !== "Ajee@12345678")
      return setErrorMessage("Invalid email or password");

    history.push("/");
    localStorage.setItem("auth", true);
  };

  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundColor: "black" }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form
              className="login100-form validate-form"
              onSubmit={formSubmitter}
            >
              <span className="login100-form-title p-b-49">Login</span>
              {errorMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "red" }}>
                  {errorMessage}
                </div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "green" }}>
                  {successMessage}
                </div>
              )}
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="email is required"
              >
                <span className="label-input100">Email</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Type your username"
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-31">
                <a href="#">Forgot password?</a>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div id="dropDownSelect1" /> */}
    </div>
  );
};

export default Login;
