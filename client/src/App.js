import './App.css';
import Auth from './Components/Auth/Auth';
import NavBar from './Components/NavBar'
import React from 'react';
import LogOut from './Components/Auth/LogOut'
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './index.css';
import './flags.css';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Advertising from './Components/Advertising'
// import Apartment from './Components./apartments/Apartments';
import Apartments from './Components/apartments/Apartments';
import Apartment from './Components/apartments/Apartment';
import Users from './Components/users/Users';
import MyApartment from './Components/myAppartments/myAppartments';
import Add from './Components/apartments/Add';
import Register from './Components/Auth/Register';
import NavBarManager from './Components/NavBarManager';
// import Apartment from './Components/apartments/Apartment';
// import Update from './Components/users/Update';
import Update from './Components/users/Update';

function App() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.token);
  const {token} = useSelector((state) => state.token);
  const {roles} = useSelector((state) => state.token);
  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
      <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
    </div>
  );
  return (
    <Provider store={store}>
    <PrimeReactProvider>

      <div className="App">
       {roles=="User"?<NavBar/>:roles=="Admin"?<NavBarManager/>:<></>}
        <Routes>
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/' element={<Auth />} />

          <Route path='/apartments' element={<Apartments />} />
          <Route path='/navBar' element={<NavBar />} />
          <Route path='/logOut' element={<LogOut />} />
          <Route path='/advertising' element={<Advertising />} />
          <Route path='/addApartment' element={<Add />} />

          <Route path='/r' element={<Register />} />
          {/* <Route path='/auth' element={<Auth />} /> */}
          <Route path='/myApartments' element={<MyApartment />} />
          <Route path='/Apartment' element={<Apartment />} />
          {/* <Route path='/apartment' element={<Apartment />} /> */}
          <Route path='/users' element={<Users />} />
          <Route path='/update' element={<Update />} />

          {/* <Route path='/auth' element={<Auth />} /> */}
          <Route path='/myApartments' element={<MyApartment />} />

          {/* {<Route path='/products' element={<Product />} />} */}
        </Routes>
      </div>
    </PrimeReactProvider>
    </Provider>

  );

}

export default App;
