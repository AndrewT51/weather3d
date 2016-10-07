var React = require('react');

var LocationPanel = React.createClass({
  render: function(){
    return (
      <div className={this.props.loaded ? 'location-panel active' : 'location-panel'}>
        {this.props.location}
      </div>
    )
  }
})

module.exports = LocationPanel;