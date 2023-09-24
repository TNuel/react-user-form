import React from "react";
import Switch from "react-switch";

import Button from "./Button";

class App extends React.Component {
  state = { loginMode: false, email: "", password: "", confirmPassword: "", message: "" }
  // constructor(props) {
  //   super(props);
  //   this.state = { loginMode: false };
  // }

  handleModeChange = () => {
    // console.log({ checked });
    // this.setState({ loginMode: checked });
    // this.setState(() => ({ loginMode: checked }));
    this.setState((prevState) => ({ loginMode: !prevState.loginMode }));
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleConfirmPasswordChange = (event) => {
    this.setState({ confirmPassword: event.target.value })
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const { loginMode, email, password, confirmPassword } = this.state
    const validEmail = email.length > 0;
    const validPassword = password.length > 0;
    const validConfirmPassword = confirmPassword.length > 0;

    if (loginMode && validEmail && validPassword) {
      this.setState({ message: "You are now logged in." })
      return;
    }

    const passwordsMatch = password === confirmPassword;
    if (validEmail && validPassword && validConfirmPassword && passwordsMatch) {
      this.setState({ message: "Thank you for signing up" })
    } else {
      this.setState({ message: "Passwords do not match" })
    }
  }

  render() {
    const { loginMode, email, password, confirmPassword, message } = this.state;
    const text = loginMode ? "Login into Account" : "Register";
    const buttonText = loginMode ? "Welcome Back" : "We're glad you're here!";
    return (
      <div className="flex flex-row justify-center h-screen items-center bg-gradient-to-br from-blue-300 to-violet-400">
        <div className="w-80 rounded border border-solid border-slate-500 bg-white p-6 sm:w-96">
          <div className=" mb-6 flex justify-center flex-row gap-x-2">
            <label className="text-xl">Register</label>
            <Switch
              onChange={this.handleModeChange}
              checked={loginMode}
              checkedIcon={false}
              uncheckedIcon={false}
              offColor="#080"
            />
            <label className="text-xl">Login</label>
          </div>

          <h1 className="text-center text-3xl font-bold mb-6">{buttonText}</h1>

          <form onSubmit={this.handleSubmitForm}>
            <label htmlFor="email">Email Address</label>
            <input value={email} onChange={this.handleEmailChange} id="email" type='text' className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4" />

            <label htmlFor="password">Password</label>
            <input value={password} onChange={this.handlePasswordChange} id="password" type='password' className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4" />

            {!loginMode && (
              <React.Fragment>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input value={confirmPassword} onChange={this.handleConfirmPasswordChange} id="confirmPassword" type='password' className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4" />

              </React.Fragment>
            )}

            <Button
              className="w-full border-red-500 hover:bg-red-100"
              type="submit"
            >
              {text}
            </Button>

            {
              message && <p className="mt-2 text-center">{message}</p>
            }
          </form>
        </div>
      </div>
    );
  }
}

export default App;
