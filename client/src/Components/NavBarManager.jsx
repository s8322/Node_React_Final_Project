// import React from 'react';

// import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
// import { Avatar } from 'primereact/avatar';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';


// function NavBarManager() {
//     const {user} = useSelector((state) => state.token);
//     const {token} = useSelector((state) => state.token);
//     const {roles} = useSelector((state) => state.token);
//   const navigate = useNavigate()
//   const items = [
//     {
//         label: 'Home',
//         icon: 'pi pi-home'
//       },
//       {
//         label: 'דירות',
//         icon: 'pi pi-star',
//         command: () => {
//           navigate('../apartments')
//         }
//       },
//       {
//         label: 'LogOut',
//         icon: 'pi pi-envelope',
//         command: () => {
//           navigate('../logOut')
//         }
//       },
//       {
//           label: 'פרסום',
//           icon: 'pi pi-search',
//           command: () => {
//             navigate('../advertising')
//           }

//         },
      

        
//         {{
//           label: 'רשימת משתמשים',
//           icon: 'pi pi-search',
//           command: () => {
//             navigate('../users')
//           }}
//         }
//   ];

//   const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
//   const end = (
//     <div className="flex align-items-center gap-2">
//       <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
//       <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
//     </div>
//   );
//   return (


//         <div className="card">
//           <Menubar model={items} start={start} end={end} />
//         </div>
    

//   );

// }

// export default NavBarManager;

import React from 'react';

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function NavBarManager() {
    const { user } = useSelector((state) => state.token);
    const { token } = useSelector((state) => state.token);
    const { roles } = useSelector((state) => state.token);
    const navigate = useNavigate();
    
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
        },
        {
            label: 'דירות',
            icon: 'pi pi-star',
            command: () => {
                navigate('../apartments');
            },
        },
        {
            label: 'LogOut',
            icon: 'pi pi-envelope',
            command: () => {
                navigate('../logOut');
            },
        },
        {
            label: 'פרסום',
            icon: 'pi pi-search',
            command: () => {
                navigate('../advertising');
            },
        },
        {
            label: 'רשימת משתמשים',
            icon: 'pi pi-search',
            command: () => {
                navigate('../users');
            },
        },
    ];

    const start = (
        <img
            alt="logo"
            src="https://primefaces.org/cdn/primereact/images/logo.png"
            height="40"
            className="mr-2"
        ></img>
    );
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
            />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}

export default NavBarManager;