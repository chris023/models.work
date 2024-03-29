import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { app } from '../../firebase/config/firebase';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  componentWillMount() {
    localStorage.clear('user')
    app.auth().signOut().then(() => {
      this.props.setLogoutProps();
      this.setState({
        redirect: true,
      })
    })
  }

  render() {
    if (this.state.redirect)
      return <Redirect to='/' />
    
    return (
      <p>loading...</p>
    )
  }


}

const mapDispatchToProps = dispatch => ({
  setLogoutProps: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Logout);
 