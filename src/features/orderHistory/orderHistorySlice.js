const initialState = {
  totalSpent: 0,
  packages: [],
};

export default function orderHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'orderHistory/addedPackage':
      return {
        ...state,
        totalSpent: state.totalSpent + action.payload.cost,
        packages: [...state.packages, action.payload],
      };
    default:
      return state;
  }
}
