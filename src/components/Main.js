var React = require('react');
var ReactDOM = require('react-dom');
var MenuBar = require('./MenuBar')
var PerspectiveContext = require('./PerspectiveContext')
var logic = require('../logic');

var AppWindow = React.createClass({
  render: function(){
    
    
    return (
      <div className="app-window">
        <MenuBar logic={logic} constants={this.props.constants} />
        <PerspectiveContext />
      </div>
    )
  }
})

module.exports = AppWindow
