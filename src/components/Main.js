var React = require('react');
var ReactDOM = require('react-dom');
var MenuBar = require('./MenuBar')
var PerspectiveContext = require('./PerspectiveContext')
var logic = require('../logic');

var AppWindow = React.createClass({
  render: function(){
    var url = 'http://api.wunderground.com/api/dca680da44d3f5a3/conditions/q/CA/San_Francisco.json'
    logic.jsonp(url, logic.handleApiResponse);
    return (
      <div className="app-window">
        <MenuBar />
        <PerspectiveContext />
      </div>
    )
  }
})

module.exports = AppWindow
