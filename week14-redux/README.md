# Week 14 - Redux, dispatch

## Notes

**Redux** keeps all of an app's shared state in one place (the
**store**), instead of scattering it across components with props.
Any component can read from it or update it, without passing props
down through every level in between.

**A slice** describes one piece of state and how it can change
(using Redux Toolkit's `createSlice`, the modern/simpler way to write
Redux):

```js
const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addItem(state, action) { state.items.push(action.payload); },
        removeItem(state, action) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
    },
});
export const { addItem, removeItem } = cartSlice.actions;
```

(Redux Toolkit lets you write `state.items.push(...)` as if it were
mutable - under the hood it's still producing a new state object.)

**The store** combines all slices into one app-wide state tree:

```js
const store = configureStore({ reducer: { cart: cartReducer } });
```

**`<Provider>`** makes the store available to every component below
it (wrap the whole app once, in `main.jsx`):

```jsx
<Provider store={store}><App /></Provider>
```

**`useSelector`** reads a piece of state from the store:

```jsx
const cartItems = useSelector((state) => state.cart.items);
```

**`dispatch`** is how you ask the store to run a reducer and update
state - you dispatch an *action* (here, one created by the slice):

```jsx
const dispatch = useDispatch();
dispatch(addItem(product));
```

The flow is always the same direction: UI dispatches an action ->
reducer computes new state -> store updates -> every component
reading that state re-renders.

## What this app does

A shop cart: products listed with an "Add to cart" button
(`dispatch(addItem(...))`), a cart section reading `state.cart.items`
via `useSelector`, with remove and clear-cart actions.

## How to run

```
cd week14-redux/shop-cart-redux
npm install
npm run dev
```
