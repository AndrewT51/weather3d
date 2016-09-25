var React = require('react');
var ReactDOM = require('react-dom');
var Cube = require('./Cube')
var Flatscreen = require('./Flatscreen');
var Projection = require('./Projection')

var PerspectiveContext = React.createClass({

  render: function(){
    console.log('Relevant',this.props.forecast)
    return (
      <div className="context">
        <Cube 
          weather={this.props.forecast}
        />
        <Flatscreen 
          weather={this.props.forecast}
        />
        <Projection 
          weather={this.props.forecast}
        />
      </div>
    )
  }
})

module.exports = PerspectiveContext;