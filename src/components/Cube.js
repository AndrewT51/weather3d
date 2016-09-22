var React = require('react');
var ReactDOM = require('react-dom');
var Face = require('./Face')

var Cube = React.createClass({
  getInitialState: function(){
    return {
      sides: ['front','back','right', 'left','top','bottom']
    }
  },
  render: function(){
    return (
      <div className="cube">
        <Face side={this.state.sides[0]}/>
        <Face side={this.state.sides[1]}/>
        <Face side={this.state.sides[2]}/>
        <Face side={this.state.sides[3]}/>
        <Face side={this.state.sides[4]}/>
        <Face side={this.state.sides[5]}/>
      </div>
    )
  }
})

module.exports = Cube;