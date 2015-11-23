var React = require('react');
var TextInput = require('./TextInput.react');
var Actions = require('../actions/Actions');

var Header = React.createClass({

    render: function() {
        return (
            <header id="header">
            <div className="jumbotron text-center">
                <h1>Tasker</h1>
                <p className="lead">
                    The very simple task manager.
                </p>
                <p>
                    <a href="https://github.com/nsantini/tasker" target="_blank">
                        <img src='img/GitHub-Mark-32px.png' style={{width: 20 + 'px'}}/>
                        <span class="username">&nbsp;source</span>
                    </a>
                </p>
                <TextInput
                    id="new-todo"
                    placeholder="What shall we do today?"
                    onSave={this._onSave}
                />
            </div>`
      </header>
    );
  },

  _onSave: function(text) {

    if (text.trim()) {
      Actions.create(text);
    }
  }
});

module.exports = Header;
