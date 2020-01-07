import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
          <br />
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

function mapStateToProps(state) {
  const users = state.users
  return { users: users, userCount: users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
