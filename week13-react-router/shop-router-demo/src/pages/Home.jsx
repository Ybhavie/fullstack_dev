import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Shop</h1>
            <p>A small example of React Router navigation.</p>
            <Link to="/products">Browse products</Link>
        </div>
    );
}
