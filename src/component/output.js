import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';

const columns = [
    {
        name: 'Name',
        selector: row => row.name,

    },
    {
        name: 'City',
        selector: row => row.city,

    },
    {
        name: 'Education',
        selector: row => row.education,

    },
    {
        name: 'Gender',
        selector: row => row.gender,
    },
    {
        name: 'Date of birth',
        selector: row => row.dateofbirth,
    },
    {
        name: 'Hobby',
        selector: row => row.hobby,
    },
    {
        name: 'Image',
        selector: row => row.image,
    },
];
// const data = [
//     {

//         name: 'hello',
//         city: 'kolkata',
//         education: 'bcom',
//         gender: 'male'


//     }]
// const data = [
//     {
//       id: 1,
//       title: 'Beetlejuice',
//       year: '1988',
//   },
//   {
//       id: 2,
//       title: 'Ghostbusters',
//       year: '1984',
//   },
// ]

function Output() {
    // const location = useLocation();
    const state = useSelector(state => state.cart);
    console.log('state', state)
    const [data, setdata] = useState(state.register);


    // localStorage.setItem("token", "myToken");
    // Retrieve data from local storage

    // console.log("locationddd", location)
    // const dataObj = (data) => [...data, data];

    // useEffect(() => {
    //     if (data.length > 0) {
    //         setdata(prev => [...prev, {
    //             name: state.register?.name,
    //             city: state.register?.city,
    //             gender: state.register?.gender,
    //             education: state.register?.education,
    //             dateofbirth: state.register?.dateofbirth,
    //             hobby: state.register?.hobby,
    //             file: state.register?.file,
    //             image: <img className='imgtab' src={state.register?.file} />
    //         }])
    //     }


    // }

    //     , [])

    // console.log('locaddd', state.register);
    // console.log("location", data)
    return (
        <div>
            <div className="App">
                <h3>DataTable in React - </h3>
                <DataTable
                    title="Employees"
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                    selectableRows
                />
            </div>


        </div>
    )
}
export default Output;