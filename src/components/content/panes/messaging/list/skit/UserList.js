import React from 'react';


import {removeUser} from './RemoveUserMutation'
import {addUsers} from './AddUsersMutation.js';
import {createUser} from '../../create/CreateUserMutation';

export default class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      availableUsersSelected: [],
      name: ""
    }
  }

  componentDidMount() {
    tippy('.warning', {
      arrow: true,
      size: 'large',
      placement: 'top'
    })

    tippy('.healthy', {
      arrow: true,
      size: 'large',
      placement: 'top'
    })
  }

  handleAddUser() {
    this.setState({adding: true})
    $('.add-form').slideDown();
  }

  handleCancelClick() {
    $('.add-form').slideUp();
    setTimeout(() => this.setState({adding: false, availableUsersSelected: []}), 330)
  }

  getMessagesForUser(user_id) {
    return this.props.skit.messages.edges.filter(edge => edge.node.author == user_id)
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

  handleRemoveUser(user_id) {
    removeUser({
      skit_id: this.props.skit.skit_id,
      user_id: user_id
    }, this.props.skit.id, (id) => console.log("Successfully removed " + id));
  }

  renderUsers() {
    console.log(this.props)
    let skit = this.props.skit
    let users = this.props.users.userList

    if (skit.users.edges.length == 0) {
      return (
        <div>
          {!this.state.adding && <div className="no-results">
            <div className="italic m-b-5">There are no users in this skit.</div>
            <div className="text-button text-success"  onClick={this.handleAddUser.bind(this)}>
              <i className="fas fa-plus-circle m-r-5"></i>Add one now.
            </div>
          </div>}
        </div>
      )
    }

    return skit.users.edges
      .map(user => {
        let numMessages = this.getMessagesForUser(user.node.user_id).length;

        let icon = null

        if (user.node.user_id == "225dd6d0-1ae9-4ced-a493-61520547a5b7") {
          console.log(JSON.stringify(numMessages));
        }

        if (numMessages > 0) {
          icon = <div title="This user is a part of the conversation!" className="healthy"><i style={{color: '#1ED760'}} className="fas fa-check-circle"></i></div>
        } else {
          icon = <div title="This user is feeling left out!" className="warning"><i style={{color: '#F59B23'}} className="fas fa-exclamation-triangle"></i></div>
        }

        return (
          <div key={user.node.user_id} className="skit-list-item">
            {/* <div className="col-md-1">{icon}</div> */}
            <div className="col-md-5"><span className="table-datum">{user.node.first_name} {user.node.last_name}</span></div>
            <div className="col-md-4"><span className="table-datum">{numMessages}</span></div>
            <div className="col-md-1" style={{color: '#EB1E32'}}>
              <span onClick={this.handleRemoveUser.bind(this, user.node.user_id)}><i className="fas fa-minus-circle clickable" ></i></span>
            </div>
          </div>
        )
      })
  }

  addUser() {
    addUsers({
      skit_id: this.props.skit.skit_id,
      user_ids: this.state.availableUsersSelected
    }, this.props.skit.id, () => this.setState({availableUsersSelected: []}))
  }

  renderAddButton() {
    return (
      <div className="row">
        <div key="add-user" className="skit-list-item">
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-5" onClick={this.handleAddUser.bind(this)}>
            {!this.state.adding && <span className="text-button text-success">
              <i className="fas fa-plus-circle m-r-5"></i>Add User
            </span>}
          </div>
        </div>
      </div>
    )
  }

  renderAvailableUsers() {
    let users = [...this.props.users.userList.edges];
    users.sort((edgeA, edgeB) => (`${edgeB.node.first_name} ${edgeB.node.last_name}`).toUpperCase() < (`${edgeA.node.first_name} ${edgeA.node.last_name}`).toUpperCase())
    let skituser_ids = this.props.skit.users.edges.map(user => user.node.id);
    return users
      .filter(edge => skituser_ids.indexOf(edge.node.id) == -1)
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

  handleCreateUser() {
    createUser({
      name: this.state.name
    }, this.props.users.id, (user_id) => {
      addUsers({
        skit_id: this.props.skit.skit_id,
        user_ids: [user_id]
      }, this.props.skit.id, () => this.handleCancelUser())
    })
    // createAndAddUser({
    //   name: this.state.name,
    //   skit_id: this.props.skit.skit_id,
    //   user_ids: this.props.skit.users.edges.map(edge => edge.node.user_id)
    // }, this.props.users.id, this.props.skit.id, () => console.log('It worked???'))
  }

  handleCancelUser() {
    this.handleInputChange('name', {target: {value: ""}})
    this.toggleCreateUser();
  }

  renderAddForm() {
    return (
      <div className="add-form" style={{display:"none"}}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group p-10">
              <div className="select-users-wrapper inset">
                {this.renderAvailableUsers()}
              </div>
              <div
                className={"rounded button button-success" + (this.state.availableUsersSelected.length == 0 ? " disabled" : "")}
                onClick={(this.state.availableUsersSelected.length > 0 ? this.addUser.bind(this) : () => {})}>
                <i className="fas fa-plus-circle m-r-5"></i>Add
              </div>
              <span
                className="rounded button button-danger outset m-l-10"
                onClick={this.handleCancelClick.bind(this)}>
                <i className="fas fa-ban m-r-5"></i>Cancel</span>
              <span
                className="m-l-10">
                Don't see the one you want? <span onClick={this.toggleCreateUser.bind(this)} className="text-button text-success">Create it here.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="row create-user" style={{display:"none"}}>
          <div className="col-md-12">
            <div className="col-md-8">
              <div className="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter a name."
                  value={this.state.name}
                  onChange={this.handleInputChange.bind(this, 'name')} />
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
    )
  }

  render() {
    return (
      <div>
        <div className="outset skit-table">
          <div className="table-header">
            Users
          </div>
          <div className="row table-headers m-lr-5">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-5">NAME</div>
            <div className="col-md-4"># MESSAGES</div>
          </div>
          <div className="row table-cells">
            {this.renderUsers()}
          </div>
          {this.props.skit.users.edges.length > 0 && this.renderAddButton()}
          {this.renderAddForm()}
        </div>
      </div>
    )
  }
}
