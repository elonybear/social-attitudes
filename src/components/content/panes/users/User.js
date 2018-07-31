import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

import './css/user.css';

class User extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-4 user-datum">
          {this.props.user.first_name}
        </div>
        <div className="col-md-4 user-datum">
          {this.props.user.last_name}
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      first_name,
      last_name
    }
  `
})
