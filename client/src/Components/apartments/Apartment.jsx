import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Apartment=()=>{
    // const location = useLocation();
    const token = useSelector((state) => state.token);
    return(
        <div>
            <h1>Apartment</h1>
        </div>
    )
}
export default Apartment