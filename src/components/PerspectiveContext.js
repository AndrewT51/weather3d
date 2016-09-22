var React = require('react');
var ReactDOM = require('react-dom');
var Cube = require('./Cube')
var Flatscreen = require('./Flatscreen');
var Projection = require('./Projection')

var PerspectiveContext = React.createClass({
  render: function(){
    return (
      <div className="context">
        <Cube />
        <Flatscreen />
        <Projection />
      </div>
    )
  }
})

module.exports = PerspectiveContext;