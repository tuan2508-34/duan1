const reducer = (state, action) => {
   
    const { type, payload } = action;
    switch (type) {
      case 'SAVE': {
        return {
          ...state,
          info:payload,
        };
      }
      case 'DATA': {
        return {
          ...state,
          data:payload,
        };
      }
      case 'EVE': {
        return {
          ...state,
          eve:payload,
        };
      }
      case 'THEM': {
        return {
          ...state,
          them:payload,
        };
      }

      default:
        return state;
    }
  };
  
  export default reducer;