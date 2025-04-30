
// // import React, { useState, useEffect } from 'react';
// // import { ApartmentService } from './apartments/ApartmentService';
// // import { Button } from 'primereact/button';
// // import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// // import axios from "axios"
// // import { classNames } from 'primereact/utils';
// // import { useDispatch, useSelector } from 'react-redux';

// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { fetchApartments } from '../../slices/apartmentSlice'; // עדכן את הנתיב 
// // // import NavBar from '../NavBar';

// // const Advertising = async () => {
// //     //     const dispatch = useDispatch();
// //     //     const apartments = useSelector((state) => state.apartments.items);
// //     //     const loading = useSelector((state) => state.apartments.loading);
// //     const { user } = useSelector((state) => state.token);
// //     const { token } = useSelector((state) => state.token);
// //     const { roles } = useSelector((state) => state.token);
// //     // useEffect(() => {
// //     //     dispatch(fetchApartments());
// //     // }, [dispatch]);
// //     const [products, setProducts] = useState([]);
// //     const [layout, setLayout] = useState('grid');
// //     // if (loading) return <div>Loading...</div>;
// //     // const getApartmentsDataById = async () => {
// //     //     try {
// //     //         const res = await axios.get(`http://localhost:8000/apartment/userid/${user.id}`,
// //     //             { headers: { Authorization: `Bearer ${token}` } }
// //     //         )
// //     //         if (res.status === 200) {
// //     //             setProducts(res.data)
// //     //         }
// //     //     }
// //     //     catch (e) {
// //     //         await console.error(e)
// //     //     }
// //     // }
// //     useEffect(() => {
// //         if (user && token) {
// //             getApartmentsDataById();
// //         }
// //      }, [user, token]);
     
// //      const getApartmentsDataById = () => {
// //          axios.get(`http://localhost:8000/apartment/userid/${user.id}`, {
// //              headers: { Authorization: `Bearer ${token}` }
// //          })
// //          .then(res => {
// //              if (res.status === 200 && Array.isArray(res.data)) {
// //                  setProducts(res.data); // Check that data is an array
// //              }
// //          })
// //          .catch(e => {
// //              console.error(e);
// //          });
// //      };
     
// //      // Using slice safely
// //      const displayedProducts = products ? products.slice(0, 12) : [];
// //     // getApartmentsDataById(); // Call the async function

// //     useEffect(() => {
// //         getApartmentsDataById().then((data) => setProducts(data.slice(0, 12)));
// //     }, []);

// //     // const getSeverity = (product) => {
// //     //     switch (product.inventoryStatus) {
// //     //         case 'INSTOCK':
// //     //             return 'success';

// //     //         case 'LOWSTOCK':
// //     //             return 'warning';

// //     //         case 'OUTOFSTOCK':
// //     //             return 'danger';

// //     //         default:
// //     //             return null;
// //     //     }
// //     // };

// //     const listItem = (product, index) => {
// //         return (

// //             <div className="col-12" key={product.id}>
// //                 <Button icon="pi pi-heart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>

// //                 <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
// //                     <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={"תמונה לא נמצאה"} />
// //                     <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
// //                         <div className="flex flex-column align-items-center sm:align-items-start gap-3">
// //                             <span className="flex align-items-center gap-2">
// //                                 <i className="pi pi-map-marker"></i>
// //                                 <span className="font-semibold">{`${product.address.city}, ${product.address.neighborhood}`}</span>
// //                             </span>
// //                             <div className="text-2xl font-bold text-900">{`${product.size} מ"ר ${product.numOfRooms} חדרים`}</div>
// //                             {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
// //                             {/* <span className="font-semibold">{product.description}</span> */}

// //                             <div className="flex align-items-center gap-3">
// //                                 <span className="font-semibold">{product.description}</span>

// //                                 {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
// //                             </div>
// //                         </div>
// //                         <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
// //                             <span className="text-2xl font-semibold">₪{product.price}</span>
// //                             <Button icon="pi pi-heart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     };

// //     const gridItem = (product) => {
// //         return (
// //             <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
// //                 <div className="p-4 border-1 surface-border surface-card border-round">
// //                     <div className="flex flex-wrap align-items-center justify-content-between gap-2">
// //                         <div className="flex align-items-center gap-2">
// //                             <i className="pi pi-map-marker"></i>
// //                             <span className="font-semibold">{`${product.address.city}, ${product.address.neighborhood}`}</span>
// //                         </div>
// //                         {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
// //                     </div>
// //                     <div className="flex flex-column align-items-center gap-3 py-5">
// //                         <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={"תמונה לא נמצאה"} />
// //                         <div className="text-2xl font-bold">{`${product.size} מ"ר ${product.numOfRooms} חדרים`}</div>
// //                         {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
// //                         <span className="font-semibold">{product.description}</span>
// //                     </div>
// //                     <div className="flex align-items-center justify-content-between">
// //                         <span className="text-2xl font-semibold">₪{product.price}</span>
// //                         {/* <span className="text-2xl font-semibold">₪{product.price.toFixed(2)}</span> */}
// //                         <Button icon="pi pi-heart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     };

// //     const itemTemplate = (product, layout, index) => {
// //         if (!product) {
// //             return;
// //         }

// //         if (layout === 'list') return listItem(product, index);
// //         else if (layout === 'grid') return gridItem(product);
// //     };

// //     const listTemplate = (products, layout) => {
// //         return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
// //     };

// //     const header = () => {
// //         return (<>
// //             <div className="flex justify-content-end">
// //                 <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
// //             </div>

// //             {/* <div className="card">
// //             <DataView value={apartments} listTemplate={listTemplate} layout={layout} header={header()} />
// //         </div> */}
// //         </>
// //         );
// //     };

// //     return (
// //         <div className="card">
// //             <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
// //         </div>
// //     )
// // }
// // export default Advertising
// import React, { useState, useEffect } from 'react';
// import { Button } from 'primereact/button';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import axios from "axios";
// import { classNames } from 'primereact/utils';
// import { useDispatch, useSelector } from 'react-redux';
// import Add from "./apartments/Add"
// import { useNavigate } from 'react-router-dom';
// const Advertising = () => {
//     const dispatch = useDispatch();
//     const { user } = useSelector((state) => state.token);
//     const { token } = useSelector((state) => state.token);
//     const [products, setProducts] = useState([]);
//     const [layout, setLayout] = useState('grid');
//     const [visible, setVisible] = useState(false);
//     const navigate=useNavigate()
//     const getApartmentsDataById = () => {
//        axios.get(`http://localhost:8000/apartment/userid/${user._id}`, { 
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(res => {
//             if (res.status === 200 && Array.isArray(res.data)) {
//                 setProducts(res.data); // Check that data is an array
//             }
//         })
//         .catch(e => {
//             console.error(e);
//         });
//     };

//     useEffect(() => {
//         if (user && token) {
//             console.log(user)
//             getApartmentsDataById();
//         }
//     }, [user, token]);

//     const listItem = (product, index) => {
//         return (
//             <div className="col-12" key={product.id}>
               
//                 <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
//                     <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={"תמונה לא נמצאה"} />
//                     <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
//                         <div className="flex flex-column align-items-center sm:align-items-start gap-3">
//                             <span className="flex align-items-center gap-2">
//                                 <i className="pi pi-map-marker"></i>
//                                 <span className="font-semibold">{`${product.address.city}, ${product.address.neighborhood}`}</span>
//                             </span>
//                             <div className="text-2xl font-bold text-900">{`${product.size} מ"ר ${product.numOfRooms} חדרים`}</div>
//                             <div className="flex align-items-center gap-3">
//                                 <span className="font-semibold">{product.description}</span>
//                             </div>
//                         </div>
//                         <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
//                             <span className="text-2xl font-semibold">₪{product.price}</span>
//                             <Button icon="pi pi-heart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const gridItem = (product) => {
//         return (
//             <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
//                 <div className="p-4 border-1 surface-border surface-card border-round">
//                     <div className="flex flex-wrap align-items-center justify-content-between gap-2">
//                         <div className="flex align-items-center gap-2">
//                             <i className="pi pi-map-marker"></i>
//                             <span className="font-semibold">{`${product.address.city}, ${product.address.neighborhood}`}</span>
//                         </div>
//                     </div>
//                     <div className="flex flex-column align-items-center gap-3 py-5">
//                         <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={"תמונה לא נמצאה"} />
//                         <div className="text-2xl font-bold">{`${product.size} מ"ר ${product.numOfRooms} חדרים`}</div>
//                         <span className="font-semibold">{product.description}</span>
//                     </div>
//                     <div className="flex align-items-center justify-content-between">
//                         <span className="text-2xl font-semibold">₪{product.price}</span>
//                         <Button icon="pi pi-heart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const itemTemplate = (product, layout, index) => {
//         if (!product) {
//             return;
//         }

//         return layout === 'list' ? listItem(product, index) : gridItem(product);
//     };

//     const listTemplate = (products, layout) => {
//         return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
//     };

//     const header = () => {
//         return (
//             <div className="flex justify-content-end">
//                 <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
//             </div>
//         );
//     };

//     return (
//         <div className="card">
//              <Button icon="pi pi-heart" className="p-button-rounded"  onClick={()=>navigate('/r')  }></Button>
//              {/* <Add setVisible={setVisible} visible={visible} setProducts={setProducts}></Add> */}
//             <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
          

//         </div>
//     );
// }

// export default Advertising;
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'; // Import Dialog
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import axios from "axios";
import { classNames } from 'primereact/utils';
import { useDispatch, useSelector } from 'react-redux';
import Add from "./apartments/Add"; // Import the Add component
import { useNavigate } from 'react-router-dom';

const Advertising = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.token);
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [visible, setVisible] = useState(false); // State to manage visibility of the dialog
    const navigate = useNavigate();

    const getApartmentsDataById = () => {
        axios.get(`http://localhost:8000/apartment/userid/${user._id}`, { 
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
            if (res.status === 200 && Array.isArray(res.data)) {
                setProducts(res.data);
            }
        })
        .catch(e => {
            console.error(e);
        });
    };

    useEffect(() => {
        if (user && token) {
            getApartmentsDataById();
        }
    }, [user, token]);

    const listItem = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={"Image not found"} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-map-marker"></i>
                                <span className="font-semibold">{`${product.address.city}, ${product.address.street}`}</span>
                            </span>
                            <div className="text-2xl font-bold text-900">{`${product.size} m² ${product.numOfRooms} rooms`}</div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">₪{product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-map-marker"></i>
                            <span className="font-semibold">{`${product.address.city}, ${product.address.street}`}</span>
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={"Image not found"} />
                        <div className="text-2xl font-bold">{`${product.size} מ"ר ${product.numOfRooms} חדרים`}</div>
                        <span className="font-semibold">{product.description}</span>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">₪{product.price}</span>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout, index) => {
        if (!product) {
            return;
        }
        return layout === 'list' ? listItem(product, index) : gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-between">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                <Button label="Add Apartment" icon="pi pi-plus" onClick={() => setVisible(true)} /> {/* Button to show dialog */}
            </div>
        );
    };

    const dialogFooter = () => {
        return (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} /> 
            </div>
        );
    };

    return (
        <div className="card">
            <Dialog header="Add Apartment" visible={visible} modal onHide={() => setVisible(false)} footer={dialogFooter}>
                <Add setVisible={setVisible} setProducts={setProducts} />
            </Dialog>
            <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
        </div>
    );
}

export default Advertising;