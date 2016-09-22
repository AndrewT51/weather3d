var React = require('react');
var ReactDOM = require('react-dom');

var InputLocation = React.createClass({
  render: function(){
    return (
      <div className="center">
        <div className="col-xs-4">
          <input className="form-control input" placeholder="current location" />
        </div>
        <button className="btn btn-default">Forecast</button>
      </div>
    )
  }
})

module.exports = InputLocation;