const initialState = {
   
  };
  
  export const reducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
   
  
      // eslint-disable-next-line no-fallthrough
      default:
        return { ...state };
    }
  };
  