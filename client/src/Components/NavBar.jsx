// import React from 'react';

// import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
// import { Avatar } from 'primereact/avatar';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'primereact/button'; // ייבוא הכפתור


// function NavBar() {
//     const {user} = useSelector((state) => state.token);
//     const {token} = useSelector((state) => state.token);
//     const {roles} = useSelector((state) => state.token);
//   const navigate = useNavigate()
//   const items = [
//     {
//       template: () => (
//           <div className="flex align-items-center">
//               <Avatar
//                   image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
//                   shape="circle"
//                   style={{ marginRight: '8px' }} // רווח קטן בין התמונה לכפתור
//               />
//               <Button
//                   label={` שלום, ${user ? user.name : 'אורח'}`}
                  
//                   onClick={() => navigate('../update')} // ניווט לקומפוננטת העדכון
//                   className="p-button-text p-button-plain" // עיצוב כפתור
//               />
//           </div>
//       ),
//   },
//     {
//       label: 'Home',
//       icon: 'pi pi-home'
//     },
//     {
//       label: 'דירות',
//       icon: 'pi pi-star',
//       command: () => {
//         navigate('../apartments')
//       }
//     },

//     {
//       label: 'דירות שאהבתי',
//       icon: 'pi pi-heart',
//       command: () => {
//         navigate('../myApartments')
//       }
//     },
    
//     {
//       label: 'LogOut',
//       icon: 'pi pi-envelope',
//       command: () => {
//         navigate('../logOut')
//       }
//     },
//     {
//         label: 'פרסום',
//         icon: 'pi pi-search',
//         command: () => {
//           navigate('../advertising')
//         }
//       },

//   ];
  
//   const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
//   const end = (
//     <div className="flex align-items-center gap-2">
//       <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
//     </div>
//   );
//   return (


//         <div className="card">
//           <Menubar model={items} start={start} end={end} />
//         </div>
    

//   );

// }

// export default NavBar;

import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';

function NavBar() {
    const { user } = useSelector((state) => state.token);
    const navigate = useNavigate();

    const items = [
        {
            template: () => (
                <div className="flex align-items-center">
                    <Avatar
                        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                        shape="circle"
                        style={{ marginRight: '8px' }}
                    />
                    <Button
                        label={`שלום, ${user ? user.name : 'אורח'}`}
                        onClick={() => navigate('/update-user')} // ניווט לעדכון משתמש
                        className="p-button-text p-button-plain"
                    />
                </div>
            ),
        },
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/'),
        },
        {
            label: 'דירות',
            icon: 'pi pi-star',
            command: () => navigate('/apartments'),
        },
        {
            label: 'דירות שאהבתי',
            icon: 'pi pi-heart',
            command: () => navigate('/my-apartments'),
        },
        {
            label: 'LogOut',
            icon: 'pi pi-sign-out',
            command: () => navigate('/log-out'),
        },
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}

export default NavBar;