const noteReducer = (state, action) => {
  switch (action.type) {

    case "NEW_NOTE":
      return {
        ...state,
        isOpen: true,
        noteData: {
          ...state.noteData,
          title: "",
          content: "",
          color: "#FFED7D",
          label: "",
          priority: "",
          date: new Date().toLocaleString()
        },
      };
    
    case "EDIT_NOTE":
      return{
        ...state,
        isOpen: true,
        isEdit: true,
        noteData: {
          ...state.noteData,
          _id: action.payload._id,
          title: action.payload.title,
          content: action.payload.content,
          color: action.payload.color,
          label: action.payload.label,
          priority: action.payload.priority,
          date: new Date().toLocaleString()
        }
      }
    
    case "CLOSE_EDITOR":
      return {
        ...state,
        isOpen: false,
        isEdit: false
      };

    case "UPDATE_NOTE":
      return {
        ...state,
        noteData: {
          ...state.noteData,
          [action.payload.name]: action.payload.value,
        },
      };
  
    case "UPDATE_NOTE_CONTENT":
      return {
        ...state,
        noteData: {
          ...state.noteData,
          content: action.payload,
        },
      };

    case "CHANGE_COLOR":
      return {
        ...state,
        noteData:{
          ...state.noteData,
          color: action.payload
        }
      } 

     default:
      return state;
  }
};

export default noteReducer;
