import React from 'react';
import './Product.css';
const Product = ({ clickHendler, product }) => {
	// getting all product props
	const { id, name, price, img } = product;
	return (
		<div className='product'>
			<div className='all'>
				{/* product image */}
				<img src={img} alt='' width='200px' />
				{/* product text */}
				<div className='allText'>
					<span>id: {id}</span>
					<span>name: {name}</span>
					<span>Price: {price}</span>
				</div>
				{/* add to cart button */}
				<button className='btn btn-primary ProductBtn' onClick={() => clickHendler(product)}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Product;

// import React from 'react';

// const Product = () => {
// 	return <div>Product</div>;
// };

// export default Product;
