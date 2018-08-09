import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';

import User from './User';

import './css/userlist.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(
      10,  // Fetch the next 10 feed items
      error => {
        if (error) {
          console.log(error)
        }
      },
    );
  }

  renderUsers() {
    console.log(this.props.users.userList)
    return this.props.users.userList.edges.map(edge =>
      <div className="user-list-item row outset" key={edge.node.id}>
        <div className="col-md-12">
          <User user={edge.node} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.renderUsers()}
        {this.props.users.userList.pageInfo.hasNextPage && <button
          onClick={() => this._loadMore()}
        >Load More</button>}
      </div>
    )
  }
}

export default createPaginationContainer(UserList, {
  users: graphql`
    fragment UserList_users on UserList
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 5}
        cursor: {type: "String"}
      ) {
        userList(
          first: $count
          after: $cursor
        ) @connection(key: "UserList_userList") {
          edges {
            node {
              id
              ...User_user
            }
          },
          pageInfo {
            hasNextPage
          }
        }
      }
  `},
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.users && props.users.userList;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      query UserListQuery(
        $count: Int!
        $cursor: String
      ) {
        users {
          ...UserList_users @arguments(count: $count, cursor: $cursor)
        }
      }
    `
  }

)
