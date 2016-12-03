import React from 'react';
import ReactDOM from 'react-dom';
var data = require('./data.js');

//Lowest component that calls the delete and done functions, passes delete through to parent component
  let Task = React.createClass({
    getInitialState: function(){
      return {
        done: false,
        list: data
      }
    },
    
    delete: function() {
      var index = this.props.index;
      this.props.done(index);
    },

    render: function(){
      return(
        <div className="task">
          <div className="btn-group">
            <h4 className={this.state.done ? "done" : "not-done" }> {this.props.content.task}</h4>
            <label className="btn btn-primary change">
              <input type="checkbox"  className="" onClick={this.toggleDone}/>Done
            </label>
            <button onClick={this.delete}  className="glyphicon glyphicon-remove btn btn-danger change"></button>
            <br key={this.props.index}/>
          </div>
        </div>
      )
    },

    toggleDone: function(){
      if (this.state.done){
        this.setState({done:false})
      }
      else {
          this.setState({done:true})
      }
    }
  });

  module.exports= Task