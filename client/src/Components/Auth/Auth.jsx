import React, { useEffect, useRef, useState } from "react";
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { setToken ,setUser,setRoles} from "../../Redux/tokenSlice";
import { useDispatch } from "react-redux";
import axios from 'axios';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';

import Register from './Register'
// import { Dialog } from 'primereact/dialog';
// import { setToken, logOut } from '../../redux/tokenSlice'
// import { useNavigate } from 'react-router-dom';
// import { Link, Route, Routes } from 'react-router-dom'
// import FormRegT from "./FormRegT";
// import FormRegS from "./FormRegS";
const Auth = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch()


    const login = async () => {
       
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/auth/login',

                headers: { 'Content-Type': 'application/json'},

                data: {
                    email:email,
                    password: password
                }
            })
           
            if(res.status===200){
                dispatch(setToken(res.data.accessToken))
                dispatch(setUser(res.data.user))
                dispatch(setRoles(res.data.user.roles))


                // const userRole=(res.data.roles)
                //if(userRole==='Admin')
                alert("you come in")
                // navigate('./')
            }
        }
        catch (e) {

            if (e.response) {
                console.error('Response error:', e.response.data);
            } else if (e.request) {
                console.error('No response received:', e.request);
            } else {
                console.error('Error setting up request:', e.message);
            }
            alert("Unauthorized user");
// =======
//             console.error(e)
//             alert("Unauthorized user")
// >>>>>>> 61065daf96463ed8dcaefc9bcb6834f19fd8488b
        }
    }

    const [visible, setVisible]=useState(false)

    return (
        <div className="card">
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Email</label>
                        <InputText id="email" type="text" className="w-12rem" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Password</label>
                        <InputText id="password" type="password" className="w-12rem" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto" onClick={login}></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem" onClick={()=>{setVisible(true)}}></Button>
                    {visible && <Register visible={visible} setVisible={setVisible}/> }
                </div>
            </div>
        </div>
    )
}

export default Auth;
