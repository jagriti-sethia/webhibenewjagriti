import React, { useState } from 'react'

const Steptwo = ({ nextStep, prevStep, handlechange, user }) => {

    const [err, seterr] = useState('false');
    const [errmsg, setmsg] = useState({});
    let error = {
        emailerr: '',
        phoneerr: '',
        gendererr: '',

    }

    // console.log("usertt", user);

    function handlesubmit(e) {
        e.preventDefault()

        if (!user?.email || !user?.phone || !user?.gender) {
            seterr('true');
            if (!user?.email) {

                error.emailerr = 'kindly fill email'
            }
            if (!user?.phone) {
                error.phoneerr = 'kindly fill number'
            }
            if (!user?.gender) {
                error.educationerr = 'kindly fill gender'
            }
            setmsg(error)
            console.log("kindly fill the form")

        } else {
            console.log("userNext", user);
            nextStep();

        }

    }



    return (
        <div>
            <form className='userform' class='border border-primary' >
                <div class="mb-3">
                    <label for="email" class="form-label">enter your mail</label>
                    <input type="email" class="form-control" name='email' onChange={handlechange} />
                </div>
                {/* {err || <span>{errmsg.nameerr}</span>} */}

                <div class="mb-3">
                    <label for="phone" class="form-label">enter your mobile number</label>
                    <input type="text" class="form-control" name='phone' onChange={handlechange} />
                </div>
                {/* gender checkbox */}
                <div class="mb-3">
                    <label class="form-label">Select your Gender </label><br />
                    <label> Male
                    </label>
                    <input type="radio" name='gender' value='male' onChange={handlechange} />

                    <label> female
                    </label>
                    <input type="radio" name='gender' value='female' onChange={handlechange} />

                    <label>other
                    </label>
                    <input type="radio" name='gender' value='others' onChange={handlechange} />

                </div>
                {/* prev button */}
                <button class="btn btn-danger" type='button' onClick={prevStep}>
                    previous
                </button>
                {/* next button */}

                <button type='button' class="btn btn-primary" onClick={handlesubmit}>
                    next
                </button>
            </form>

        </div>
    )
}

export default Steptwo