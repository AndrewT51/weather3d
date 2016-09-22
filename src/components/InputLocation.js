var React = require('react');
var ReactDOM = require('react-dom');

var InputLocation = React.createClass({
  render: function(){
    return (
      <div className="input-group col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Get forecast</button>
          </span>
          <input type="text" className="form-control" placeholder="Current location" />
      </div>
    )
  }
})

module.exports = InputLocation;