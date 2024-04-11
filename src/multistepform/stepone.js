import React, { useState } from 'react'

const Stepone = ({ nextStep, handlechange, user }) => {
    const [err, seterr] = useState('false');
    const [errmsg, setmsg] = useState({});
    let error = {
        nameerr: '',
        cityerr: '',
        educationerr: '',

    }

    // console.log("usertt", user);

    function handlesubmit(e) {
        e.preventDefault()

        if (!user?.name || !user?.city || !user?.education) {
            seterr('true');
            if (!user?.name) {

                error.nameerr = 'kindly fill name'
            }
            if (!user?.city) {
                error.cityerr = 'kindly fill city'
            }
            if (!user?.education) {
                error.educationerr = 'kindly fill education'
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
            <form className='userform' class='border border-primary' onSubmit={handlesubmit} >
                <div class="mb-3">
                    <label for="name" class="form-label">enter your name</label>
                    <input type="text" class="form-control" name='name' onChange={handlechange} />
                </div>
                {err && <span>{errmsg.nameerr}</span>}

                <div class="mb-3">
                    <label for="city" class="form-label">enter your city</label>
                    <input type="text" class="form-control" name='city' onChange={handlechange} />
                </div>
                {err && <span>{errmsg.cityerr}</span>}
                {/* dropdown education */}
                <div class="mb-3">
                    <label class="form-label">
                        Select your highest qualification
                        <select name='education' onChange={handlechange}>
                            <option name='education' value='Btech' onChange={handlechange}>Bachelor of technology</option>
                            <option name='education' value='B.Sc' onChange={handlechange}>Bachelor of science</option>
                            <option name='education' value='B.Com' onChange={handlechange}>Bachelor of science</option>
                        </select>
                    </label>
                </div>
                {err && <span>{errmsg.educationerr}</span>}<br />
                {/* next button */}
                <button type="submit" class="btn btn-primary">
                    next
                </button>
            </form>



        </div>
    )
}

export default Stepone;