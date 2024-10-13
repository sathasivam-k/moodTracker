import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="usernameCtn">
        <label htmlFor="username" className="userText">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="rahul"
          onChange={this.onUsername}
          className="inputctn"
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <div className="usernameCtn">
        <label htmlFor="password" className="userText">
          PASSWORD
        </label>
        <input
          type={inputType}
          id="password"
          value={password}
          placeholder="rahul@2021"
          onChange={this.onPassword}
          className="inputctn"
        />
        <div className="checkShow">
          <input type="checkbox" id="checkbox" onChange={this.onShowPassword} />
          <label htmlFor="checkbox">Show Password</label>
        </div>
      </div>
    )
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdetails = {username, password}
    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showSubmitError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginBg">
        <form onSubmit={this.submitForm} className="loginForm">
          <h1 className="loginHeading">Daily Mood Tracker</h1>
          <div>{this.renderUsername()}</div>
          <div>{this.renderPassword()}</div>
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
        <div className="errorMss">{showSubmitError && <p>*{errorMsg}</p>}</div>
      </div>
    )
  }
}
export default LoginForm
