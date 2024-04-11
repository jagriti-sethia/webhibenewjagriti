import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DataTable from 'react-data-table-component';

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
    const location = useLocation();

    console.log("location", location)
    const [data, setdata] = useState([]);


    // localStorage.setItem("token", "myToken");
    // Retrieve data from local storage

    // console.log("locationddd", location)
    // const dataObj = (data) => [...data, location.state];

    useEffect(() => {
        if (location.state) {
            setdata(prev => [...prev, {
                name: location.state?.name,
                city: location.state?.city,
                gender: location.state?.gender,
                education: location.state?.education,
                dateofbirth: location.state?.dateofbirth,
                hobby: location.state?.hobby,
                file: location.state?.file,
                image: <img className='imgtab' src={location.state?.file} />
            }])

        }

    }, [])

    console.log('locaddd', data);
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