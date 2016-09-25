var React = require('react');
var ReactDOM = require('react-dom');

var Face = React.createClass({
  render: function(){
    var bgImage = this.props.weather && this.props.weather.icon_url.replace(/com\/i\/c\/\w\//,'com/i/c/e/') || 'http://icons.wxug.com/i/c/e/chancerain.gif';
    console.log('Background',bgImage)
    return (
      <div className={'face ' + (this.props.side || 'backPanel')}
        style={{'backgroundImage': 'url("' + bgImage +'")'}}
      >
        <h2 >{this.props.weekday}</h2>
      </div>

    )
  }
})

module.exports = Face;