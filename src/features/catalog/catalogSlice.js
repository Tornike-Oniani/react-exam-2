const initialState = { status: 'idle', products: [] };

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case 'catalog/productsLoaded':
      return {
        status: 'idle',
        products: action.payload,
      };
    case 'catalog/productsLoading':
      return {
        ...state,
        status: 'loading',
      };
    default:
      return state;
  }
}

export const productsLoading = () => ({ type: 'catalog/productsLoading' });

export const fetchProducts = async (dispatch, getState) => {
  dispatch(productsLoading());
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  dispatch({ type: 'catalog/productsLoaded', payload: products });
};
