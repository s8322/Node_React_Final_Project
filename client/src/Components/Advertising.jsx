
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'; // Import Dialog
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import axios from "axios";
import { classNames } from 'primereact/utils';
import { useDispatch, useSelector } from 'react-redux';
import Add from "./apartments/Add"; // Import the Add component
import Update from './apartments/Update';
import { useNavigate } from 'react-router-dom';

const Advertising = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.token);
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [visible, setVisible] = useState(false); // State to manage visibility of the dialog
    //const [visibleAdd, setVisibleAdd] = useState(false); // נראות הדיאלוג של Add
    const [visibleUpdate, setVisibleUpdate] = useState(false); // נראות הדיאלוג של Update
    const [selectedApartment, setSelectedApartment] = useState(null); // שמירת מזהה הדירה עבור עדכון
    const [add, setAdd] = useState(null)

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
    }, [user, token, add]);

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
                <div className="p-4 border-1 surface-border surface-card border-round flex flex-column justify-content-between" style={{ height: "100%" }}>
                    <div>
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
                    </div>
                    {/* Footer Section */}
                    <div className="flex justify-content-between align-items-center mt-auto">
                        <span className="text-2xl font-semibold">₪{product.price}</span>
                        <Button icon="pi pi-update" rounded severity="secondary" aria-label="Bookmark"  onClick={()=>{setSelectedApartment(product); setVisibleUpdate(true)}}/>
                        </div>
                </div>
            </div>
        );
    };
    const dialogFooterUpdate = (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => setVisibleUpdate(false)} className="p-button-text" />
            <Button label="Update" icon="pi pi-check" onClick={() => setVisibleUpdate(false)} autoFocus />
        </div>
    );
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

        <>
            <div className="card">
                <Dialog header="Add Apartment" visible={visible} modal onHide={() => setVisible(false)} footer={dialogFooter}>
                    <Add setVisible={setVisible} setProducts={setProducts} setAdd={setAdd} />
                </Dialog>


                <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
                {visibleUpdate?<Update   visible={visibleUpdate} setVisible={setVisibleUpdate}  apartment={selectedApartment} getApartmentsDataById={getApartmentsDataById}></Update>:<></>}
            </div></>
        //     <div className="card">
        //     {/* דיאלוג הוספת דירה */}
        //     <Dialog header="Add Apartment" visible={visibleAdd} modal onHide={() => setVisibleAdd(false)} footer={dialogFooter}>
        //       <Add setVisible={setVisibleAdd} setProducts={setProducts} />
        //     </Dialog>

        //     {/* דיאלוג עדכון דירה */}
        //     <Dialog header="Update Apartment" visible={visibleUpdate} modal onHide={() => setVisibleUpdate(false)} footer={dialogFooterUpdate}>
        //       <Update setVisible={setVisibleUpdate} setProducts={setProducts} apartmentId={selectedApartmentId} />
        //     </Dialog>

        //     {/* רשימת הדירות */}
        //     <DataView value={products} listTemplate={listTemplate} layout="list" header={header()} />
        //   </div>

    );
}

export default Advertising;