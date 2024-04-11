import React, { useState, useEffect } from 'react';
import phm1 from '../assets/download.jpeg';

const Card = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const url = `https://jsonplaceholder.typicode.com/users?page=${currentPage}&limit=${itemsPerPage}`;

    const [data, setData] = useState([]);
    const [search, setsearch] = useState("");
    const [searchd, setdsearch] = useState([]);


    const fetchData = () => {
        fetch(url)
            .then((res) => res.json())

            .then((response) => {
                console.log(response);
                setData(response);
                setdsearch(response)
            })
            .catch(error => console.error(error));
    }


    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsPerPage] = useState(4);

    // useEffect(() => {
    //   fetch(`https://example.com/api/data?page=${currentPage}&limit=${itemsPerPage}`)
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.error(error));
    // }, [currentPage, itemsPerPage]);

    const totalPages = Math.ceil(data?.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data?.slice(startIndex, endIndex);
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== totalPages)
            setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }
    // SEARCH

    const handlesearch = (query) => {
        setsearch(query);
        if (query === "") { setData(searchd); return; }
        else {

            const searcdata = currentItems?.filter((item) => {
                if ((item.name).toLowerCase().includes(search.toLowerCase())) {
                    return item
                }
            })
            setData(searcdata);

        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>

            <h1>card data from api's</h1>
            <input onChange={e => handlesearch(e.target.value)}>
            </input>
            <div className='cardtout'>

                {currentItems.map((item, i) => (

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


            {/* PAGINATION CONTROLS */}

            <nav>
                <ul className='pagination justify-content-center'>
                    <li className="page-item"> {/* Previous page button */}
                        <button className="page-link"
                            onClick={prevPage}  // Click event handler for navigating to previous page
                            type='button'>

                            Previous
                        </button>
                    </li>
                    {/* Mapping through each page number */}
                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber}
                            className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                            <button onClick={() => setCurrentPage(pgNumber)}  // Click event handler for setting the current page
                                className='page-link'
                                type='button'>

                                {pgNumber}
                            </button>
                        </li>
                    ))}
                    <li className="page-item"> {/* Next page button */}
                        <button className="page-link"
                            onClick={nextPage} // Click event handler for navigating to next page
                            type='button'>

                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Card;
