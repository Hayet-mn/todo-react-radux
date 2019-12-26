import {  ADD_TASK ,REMOVE_TASK ,COMPLETE,EDIT} from "../const/actionsTypes";

const initState ={
  items:[]
}
  



  const mainTodo = (state=initState,action)=>{

    

    switch(action.type){
    
      case ADD_TASK :
        return {...state,items: [...state.items,{item:action.payload,id:Math.random(), isComplete:false,edit:false}]}; 
      
      case REMOVE_TASK:
      return {...state,items: [...state.items.filter((el, i) => action.payload != i)]
      };

      case COMPLETE:
        let todos = state.items;
      todos[action.payload].isComplete = !todos[action.payload].isComplete;
      return {...state,items: [...todos]};

      case EDIT:
     return{...state,items:state.items.map((el,i)=>el.id === action.id?{...el,item:action.payload}:el)}
   
    
    
      default :
       return state;
    }
    
  }

  export default mainTodo;
  
