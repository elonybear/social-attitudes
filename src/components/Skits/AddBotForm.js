import React from 'react';

export default class React extends React.Component {
  renderAvailableBots() {

  }

  toggleCreateBot() {
    if($('.create-bot').css('display') == 'none') {
        $('.create-bot').slideDown();
    } else {
      $('.create-bot').slideUp();
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleSelect1">Bots Available</label>
              <div className="select-bots-wrapper inset">
                {this.renderAvailableBots()}
              </div>
              <div
                className={"rounded button button-success" + (this.state.availableBotsSelected.length == 0 ? " disabled" : "")}
                onClick={(this.state.availableBotsSelected.length > 0 ? this.addBot.bind(this) : () => {})}>
                <i className="fas fa-plus-circle m-r-5"></i>Add
              </div>
              <span
                className="m-l-10"
                onClick={this.toggleCreateBot.bind(this)}>
                Don't see the one you want? <span className="text-button text-success">Create it here.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="row create-bot" style={{display:"none"}}>
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
              onClick={this.handleCreateBot.bind(this)}>
              <i className="fas fa-check"></i>
            </div>
            <div
              className={"rounded button button-danger m-l-10 m-t-25"}
              onClick={this.handleCancelBot.bind(this)}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
