import React, { useState } from 'react';

import Stepone from './stepone';
import Stepthree from './stepthree';
import Steptwo from './steptwo';

function Main() {
    const [step, setstep] = useState(1);
    const initValue = {
        name: '',
        city: '',
        education: '',
        gender: '',
        dateofbirth: '',
        hobby: [],
        profsn: '',
        email: '',
        phone: ''

    }
    const [user, setuser] = useState(initValue)

    // handle input change

    function handlechange(e) {
        const { name, value } = e.target;
        if (name === "hobby") {
            const hobby = user.hobby;
            const index = hobby.indexOf(value);
            if (e.target.checked === true) {
                hobby.push(value);
            } else if (e.target.checked === false) {
                hobby.splice(index, 1)
            }
        }
        else {
            setuser({
                ...user,
                [name]: value
            }

            )

        }

    }

    // function for going to next step by increasing step state by 1
    const nextStep = () => {

        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };
    switch (step) {
        case 1:
            return (
                <div className='main'>
                    <h1>Multistepform</h1>
                    <Stepone nextStep={nextStep} handlechange={handlechange} user={user} />

                </div>
            );
        case 2:
            return (
                <div className='main'>
                    <h1>Multistepform</h1>
                    <Steptwo nextStep={nextStep} handlechange={handlechange} user={user} prevStep={prevStep} />

                </div>
            );
        case 3:
            return (
                <div className='main'>
                    <h1>Multistepform</h1>
                    <Stepthree nextStep={nextStep} handlechange={handlechange} user={user} prevStep={prevStep} />
                </div>
            );

        default:
            return (
                <div className='main'>
                    <h1>Multistepform</h1>
                    {user.name}<br />{user.education}<br />{user.email}<br />{user.city}


                </div>
            );
    }
}

export default Main;
