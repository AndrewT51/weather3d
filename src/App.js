var React = require('react');
var ReactDOM = require('react-dom');
var WeatherApp = require('./components/Main');
var Constants = require('./Constants');

ReactDOM.render(
  <WeatherApp constants={Constants} />, document.getElementById('a')
)
  

