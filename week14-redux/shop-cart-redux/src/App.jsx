import { useDispatch, useSelector } from 'react-redux';
import { products } from './data/products';
import { addItem, clearCart, removeItem } from './store/cartSlice';

export default function App() {
    // useSelector reads a piece of the Redux store.
    const cartItems = useSelector((state) => state.cart.items);
    // useDispatch sends an action to the store's reducer.
    const dispatch = useDispatch();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="app">
            <h1>Shop</h1>

            <section>
                <h2>Products</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - Rs {product.price}
                            <button type="button" onClick={() => dispatch(addItem(product))}>
                                Add to cart
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Cart ({cartItems.length})</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - Rs {item.price}
                            <button type="button" onClick={() => dispatch(removeItem(item.id))}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <p>Total: Rs {total}</p>
                {cartItems.length > 0 && (
                    <button type="button" onClick={() => dispatch(clearCart())}>
                        Clear cart
                    </button>
                )}
            </section>
        </div>
    );
}
