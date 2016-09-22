var React = require('react');
var ReactDOM = require('react-dom');
var MenuBar = require('./MenuBar')
var PerspectiveContext = require('./PerspectiveContext')


var AppWindow = React.createClass({
  render: function(){
    return (
      <div className="app-window">
        <MenuBar />
        <PerspectiveContext />
      </div>
    )
  }
})

module.exports = AppWindow
