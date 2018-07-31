import React from 'react';

class Skit extends React.Component {
  renderMessages() {
    
  }

  render() {
    return (
      <div className="skit-wrapper">
        <div className="row">
          <div className="col-md-6">
            {/* list of messages  */}
            {this.renderMessages()}
          </div>
          <div className="col-md-6">
            {/* Preview */}
          </div>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(Skit, {
  skit: graphql`
    fragment Skit_skit on Skit {
      id,
      title,
      created,
      last_updated,
      messages {
        edges {
          node {
            text,
            authorName
            delay
          }
        }
      }
    }
  `
})
