import React, { useState } from 'react';
import './Cart.css';
const Cart = ({ cart, emptyCart, ChooseOne, ran, buttonClicked, genRandom }) => {
	return (
		<div>
			{/* display cart data */}
			{cart.map(dat => (
				<div key={dat.id} className='cartItem'>
					<img className='rounded' src={dat.img} alt='' width='60px' height='55px' />
					<span>{dat.name}</span>
				</div>
			))}
			<button className='btn btn-primary btn-lg btn-block mb-2' onClick={emptyCart}>
				Remove all
			</button>
			<br></br>
			{cart && buttonClicked > 0 && cart.length > 0 ? (
				<div>
					<h6>Please choose it</h6>
					<img src={cart[ran].img} alt='' width='50px' />
					<span>{cart[ran].name}</span>
				</div>
			) : (
				<span></span>
			)}
			<br></br>
			<button className='btn btn-primary mb-2' onClick={() => genRandom()}>
				Choose 1 for me
			</button>
		</div>
	);
};

export default Cart;
