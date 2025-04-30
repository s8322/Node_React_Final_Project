import React, { useEffect, useRef, useState } from "react";
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { setToken ,setUser,setRoles} from "../../Redux/tokenSlice";
import axios from 'axios';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut} from "../../Redux/tokenSlice";

import Register from './Register'
// import { Dialog } from 'primereact/dialog';
// import { setToken, logOut } from '../../redux/tokenSlice'
// import { useNavigate } from 'react-router-dom';
// import { Link, Route, Routes } from 'react-router-dom'
// import FormRegT from "./FormRegT";
// import FormRegS from "./FormRegS";
const Logout = () => {
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.token);
    const {token} = useSelector((state) => state.token);
    const {roles} = useSelector((state) => state.token);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch()
     
useEffect(()=>{
    dispatch(logOut())
    alert("יצאת מהאתר")
       navigate('../')        
},[])
   


    return (
       <div>
        </div>
    )
}

export default Logout;
