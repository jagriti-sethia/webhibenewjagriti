import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phm1 from '../assets/download.jpeg';
import { removefrompage } from '../Redux/Slice/cardSlice';

const Addedcard = () => {
    const state = useSelector(state => state.card);
    const dispatch = useDispatch();


    return (
        <div>
            <div className='cardttout'></div>

            {state.addedcard?.map((item, i) => (

                <div class="card mb-3" style={{ 'max-width': '540px' }} >
                    <div class="row g-0">

                        <img src={phm1} alt='cardph' class="img-fluid rounded-start col-md-4" />

                        <div class="col-md-6">
                            <div class="card-body" key={i}>
                                <h5 class="card-title">{item.name}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{item.username}</h6>
                                <p class="card-text">{item.address.street}--{item.address.city}</p>

                                <p class="card-text">{item.address.suite}--{item.address.zipcode}</p>
                                <p class="card-link">{item.phone}</p>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{item.email}</h6>
                                <button onClick={() => { dispatch(removefrompage(item)) }}> Remove </button>
                            </div>

                        </div>



                    </div>
                </div>

            ))
            }



        </div>
    )
}

export default Addedcard;