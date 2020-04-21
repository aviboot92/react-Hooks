export default (state, action) =>{
    switch(action.type){
      case "GET_NOTES":{
        return [...action.notes];
      }
  
      case 'ADD_NOTE':{
        return  [action.note, ...state];
        break;
      }
  
      case 'DELETE_NOTE':{
        return state.filter((note)=> note.title !== action.title);
        break;
      }
  
      default:
        return state;
        break;
    }
  }
