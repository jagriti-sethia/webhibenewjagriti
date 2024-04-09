import React, { useState } from 'react'
import phm1 from "../../public/assets/download.jpeg";
const Userform = () => {
    // const inputArr = [
    //     {

    //     }
    // ];


    const initArr = {
        id: 1,
        prodname: '',
        prodtax: '',
        prodprice: ''
    }
    const [show, setshow] = useState(false);
    const [file, setFile] = useState();
    const [arr, setArr] = useState([initArr]);
    const [inputs, setInputs] = useState({});
    const [err, seterr] = useState('false');
    const [errmsg, setmsg] = useState({});
    let error = {
        nameerr: '',
        cityerr: '',
        educationerr: '',
        gendererr: '',
        dateofbirtherr: '',
        hobbyerr: ''
    }

    const initValue = {
        name: '',
        city: '',
        education: '',
        gender: '',
        dateofbirth: '',
        hobby: [],

    }
    const [user, setuser] = useState(initValue)


    // console.log(errmsg)
    // console.log(user)
    console.log("arrvii", arr)

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

    // handle submit
    function handlesubmit(e) {
        e.preventDefault()
        if (!user.name.trim() || !user.city.trim() || !user.education.trim() || !user.gender.trim() || !user.dateofbirth.trim() || user.hobby.length == 0) {
            if (!user.name) {
                seterr('true');
                error.nameerr = 'kindly fill name'
            }
            if (!user.city) {
                error.cityerr = 'kindly fill city'
            }
            if (!user.education) {
                error.educationerr = 'kindly fill education'
            }
            if (!user.gender) {
                error.gendererr = 'kindly fill gender'
            }
            if (!user.dateofbirth) {
                error.dateofbirtherr = 'kindly fill date of birth'
            }
            if (user.hobby.length == 0) {
                error.hobbyerr = 'kindly select your hobby'
            }
            setmsg(error)
            console.log("kindly fill the form")

        } else {
            console.log(user);
            setuser({})
        }

    }

    // haddle new add



    const addInput = () => {
        setArr(s => {
            return [
                ...s,
                {

                    value: "",
                    id: arr.length + 1
                }
            ];
        });


    }

    const deleteTask = (id) => {
        setArr(arr.filter(task => task.id !== id));
    }

    // add more
    const handleAddMore = (e, ind) => {

        setArr(s => {
            const newArr = s.slice();

            newArr[ind][e.target.name] = e.target.value;
            return newArr;
        });

    }

    function handleimage(e) {
        setshow(true)
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }



    return (
        <div>
            <h1>userform</h1>
            <form className='userform'
                class='border border-primary'

            >
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
                            <option name='education' value='Btech'>Bachelor of technology</option>
                            <option name='education' value='B.Sc'>Bachelor of science</option>
                            <option name='education' value='B.Com'>Bachelor of science</option>
                        </select>
                    </label>
                </div>
                {err && <span>{errmsg.educationerr}</span>}
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
                {err && <span>{errmsg.gendererr}</span>}
                <div class="mb-3">
                    <label class="form-label">enter your DOB</label>
                    <input type="date" name="dateofbirth" min="2018-01-01" max="2050-12-31" onChange={handlechange} />
                </div>
                {err && <span>{errmsg
                    .dateofbirtherr}</span>}
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
                {err && <span>{errmsg.hobbyerr}</span>}
                {/* image input */}
                <input type="file" onChange={handleimage} accept="image/*" /><br />
                {show &&
                    <img src={file} />
                }
                {
                    show && <button type='button' className="inner-x" onClick={() => setshow(!show)}>
                        &times;
                    </button>
                }<br />





                <button
                    type='button'
                    onClick={addInput}
                >
                    <i class="fa-solid fa-circle-plus"></i>
                </button>

                {arr.map((item, ind) => {
                    return (
                        <div>
                            <button type='button'
                                onClick={() => deleteTask(item.id)}> <i class="fa-solid fa-minus"></i>
                            </button>
                            <input
                                onChange={(e) => handleAddMore(e, ind)}
                                value={item.prodname}
                                key={item.id}
                                type='text'
                                size="20"
                                name='prodname'
                                placeholder='product Name'
                            />
                            <input
                                onChange={(e) => handleAddMore(e, ind)}
                                value={item.prodtax}
                                key={item.id}
                                type='text'
                                size="20"
                                name='prodtax'
                                placeholder='tax'
                            />
                            <input
                                onChange={(e) => handleAddMore(e, ind)}
                                value={item.prodprice}
                                key={item.id}
                                type='text'
                                size="20"
                                name='prodprice'
                                placeholder='price'
                            />

                        </div>

                    );
                })}
                <br />

                {/* image field */}
                {/* <img src={phm1} alt='fresh' /><br /> */}
                <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </form>


        </div>
    )
}

export default Userform