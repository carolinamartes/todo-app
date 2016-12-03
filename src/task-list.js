import React from 'react';
import ReactDOM from 'react-dom';
var Task = require('./task.js');
var data = require('./data.js');


  var TaskList = React.createClass({
    render: function(){
      var taskNodes = this.props.data.map(function(item,index){
            return(
            <Task key={index} index={index} content={item} done={this.props.done}/>
            )
      },this);
      return (
        <div className="taskList">
          {taskNodes}
        </div>
      );
    }
  });

  
  module.exports= TaskList