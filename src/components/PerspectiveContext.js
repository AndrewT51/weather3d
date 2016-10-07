var React = require('react');
var ReactDOM = require('react-dom');
var Cube = require('./Cube')
var Flatscreen = require('./Flatscreen');
var Projection = require('./Projection')

var PerspectiveContext = React.createClass({

  render: function(){
    return (
      <div className={this.props.loaded ? 'context active' : 'context'}>
      <div className="frontscreen">
      </div>  
        <Cube 
          cubeRotation={this.props.cubeRotation}
          cubeDays={this.props.cubeDays}
          weather={this.props.forecast}
          dayOrder={this.props.dayOrder}
          slideTime={this.props.slideTime}
          celsius={this.props.celsius}
        />
        <Flatscreen 
          celsius={this.props.celsius}
          dayOrder={this.props.dayOrder}
          sliderPosition={this.props.sliderPosition}
          weather={this.props.forecast}
          slideTime={this.props.slideTime}
        />
        <Projection 
          rotate={this.props.rotate}
          slide={this.props.slide}
          moving={this.props.moving}
          day={this.props.dayOrder[0]*2}
          weather={this.props.forecast}
          celsius={this.props.celsius}
          switchUnits={this.props.switchUnits}
        />
      </div>
    )
  }
})

module.exports = PerspectiveContext;