import React, { useEffect, useState } from 'react';
import Cart from '../cartPage/Cart';
import NavBar from '../navbar/NavBar';
import Product from '../productPage/Product';

const MainPage = () => {
	const [products, setProduct] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('myData.json')
			.then(response => response.json())
			.then(data => setProduct(data));
	});

	const clickHendler = product => {
		const dd = [...cart, product];
		setCart(dd);
	};
	const emptyCart = () => {
		// const dd = [...cart, product];
		setCart([]);
	};

	const ChooseOne = () => {
		console.log('ki kormu');
	};

	return (
		<div className='container-fluid Shop'>
			<NavBar></NavBar>
			<div className='row'>
				<div className='col-md-8'>
					<div className='productContainer'>
						<div className='row'>
							{products.map(product => (
								<div key={product.id} className='col-md-4'>
									<Product clickHendler={clickHendler} product={product}></Product>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='col-md-4 cartContainer'>
					<Cart cart={cart} emptyCart={emptyCart} ChooseOne={ChooseOne}></Cart>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
