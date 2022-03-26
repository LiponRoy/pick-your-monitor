import React, { useEffect, useState } from 'react';
import Cart from '../cartPage/Cart';
import NavBar from '../navbar/NavBar';
import Product from '../productPage/Product';
import './MainPage.css';

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
		// programming
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
			<div className='Question-answers'>
				<h1 className='QA'>question and answer</h1>
				<h4>How does useState Work :</h4>
				<p className='paragraph'>
					useState is a hook of mordern javascript, The useState hook help us use one and more than one state variables inside of functional component. React js keep the sate variable and stay up-to-date on subsequent re-renders of component. useState normaly used true or false value, toggle between two values, flag and many diffrent ways, the import syntex of useSate is import React, {useState} from 'react'; and the use syntex of useState hook is const [count, setCount] = useState(0);. React useState is synchronous.In useState you passing the initial state to the function and the initial state return a variable with the current state value.<br></br> useState and setState both are asynchronous system.
				</p>
				<h4>state vs props:</h4>
				<p className='paragraph'>
					<span className='pera'>props</span>: In react js props are read-only. we can not reassigned it.<br></br> props always use to communicate between components.Props help the components reusable. It is immutable.<br></br> props use to pass data between one component to another component like as a function perameters<br></br> <span className='pera'>State:</span> State always hold the information from the component.<br></br> we can set data and get data using state. The state of mordern javascript is mutable.<br></br>the stateless component cannot have state. In react js all state is internal and controlled by the react component.
				</p>
			</div>
		</div>
	);
};

export default MainPage;
