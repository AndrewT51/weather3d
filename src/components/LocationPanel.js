var React = require('react');

var LocationPanel = React.createClass({
  render: function(){
    return (
      <div className="location-panel">
        {this.props.location}
      </div>
    )
  }
})

module.exports = LocationPanel;