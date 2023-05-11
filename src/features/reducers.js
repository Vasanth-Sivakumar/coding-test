const initialState = {
    user: null,
    productList: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          user: action.payload.user,
          productList: action.payload.productList,
        };

      case 'ADD_PRODUCT':
        return {
          ...state,
          productList: [...state.productList, action.payload],
        };

      case 'EDIT_PRODUCT':
        const updatedProductList = state.productList.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );

        return {
          ...state,
          productList: updatedProductList,
        };

      case 'DELETE_PRODUCT':
        const filteredProductList = state.productList.filter((product) => product.id !== action.payload);
        return {
          ...state,
          productList: filteredProductList,
        };
        
      default:
        return state;
    }
  };  
  
  export default rootReducer;
  