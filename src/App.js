import React, { Component } from 'react'
import './bootstrap.css';
import logo from './todo.png'
import './App.css'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  addItem(todoValue){
     if(todoValue!== ""){
       const newItem = {
         id:Date.now(),
         value:todoValue,
         isDone:false
       }
       const list = [...this.state.list];
       list.push(newItem);
       this.setState({
         list:list,
         newItem:""
       })
      }
      // console.log(this.state.list);
  }
  updateInput(input){
    // console.log(input);
    this.setState({
      newItem:input
    })
  }
  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id!== id);
   this.setState({list:updatedList}) 
  }
  render(){
    // console.log("hello");
    return(
      <div className="container">
        <img src={logo} className= "img-thumbnail logo" alt="light" width="100" height="100"/>
        <h1 className="text-center">Todo Items...</h1>
        <div className="container">
          <div className="form-group row">
            <div className="col-sm-4 col-sm-push-8">
              <input 
              type="text" 
              className="form-control" 
              placeholder="Enter the Items" 
              value={this.state.newItem}
              onChange={e=>this.updateInput(e.target.value)}/>
            </div>
            <div className="col-sm-3">
              <button onClick={()=>this.addItem(this.state.newItem)} className="btn btn-primary">Add Todo</button>
            </div>
            </div>
            <div className="list">
              <ul>
                {this.state.list.map(item =>{
                  return(
                    <li>
                      {item.value}
                      <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                    </li>
                  )
                })}
                </ul>  
            </div>
          </div>
        </div>
    );
  }
}

export default App