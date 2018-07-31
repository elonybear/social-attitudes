import React from 'react';

export default class Pane extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="">
          <div className="">
            <div className="">
              <this.props.component {...this.props} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
