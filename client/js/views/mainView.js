var React = require('react');
var PhotoUpload = require('../components/photoUpload.js');
var PhotoDisplay = require('../components/photoDisplay.js');

var MainView = React.createClass({
  render: function() {
    return (
      <div className="root">
        <h3>Main View</h3>
        <PhotoUpload />
        <PhotoDisplay />
      </div>
    );
  }

});

module.exports = MainView;