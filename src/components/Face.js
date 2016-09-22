var React = require('react');
var ReactDOM = require('react-dom');

var Face = React.createClass({
  render: function(){
    console.log(this.props.side)
    return (
      <div className={'face ' + this.props.side}>

      </div>

    )
  }
})

module.exports = Face;