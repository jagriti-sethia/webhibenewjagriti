import React, { useState, useEffect } from 'react';
import phm1 from "../../public/assets/download.jpeg";

const Card = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;

    const [data, getData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(url)
            .then((res) => res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            });
    }

    return (
        <div>
            hello
            <div className='cardout'>

                {data.map((item, i) => (

                    <div class="card" style={{ width: '18rem' }} >
                        <img src={phm1} alt='cardph' />
                        <div class="card-body" key={i}>
                            <h5 class="card-title">{item.name}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{item.username}</h6>
                            <p class="card-text">{item.address.street}----{item.address.suite}</p>

                            <p class="card-text">{item.address.city}----{item.address.zipcode}</p>
                            <a href="#" class="card-link">{item.phone}</a>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{item.email}</h6>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Card;