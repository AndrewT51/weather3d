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
      <div className="frontscreen">
      </div>  
        <Cube 
          cubeRotation={this.props.cubeRotation}
          weather={this.props.forecast}
        />
        <Flatscreen 
          dayOrder={this.props.dayOrder}
          sliderPosition={this.props.sliderPosition}
          weather={this.props.forecast}
          slideTime={this.props.slideTime}
        />
        <Projection 
          weather={this.props.forecast}
        />
      </div>
    )
  }
})

module.exports = PerspectiveContext;