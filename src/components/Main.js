var React = require('react');
var ReactDOM = require('react-dom');
var MenuBar = require('./MenuBar')
var PerspectiveContext = require('./PerspectiveContext')

function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };
    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

function handleApiResponse(data){
       console.log(data);
}


var AppWindow = React.createClass({
  render: function(){
    // var url = 'http://api.wunderground.com/api/dca680da44d3f5a3/conditions/q/CA/San_Francisco.json'
    // jsonp(url, handleApiResponse);
    return (
      <div className="app-window">
        <MenuBar />
        <PerspectiveContext />
      </div>
    )
  }
})

module.exports = AppWindow
