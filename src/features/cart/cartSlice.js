const initialState = {
  totalCost: 0,
  items: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'cart/productAdded':
      return {
        ...state,
        totalCost: state.totalCost + action.payload.price,
        items: [...state.items, action.payload],
      };
    case 'cart/productRemoved':
      return {
        ...state,
        totalCost: state.totalCost - action.payload.price,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case 'cart/checkedOut':
      return {
        ...state,
        totalCost: 0,
        items: [],
      };
    default:
      return state;
  }
}
