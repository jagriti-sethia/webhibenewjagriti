import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addtoregisteruser } from '../Redux/Slice/cartSlice';

const Userform = () => {
    const state = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const initArr = {
        id: 1,
        prodname: '',
        prodtax: '',
        prodprice: ''
    }
    const [list, setlist] = useState([]);
    const [show, setshow] = useState(false);
    const [file, setFile] = useState();
    const [arr, setArr] = useState([initArr]);

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
        file: '',
        id: ''
    }

    const [user, setuser] = useState(initValue)



    function handlechange(e) {
        const { name, value } = e.target;
        if (name === "hobby") {
            const hobby = user?.hobby;
            const index = hobby?.indexOf(value);
            if (e.target.checked === true) {
                hobby?.push(value);
            } else if (e.target?.checked === false) {
                hobby?.splice(index, 1)
            }
        }
        // if (name === "file") {
        //     const file = user?.file;
        //     setuser({ ...user, [file]: URL.createObjectURL(e.target.files[0]) })
        // }
        else {
            setuser({
                ...user,
                [name]: value,
                id: Date.now()
            }

            )
        }

    }

    // handle submit
    function handlesubmit(e) {
        e.preventDefault()
        if (!user?.name?.trim() || !user?.city?.trim() || !user?.education?.trim() || !user?.gender?.trim() || !user?.dateofbirth?.trim() || user?.hobby?.length == 0) {
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
            if (user?.hobby?.length == 0) {
                error.hobbyerr = 'kindly select your hobby'
            }
            setmsg(error)
            console.log("kindly fill the form")

        } else {
            console.log(user);
            // setlist([...list, user]);




            dispatch(addtoregisteruser(user))



            navigate('/output')


        }

    }






    // haddle new add



    const addInput = () => {
        setArr(s => {
            return [
                ...s,
                {


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
    console.log("addwalaarray", arr)

    function handleimage(e) {
        setshow(true)
        handlechange(e)
        console.log(e.target.files);
        // setFile(URL.createObjectURL(e.target.files[0]));
        setuser(prev => ({ ...prev, file: URL.createObjectURL(e.target.files[0]) }))
    }



    return (
        <div>
            <h1>userform</h1>

            {/* userform */}
            <form className='userform' class='border border-primary'>
                {/* namefield */}
                <div class="mb-3">
                    <label for="name" class="form-label">enter your name</label>
                    <input type="text" class="form-control" name='name' onChange={handlechange} />
                </div>
                {err && <span>{errmsg.nameerr}</span>}
                {/* city */}
                <div class="mb-3">
                    <label for="city" class="form-label">enter your city</label>
                    <input type="text" class="form-control" name='city' onChange={handlechange} />
                </div>
                {err && <span>{errmsg.cityerr}</span>}
                {/* dropdown education */}
                <div class="mb-3">
                    <label class="form-label" for="education"> Select your highest qualification</label>
                    <select name='education' class="form-control" onChange={handlechange}>
                        <option name='education' value='Btech'>Bachelor of technology</option>
                        <option name='education' value='B.Sc'>Bachelor of science</option>
                        <option name='education' value='B.Com'>Bachelor of science</option>
                    </select>

                </div>
                {err && <span>{errmsg.educationerr}</span>}
                {/* gender checkbox */}
                <div class="mb-3 ">
                    <label class="form-label">Select your Gender </label><br />

                    <div class="form-check form-check-inline">
                        <input type="radio" name='gender' value='male' class="form-check-input" onChange={handlechange} />
                        <label class="form-check-label"> Male
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" name='gender' value='female' class="form-check-input" onChange={handlechange} />
                        <label class="form-check-label"> female
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" name='gender' value='others' class="form-check-input" onChange={handlechange} />
                        <label class="form-check-label">other
                        </label>
                    </div>

                </div>






                {err && <span>{errmsg.gendererr}</span>}
                {/* dateofbirthfeild */}
                <div class="mb-3">
                    <label class="form-label">enter your DOB</label>
                    <input type="date" name="dateofbirth" min="2018-01-01" max="2050-12-31" onChange={handlechange} class="form-control" />
                </div>
                {err && <span>{errmsg.dateofbirtherr}</span>}
                {/* hobbyfieldinput */}
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
                <div class="mb-3"><input type="file" onChange={handleimage} accept="image/*" /></div>
                <br />
                {show && <img src={user?.file} />}
                {
                    show && <button type='button' className="inner-x" onClick={() => setshow(!show)}>
                        &times;
                    </button>
                }<br />




                <div class="mb-3">
                    <button
                        type='button'
                        onClick={addInput}
                    >
                        <i class="fa-solid fa-circle-plus"></i>
                    </button>

                    {arr.map((item, ind) => {
                        return (
                            < div>
                                <div class="row" key={item.id}>
                                    <button type='button'
                                        onClick={() => deleteTask(item.id)} class="col-1" > <i class="fa-solid fa-minus"></i>
                                    </button>
                                    <div class="col-3">
                                        <input
                                            onChange={(e) => handleAddMore(e, ind)}
                                            value={item.prodname}

                                            type='text'

                                            name='prodname'
                                            placeholder='product Name'
                                        />
                                    </div>
                                    <div class="col-3">
                                        <input
                                            onChange={(e) => handleAddMore(e, ind)}
                                            value={item.prodtax}

                                            type='text'

                                            name='prodtax'
                                            placeholder='product tax'
                                        />
                                    </div>
                                    <div class="col-3">
                                        <input
                                            onChange={(e) => handleAddMore(e, ind)}
                                            value={item.prodprice}

                                            type='text'

                                            name='prodprice'
                                            placeholder='product price'
                                        />
                                    </div>
                                </div>
                            </div>


                        );
                    })}
                </div>
                <br />


                <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </form >


        </div >
    )
}

export default Userform