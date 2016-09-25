var React = require('react');
var ReactDOM = require('react-dom');
var InputLocation = require('./InputLocation')

var MenuBar = React.createClass({
 
  render: function(){
    return (
      <div className="menubar clearfix">
        <InputLocation
          format={this.props.format} 
          jsonp={this.props.jsonp} 
          autoLocateIP={this.props.autoLocateIP}
          getLocation={this.props.getLocation}
          constants={this.props.constants}
        />
      </div>
    )
  }
})


module.exports = MenuBar;