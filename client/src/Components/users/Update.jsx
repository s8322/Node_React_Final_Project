
// // // // import React, { useState, useEffect } from "react";
// // // // import { useForm, Controller } from "react-hook-form";
// // // // import axios from "axios";
// // // // import { InputText } from 'primereact/inputtext';
// // // // import { Checkbox } from 'primereact/checkbox';
// // // // import { Button } from 'primereact/button';
// // // // import { Dialog } from 'primereact/dialog';
// // // // import { classNames } from 'primereact/utils';
// // // // import { useSelector } from 'react-redux';
// // // // import ApartmentService from "./ApartmentService";
// // // // import { Dropdown } from 'primereact/dropdown';

// // // // const Update = ({ setVisible, setProducts, userId }) => {
// // // //   const { user, token } = useSelector((state) => state.token);
// // // //   const { control, handleSubmit, formState: { errors }, setValue } = useForm();
// // // //   const [showMessage, setShowMessage] = useState(false);
// // // //   const [options, setOptions] = useState("");

// // // //   useEffect(() => {
// // // //     const fetchuserData = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:8000/user/${apartmentId}`, {
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         });
// // // //         const apartment = res.data;
// // // //         Object.keys(apartment).forEach(key => {
// // // //           setValue(key, apartment[key]);
// // // //         });
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     };
// // // //     fetchApartmentData();
// // // //   }, [apartmentId, setValue, token]);

// // // //   const onSubmit = async (data) => {
// // // //     const option = [];
// // // //     if (data.view) option.push("נוף מרשים");
// // // //     if (data.sukkahBalcony) option.push("מרפסת סוכה");

// // // //     const updatedApartment = {
// // // //       user: user._id,
// // // //       address: {
// // // //         city: data.city,
// // // //         neighborhood: data.neighborhood,
// // // //         street: data.street,
// // // //         building: data.building,
// // // //       },
// // // //       floor: data.floor,
// // // //       price: data.price,
// // // //       description: data.description,
// // // //       img: data.img,
// // // //       size: data.size,
// // // //       numOfRooms: data.numOfRooms,
// // // //       airDirections: data.airDirections,
// // // //       options: option,
// // // //     };

// // // //     try {
// // // //       const res = await axios.put(`http://localhost:8000/apartment/`,apartmentId, updatedApartment, {
// // // //         headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
// // // //       });

// // // //       if (res.status === 200) {
// // // //         const fetchedProducts = await ApartmentService.getProducts();
// // // //         setProducts(fetchedProducts.slice(0, 12));
// // // //         setShowMessage(true);
// // // //         setVisible(false);
// // // //       }
// // // //     } catch (e) {
// // // //       console.error(e);
// // // //     }
// // // //   };

// // // //   const handleCheckboxChange = (value) => {
// // // //     setOptions((prevOptions) => {
// // // //       return prevOptions.includes(value) ?
// // // //         prevOptions.replace(value + ", ", "").replace(value, "") :
// // // //         prevOptions ? `${prevOptions}, ${value}` : value;
// // // //     });
// // // //   };

// // // //   const getFormErrorMessage = (name) => {
// // // //     return errors[name] && <small className="p-error">{errors[name].message}</small>;
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
// // // //         <div className="flex justify-content-center flex-column pt-6 px-3">
// // // //           <h5>Apartment Updated Successfully!</h5>
// // // //         </div>
// // // //       </Dialog>

// // // //       <div className="flex justify-content-center">
// // // //         <div className="card">
// // // //           <h5 className="text-center">Update Apartment</h5>
// // // //           <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
// // // //             {/* ... (שאר הקוד עבור הטפסים שמלאים, ללא שינוי) */}
// // // //             <Button type="submit" label="Update Apartment" className="mt-2" />
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Update;
// // // // import React, { useEffect, useState } from "react";
// // // // import { useForm, Controller } from "react-hook-form";
// // // // import axios from "axios";
// // // // import { InputText } from 'primereact/inputtext';
// // // // import { Checkbox } from 'primereact/checkbox';
// // // // import { Button } from 'primereact/button';
// // // // import { Dialog } from 'primereact/dialog';
// // // // import { classNames } from 'primereact/utils';
// // // // import { useSelector } from 'react-redux';
// // // // import ApartmentService from "./ApartmentService";
// // // // import { Dropdown } from 'primereact/dropdown';
// // // // const Update = ({ visible, setVisible, setProducts, apartment, getApartmentsDataById }) => {
// // // //   const { user, token } = useSelector((state) => state.token);
// // // //   const [showMessage, setShowMessage] = useState(false);
// // // //   const [options, setOptions] = useState("");
// // // //   const { control, handleSubmit, formState: { errors } } = useForm({
// // // //     defaultValues: {
// // // //       city: apartment?.address?.city || '',
// // // //       neighborhood: apartment?.address?.neighborhood || '',
// // // //       street: apartment?.address?.street || '',
// // // //       building: apartment?.address?.building || '',
// // // //       floor: apartment?.floor || '',
// // // //       price: apartment?.price || '',
// // // //       description: apartment?.description || '',
// // // //       img: apartment?.img || '',
// // // //       size: apartment?.size || '',
// // // //       numOfRooms: apartment?.numOfRooms || '',
// // // //       airDirections: apartment?.airDirections || null,
// // // //       view: false,
// // // //       sukkahBalcony: false,
// // // //     },
// // // //   });
// // // //   const onSubmit = async (data) => {
// // // //     console.log("llllllllllllllll",data);
// // // //     // console.log(data);
// // // //     const option = [];
// // // //     if (data.view)
// // // //       option.push("נוף מרשים")
// // // //     if (data.sukkahBalcony)
// // // //       option.push("מרפסת סוכה")
// // // //     const newApartment = {
// // // //       // _id:apartment._id,
// // // //       // user: user._id,
// // // //       address: { city: data.city, neighborhood: data.neighborhood, street: data.street, building: data.building },
// // // //       floor: data.floor,
// // // //       price: data.price,
// // // //       description: data.description,
// // // //       img: data.img,
// // // //       size: data.size,
// // // //       numOfRooms: data.numOfRooms,
// // // //       airDirections: data.airDirections,
// // // //       options: option

// // // //     };



// // // //     console.log("9999999999999999999999",newApartment);
// // // //     debugger
// // // //     try {
// // // //       const res = await axios.put('http://localhost:8000/apartment', newApartment, {
// // // //         headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
// // // //       });

// // // //       if (res.status === 201) {
// // // //         getApartmentsDataById()

// // // //         //  const fetchedProducts = await ApartmentService.getProducts();
// // // //         //   setProducts(fetchedProducts.slice(0, 12));
// // // //         setShowMessage(true);
// // // //         setVisible(false);
// // // //       }
// // // //     } catch (e) {
// // // //       console.error(e);
// // // //     }
// // // //   };

// // // //   const handleCheckboxChange = (value) => {
// // // //     setOptions((prevOptions) => {
// // // //       return prevOptions.includes(value) ?
// // // //         prevOptions.replace(value + ", ", "").replace(value, "") :
// // // //         prevOptions ? `${prevOptions}, ${value}` : value;
// // // //     });
// // // //   };

// // // //   const getFormErrorMessage = (name) => {
// // // //     return errors[name] && <small className="p-error">{errors[name].message}</small>;
// // // //   };
// // // //   useEffect(() => {
// // // //     console.log(apartment);
// // // //   })
// // // //   return (

// // // //     <div>
// // // //       <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
// // // //         <div className="flex justify-content-center flex-column pt-6 px-3">
// // // //           <h5>Apartment Added Successfully!</h5>
// // // //         </div>
// // // //       </Dialog>

// // // //       <Dialog visible={visible} onHide={() => setVisible(false)} position="top">

// // // //         <div className="flex justify-content-center">
// // // //           <div className="card">
// // // //             <h5 className="text-center">Add Apartment</h5>
// // // //             <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="city"
// // // //                     control={control}
// // // //                     rules={{ required: 'City is required.' }}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="text"
// // // //                         defaultValue={apartment.address.city}
// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="city" className={classNames({ 'p-error': errors.city })}>city*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('city')}
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="neighborhood"
// // // //                     control={control}
// // // //                     rules={{}}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="text"
// // // //                         defaultValue={apartment.address.neighborhood}

// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="neighborhood" className={classNames({ 'p-error': errors.neighborhood })}>neighborhood*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('neighborhood')}
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="street"
// // // //                     control={control}
// // // //                     rules={{ required: 'Street is required.' }}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="text"
// // // //                         defaultValue={apartment.address.street}

// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="street" className={classNames({ 'p-error': errors.street })}>street*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('street')}
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="building"
// // // //                     control={control}
// // // //                     rules={{ required: 'Building is required.' }}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="number"
// // // //                         defaultValue={apartment.address.building}

// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="building" className={classNames({ 'p-error': errors.building })}>v*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('building')}
// // // //               </div>
// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="floor"
// // // //                     control={control}
// // // //                     rules={{ required: 'Floor is required.' }}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="text"
// // // //                         defaultValue={apartment.floor}

// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="floor" className={classNames({ 'p-error': errors.floor })}>Floor*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('floor')}
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="price"
// // // //                     control={control}
// // // //                     rules={{ required: 'Price is required.' }}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="number"
// // // //                         defaultValue={apartment.price}

// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="price" className={classNames({ 'p-error': errors.price })}>Price*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('price')}
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="description"
// // // //                     control={control}
// // // //                     render={({ field }) => (
// // // //                       <InputText id={field.name}
// // // //                         defaultValue={apartment.description}
// // // //                         {...field} />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="description">Description</label>
// // // //                 </span>
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="img"
// // // //                     control={control}
// // // //                     render={({ field }) => (
// // // //                       <InputText id={field.name}
// // // //                         defaultValue={apartment.img}
// // // //                         {...field} />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="img">Image URL</label>
// // // //                 </span>
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="size"
// // // //                     control={control}
// // // //                     rules={{ required: 'Size is required.' }}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="number"
// // // //                         defaultValue={apartment.size}

// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="size" className={classNames({ 'p-error': errors.size })}>Size (sqm)*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('size')}
// // // //               </div>

// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="numOfRooms"
// // // //                     control={control}
// // // //                     rules={{ required: 'Number of Rooms is required.' }}
// // // //                     render={({ field, fieldState }) => (
// // // //                       <InputText
// // // //                         id={field.name}
// // // //                         type="number"
// // // //                         defaultValue={apartment.numOfRooms}

// // // //                         {...field}
// // // //                         className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="numOfRooms" className={classNames({ 'p-error': errors.numOfRooms })}>Number of Rooms*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('numOfRooms')}
// // // //               </div>


// // // //               <div className="field">
// // // //                 <span className="p-float-label">
// // // //                   <Controller
// // // //                     name="airDirections"
// // // //                     control={control}
// // // //                     rules={{ required: 'airDirections is required.' }}
// // // //                     render={({ field, fieldState }) => (

// // // //                       <Dropdown id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                         defaultValue={apartment.airDirections}
// // // //                         {...field} options={[
// // // //                           { label: 'Select air direction', value: null },
// // // //                           { label: '1', value: 1 },
// // // //                           { label: '2', value: 2 },
// // // //                           { label: '3', value: 3 },
// // // //                           { label: '4', value: 4 }
// // // //                         ]} />
// // // //                       // <InputText
// // // //                       //   id={field.name}
// // // //                       //   type="number"
// // // //                       //   {...field}
// // // //                       //   className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                       // />
// // // //                     )}
// // // //                   />
// // // //                   <label htmlFor="airDirections " className={classNames({ 'p-error': errors.airDirections })}>air direction*</label>
// // // //                 </span>
// // // //                 {getFormErrorMessage('airDirections')}
// // // //               </div>




// // // //               <div className="field-checkbox">
// // // //                 <Controller name="view" control={control} render={({ field }) => (
// // // //                   <Checkbox
// // // //                     inputId={field.name}
// // // //                     onChange={(e) => {
// // // //                       field.onChange(e.checked);
// // // //                       handleCheckboxChange(" ,נוף");
// // // //                     }}
// // // //                     checked={field.value}
// // // //                     defaultValue={apartment.view}
// // // //                   />
// // // //                 )} />
// // // //                 <label htmlFor="view">נוף</label>
// // // //               </div>

// // // //               <div className="field-checkbox">
// // // //                 <Controller name="sukkahBalcony" control={control} render={({ field }) => (
// // // //                   <Checkbox
// // // //                     inputId={field.name}
// // // //                     onChange={(e) => {
// // // //                       field.onChange(e.checked);
// // // //                       handleCheckboxChange(" ,מרפסת סוכה");
// // // //                     }}
// // // //                     checked={field.value}
// // // //                   />
// // // //                 )} />
// // // //                 <label htmlFor="sukkahBalcony">מרפסת סוכה</label>
// // // //               </div>

// // // //               <Button type="submit" label="Add Apartment" className="mt-2" />
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </Dialog>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Update;


// // // import React, { useEffect, useState } from "react";
// // // import { useForm, Controller } from "react-hook-form";
// // // import axios from "axios";
// // // import { InputText } from "primereact/inputtext";
// // // import { Checkbox } from "primereact/checkbox";
// // // import { Button } from "primereact/button";
// // // import { Dialog } from "primereact/dialog";
// // // import { classNames } from "primereact/utils";
// // // import { useSelector } from "react-redux";
// // // import { Dropdown } from "primereact/dropdown";

// // // const Update = ({ visible, setVisible, apartment, getApartmentsDataById }) => {
// // //   const { token } = useSelector((state) => state.token);
// // //   const [showMessage, setShowMessage] = useState(false);

// // //   const { control, handleSubmit, formState: { errors } } = useForm({
// // //     defaultValues: {
// // //       city: apartment?.address?.city || "",
// // //       neighborhood: apartment?.address?.neighborhood || "",
// // //       street: apartment?.address?.street || "",
// // //       building: apartment?.address?.building || "",
// // //       floor: apartment?.floor || "",
// // //       price: apartment?.price || "",
// // //       description: apartment?.description || "",
// // //       img: apartment?.img || "",
// // //       size: apartment?.size || "",
// // //       numOfRooms: apartment?.numOfRooms || "",
// // //       airDirections: apartment?.airDirections || null,
// // //       view: apartment?.options?.includes("נוף מרשים") || false,
// // //       sukkahBalcony: apartment?.options?.includes("מרפסת סוכה") || false,
// // //     },
// // //   });
// // //   const onSubmit = async (data) => {
// // //     const options = [];
// // //     if (data.view) options.push("נוף מרשים");
// // //     if (data.sukkahBalcony) options.push("מרפסת סוכה");

// // //     // בניית אובייקט הדירה לעדכון
// // //     const updatedApartment = {
// // //       _id: apartment._id, // מזהה הדירה
// // //       address: {
// // //         _id: apartment.address._id, // מזהה הכתובת
// // //         city: data.city,
// // //         neighborhood: data.neighborhood,
// // //         street: data.street,
// // //         building: data.building,
// // //       },
// // //       floor: data.floor,
// // //       price: data.price,
// // //       description: data.description,
// // //       img: data.img,
// // //       size: data.size,
// // //       numOfRooms: data.numOfRooms,
// // //       airDirections: data.airDirections,
// // //       options: options,
// // //     };

// // //     try {
// // //       const res = await axios.put("http://localhost:8000/apartment", updatedApartment, {
// // //         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
// // //       });

// // //       if (res.status === 201) {
// // //         getApartmentsDataById();
// // //         setShowMessage(true);
// // //         setVisible(false);
// // //       }
// // //     } catch (e) {
// // //       console.error("Failed to update apartment:", e);
// // //     }
// // //   };

// // //   const getFormErrorMessage = (name) => {
// // //     return errors[name] && <small className="p-error">{errors[name].message}</small>;
// // //   };

// // //   return (
// // //     <div>
// // //       <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
// // //         <div className="flex justify-content-center flex-column pt-6 px-3">
// // //           <h5>Apartment Updated Successfully!</h5>
// // //         </div>
// // //       </Dialog>

// // //       <Dialog visible={visible} onHide={() => setVisible(false)} position="top">
// // //         <div className="flex justify-content-center">
// // //           <div className="card">
// // //             <h5 className="text-center">Update Apartment</h5>
// // //             <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="city"
// // //                     control={control}
// // //                     rules={{ required: "City is required." }}
// // //                     render={({ field, fieldState }) => (
// // //                       <InputText
// // //                         id={field.name}
// // //                         {...field}
// // //                         className={classNames({ "p-invalid": fieldState.invalid })}
// // //                       />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="city" className={classNames({ "p-error": errors.city })}>
// // //                     City*
// // //                   </label>
// // //                 </span>
// // //                 {getFormErrorMessage("city")}
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="neighborhood"
// // //                     control={control}
// // //                     render={({ field }) => (
// // //                       <InputText id={field.name} {...field} />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="neighborhood">Neighborhood</label>
// // //                 </span>
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="street"
// // //                     control={control}
// // //                     rules={{ required: "Street is required." }}
// // //                     render={({ field, fieldState }) => (
// // //                       <InputText
// // //                         id={field.name}
// // //                         {...field}
// // //                         className={classNames({ "p-invalid": fieldState.invalid })}
// // //                       />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="street" className={classNames({ "p-error": errors.street })}>
// // //                     Street*
// // //                   </label>
// // //                 </span>
// // //                 {getFormErrorMessage("street")}
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="building"
// // //                     control={control}
// // //                     rules={{ required: "Building is required." }}
// // //                     render={({ field, fieldState }) => (
// // //                       <InputText
// // //                         id={field.name}
// // //                         type="number"
// // //                         {...field}
// // //                         className={classNames({ "p-invalid": fieldState.invalid })}
// // //                       />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="building" className={classNames({ "p-error": errors.building })}>
// // //                     Building*
// // //                   </label>
// // //                 </span>
// // //                 {getFormErrorMessage("building")}
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="floor"
// // //                     control={control}
// // //                     rules={{ required: "Floor is required." }}
// // //                     render={({ field, fieldState }) => (
// // //                       <InputText
// // //                         id={field.name}
// // //                         {...field}
// // //                         className={classNames({ "p-invalid": fieldState.invalid })}
// // //                       />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="floor" className={classNames({ "p-error": errors.floor })}>
// // //                     Floor*
// // //                   </label>
// // //                 </span>
// // //                 {getFormErrorMessage("floor")}
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="price"
// // //                     control={control}
// // //                     rules={{ required: "Price is required." }}
// // //                     render={({ field, fieldState }) => (
// // //                       <InputText
// // //                         id={field.name}
// // //                         type="number"
// // //                         {...field}
// // //                         className={classNames({ "p-invalid": fieldState.invalid })}
// // //                       />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="price" className={classNames({ "p-error": errors.price })}>
// // //                     Price*
// // //                   </label>
// // //                 </span>
// // //                 {getFormErrorMessage("price")}
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="description"
// // //                     control={control}
// // //                     render={({ field }) => (
// // //                       <InputText id={field.name} {...field} />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="description">Description</label>
// // //                 </span>
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="img"
// // //                     control={control}
// // //                     render={({ field }) => (
// // //                       <InputText id={field.name} {...field} />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="img">Image URL</label>
// // //                 </span>
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="size"
// // //                     control={control}
// // //                     rules={{ required: "Size is required." }}
// // //                     render={({ field, fieldState }) => (
// // //                       <InputText
// // //                         id={field.name}
// // //                         type="number"
// // //                         {...field}
// // //                         className={classNames({ "p-invalid": fieldState.invalid })}
// // //                       />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="size" className={classNames({ "p-error": errors.size })}>
// // //                     Size*
// // //                   </label>
// // //                 </span>
// // //                 {getFormErrorMessage("size")}
// // //               </div>

// // //               <div className="field">
// // //                 <span className="p-float-label">
// // //                   <Controller
// // //                     name="numOfRooms"
// // //                     control={control}
// // //                     rules={{ required: "Number of Rooms is required." }}
// // //                     render={({ field, fieldState }) => (
// // //                       <InputText
// // //                         id={field.name}
// // //                         type="number"
// // //                         {...field}
// // //                         className={classNames({ "p-invalid": fieldState.invalid })}
// // //                       />
// // //                     )}
// // //                   />
// // //                   <label htmlFor="numOfRooms" className={classNames({ "p-error": errors.numOfRooms })}>
// // //                     Number of Rooms*
// // //                   </label>
// // //                 </span>
// // //                 {getFormErrorMessage("numOfRooms")}
// // //               </div>

// // //               <div className="field-checkbox">
// // //                 <Controller
// // //                   name="view"
// // //                   control={control}
// // //                   render={({ field }) => (
// // //                     <Checkbox
// // //                       inputId={field.name}
// // //                       checked={field.value}
// // //                       onChange={(e) => field.onChange(e.checked)}
// // //                     />
// // //                   )}
// // //                 />
// // //                 <label htmlFor="view">Scenic View</label>
// // //               </div>

// // //               <div className="field-checkbox">
// // //                 <Controller
// // //                   name="sukkahBalcony"
// // //                   control={control}
// // //                   render={({ field }) => (
// // //                     <Checkbox
// // //                       inputId={field.name}
// // //                       checked={field.value}
// // //                       onChange={(e) => field.onChange(e.checked)}
// // //                     />
// // //                   )}
// // //                 />
// // //                 <label htmlFor="sukkahBalcony">Sukkah Balcony</label>
// // //               </div>

// // //               <Button type="submit" label="Update Apartment" className="mt-2" />
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // };

// // // export default Update;
// // import React, { useState, useEffect } from "react";
// // import { useForm, Controller } from "react-hook-form";
// // import axios from "axios";
// // import { InputText } from "primereact/inputtext";
// // import { Button } from "primereact/button";
// // import { Dialog } from "primereact/dialog";
// // import { classNames } from "primereact/utils";
// // import { useSelector } from "react-redux";

// // const Update = () => {
// //   const { user, token } = useSelector((state) => state.token); // קבלת המשתמש והטוקן מה-Redux
// //   const [showMessage, setShowMessage] = useState(false);
// //   const [initialData, setInitialData] = useState(null);

// //   const { control, handleSubmit, formState: { errors }, setValue } = useForm();

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:8000/user/${user._id}`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         const userData = res.data;

// //         setInitialData(userData);
// //         Object.keys(userData).forEach((key) => {
// //           if (key !== "address") {
// //             setValue(key, userData[key]);
// //           }
// //         });
// //       } catch (error) {
// //         console.error("Failed to fetch user data:", error);
// //       }
// //     };

// //     fetchUserData();
// //   }, [user._id, token, setValue]);

// //   const onSubmit = async (data) => {
// //     const updatedUser = {
// //       name: data.name,
// //       email: data.email,
// //       phone: data.phone,
// //       password: data.password,
// //       roles: data.roles,
// //     };

// //     try {
// //       const res = await axios.put(`http://localhost:8000/user/${user._id}`, updatedUser, {
// //         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
// //       });

// //       if (res.status === 200) {
// //         setShowMessage(true);
// //       }
// //     } catch (e) {
// //       console.error("Failed to update user:", e);
// //     }
// //   };

// //   const getFormErrorMessage = (name) => {
// //     return errors[name] && <small className="p-error">{errors[name].message}</small>;
// //   };

// //   if (!initialData) return <p>Loading...</p>;

// //   return (
// //     <div>
// //       <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
// //         <div className="flex justify-content-center flex-column pt-6 px-3">
// //           <h5>User Updated Successfully!</h5>
// //         </div>
// //       </Dialog>

// //       <div className="flex justify-content-center">
// //         <div className="card">
// //           <h5 className="text-center">Update User</h5>
// //           <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="name"
// //                   control={control}
// //                   render={({ field }) => (
// //                     <InputText id={field.name} {...field} />
// //                   )}
// //                 />
// //                 <label htmlFor="name">Name</label>
// //               </span>
// //             </div>

// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="email"
// //                   control={control}
// //                   rules={{ required: "Email is required." }}
// //                   render={({ field, fieldState }) => (
// //                     <InputText
// //                       id={field.name}
// //                       type="email"
// //                       {...field}
// //                       className={classNames({ "p-invalid": fieldState.invalid })}
// //                     />
// //                   )}
// //                 />
// //                 <label htmlFor="email" className={classNames({ "p-error": errors.email })}>
// //                   Email*
// //                 </label>
// //               </span>
// //               {getFormErrorMessage("email")}
// //             </div>

// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="phone"
// //                   control={control}
// //                   render={({ field }) => (
// //                     <InputText id={field.name} {...field} />
// //                   )}
// //                 />
// //                 <label htmlFor="phone">Phone</label>
// //               </span>
// //             </div>

// //             {/* <div className="field">
// //                             <label htmlFor="address">Address (Read-Only):</label>
// //                             <p>{initialData.address}</p>
// //                         </div> */}
// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="city"
// //                   control={control}
// //                   rules={{ required: "City is required." }}
// //                   render={({ field, fieldState }) => (
// //                     <InputText
// //                       id={field.name}
// //                       {...field}
// //                       className={classNames({ "p-invalid": fieldState.invalid })}
// //                     />
// //                   )}
// //                 />
// //                 <label htmlFor="city" className={classNames({ "p-error": errors.city })}>
// //                   City*
// //                 </label>
// //               </span>
// //               {getFormErrorMessage("city")}
// //             </div>

// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="neighborhood"
// //                   control={control}
// //                   render={({ field }) => (
// //                     <InputText id={field.name} {...field} />
// //                   )}
// //                 />
// //                 <label htmlFor="neighborhood">Neighborhood</label>
// //               </span>
// //             </div>

// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="street"
// //                   control={control}
// //                   rules={{ required: "Street is required." }}
// //                   render={({ field, fieldState }) => (
// //                     <InputText
// //                       id={field.name}
// //                       {...field}
// //                       className={classNames({ "p-invalid": fieldState.invalid })}
// //                     />
// //                   )}
// //                 />
// //                 <label htmlFor="street" className={classNames({ "p-error": errors.street })}>
// //                   Street*
// //                 </label>
// //               </span>
// //               {getFormErrorMessage("street")}
// //             </div>

// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="building"
// //                   control={control}
// //                   rules={{ required: "Building is required." }}
// //                   render={({ field, fieldState }) => (
// //                     <InputText
// //                       id={field.name}
// //                       type="number"
// //                       {...field}
// //                       className={classNames({ "p-invalid": fieldState.invalid })}
// //                     />
// //                   )}
// //                 />
// //                 <label htmlFor="building" className={classNames({ "p-error": errors.building })}>
// //                   Building*
// //                 </label>
// //               </span>
// //               {getFormErrorMessage("building")}
// //             </div>

// //             <div className="field">
// //               <span className="p-float-label">
// //                 <Controller
// //                   name="password"
// //                   control={control}
// //                   rules={{ required: "Password is required." }}
// //                   render={({ field, fieldState }) => (
// //                     <InputText
// //                       id={field.name}
// //                       type="password"
// //                       {...field}
// //                       className={classNames({ "p-invalid": fieldState.invalid })}
// //                     />
// //                   )}
// //                 />
// //                 <label htmlFor="password" className={classNames({ "p-error": errors.password })}>
// //                   Password*
// //                 </label>
// //               </span>
// //               {getFormErrorMessage("password")}
// //             </div>

// //             {user.roles === "Admin" && (
// //               <div className="field">
// //                 <span className="p-float-label">
// //                   <Controller
// //                     name="roles"
// //                     control={control}
// //                     render={({ field }) => (
// //                       <InputText id={field.name} {...field} />
// //                     )}
// //                   />
// //                   <label htmlFor="roles">Roles</label>
// //                 </span>
// //               </div>
// //             )}

// //             <Button type="submit" label="Update" className="mt-2" />
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Update;
// import React, { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { Dialog } from "primereact/dialog";
// import { classNames } from "primereact/utils";
// import { useSelector } from "react-redux";

// const UpdateUser = () => {
//     const { user, token } = useSelector((state) => state.token); // משתמש ו-Token מה-Redux
//     const [showMessage, setShowMessage] = useState(false);
//     const [initialData, setInitialData] = useState(null); // נתונים ראשוניים

//     const { control, handleSubmit, formState: { errors }, setValue } = useForm();

//     useEffect(() => {
//         // שליפת נתוני המשתמש
//         const fetchUserData = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/user/${user._id}`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 const userData = res.data;

//                 setInitialData(userData);
//                 Object.keys(userData).forEach((key) => {
//                     if (key !== "address") {
//                         setValue(key, userData[key]);
//                     }
//                 });
//             } catch (error) {
//                 console.error("Failed to fetch user data:", error);
//             }
//         };

//         fetchUserData();
//     }, [user._id, token, setValue]);

//     const onSubmit = async (data) => {
//         const updatedUser = {
//             name: data.name,
//             email: data.email,
//             phone: data.phone,
//             password: data.password,
//             // roles: user.roles === "Admin" ? data.roles : undefined, // roles רק אם המשתמש הוא Admin
//         };

//         try {
//             const res = await axios.put(`http://localhost:8000/user/${user._id}`, updatedUser, {
//                 headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//             });

//             if (res.status === 200) {
//                 setShowMessage(true);
//             }
//         } catch (e) {
//             console.error("Failed to update user:", e);
//         }
//     };

//     const getFormErrorMessage = (name) => {
//         return errors[name] && <small className="p-error">{errors[name].message}</small>;
//     };

//     if (!initialData) return <p>Loading...</p>;

//     return (
//         <div>
//             <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
//                 <div className="flex justify-content-center flex-column pt-6 px-3">
//                     <h5>User Updated Successfully!</h5>
//                 </div>
//             </Dialog>

//             <div className="flex justify-content-center">
//                 <div className="card">
//                     <h5 className="text-center">Update User</h5>
//                     <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller
//                                     name="name"
//                                     control={control}
//                                     render={({ field }) => (
//                                         <InputText id={field.name} {...field} />
//                                     )}
//                                 />
//                                 <label htmlFor="name">Name</label>
//                             </span>
//                         </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller
//                                     name="email"
//                                     control={control}
//                                     rules={{ required: "Email is required." }}
//                                     render={({ field, fieldState }) => (
//                                         <InputText
//                                             id={field.name}
//                                             type="email"
//                                             {...field}
//                                             className={classNames({ "p-invalid": fieldState.invalid })}
//                                         />
//                                     )}
//                                 />
//                                 <label htmlFor="email" className={classNames({ "p-error": errors.email })}>
//                                     Email*
//                                 </label>
//                             </span>
//                             {getFormErrorMessage("email")}
//                         </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller
//                                     name="phone"
//                                     control={control}
//                                     render={({ field }) => (
//                                         <InputText id={field.name} {...field} />
//                                     )}
//                                 />
//                                 <label htmlFor="phone">Phone</label>
//                             </span>
//                         </div>

//                         {/* <div className="field">
//                             <label htmlFor="address">Address (Read-Only):</label>
//                             <p>{initialData.address.city}, {initialData.address.street}, {initialData.address.building}</p>
//                         </div> */}
//  <div className="field">
//                 <span className="p-float-label">
//                   <Controller
//                     name="city"
//                     control={control}
//                     rules={{ required: "City is required." }}
//                     render={({ field, fieldState }) => (
//                       <InputText
//                         id={field.name}
//                         {...field}
//                         className={classNames({ "p-invalid": fieldState.invalid })}
//                       />
//                     )}
//                   />
//                   <label htmlFor="city" className={classNames({ "p-error": errors.city })}>
//                     City*
//                   </label>
//                 </span>
//                 {getFormErrorMessage("city")}
//               </div>

//               <div className="field">
//                 <span className="p-float-label">
//                   <Controller
//                     name="neighborhood"
//                     control={control}
//                     render={({ field }) => (
//                       <InputText id={field.name} {...field} />
//                     )}
//                   />
//                   <label htmlFor="neighborhood">Neighborhood</label>
//                 </span>
//               </div>

//               <div className="field">
//                 <span className="p-float-label">
//                   <Controller
//                     name="street"
//                     control={control}
//                     rules={{ required: "Street is required." }}
//                     render={({ field, fieldState }) => (
//                       <InputText
//                         id={field.name}
//                         {...field}
//                         className={classNames({ "p-invalid": fieldState.invalid })}
//                       />
//                     )}
//                   />
//                   <label htmlFor="street" className={classNames({ "p-error": errors.street })}>
//                     Street*
//                   </label>
//                 </span>
//                 {getFormErrorMessage("street")}
//               </div>

//               <div className="field">
//                 <span className="p-float-label">
//                   <Controller
//                     name="building"
//                     control={control}
//                     rules={{ required: "Building is required." }}
//                     render={({ field, fieldState }) => (
//                       <InputText
//                         id={field.name}
//                         type="number"
//                         {...field}
//                         className={classNames({ "p-invalid": fieldState.invalid })}
//                       />
//                     )}
//                   />
//                   <label htmlFor="building" className={classNames({ "p-error": errors.building })}>
//                     Building*
//                   </label>
//                 </span>
//                 {getFormErrorMessage("building")}
//               </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller
//                                     name="password"
//                                     control={control}
//                                     rules={{ required: "Password is required." }}
//                                     render={({ field, fieldState }) => (
//                                         <InputText
//                                             id={field.name}
//                                             type="password"
//                                             {...field}
//                                             className={classNames({ "p-invalid": fieldState.invalid })}
//                                         />
//                                     )}
//                                 />
//                                 <label htmlFor="password" className={classNames({ "p-error": errors.password })}>
//                                     Password*
//                                 </label>
//                             </span>
//                             {getFormErrorMessage("password")}
//                         </div>

//                         {/* {user.roles === "Admin" && (
//                             <div className="field">
//                                 <span className="p-float-label">
//                                     <Controller
//                                         name="roles"
//                                         control={control}
//                                         render={({ field }) => (
//                                             <InputText id={field.name} {...field} />
//                                         )}
//                                     />
//                                     <label htmlFor="roles">Roles</label>
//                                 </span>
//                             </div>
//                         )} */}

//                         <Button type="submit" label="Update" className="mt-2" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateUser;
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken ,setUser,setRoles} from "../../Redux/tokenSlice";

const Update = () => {
  const { user, token } = useSelector((state) => state.token); // משתמש ו-Token מה-Redux
  const [showMessage, setShowMessage] = useState(false);
  const [initialData, setInitialData] = useState(null); // נתונים ראשוניים
  const dispatch=useDispatch()

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.address?.name || "",
      email: user?.address?.email || "",
      phone: user?.address?.phone || "",
      neighborhood: user?.address?.neighborhood || "",
      street: user?.address?.street || "",
      building: user?.address?.building || ""
    },
  });

  // useEffect(() => {
  //     // שליפת נתוני המשתמש
  //     const fetchUserData = async () => {
  //         try {
  //             const res = await axios.get(`http://localhost:8000/user/${user._id}`, {
  //                 headers: { Authorization: `Bearer ${token}` },
  //             });
  //             const userData = res.data;

  //             setInitialData(userData);
  //             Object.keys(userData).forEach((key) => {
  //                 if (key !== "address") {
  //                     setValue(key, userData[key]);
  //                 }
  //             });
  //         } catch (error) {
  //             console.error("Failed to fetch user data:", error);
  //         }
  //     };

  //     fetchUserData();
  // }, [user._id, token, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    console.log("hdgshygvdha");
    const updatedUser = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      address: {
        // _id: user._id, // מזהה הכתובת
        city: data.city,
        neighborhood: data.neighborhood,
        street: data.street,
        building: data.building,
      },
      // roles: user.roles === "Admin" ? data.roles : undefined, // עדכון roles רק אם המשתמש הוא Admin
    };
    console.log("Updated User Data:", updatedUser);

    try {
      const res = await axios.put(`http://localhost:8000/user`, updatedUser, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        // getApartmentsDataById();
        setShowMessage(true);
        dispatch(setUser(data))
        console.log(data);

        // setVisible(false);

      }
    } catch (e) {
      console.error("Failed to update user:", e);
    }
  };

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>;
  };

  // if (!initialData) return <p>Loading...</p>;

  return (
    <div>
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <h5>User Updated Successfully!</h5>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Update User</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="name"
                  control={control}
                  defaultValue={initialData?.name || ""}
                  rules={{ required: "Name is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="name" className={classNames({ "p-error": errors.name })}>
                  Name*
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="email"
                  control={control}
                  defaultValue={initialData?.email || ""}
                  rules={{ required: "Email is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="email"
                      {...field}
                      className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="email" className={classNames({ "p-error": errors.email })}>
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={initialData?.phone || ""}
                  rules={{ required: "Phone is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="phone" className={classNames({ "p-error": errors.phone })}>
                  Phone*
                </label>
              </span>
              {getFormErrorMessage("phone")}
            </div>

            <div className="field">
                            <span className="p-float-label">
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Password is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name}
                                            type="password"
                                            {...field}
                                            className={classNames({ "p-invalid": fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="password" className={classNames({ "p-error": errors.password })}>
                                    Password*
                                </label>
                            </span>
                            {getFormErrorMessage("password")}
                        </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="city"
                  control={control}
                  defaultValue={initialData?.address?.city || ""}
                  rules={{ required: "City is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="city" className={classNames({ "p-error": errors.city })}>
                  City*
                </label>
              </span>
              {getFormErrorMessage("city")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="neighborhood"
                  control={control}
                  defaultValue={initialData?.address?.neighborhood || ""}
                  render={({ field }) => (
                    <InputText id={field.name} {...field} />
                  )}
                />
                <label htmlFor="neighborhood">Neighborhood</label>
              </span>
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="street"
                  control={control}
                  defaultValue={initialData?.address?.street || ""}
                  rules={{ required: "Street is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="street" className={classNames({ "p-error": errors.street })}>
                  Street*
                </label>
              </span>
              {getFormErrorMessage("street")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="building"
                  control={control}
                  defaultValue={initialData?.address?.building || ""}
                  rules={{ required: "Building is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="number"
                      {...field}
                      className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="building" className={classNames({ "p-error": errors.building })}>
                  Building*
                </label>
              </span>
              {getFormErrorMessage("building")}
            </div>

            {/* {user.roles === "Admin" && (
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller
                                        name="roles"
                                        control={control}
                                        defaultValue={initialData?.roles || ""}
                                        rules={{ required: "Role is required." }}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                id={field.name}
                                                {...field}
                                                className={classNames({ "p-invalid": fieldState.invalid })}
                                            />
                                        )}
                                    />
                                    <label htmlFor="roles" className={classNames({ "p-error": errors.roles })}>
                                        Roles*
                                    </label>
                                </span>
                                {getFormErrorMessage("roles")}
                            </div>
                        )} */}

            <Button type="submit" label="Update" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;