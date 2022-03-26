import React, { useEffect, useState } from 'react';
import Cart from '../cartPage/Cart';
import NavBar from '../navbar/NavBar';
import Product from '../productPage/Product';

const MainPage = () => {
	// product useState
	const [products, setProduct] = useState([]);
	// cart useState
	const [cart, setCart] = useState([]);
	// for Random choose
	const [ran, setRan] = useState(0);

	let randomNumber = 0;
	const [buttonClicked, setButtonClicked] = useState(0);

	// generate random data
	const genRandom = () => {
		randomNumber = Math.floor(Math.random() * cart.length);
		setRan(randomNumber);
		setButtonClicked(1);
	};
	//End  Random choose
	// call useEffect for getting JSON Data
	useEffect(() => {
		fetch('myData.json')
			.then(response => response.json())
			.then(data => setProduct(data));
	});

	// adding cart
	const clickHendler = product => {
		const dd = [...cart, product];
		setCart(dd);
	};

	// removing all cart
	const emptyCart = () => {
		// const dd = [...cart, product];
		setCart([]);
		setButtonClicked(0);
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
								// display Json Data using map function
								<div key={product.id} className='col-md-4'>
									<Product clickHendler={clickHendler} product={product}></Product>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='col-md-4 cartContainer'>
					{/* passing cart props */}
					<Cart cart={cart} emptyCart={emptyCart} ChooseOne={ChooseOne} ran={ran} buttonClicked={buttonClicked} genRandom={genRandom}></Cart>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
