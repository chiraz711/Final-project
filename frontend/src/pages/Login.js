import React, { useState, useContext } from 'react';
import { Container, Form, Col, Row, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from './../utils/config';

function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const userRole = ''; // replace with the user's role

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.role);

      dispatch({ type: 'LOGIN_SUCCESS', payload: {key:result.data,key2:result.role }});
      navigate('/home');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Login
                  </Button>
                </Form>
                {userRole === 'admin' ? (
                  <p>Admin Login</p>
                ) : userRole === 'user' ? (
                  <p>User Login</p>
                ) : (
                  <p>Invalid User Role</p>
                )}
                <p>
                  Don't have an account! <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;









// import React,{useState,useContext} from 'react'
// import {Container,Form,Col,Row,FormGroup,Button} from 'reactstrap'
// import {Link, useNavigate} from 'react-router-dom'
// import '../styles/login.css'
// import loginImg from '../assets/images/login.png'
// import userIcon from '../assets/images/user.png'
// import {AuthContext} from './../context/AuthContext'
// import {BASE_URL} from './../utils/config'

// function Login() {

//   const [credentials,setCredentials]=useState({ 
//     email:undefined,
//     password:undefined
//   })

//   const {dispatch} =useContext(AuthContext)
//   const navigate=useNavigate()


//     const handleChange=e=>{
//       setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
//     }

//     const handleClick=async e=>{
//       e.preventDefault()
//       dispatch({type:'LOGIN_START'})
//       try {
        
//         const res=await fetch(`${BASE_URL}/auth/login`,
//         {
//           method:'post',
//           headers:{
//             "content-type":"application/json"
//           },
//           credentials:'include',
//           body:JSON.stringify(credentials)
//         })

//         const result=await res.json()
//         if(!res.ok)
//         alert(result.message)
//         // console.log(result.data)

//         dispatch({type:'LOGIN_SUCCESS',payload:result.data})
//         navigate('/home')
        
//       } catch (err) {
//         dispatch({type:'LOGIN_FAILURE',payload:err.message})
//       }
//     }
    
//   return (
//     <section>
//        <Container>
//         <Row>
//           <Col lg='8' className='m-auto'>
//            <div className='login__container d-flex justify-content-between'>
//              <div className='login__img'>
//                <img src={loginImg} alt='' />
//              </div> 
//              <div className='login__form'>
//               <div className='user'>
//                    <img src={userIcon} alt='' />
//               </div>
//             <h2>Login</h2>

//             <Form onSubmit={handleClick}>
//               <FormGroup>
//                 <input type='email' placeholder='Email' required id='email' onChange={handleChange}   />
//               </FormGroup>
//               <FormGroup >
//                 <input type='password' placeholder='Password' required id='password' onChange={handleChange}    />
//               </FormGroup>
//               <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
//             </Form>
//             <p>D'ont have an account ! <Link to='/register'>Create</Link></p>
//             </div> 
//            </div>
//           </Col>
//         </Row>
//        </Container>
      
//     </section>
//   )
// }

// export default Login