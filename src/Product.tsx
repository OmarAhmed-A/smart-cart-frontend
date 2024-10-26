import React, { useState } from 'react';
import './Product.css'; // Optional: for styling

interface ProductProps {
    product: {
        id: number;
        name: string;
        price: number;
        description: string;
        image: string;
    };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="quantity-controls">
                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={increaseQuantity} className="quantity-button">+</button>
            </div>
            <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
    );
};

export default Product;