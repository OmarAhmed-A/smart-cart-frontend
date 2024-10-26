import React from 'react';
import Product from './Product';
import { products } from './products';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Supermarket</h1>
            <div className="product-list">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;