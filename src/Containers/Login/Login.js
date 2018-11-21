import React, { Component } from 'react';

import { app, googleProvider } from '../../firebase';
import { login, logout } from '../../Redux/Actions/index';

import './Login.scss';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      status: 'login',
      redirect: false,
      passwordsMatch: false,
    }
  }

  setView = status => {
    this.setState({
      status
    });
  }

  renderForm = () => {
    switch (this.state.status) {
      case 'login':
        return (
          <form ref={(form) => { this.loginForm = form }} className="login-form" onSubmit={this.triggerAuthWithEmail}>
            <input type="text" ref={(input) => { this.emailInput = input }} className="email-input" placeholder='Email' onChange={this.currentInput} />
            <input type='password' ref={(input) => { this.passwordInput = input }} className="password-input" placeholder='Password' onChange={this.currentInput} />
            <button type='submit' className="submit-input-login">Login</button>
          </form>
        )
      case 'signup':
        return (
          <form ref={(form) => { this.loginForm = form }} className="login-form" onSubmit={this.signupWithEmail}>
            <input type="text" ref={(input) => { this.emailInput = input }} className="email-input" placeholder='Email' />
            <input type='password' onChange={this.passwordsMatch} ref={(input) => { this.passwordInput = input }} className="password-input" placeholder='Password' />
            <input type='password' onChange={this.passwordsMatch} ref={(input) => { this.passwordConfirmInput = input }} className="password-input" placeholder='Confirm Password' />
            <button type='submit' className="submit-input-signup">Sign Up</button>
          </form>
        )
      default:
        return <p>System Error</p>
    }
  }

  signupWithEmail = (e) => {
    e.preventDefault();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    if (this.state.passwordsMatch) {
      app.auth().fetchSignInMethodsForEmail(email)
        .then((providers) => {
          if (providers.length === 0) {
            app.auth().createUserWithEmailAndPassword(email, password)
              .then(() => {
                this.authWithEmail(email, password);
              })
              .catch((error) => {
                toast.error(error.message, {
                  position: toast.POSITION.TOP_CENTER
                });
              })
          } else {
            toast.error('Account already exists with this email', {
              position: toast.POSITION.TOP_CENTER
            });
          }
        })
        .catch((error) => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
        })
    } else {
      toast.error('Passwords do not match.', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  passwordsMatch = (e) => {
    const password = this.passwordInput.value;
    const passwordConfirm = this.passwordConfirmInput.value;

    if (!password.length || !passwordConfirm.length) {
      if (this.state.passwordsMatch) this.setState({ passwordsMatch: false });
    }

    if (password !== passwordConfirm) {
      if (this.state.passwordsMatch) this.setState({ passwordsMatch: false });
    } else {
      if (!this.state.passwordsMatch) this.setState({ passwordsMatch: true });
    }
  }

  triggerAuthWithEmail = (e) => {
    e.preventDefault();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    app.auth().fetchSignInMethodsForEmail(email)
      .then((providers) => {
        if (providers.includes('password')) {
          this.authWithEmail(email, password);
        }
        else if (providers.length) {
          toast.warn('Please try a different sign-in method', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.error('Please create an account', {
            position: toast.POSITION.TOP_CENTER
          });
        }
      }).catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER
        });
      })
  }

  cachedUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  authWithEmail = (email, password) => {
    app.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        if (response) {
          this.props.setCurrentUser(response.user);
          this.cachedUser(response.user)
          this.setState({ redirect: true });
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER
        });
      })
  }

  authWithGoogle = () => {
    app.auth().signInWithPopup(googleProvider)
      .then((user, error) => {
        if (error) {
          toast.error("Unable to sign in with Google", {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          this.props.setCurrentUser(user.user);
          this.cachedUser(user.user)
          this.setState({ redirect: true });
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER
        });
    })
  }
  

  render() {

    if (this.state.redirect) 
      return <Redirect to='/dashboard' />
    
    return (
      <div className='Login'>
        <div className='login-form-container'>
          <div className="login-form-header">
            <button onClick={() => this.setView('login')}>Login</button>
            <button onClick={() => this.setView('signup')}>SignUp</button>
          </div>
          {this.renderForm()}
          <button onClick={this.authWithGoogle}>Log in with Google</button>
        </div>
        <ToastContainer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(login(user, !!user)),
  logoutProps: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Login);
