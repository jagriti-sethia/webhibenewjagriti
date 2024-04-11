import React, { useState } from 'react'

const Stepthree = ({ nextStep, prevStep, handlechange, user }) => {


    const [err, seterr] = useState('false');
    const [errmsg, setmsg] = useState({});
    let error = {
        hobbyerr: '',
        doberr: '',
        profnerr: '',

    }

    // console.log("usertt", user);

    function handlesubmit(e) {
        e.preventDefault()

        if (!user?.hobby || !user?.profsn || !user?.dateofbirth) {
            seterr('true');
            if (!user?.hobby) {

                error.hobbyerr = 'kindly fill name'
            }
            if (!user?.profsn) {
                error.profnerr = 'kindly fill city'
            }
            if (!user?.dateofbirth) {
                error.doberr = 'kindly fill education'
            }
            setmsg(error)
            console.log("kindly fill the form")

        } else {
            console.log("userNext", user);
            nextStep();

        }

    }


    return (
        <div><form className='userform' class='border border-primary'>
            {/* date of birth */}
            <div class="mb-3">
                <label class="form-label">enter your DOB</label>
                <input type="date" name="dateofbirth" min="2018-01-01" max="2050-12-31" onChange={handlechange} />
            </div>
            {/* hobbies */}
            <div class="mb-3">
                <label for="city" class="form-label">Select your favourite hobby</label><br />
                <label>
                    <input type="checkbox" name='hobby' value="dance" onChange={handlechange} />
                    Dancing
                </label><br />
                <label>
                    <input type="checkbox" name='hobby' value="reading" onChange={handlechange} />
                    reading
                </label><br />
                <label>
                    <input type="checkbox" name='hobby' value="travel" onChange={handlechange} />
                    travelling
                </label><br />
                <label>
                    <input type="checkbox" value="swim" name='hobby' onChange={handlechange} />
                    Swimming
                </label><br />
                <label>
                    <input type="checkbox" value="sing" name='hobby' onChange={handlechange} />
                    singing
                </label>
            </div>

            {/* input for proffession */}

            <div class="mb-3">
                <label for="profsn" class="form-label">enter your proffession</label>
                <input type="text" class="form-control" name='profsn' onChange={handlechange} />
            </div>
            {/* prev button */}
            <button type='button' class="btn btn-danger" onClick={prevStep}>
                previous
            </button>
            {/* next button */}

            <button class="btn btn-primary" type='button' onClick={handlesubmit}>
                submit
            </button>
        </form></div>
    )
}

export default Stepthree