import React from 'react';

const Product = ({ product }) => {
	const { id, name, price, img } = product;
	return (
		<div>
			<img src={img} alt='' width='350px' />
			<h4>id: {id}</h4>
			<h4>name: {name}</h4>
			<h4>Price: {price}</h4>
			{/* <button onClick={() => clickHendler(product)}>ClickME</button> */}
		</div>
	);
};

export default Product;

// import React from 'react';

// const Product = () => {
// 	return <div>Product</div>;
// };

// export default Product;
