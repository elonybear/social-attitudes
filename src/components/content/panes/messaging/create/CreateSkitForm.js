import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {createSkit} from './CreateSkitMutation'
import {createUser} from './CreateUserMutation'

import './css/createskit.css';

var NUM_users_PER_ROW = 4;

Array.prototype.diff = function(other) {
  let result = [...this];
  for (let elem of other) {
    let index = result.indexOf(elem);
    if (index > -1) {
      result.splice(index, 1);
    }
  }

  return result;
}

class CreateSkitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      availableUsersSelected: [],
      addedUsersSelected: [],
      first_name: "",
      last_name: "",
      addedUsers: []
    }
  }

  componentDidMount() {

  }

  handleCancelClick() {
    this.props.history.push("/skits")
  }

  handleInputChange(field, event) {
    this.setState({[field]: event.target.value})
  }

  handleSelectChange(user_id, field) {
    let usersSelected = [...this.state[field]];
    let index = usersSelected.indexOf(user_id);
    if (index > -1) {
      usersSelected.splice(index, 1);
    } else {
      usersSelected.push(user_id);
    }
    this.setState({[field]: usersSelected});
  }

  handleSaveClick() {
    createSkit({
      'title': this.state.title,
      'description': this.state.description,
      'users': this.state.addedUsers
    }, this.props.parentID, (id) => this.props.history.push(`/skits`))
  }

  handleCreateUser() {
    createUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }, this.props.users.id, (user_id) => {
      let users = [...this.state.addedUsers, user_id];
      this.setState({addedUsers: users, name: ""})
      this.toggleCreateUser();
    })
  }

  handleCancelUser() {
    this.handleInputChange('name', {target: {value: ""}})
    this.toggleCreateUser();
  }

  addUser() {
    let users = [...this.state.addedUsers, ...this.state.availableUsersSelected];
    this.setState({addedUsers: users, availableUsersSelected: []})
  }

  removeUser() {
    let users = [...this.state.addedUsers];
    let finalUsers = users.diff(this.state.addedUsersSelected);
    this.setState({addedUsers: finalUsers, addedUsersSelected: []})
  }

  renderAddedUsers() {

    if (this.state.addedUsers.length == 0) {
      return <div className="muted">Selected users will appear here.</div>
    }

    let users =
      this.state.addedUsers
        .map(user => this.props.users.userList.edges.find(edge => edge.node.user_id == user).node)
        .map(user => {
          let classes = this.state.addedUsersSelected.indexOf(user.user_id) > -1 ? "selected" : "";
          return (
            <div className={classes} onClick={this.handleSelectChange.bind(this, user.user_id, 'addedUsersSelected')} key={user.user_id}>
              {user.first_name} {user.last_name}
            </div>)
        })

    return (
      <div>
        <div className="select-users-wrapper inset">
          {users}
        </div>
        <div
          className={"rounded button button-danger" + (this.state.addedUsersSelected.length == 0 ? " disabled" : "")}
          onClick={(this.state.addedUsersSelected.length > 0 ? this.removeUser.bind(this) : () => {})}>
          <i className="fas fa-minus-circle m-r-5"></i>Remove
        </div>
      </div>
    )
  }

  renderAvailableUsers() {
    let users = [...this.props.users.userList.edges];

    users.sort((edgeA, edgeB) => (edgeB.node.first_name + " " + edgeB.node.last_name).toUpperCase() < (edgeA.node.first_name + " " + edgeA.node.last_name).toUpperCase())
    let finalUsers = users
      .filter(edge => this.state.addedUsers.indexOf(edge.node.user_id) == -1)

    if (finalUsers.length == 0) {
      return <div className="text-muted">There are no available users.</div>
    }

    return finalUsers
      .map(edge => {
          let classes = this.state.availableUsersSelected.indexOf(edge.node.user_id) > -1 ? "selected" : "";
          return (
            <div
              className={classes}
              onClick={this.handleSelectChange.bind(this, edge.node.user_id, 'availableUsersSelected')}
              key={edge.node.user_id}
              value={edge.node.user_id}>
              {edge.node.first_name} {edge.node.last_name}
            </div>)
      })
  }

  toggleCreateUser() {
    if($('.create-user').css('display') == 'none') {
        $('.create-user').slideDown();
    } else {
      $('.create-user').slideUp();
    }
  }

  render() {
    return (
      <div>
        <div className="outset create-form-wrapper rounded">
          <div className="content-title rounded m-b-md">
            Create Skit
            <span
              className="rounded button button-danger pull-right outset m-l-10"
              onClick={this.handleCancelClick.bind(this)}>
              <i className="fas fa-ban m-r-5"></i>Cancel</span>
              <span
                className="rounded button button-success pull-right outset"
                onClick={this.handleSaveClick.bind(this)}>
                <i className="fas fa-save m-r-5"></i>Save
              </span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group title-input">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="titleHelp"
                      placeholder="Enter a title."
                      value={this.state.title}
                      onChange={this.handleInputChange.bind(this, 'title')} />
                    <small id="titleHelp" className="form-text text-muted">Try to make this descriptive.</small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group description-input">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      placeholder="What are you trying to test?"
                      onChange={this.handleInputChange.bind(this, 'description')}></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="exampleSelect1">Users Available</label>
                    <div className="select-users-wrapper inset">
                      {this.renderAvailableUsers()}
                    </div>
                    <div
                      className={"rounded button button-success" + (this.state.availableUsersSelected.length == 0 ? " disabled" : "")}
                      onClick={(this.state.availableUsersSelected.length > 0 ? this.addUser.bind(this) : () => {})}>
                      <i className="fas fa-plus-circle m-r-5"></i>Add
                    </div>
                    <span
                      className="m-l-10">
                      Don't see the one you want? <span onClick={this.toggleCreateUser.bind(this)} className="text-button text-success">Create it here.</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row create-user" style={{display:"none"}}>
                <div className="col-md-12">
                  <div className="col-md-4">
                    <div className="pull-left">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter a name."
                        value={this.state.first_name}
                        onChange={this.handleInputChange.bind(this, 'first_name')} />
                      <small id="titleHelp" className="form-text text-muted">It helps for it to be unique.</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pull-left">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter a name."
                        value={this.state.last_name}
                        onChange={this.handleInputChange.bind(this, 'last_name')} />
                      <small id="titleHelp" className="form-text text-muted">It helps for it to be unique.</small>
                    </div>
                  </div>
                  <div
                    className={"rounded button button-success m-l-10 m-t-25"}
                    onClick={this.handleCreateUser.bind(this)}>
                    <i className="fas fa-check"></i>
                  </div>
                  <div
                    className={"rounded button button-danger m-l-10 m-t-25"}
                    onClick={this.handleCancelUser.bind(this)}>
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <div className="user-list">
                  <label htmlFor="exampleSelect1">Users Added</label>
                  <br />
                  {this.renderAddedUsers()}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(CreateSkitForm, {
  users: graphql`
    fragment CreateSkitForm_users on UserList @argumentDefinitions(
        rows: {type: "Int", defaultValue: 100}
      ) {
      id,
      userList (first: $rows) @connection(key: "CreateSkitForm_userList", filters: []){
        edges {
          node {
            id,
            user_id,
            first_name,
            last_name
          }
        }
      }
    }
  `
})
