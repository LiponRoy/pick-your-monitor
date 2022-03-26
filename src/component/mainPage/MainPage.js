import React, { useEffect, useState } from 'react';
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

	return (
		<div className='container-fluid Shop'>
			<NavBar></NavBar>
			<div className='row'>
				<div className='col-md-8'>
					<div className='productContainer'>
						<div className='row'>
							{products.map(product => (
								<div key={product.id} className='col-md-4'>
									<Product product={product}></Product>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='col-md-4 cartContainer'>{/* <Cart cart={cart} emptyCart={emptyCart} ChooseOne={ChooseOne}></Cart> */}</div>
			</div>
		</div>
	);
};

export default MainPage;
