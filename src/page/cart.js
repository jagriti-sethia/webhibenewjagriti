import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../Redux/Slice/cartSlice';
const Cart = () => {
    const state = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // console.log('items', state.items)
    return (
        <div>
            <h1>Items</h1>

            <ol>
                {state.cart.map(
                    i => <li key={i.name}>{i.name}

                    </li>
                )}
            </ol>

        </div>
    )
}

export default Cart;