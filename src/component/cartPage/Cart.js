import React, { useState } from 'react';
import './Cart.css';
const Cart = ({ cart, emptyCart, ChooseOne }) => {
	return (
		<div>
			{cart.map(dat => (
				<div key={dat.id} className='cartItem'>
					<img className='rounded-circle' src={dat.img} alt='' width='50px' height='45px' />
					<span>{dat.name}</span>
				</div>
			))}
			<button onClick={emptyCart}>Remove all</button>
			<br></br>
		</div>
	);
};

export default Cart;
