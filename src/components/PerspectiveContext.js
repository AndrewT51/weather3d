var React = require('react');
var ReactDOM = require('react-dom');
var Cube = require('./Cube')
var Flatscreen = require('./Flatscreen');
var Projection = require('./Projection')

var PerspectiveContext = React.createClass({

  render: function(){
    return (
      <div className="context">
      <div className="frontscreen">
      </div>  
        <Cube 
          cubeRotation={this.props.cubeRotation}
          cubeDays={this.props.cubeDays}
          weather={this.props.forecast}
          dayOrder={this.props.dayOrder}
          slideTime={this.props.slideTime}
        />
        <Flatscreen 
          dayOrder={this.props.dayOrder}
          sliderPosition={this.props.sliderPosition}
          weather={this.props.forecast}
          slideTime={this.props.slideTime}
        />
        <Projection 
          day={this.props.dayOrder[0]*2}
          weather={this.props.forecast}
        />
      </div>
    )
  }
})

module.exports = PerspectiveContext;