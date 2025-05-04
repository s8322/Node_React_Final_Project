// // // // // import React, { useRef } from "react";
// // // // // import axios from "axios"
// // // // // import { InputText } from 'primereact/inputtext'
// // // // // import { Dialog } from 'primereact/dialog';
// // // // // import { Button } from 'primereact/button';
// // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // import ApartmentService from "./ApartmentService";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const Add = (props) => {
// // // // //     // const userRef = useRef("")
// // // // //         const {user} = useSelector((state) => state.token);
// // // // //         const {token} = useSelector((state) => state.token);
// // // // //         const {roles} = useSelector((state) => state.token);

// // // // //     const addressRef = useRef("")
// // // // //     const floorRef = useRef("")
// // // // //     const priceRef = useRef("")
// // // // //     const descriptionRef = useRef("")
// // // // //     const imgRef = useRef("")
// // // // //     const sizeRef = useRef("")
// // // // //     const numOfRoomsRef = useRef("")
// // // // //     const airDirectionsRef = useRef("")
// // // // //     const optionsRef = useRef("") 

// // // // //     const Add= async () => {

// // // // //         const newApartment = {
// // // // //             user: user,
// // // // //             address: addressRef.current.value,
// // // // //             floor: floorRef.current.value,
// // // // //             price: priceRef.current.value,
// // // // //             description: descriptionRef.current.value,
// // // // //             img: imgRef.current.value,
// // // // //             size: sizeRef.current.value,
// // // // //             numOfRooms: numOfRoomsRef.current.value,
// // // // //             airDirections: airDirectionsRef.current.value,
// // // // //             options: optionsRef.current.value
// // // // //         }
// // // // //         try {
// // // // //             const res = await axios.post('http://localhost:8000/apartment', newApartment,
// // // // //                 {headers:{Authorization :`Bearer ${token}`}}
// // // // //             )
// // // // //             if (res.status === 201) {
// // // // //                 await ApartmentService.getProducts().then((data) => props.setProducts(data.slice(0, 12)))
// // // // //             }
// // // // //         }
// // // // //         catch (e) {
// // // // //             console.error(e)
// // // // //         }
// // // // //     }

// // // // //     return (
// // // // //         <div>


// // // // //         </div>
// // // // //     )
// // // // // }

// // // // // export default Add
// // // // import React, { useState } from "react";
// // // // import { useForm } from "react-hook-form"; // Import react-hook-form
// // // // import axios from "axios";
// // // // import { InputText } from 'primereact/inputtext';
// // // // import { Checkbox } from 'primereact/checkbox';
// // // // import { Button } from 'primereact/button';
// // // // import ApartmentService from "./ApartmentService";
// // // // import { useEffect } from 'react';
// // // // import {  Controller } from 'react-hook-form';
// // // // import { Dropdown } from 'primereact/dropdown';
// // // // import { Calendar } from 'primereact/calendar';
// // // // import { Password } from 'primereact/password';
// // // // import { Dialog } from 'primereact/dialog';
// // // // import { Divider } from 'primereact/divider';
// // // // import { classNames } from 'primereact/utils';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { setToken, logOut } from '../../redux/tokenSlice'
// // // // import './FromReg.css';
// // // // import './FromReg.css';


// // // // const Add = ({ setVisible, setProducts }) => {
// // // //     const { user, token } = useSelector((state) => state.token);
// // // //     const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize react-hook-form
// // // //  const [floor,setFloor]=useState()


// // // //     const onSubmit = async (data) => {
// // // //         const newApartment = {
// // // //             user: user,
// // // //             ...data, // Spread the form data
// // // //         };
// // // //         try {
// // // //             const res = await axios.post('http://localhost:8000/apartment', newApartment, {
// // // //                 headers: { "Authorization": `Bearer ${token}`
// // // //             ,'Content-Type':'aplication/json' }
// // // //             });
// // // //             if (res.status === 201) {
// // // //                 const fetchedProducts = await ApartmentService.getProducts();
// // // //                 setProducts(fetchedProducts.slice(0, 12));
// // // //                 setVisible(false); // Close the form after successful submission
// // // //             }
// // // //         } catch (e) {
// // // //             console.error(e);
// // // //         }
// // // //     };
// // // //     const navigate = useNavigate();
// // // //     const dispatch = useDispatch();
// // // //     const [showMessage, setShowMessage] = useState(false);
// // // //     const [formData, setFormData] = useState({});
// // // //     const accesstoken = useSelector((state) => state.token.token)

// // // //     const [defaultValues, setDefaultValues] = useState({
// // // //         firstName: '',
// // // //         lastName: '',
// // // //         userName: '',
// // // //         numberID: '',
// // // //         phone: '',
// // // //         email: '',
// // // //         area: '',
// // // //         password: '',
// // // //         dateOfBirth: null,
// // // //         accept: false
// // // //     })

// // // //     const onSubmit = async (data) => {
// // // //         debugger
// // // //         if ((new Date() - new Date(defaultValues.dateOfBirth)) > 70 * 31536000000 || (new Date() - new Date(defaultValues.dateOfBirth)) < 18 * 31536000000) {//מציג את 1/1000 השניה בשנה
// // // //             alert("The age is not appropriate, for a teacher the required age is between 18-70")
// // // //             return
// // // //         }


// // // //         try {
// // // //             console.log(defaultValues);

// // // //             const res = await axios({
// // // //                 method: 'post',
// // // //                 url: 'http://localhost:7000/auth/registerS',
// // // //                 headers: {},

// // // //                 data: {
// // // //                     firstName: defaultValues.firstName,
// // // //                     lastName: defaultValues.lastName,
// // // //                     userName: defaultValues.userName,
// // // //                     numberID: defaultValues.numberID,
// // // //                     phone: defaultValues.phone,
// // // //                     email: defaultValues.email,
// // // //                     password: defaultValues.password,
// // // //                     dateOfBirth: defaultValues.dateOfBirth.toISOString()
// // // //                 }
// // // //             });

// // // //             if (res.status === 200) {
// // // //                 setFormData(data);
// // // //                 setShowMessage(true);


// // // //                 reset();

// // // //             }
// // // //             else {

// // // //             }
// // // //         } catch (e) {


// // // //             const errorMessage = e.response && e.response.data && e.response.data.message
// // // //                 ? e.response.data.message
// // // //                 : "An error occurred, please try again.";
// // // //             alert(errorMessage);

// // // //             console.log("here");
// // // //             console.error(e);
// // // //             return e.status;


// // // //         }
// // // //     }

// // // //     const OK = async () => {
// // // //         setShowMessage(false);

// // // //         try {
// // // //             const res = await axios({
// // // //                 method: 'post',
// // // //                 url: 'http://localhost:7000/auth/login',
// // // //                 headers: {},
// // // //                 data: {
// // // //                     userName: defaultValues.userName,
// // // //                     password: defaultValues.password
// // // //                 }
// // // //             });
// // // //             if (res.status === 200) {
// // // //                 dispatch(setToken(res.data.accessToken))
// // // //                 navigate('/Student/SHome');
// // // //             }


// // // //         } catch (e) {
// // // //             console.error(e);
// // // //             alert("Unauthorized user")

// // // //         }
// // // //     }





// // // //     const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });



// // // //     const getFormErrorMessage = (name) => {
// // // //         return errors[name] && <small className="p-error">{errors[name].message}</small>
// // // //     };

// // // //     const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={OK} /></div>;
// // // //     const passwordHeader = <h6>Pick a password</h6>;
// // // //     const passwordFooter = (
// // // //         <React.Fragment>
// // // //             <Divider />
// // // //             <p className="mt-2">Suggestions</p>
// // // //             <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
// // // //                 <li>At least one lowercase</li>
// // // //                 <li>At least one uppercase</li>
// // // //                 <li>At least one numeric</li>
// // // //                 <li>Minimum 8 characters</li>
// // // //             </ul>
// // // //         </React.Fragment>
// // // //     );

// // // //     return (
// // // //         <div className="form-demo">

// // // //         <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '100vw' }}>
// // // //             <div className="flex justify-content-center flex-column pt-6 px-3">
// // // //                 <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
// // // //                 <h5>Registration Successful!</h5>
// // // //                 <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
// // // //                     Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
// // // //                 </p>
// // // //             </div>
// // // //         </Dialog>

// // // //         <Dialog visible={props.visibleS} style={{ width: '28vw' }} onHide={() => { if (!props.visibleS) return; props.setVisibleS(false); }}>

// // // //             <div className="flex justify-content-center">
// // // //                 <div className="card">
// // // //                     <h5 className="text-center">Student Register</h5>
// // // //                     <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">


// // // //                         <div className="field">
// // // //                             <span className="p-float-label" >
// // // //                                 <Controller name="firstname" control={control} rules={{ required: 'firstname is required.' }} render={({ field, fieldState }) => (
// // // //                                     <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, firstName: e.target.value })))}
// // // //                                     />
// // // //                                 )} />
// // // //                                 <label htmlFor="firstname" className={classNames({ 'p-error': errors.name })}>firstname*</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('firstname')}
// // // //                         </div>

// // // //                         <div className="field">
// // // //                             <span className="p-float-label" >
// // // //                                 <Controller name="lastname" control={control} rules={{ required: 'lastname is required.' }} render={({ field, fieldState }) => (
// // // //                                     <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, lastName: e.target.value })))}
// // // //                                     />
// // // //                                 )} />
// // // //                                 <label htmlFor="lastname" className={classNames({ 'p-error': errors.name })}>lastname*</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('lastname')}
// // // //                         </div>

// // // //                         <div className="field">
// // // //                             <span className="p-float-label" >
// // // //                                 <Controller name="username" control={control} rules={{ required: 'username is required.' }} render={({ field, fieldState }) => (
// // // //                                     <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, userName: e.target.value })))}
// // // //                                     />
// // // //                                 )} />
// // // //                                 <label htmlFor="username" className={classNames({ 'p-error': errors.name })}>username*</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('username')}
// // // //                         </div>

// // // //                         <div className="field">
// // // //                             <span className="p-float-label" >
// // // //                                 <Controller name="numberID" control={control} rules={{ required: 'numberID is required.' }} render={({ field, fieldState }) => (
// // // //                                     <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, numberID: e.target.value })))}
// // // //                                     />
// // // //                                 )} />
// // // //                                 <label htmlFor="numberID" className={classNames({ 'p-error': errors.name })}>numberID*</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('numberID')}
// // // //                         </div>



// // // //                         <div className="field">
// // // //                             <span className="p-float-label" >
// // // //                                 <Controller name="phone" control={control} rules={{ required: 'phone is required.' }} render={({ field, fieldState }) => (
// // // //                                     <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, phone: e.target.value })))}
// // // //                                     />
// // // //                                 )} />
// // // //                                 <label htmlFor="phone" className={classNames({ 'p-error': errors.name })}>phone*</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('phone')}
// // // //                         </div>




// // // //                         <div className="field">
// // // //                             <span className="p-float-label p-input-icon-right " >

// // // //                                 <Controller name="email" control={control}
// // // //                                     rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } }}
// // // //                                     render={({ field, fieldState }) => (
// // // //                                         <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                                             onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, email: e.target.value })))}
// // // //                                         />
// // // //                                     )} />
// // // //                                 <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('email')}
// // // //                         </div>

// // // //                         <div className="field">
// // // //                             <span className="p-float-label"  >
// // // //                                 <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
// // // //                                     <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })}
// // // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, password: e.target.value })))}
// // // //                                         header={passwordHeader}
// // // //                                         footer={passwordFooter}
// // // //                                     />
// // // //                                 )} />
// // // //                                 <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('password')}
// // // //                         </div>


// // // //                         <div className="field">
// // // //                             <span className="p-float-label" dir='ltr'>
// // // //                                 <Controller
// // // //                                     name="dateOfBirth" // Field name
// // // //                                     control={control}
// // // //                                     rules={{ required: 'dateOfBirth is required.' }} // Required validation
// // // //                                     render={({ field, fieldState }) => (
// // // //                                         <>
// // // //                                             <Calendar
// // // //                                                 id={field.name}
// // // //                                                 value={field.value}
// // // //                                                 onChange={(e) => {
// // // //                                                     field.onChange(e.value); // עדכון השדה
// // // //                                                     setDefaultValues(prevValues => ({ ...prevValues, dateOfBirth: e.value })); // עדכון defaultValues
// // // //                                                 }}
// // // //                                                 dateFormat="yy-mm-dd"
// // // //                                                 mask="9999-99-99"
// // // //                                                 showIcon
// // // //                                                 className={classNames({ 'p-invalid': fieldState.invalid })} // החלת מחלקה עבור מצב לא תקין
// // // //                                             />
// // // //                                         </>
// // // //                                     )}
// // // //                                 />
// // // //                                 <label htmlFor="dateOfBirth" className={classNames({ 'p-error': !!errors.dateOfBirth })}>*Date of Birth</label>
// // // //                             </span>
// // // //                             {getFormErrorMessage('dateOfBirth')} {/* Ensure this reflects the correct field */}
// // // //                         </div>


// // // //                         <div className="field">


// // // //                         </div>
// // // //                         <div className="field-checkbox" dir='ltr' >
// // // //                             <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
// // // //                                 <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames({ 'p-invalid': fieldState.invalid })} />
// // // //                             )} />
// // // //                             <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>*I agree to the terms and conditions</label>
// // // //                             <a
// // // //                                 href="/Auth/terms"
// // // //                                 target="_blank"
// // // //                                 rel="noopener noreferrer"
// // // //                                 style={{ textDecoration: 'underline', color: '#007bff', display: 'block', marginTop: '4px' }}
// // // //                             >
// // // //                                 Website Terms and Conditions
// // // //                             </a>

// // // //                         </div>

// // // //                         <Button type="submit" label="Submit" className="mt-2" />
// // // //                     </form>
// // // //                 </div>
// // // //             </div>
// // // //         </Dialog>
// // // //     </div>
// // // //         // <form onSubmit={handleSubmit(onSubmit)}>
// // // //         //     <div className="p-field">
// // // //         //         <label htmlFor="address">Address</label>
// // // //         //         <InputText id="address" {...register("address", { required: true })} />
// // // //         //         {errors.address && <small className="p-error">Address is required.</small>}
// // // //         //     </div>
// // // //         //     {/* <div className="p-field">
// // // //         //         <label htmlFor="floor">Floor</label>
// // // //         //         <InputText id="floor" type="number" {...register("floor", { required: true }), onChange={(e) => { setPassword(e.target.value) }} } />
// // // //         //         {errors.floor && <small className="p-error">Floor is required.</small>}
// // // //         //     </div> */}
// // // //         //     <div className="p-field">
// // // //         //         <label htmlFor="price">Price</label>
// // // //         //         <InputText id="price" type="number" {...register("price", { required: true })} />
// // // //         //         {errors.price && <small className="p-error">Price is required.</small>}
// // // //         //     </div>
// // // //         //     <div className="p-field">
// // // //         //         <label htmlFor="description">Description</label>
// // // //         //         <InputText id="description" {...register("description")} />
// // // //         //     </div>
// // // //         //     <div className="p-field">
// // // //         //         <label htmlFor="img">Image URL</label>
// // // //         //         <InputText id="img" {...register("img")} />
// // // //         //     </div>
// // // //         //     <div className="p-field">
// // // //         //         <label htmlFor="size">Size (sqm)</label>
// // // //         //         <InputText id="size" type="number" {...register("size", { required: true })} />
// // // //         //         {errors.size && <small className="p-error">Size is required.</small>}
// // // //         //     </div>
// // // //         //     <div className="p-field">
// // // //         //         <label htmlFor="numOfRooms">Number of Rooms</label>
// // // //         //         <InputText id="numOfRooms" type="number" {...register("numOfRooms", { required: true })} />
// // // //         //         {errors.numOfRooms && <small className="p-error">Number of Rooms is required.</small>}
// // // //         //     </div>
// // // //         //     <div className="p-field-checkbox">
// // // //         //         <Checkbox inputRef={register("isAvailable")} id="isAvailable" />
// // // //         //         <label htmlFor="isAvailable">Available</label>
// // // //         //     </div>
// // // //         //     <Button type="submit" label="Add Apartment" onClick={onSubmit}/>
// // // //         // </form>
// // // //     );
// // // // };

// // // // export default Add;
// // // import React, { useState } from "react";
// // // import { useForm, Controller } from "react-hook-form";
// // // import axios from "axios";
// // // import { InputText } from 'primereact/inputtext';
// // // import { Checkbox } from 'primereact/checkbox';
// // // import { Button } from 'primereact/button';
// // // import { Dialog } from 'primereact/dialog';
// // // import { classNames } from 'primereact/utils';
// // // import { useSelector } from 'react-redux';
// // // import ApartmentService from "./ApartmentService";

// // // const Add = ({ setVisible, setProducts }) => {
// // //     const { user, token } = useSelector((state) => state.token);
// // //     const { register, handleSubmit, formState: { errors }, control } = useForm();

// // //     const [showMessage, setShowMessage] = useState(false);
// // //     const [defaultValues, setDefaultValues] = useState({
// // //         user: '',
// // //         address: '',
// // //         floor: '',
// // //         price: null,
// // //         description: '',
// // //         img: '',
// // //         size: null,
// // //         numOfRooms: null,
// // //         airDirections: null,
// // //         options: ''
// // //     })

// // //     const onSubmit = async (data) => {
// // //         const newApartment = {
// // //             user,
// // //             ...data,
// // //         };

// // //         try {
// // //             const res = await axios.post('http://localhost:8000/apartment', newApartment, {
// // //                 headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
// // //             });

// // //             if (res.status === 201) {
// // //                 const fetchedProducts = await ApartmentService.getProducts();
// // //                 setProducts(fetchedProducts.slice(0, 12));
// // //                 setShowMessage(true); // Show the success dialog
// // //                 setVisible(false); // Close the form after successful submission
// // //             }
// // //         } catch (e) {
// // //             console.error(e);
// // //         }
// // //     };

// // //     const getFormErrorMessage = (name) => {
// // //         return errors[name] && <small className="p-error">{errors[name].message}</small>;
// // //     };

// // //     return (
// // //         <div>
// // //             <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
// // //                 <div className="flex justify-content-center flex-column pt-6 px-3">
// // //                     <h5>Apartment Added Successfully!</h5>
// // //                 </div>
// // //             </Dialog>

// // //             {/* <Dialog visible={setVisible} style={{ width: '30vw' }} onHide={() => setVisible(false)}> */}
// // //                 <div className="flex justify-content-center">
// // //                     <div className="card">
// // //                         <h5 className="text-center">Add Apartment</h5>
// // //                         <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

// // //                             {/* <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="address" control={control} rules={{ required: 'Address is required.' }} render={({ field, fieldState }) => (
// // //                                         <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} 
// // //                                      />
// // //                                     )} />
// // //                                     <label htmlFor="address" className={classNames({ 'p-error': errors.address })}>Address*</label>
// // //                                 </span>
// // //                                 {getFormErrorMessage('address')}
// // //                             </div> */}

// // //                             <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="floor" control={control} rules={{ required: 'Floor is required.' }} render={({ field, fieldState }) => (
// // //                                         <InputText id={field.name} type="text" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} 
// // //                                            onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, floor: e.target.value })))}/>
// // //                                     )} />
// // //                                     <label htmlFor="floor" className={classNames({ 'p-error': errors.floor })}>Floor*</label>
// // //                                 </span>
// // //                                 {getFormErrorMessage('floor')}
// // //                             </div>

// // //                             <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="price" control={control} rules={{ required: 'Price is required.' }} render={({ field, fieldState }) => (
// // //                                         <InputText id={field.name} type="number" {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
// // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, price: e.target.value })))} />
// // //                                     )} />
// // //                                     <label htmlFor="price" className={classNames({ 'p-error': errors.price })}>Price*</label> 
// // //                                 </span>
// // //                                 {getFormErrorMessage('price')}
// // //                             </div>

// // //                             <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="description" control={control} render={({ field }) => (
// // //                                         <InputText id={field.name} {...field} type="text" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} 
// // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, description: e.target.value })))}/>
// // //                                     )} />
// // //                                     <label htmlFor="description">Description</label>
// // //                                 </span>
// // //                             </div>

// // //                             <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="img" control={control} render={({ field }) => (
// // //                                         <InputText id={field.name} {...field} type="text" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} 
// // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, img: e.target.value })))} />

// // //                                     )} />
// // //                                     <label htmlFor="img">Image URL</label>
// // //                                 </span>
// // //                             </div>

// // //                             <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="size" control={control} rules={{ required: 'Size is required.' }} render={({ field, fieldState }) => (
// // //                                         <InputText id={field.name} type="number" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} 
// // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, size: e.target.value })))}/>

// // //                                     )} />
// // //                                     <label htmlFor="size" className={classNames({ 'p-error': errors.size })}>Size (sqm)*</label>
// // //                                 </span>
// // //                                 {getFormErrorMessage('size')}
// // //                             </div>

// // //                             <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="numOfRooms" control={control} rules={{ required: 'Number of Rooms is required.' }} render={({ field, fieldState }) => (
// // //                                         <InputText id={field.name} type="number" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} 
// // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, numOfRooms: e.target.value })))}/>
// // //                                     )} />
// // //                                     <label htmlFor="numOfRooms" className={classNames({ 'p-error': errors.numOfRooms })}>Number of Rooms*</label>
// // //                                 </span>
// // //                                 {getFormErrorMessage('numOfRooms')}
// // //                             </div>
// // //                             <div className="field">
// // //                                 <span className="p-float-label">
// // //                                     <Controller name="airDirections" control={control} rules={{ required: 'Number of Rooms is required.' }} render={({ field, fieldState }) => (
// // //                                         <InputText id={field.name} type="text" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} 
// // //                                         onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, airDirections: e.target.value })))}/>
// // //                                     )} />
// // //                                     <label htmlFor="numOfRooms" className={classNames({ 'p-error': errors.numOfRooms })}>Number of Rooms*</label>
// // //                                 </span>
// // //                                 {getFormErrorMessage('numOfRooms')}
// // //                             </div>
// // //                             <div className="field-checkbox">
// // //                                 <Controller name="view" control={control} render={({ field }) => (
// // //                                     <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} />
// // //                                 )} />
// // //                                 <label htmlFor="view">נוף</label>
// // //                             </div>
// // //                             {/* <div className="field-checkbox">
// // //                                 <Controller name="isAvailable" control={control} render={({ field }) => (
// // //                                     <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} />
// // //                                 )} />
// // //                                 <label htmlFor="isAvailable">Available</label>
// // //                             </div> */}

// // //                             <Button type="submit" label="Add Apartment" className="mt-2" />
// // //                         </form>
// // //                     </div>
// // //                 </div>
// // //             {/* </Dialog> */}
// // //         </div>
// // //     );
// // // };

// // // export default Add;
// // import React, { useState } from "react";
// // import { useForm, Controller } from "react-hook-form";
// // import axios from "axios";
// // import { InputText } from 'primereact/inputtext';
// // import { Checkbox } from 'primereact/checkbox';
// // import { Button } from 'primereact/button';
// // import { Dialog } from 'primereact/dialog';
// // import { classNames } from 'primereact/utils';
// // import { useSelector } from 'react-redux';
// // import ApartmentService from "./ApartmentService";

// // const Add = ({ setVisible, setProducts }) => {
// //     const { user, token } = useSelector((state) => state.token);
// //     const { register, handleSubmit, formState: { errors }, control } = useForm();

// //     const [showMessage, setShowMessage] = useState(false);
// //     const [defaultValues] = useState({
// //         // user: '',
// //         // address: '',
// //         floor: '',
// //         price: null,
// //         description: '',
// //         img: '',
// //         size: null,
// //         numOfRooms: null,
// //         airDirections: null,
// //         options: '',
// //     });

// //     const onSubmit = async (data) => {
// //         const newApartment = {
// //             floor: defaultValues.floor,
// //             price: defaultValues.price,
// //             description: defaultValues.description,
// //             img: defaultValues.img,
// //             size: defaultValues.size,
// //             numOfRooms: defaultValues.numOfRooms,
// //             airDirections: defaultValues.airDirections,
// //             options: defaultValues.dateOfBirth.toISOString()
// //         };

// //         try {
// //             const res = await axios.post('http://localhost:8000/apartment', newApartment, {
// //                 headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
// //             });

// //             if (res.status === 201) {
// //                 const fetchedProducts = await ApartmentService.getProducts();
// //                 setProducts(fetchedProducts.slice(0, 12));
// //                 setShowMessage(true); // Show the success dialog
// //                 setVisible(false); // Close the form after successful submission
// //             }
// //         } catch (e) {
// //             console.error(e);
// //         }
// //     };

// //     const getFormErrorMessage = (name) => {
// //         return errors[name] && <small className="p-error">{errors[name].message}</small>;
// //     };

// //     return (
// //         <div>
// //             <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
// //                 <div className="flex justify-content-center flex-column pt-6 px-3">
// //                     <h5>Apartment Added Successfully!</h5>
// //                 </div>
// //             </Dialog>

// //             <div className="flex justify-content-center">
// //                 <div className="card">
// //                     <h5 className="text-center">Add Apartment</h5>
// //                     <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

// //                         <div className="field">
// //                             <span className="p-float-label">
// //                                 <Controller name="floor" control={control} rules={{ required: 'Floor is required.' }} render={({ field, fieldState }) => (
// //                                     <InputText id={field.name} type="text" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
// //                                 )} />
// //                                 <label htmlFor="floor" className={classNames({ 'p-error': errors.floor })}>Floor*</label>
// //                             </span>
// //                             {getFormErrorMessage('floor')}
// //                         </div>

// //                         <div className="field">
// //                             <span className="p-float-label">
// //                                 <Controller name="price" control={control} rules={{ required: 'Price is required.' }} render={({ field, fieldState }) => (
// //                                     <InputText id={field.name} type="number" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
// //                                 )} />
// //                                 <label htmlFor="price" className={classNames({ 'p-error': errors.price })}>Price*</label> 
// //                             </span>
// //                             {getFormErrorMessage('price')}
// //                         </div>

// //                         <div className="field">
// //                             <span className="p-float-label">
// //                                 <Controller name="description" control={control} render={({ field }) => (
// //                                     <InputText id={field.name} {...field} />
// //                                 )} />
// //                                 <label htmlFor="description">Description</label>
// //                             </span>
// //                         </div>

// //                         <div className="field">
// //                             <span className="p-float-label">
// //                                 <Controller name="img" control={control} render={({ field }) => (
// //                                     <InputText id={field.name} {...field} />
// //                                 )} />
// //                                 <label htmlFor="img">Image URL</label>
// //                             </span>
// //                         </div>

// //                         <div className="field">
// //                             <span className="p-float-label">
// //                                 <Controller name="size" control={control} rules={{ required: 'Size is required.' }} render={({ field, fieldState }) => (
// //                                     <InputText id={field.name} type="number" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
// //                                 )} />
// //                                 <label htmlFor="size" className={classNames({ 'p-error': errors.size })}>Size (sqm)*</label>
// //                             </span>
// //                             {getFormErrorMessage('size')}
// //                         </div>

// //                         <div className="field">
// //                             <span className="p-float-label">
// //                                 <Controller name="numOfRooms" control={control} rules={{ required: 'Number of Rooms is required.' }} render={({ field, fieldState }) => (
// //                                     <InputText id={field.name} type="number" {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
// //                                 )} />
// //                                 <label htmlFor="numOfRooms" className={classNames({ 'p-error': errors.numOfRooms })}>Number of Rooms*</label>
// //                             </span>
// //                             {getFormErrorMessage('numOfRooms')}
// //                         </div>

// //                         <div className="field-checkbox">
// //                             <Controller name="view" control={control} render={({ field }) => (
// //                                 <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} />
// //                             )} />
// //                             <label htmlFor="view">נוף</label>
// //                         </div>

// //                         <div className="field-checkbox">
// //                             <Controller name="Sukkah balcony" control={control} render={({ field }) => (
// //                                 <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} />
// //                             )} />
// //                             <label htmlFor="Sukkah balcony">מרפסת סוכה</label>
// //                         </div>
// //                         <Button type="submit" label="Add Apartment" className="mt-2" />
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Add;
// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import { InputText } from 'primereact/inputtext';
// import { Checkbox } from 'primereact/checkbox';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { classNames } from 'primereact/utils';
// import { useSelector } from 'react-redux';
// import ApartmentService from "./ApartmentService";

// const Add = ({ setVisible, setProducts }) => {
//     const { user, token } = useSelector((state) => state.token);
//     const { control, handleSubmit, formState: { errors } } = useForm();

//     const [showMessage, setShowMessage] = useState(false);
//     const [options, setOptions] = useState("");

//     const onSubmit = async (data) => {
//         const newApartment = {
//             user,
//             floor: data.floor,
//             price: data.price,
//             description: data.description,
//             img: data.img,
//             size: data.size,
//             numOfRooms: data.numOfRooms,
//             options: options
//         };

//         try {
//             const res = await axios.post('http://localhost:8000/apartment', newApartment, {
//                 headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
//             });

//             if (res.status === 201) {
//                 const fetchedProducts = await ApartmentService.getProducts();
//                 setProducts(fetchedProducts.slice(0, 12));
//                 setShowMessage(true); // Show the success dialog
//                 setVisible(false); // Close the form after successful submission
//             }
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     const handleCheckboxChange = (value) => {
//         setOptions((prevOptions) => {
//             // Check if the value is already in the options
//             if (prevOptions.includes(value)) {
//                 // Remove the value from the options
//                 return prevOptions.replace(value + ", ", "").replace(value, "");
//             } else {
//                 // Add the value to the options
//                 return prevOptions ? `${prevOptions}, ${value}` : value;
//             }
//         });
//     };

//     const getFormErrorMessage = (name) => {
//         return errors[name] && <small className="p-error">{errors[name].message}</small>;
//     };

//     return (
//         <div>
//             <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
//                 <div className="flex justify-content-center flex-column pt-6 px-3">
//                     <h5>Apartment Added Successfully!</h5>
//                 </div>
//             </Dialog>

//             <div className="flex justify-content-center">
//                 <div className="card">
//                     <h5 className="text-center">Add Apartment</h5>
//                     <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller 
//                                     name="floor" 
//                                     control={control} 
//                                     rules={{ required: 'Floor is required.' }} 
//                                     render={({ field, fieldState }) => (
//                                         <InputText 
//                                             id={field.name} 
//                                             type="text" 
//                                             {...field} 
//                                             className={classNames({ 'p-invalid': fieldState.invalid })} 
//                                         />
//                                     )} 
//                                 />
//                                 <label htmlFor="floor" className={classNames({ 'p-error': errors.floor })}>Floor*</label>
//                             </span>
//                             {getFormErrorMessage('floor')}
//                         </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller 
//                                     name="price" 
//                                     control={control} 
//                                     rules={{ required: 'Price is required.' }} 
//                                     render={({ field, fieldState }) => (
//                                         <InputText 
//                                             id={field.name} 
//                                             type="number" 
//                                             {...field} 
//                                             className={classNames({ 'p-invalid': fieldState.invalid })} 
//                                         />
//                                     )} 
//                                 />
//                                 <label htmlFor="price" className={classNames({ 'p-error': errors.price })}>Price*</label> 
//                             </span>
//                             {getFormErrorMessage('price')}
//                         </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller 
//                                     name="description" 
//                                     control={control} 
//                                     render={({ field }) => (
//                                         <InputText id={field.name} {...field} />
//                                     )} 
//                                 />
//                                 <label htmlFor="description">Description</label>
//                             </span>
//                         </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller 
//                                     name="img" 
//                                     control={control} 
//                                     render={({ field }) => (
//                                         <InputText id={field.name} {...field} />
//                                     )} 
//                                 />
//                                 <label htmlFor="img">Image URL</label>
//                             </span>
//                         </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller 
//                                     name="size" 
//                                     control={control} 
//                                     rules={{ required: 'Size is required.' }} 
//                                     render={({ field, fieldState }) => (
//                                         <InputText 
//                                             id={field.name} 
//                                             type="number" 
//                                             {...field} 
//                                             className={classNames({ 'p-invalid': fieldState.invalid })} 
//                                         />
//                                     )} 
//                                 />
//                                 <label htmlFor="size" className={classNames({ 'p-error': errors.size })}>Size (sqm)*</label>
//                             </span>
//                             {getFormErrorMessage('size')}
//                         </div>

//                         <div className="field">
//                             <span className="p-float-label">
//                                 <Controller 
//                                     name="numOfRooms" 
//                                     control={control} 
//                                     rules={{ required: 'Number of Rooms is required.' }} 
//                                     render={({ field, fieldState }) => (
//                                         <InputText 
//                                             id={field.name} 
//                                             type="number" 
//                                             {...field} 
//                                             className={classNames({ 'p-invalid': fieldState.invalid })} 
//                                         />
//                                     )} 
//                                 />
//                                 <label htmlFor="numOfRooms" className={classNames({ 'p-error': errors.numOfRooms })}>Number of Rooms*</label>
//                             </span>
//                             {getFormErrorMessage('numOfRooms')}
//                         </div>

//                         <div className="field-checkbox">
//                             <Controller name="view" control={control} render={({ field }) => (
//                                 <Checkbox 
//                                     inputId={field.name} 
//                                     onChange={(e) => {
//                                         field.onChange(e.checked);
//                                         handleCheckboxChange(" ,נוף");
//                                     }} 
//                                     checked={field.value} 
//                                 />
//                             )} />
//                             <label htmlFor="view">נוף</label>
//                         </div>

//                         <div className="field-checkbox">
//                             <Controller name="sukkahBalcony" control={control} render={({ field }) => (
//                                 <Checkbox 
//                                     inputId={field.name} 
//                                     onChange={(e) => {
//                                         field.onChange(e.checked);
//                                         handleCheckboxChange(" ,מרפסת סוכה");
//                                     }} 
//                                     checked={field.value} 
//                                 />
//                             )} />
//                             <label htmlFor="sukkahBalcony">מרפסת סוכה</label>
//                         </div>

//                         <Button type="submit" label="Add Apartment" className="mt-2" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Add;
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { useSelector } from 'react-redux';
import ApartmentService from "./ApartmentService";
import { Dropdown } from 'primereact/dropdown';
const Add = ({ setVisible, setProducts,setAdd }) => {
  const { user, token } = useSelector((state) => state.token);
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [showMessage, setShowMessage] = useState(false);
  const [options, setOptions] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const option = [];
    if (data.view)
      option.push("נוף מרשים")
    if (data.sukkahBalcony)
      option.push("מרפסת סוכה")
    const newApartment = {
      user: user._id,
      address: { city: data.city, neighborhood: data.neighborhood, street: data.street, building: data.building },
      floor: data.floor,
      price: data.price,
      description: data.description,
      img: data.img,
      size: data.size,
      numOfRooms: data.numOfRooms,
      airDirections: data.airDirections,
      options: option

    };
    try {
      const res = await axios.post('http://localhost:8000/apartment', newApartment, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      });

      if (res.status === 201) {
       setAdd(res.data)

      //  const fetchedProducts = await ApartmentService.getProducts();
      //   setProducts(fetchedProducts.slice(0, 12));
        setShowMessage(true);
        setVisible(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckboxChange = (value) => {
    setOptions((prevOptions) => {
      return prevOptions.includes(value) ?
        prevOptions.replace(value + ", ", "").replace(value, "") :
        prevOptions ? `${prevOptions}, ${value}` : value;
    });
  };

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>;
  };

  return (

    <div>
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <h5>Apartment Added Successfully!</h5>
        </div>
      </Dialog>


      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Add Apartment</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: 'City is required.' }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="text"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="city" className={classNames({ 'p-error': errors.city })}>city*</label>
              </span>
              {getFormErrorMessage('city')}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="neighborhood"
                  control={control}
                  rules={{}}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="text"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="neighborhood" className={classNames({ 'p-error': errors.neighborhood })}>neighborhood*</label>
              </span>
              {getFormErrorMessage('neighborhood')}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="street"
                  control={control}
                  rules={{ required: 'Street is required.' }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="text"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="street" className={classNames({ 'p-error': errors.street })}>street*</label>
              </span>
              {getFormErrorMessage('street')}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="building"
                  control={control}
                  rules={{ required: 'Building is required.' }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="number"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="building" className={classNames({ 'p-error': errors.building })}>v*</label>
              </span>
              {getFormErrorMessage('building')}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="floor"
                  control={control}
                  rules={{ required: 'Floor is required.' }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="text"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="floor" className={classNames({ 'p-error': errors.floor })}>Floor*</label>
              </span>
              {getFormErrorMessage('floor')}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="price"
                  control={control}
                  rules={{ required: 'Price is required.' }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="number"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="price" className={classNames({ 'p-error': errors.price })}>Price*</label>
              </span>
              {getFormErrorMessage('price')}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <InputText id={field.name} {...field} />
                  )}
                />
                <label htmlFor="description">Description</label>
              </span>
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="img"
                  control={control}
                  render={({ field }) => (
                    <InputText id={field.name} {...field} />
                  )}
                />
                <label htmlFor="img">Image URL</label>
              </span>
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="size"
                  control={control}
                  rules={{ required: 'Size is required.' }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="number"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="size" className={classNames({ 'p-error': errors.size })}>Size (sqm)*</label>
              </span>
              {getFormErrorMessage('size')}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="numOfRooms"
                  control={control}
                  rules={{ required: 'Number of Rooms is required.' }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      type="number"
                      {...field}
                      className={classNames({ 'p-invalid': fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="numOfRooms" className={classNames({ 'p-error': errors.numOfRooms })}>Number of Rooms*</label>
              </span>
              {getFormErrorMessage('numOfRooms')}
            </div>


            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="airDirections"
                  control={control}
                  rules={{ required: 'airDirections is required.' }}
                  render={({ field, fieldState }) => (

                    <Dropdown id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} {...field} options={[
                      { label: 'Select air direction', value: null },
                      { label: '1', value: 1 },
                      { label: '2', value: 2 },
                      { label: '3', value: 3 },
                      { label: '4', value: 4 }
                    ]} />
                    // <InputText
                    //   id={field.name}
                    //   type="number"
                    //   {...field}
                    //   className={classNames({ 'p-invalid': fieldState.invalid })}
                    // />
                  )}
                />
                <label htmlFor="airDirections " className={classNames({ 'p-error': errors.airDirections })}>air direction*</label>
              </span>
              {getFormErrorMessage('airDirections')}
            </div>




            <div className="field-checkbox">
              <Controller name="view" control={control} render={({ field }) => (
                <Checkbox
                  inputId={field.name}
                  onChange={(e) => {
                    field.onChange(e.checked);
                    handleCheckboxChange(" ,נוף");
                  }}
                  checked={field.value}
                />
              )} />
              <label htmlFor="view">נוף</label>
            </div>

            <div className="field-checkbox">
              <Controller name="sukkahBalcony" control={control} render={({ field }) => (
                <Checkbox
                  inputId={field.name}
                  onChange={(e) => {
                    field.onChange(e.checked);
                    handleCheckboxChange(" ,מרפסת סוכה");
                  }}
                  checked={field.value}
                />
              )} />
              <label htmlFor="sukkahBalcony">מרפסת סוכה</label>
            </div>

            <Button type="submit" label="Add Apartment" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;