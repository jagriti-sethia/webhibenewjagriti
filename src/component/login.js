import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, sub } from '../Redux/Slice/cartSlice';
// import toast from 'react-hot-toast';

const Login = () => {
  const state = useSelector(state => state.post)
  const dispatch = useDispatch();
  console.log('reduxstate', state);
  let msg1 = '';
  let msg2 = '';
  const [err, seterr] = useState('false');

  const [form, setform] = useState({
    email: '',
    password: ''
  })

  const [errorMsg, setErrorMsg] = useState({})

  // console.log("errorMsgff", errorMsg)

  // const [Msg1, setMsg1] = useState('')
  // const [Msg2, setMsg2] = useState('')



  function handlechange(e) {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  function handlesubmit(e) {

    e.preventDefault()
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let error = {}

    if (!form.email) {
      seterr('true')
      error.email = 'email is required'
    }
    else if (!regex.test(form.email)) {
      error.email = 'enter valid email'
    }

    if (!form.password) {
      error.password = 'pas is required'
    }
    else if (form.password.length < 4) {
      error.password = 'password must be more than 4 characters '
    }
    else if (form.password.length > 10) {
      error.password = 'password must be less than 10 characters'
    }


    // console.log("errrot", error)
    setErrorMsg(error)

  }


  return (
    <div className='lonig'>
      <h1>loginform</h1>


      <form
        class='border border-primary'
        onSubmit={handlesubmit}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" name='email' onChange={handlechange} />
        </div>

        {err && <span>{errorMsg.email}</span>}

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" name='password' onChange={handlechange} />



        </div>
        {err && <span>{errorMsg.password}</span>}<br />

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Login