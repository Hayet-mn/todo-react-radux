import { ADD_TASK ,REMOVE_TASK,COMPLETE ,EDIT,EDITED} from "../const/actionsTypes";



  export const addTask = (payload) => {
    return { type: ADD_TASK ,payload};
  };

  export const removeTask = (payload) => {
    return { type: REMOVE_TASK,payload};
  };
  export const Complete = (payload) => {
    return { type: COMPLETE,payload};
  };
  export function edit(id,payload) {
    return { type: EDIT, id,payload };
  };
  
  
  