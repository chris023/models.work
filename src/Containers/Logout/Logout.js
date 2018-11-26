import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { app } from '../../firebase';
import { connect } from 'react-redux';
import { logout } from '../../Redux/Actions';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  componentWillMount() {
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
 