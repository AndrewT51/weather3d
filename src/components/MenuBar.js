var React = require('react');
var ReactDOM = require('react-dom');
var InputLocation = require('./InputLocation')

var MenuBar = React.createClass({
 
  render: function(){
    return (
      <div className="menubar clearfix">
        <InputLocation 
          logic={this.props.logic} 
          constants={this.props.constants}
        />
      </div>
    )
  }
})


module.exports = MenuBar;