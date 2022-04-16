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
          color: "",
          label: [],
          priority: "",
        },
      };

    case "CLOSE_EDITOR":
      return {
        ...state,
        isOpen: false,
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
      
    default:
      return state;
  }
};

export default noteReducer;
