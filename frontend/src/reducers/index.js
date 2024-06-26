const initialState = {
  userTag: null,
  uniqueId: null,
  currentChatroom: null,
};
  
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TAG":
      return {
        ...state,
        userTag: action.payload,
      };
    case "SET_UNIQUE_ID":
      return {
        ...state,
        uniqueId: action.payload,
      }
    case "SET_CURRENT_CHATROOM":
      return {
        ...state,
        currentChatroom: action.payload,
      };
    case "LEAVE_CURRENT_CHATROOM":
      return {
        ...state,
        currentChatroom: null,
      };
    default:
      return state;
  }
};

export default rootReducer;