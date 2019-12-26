import React, { Component } from 'react'
import {addTask,removeTask,Complete} from "../actions"
import ModalEdit from "./ModalEdit"
import {connect} from "react-redux"


 class todolist extends Component {
     state={
         input:"",
         newInput:"",
         
     }

    
     handleChange = e => {
    
          this.setState({
          [e.target.name]: e.target.value
        });
      };
      handleInput = el => {
        el.preventDefault();
        this.setState({ input: "" });
      };
     
    
   
   
  
  
    render() {
        return (
            <div className="todo">
                <div className="title"><h1 >Daily Todo Lists</h1></div>
                <form onSubmit={this.handleInput} className="todo-add">
                
                
                
                <input className="inputAdd" name="input"type="text" placeholder="Enter a new Task..."
                value={this.state.input} onChange={this.handleChange} />
               <button className="btnAdd" onClick={() => this.props.addItem(this.state.input)}><i class="fas fa-plus"></i></button>
                    </form> 
               

                
              
              <div className="listeTodo">
                  {this.props.todos.map((el,key)=>
                    <div className="todoItem" key={key} style={{backgroundColor:el.isComplete?"#e0e0d1":''}}>
                   <div className="itemDesc" >
           
          <div className="comp" key={key} style={{backgroundColor:el.isComplete?"green":''}}><i class="fas fa-check" id={key} onClick={e => this.props.complete(e.target.id)}></i></div>
           <h3 key={key} style={{textDecoration:el.isComplete?"line-through":'',color:el.isComplete?"grey":''}}>{el.item}</h3>
           </div>
                <div className="itemEdit">
               <ModalEdit idTodo={el.id}/>
               <button className="btnDlt"><i onClick={e => this.props.removeItem(e.target.id)} class="fas fa-trash-alt"></i></button>
                </div>
                
                    </div>)}
              </div>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        todos:state.items
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addItem:(payload)=>dispatch(addTask(payload)),
        removeItem:( todos)=>dispatch(removeTask( todos)),
        complete:( todos)=>dispatch(Complete( todos)),
       
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(todolist);