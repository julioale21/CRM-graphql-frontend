import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { DO_LOGIN } from "../../graphql/mutations";
import Error from "../alerts/Error";

const initialState = {
  username: "",
  password: "",
  showPassword: false,
  error: null,
};
class Login extends Component {
  state = {
    ...initialState,
  };

  updateState = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleIconPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  validateForm = () => {
    const { username, password } = this.state;
    return username !== "" && password !== "";
  };

  handleSubmit = (e, authenticateUser) => {
    e.preventDefault();

    if (!this.validateForm()) return;

    authenticateUser()
      .then(async ({ data }) => {
        localStorage.setItem("token", data.authenticateUser.token);

        await this.props.refetch();

        this.clearState();

        setTimeout(() => {
          this.props.history.push("/panel");
        }, 3000);
      })
      .catch((error) => {
        this.setState({ error });
        setTimeout(() => {
          this.setState({ error: null });
        }, 3000);
      });
  };

  render() {
    const { username, password } = this.state;

    return (
      <Fragment>
        <h2 className="text-center font-bold text-2xl pt-5">Log In</h2>
        <Mutation mutation={DO_LOGIN} variables={{ username, password }}>
          {(authenticateUser, { loading, error, data }) => {
            return (
              <form
                onSubmit={(e) => this.handleSubmit(e, authenticateUser)}
                className="grid grid-cols-12"
              >
                <div className="col-span-10 col-start-2 sm:col-span-8 sm:col-start-3">
                  {this.state.error ? <Error error={this.state.error} /> : null}
                  <div className="mt-3">
                    <label
                      className="font-bold text-green-500 text-sm"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                      <input
                        onChange={this.updateState}
                        type="text"
                        name="username"
                        placeholder="Name of user"
                        value={username}
                        className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                      />
                      <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                        <i className="fas fa-user-circle fill-current text-green-400"></i>
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label
                      className="font-bold text-green-500 text-sm"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                      <input
                        onChange={this.updateState}
                        type={`${this.state.showPassword ? "text" : "password"}`}
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                      />
                      <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                        <i
                          onClick={this.handleIconPassword}
                          role="button"
                          className={`fas fa-sm ${
                            this.state.showPassword ? "fa-eye-slash" : "fa-eye"
                          } fill-current text-green-400`}
                        ></i>
                      </span>
                    </div>
                  </div>

                  <button
                    className={`${
                      loading || !this.validateForm()
                        ? "btn-disabled bg-gray-100 border-gray-100"
                        : ""
                    } btn border hover:bg-green-200 border-green-400 hover:border-green-200 float-right text-sm sm:text-base mt-5 focus:outline-none`}
                  >
                    Login
                  </button>
                </div>
              </form>
            );
          }}
        </Mutation>
      </Fragment>
    );
  }
}

export default withRouter(Login);
