import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  setCookiesAndNavigateToHome = token => {
    const {history} = this.props

    Cookies.set('jwt_token', token, {
      expires: 30,
    })
    history.replace('/')
  }

  onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setCookiesAndNavigateToHome(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page">
        <h1>Please Login</h1>
        <button onClick={this.onClickLogin} type="button">
          Login with Sample creds
        </button>
      </div>
    )
  }
}

export default Login
