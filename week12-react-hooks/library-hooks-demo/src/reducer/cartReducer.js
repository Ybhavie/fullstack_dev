// useReducer: state updates described as actions, useful once a few
// related pieces of state (like a checkout cart) change together.
export const initialCartState = { items: [] };

export function cartReducer(state, action) {
    switch (action.type) {
        case 'CHECK_OUT': {
            const alreadyIn = state.items.some((book) => book.id === action.book.id);
            if (alreadyIn) return state;
            return { items: [...state.items, action.book] };
        }
        case 'RETURN': {
            return { items: state.items.filter((book) => book.id !== action.bookId) };
        }
        case 'RETURN_ALL': {
            return initialCartState;
        }
        default:
            return state;
    }
}
