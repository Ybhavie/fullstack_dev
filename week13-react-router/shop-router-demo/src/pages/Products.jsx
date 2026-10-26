import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link> - Rs {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
