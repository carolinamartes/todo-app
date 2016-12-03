import React from 'react';
import ReactDOM from 'react-dom';
var Task = require('./task.js');
var data = require('./data.js');
var TaskList = require('./task-list.js');
 

 //Main React component, handles adding and deleting items from list, renders the basic HTML form
  var ToDo = React.createClass({
    getInitialState: function(){
      return{
        list: data
      }
    },

    add_item: function()
    {
      var new_item = this.refs.inputTask.value;
      var task_array = [];
      data.forEach(function(el){
        task_array.push(el.task)
      });

//checks that task is neither empty nor already on the list
      if(!task_array.includes(new_item) && new_item){
        data.push({
          id: (data.length + 1),
          task: new_item,
          remove: false
      });
      this.setState({list: data})
      }
    },
    
    done_that: function(thing)
    {
      data.splice(thing, 1);
      this.setState({list: data})
    },
    
    render: function(){
      return (
        <div className="task-div">
          <h1>To Do List</h1>
          <h3><strong>{data.length}</strong> {data.length==1 ? " thing" : " things" } to do</h3>
          <TaskList data={data} done={this.done_that} className=""/>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="input-group">
                <input id="input"  className="form-control" type="text" placeholder="to do" ref="inputTask"></input>
                <span className="input-group-btn">
                <button onClick={this.add_item} className="btn btn-success">Add</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });
    ReactDOM.render( <ToDo />, document.getElementById("main-container"))
