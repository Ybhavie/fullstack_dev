import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
    // useParams reads the :id part of the route.
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div>
                <p>Product not found.</p>
                <Link to="/products">Back to products</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: Rs {product.price}</p>
            <button type="button" onClick={() => navigate('/products')}>
                Back to products
            </button>
        </div>
    );
}
