import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { setToken } from "../../Redux/tokenSlice";

// import { CountryService } from '../service/CountryService';
import './Register.css';
const Register = (props) => {
    // const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    // const [hide, setHise] = useState({});
    // const countryservice = new CountryService();
    const [defaultValues, setDefaultValues] = useState({
        name: '',
        email: '',
        phone:'',
        address:{city:'',
            neighborhood:'',
            street:'',
            building:null
        },
        password: ''
        })

    // useEffect(() => {
    //     countryservice.getCountries().then(data => setCountries(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = async (data) => {
        console.log(defaultValues);
        debugger
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/auth/register',
                headers: {'Content-Type': 'application/json'},
                data: {
                    name: defaultValues.name,
                    email: defaultValues.email,
                    phone:defaultValues.phone,
                    address:{
                        city:defaultValues.address.city,
                        neighborhood:defaultValues.address.neighborhood,
                        street:defaultValues.address.street,
                        building:defaultValues.address.building
                    },
                    password: defaultValues.password
                }
            })
            if (res.status === 200) {
                setFormData(data);
                setShowMessage(true);
                alert("you come in")
            }
        }
        catch (e) {
            console.error(e)
            alert("Unauthorized user")
        }

        reset();
    };



    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );
    // const hideDialog = () => {
    //     setVisible(false); // עדכון המצב ל-false כדי להסתיר את הדיאלוג
    // };
    return (
        <Dialog header="Header" visible={props.visible} style={{ width: '50vw' }} onHide={() => { if (!props.visible) return; props.setVisible(false); }}>
            <div className="form-demo">
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="flex justify-content-center flex-column pt-6 px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registration Successful!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                        </p>
                    </div>
                </Dialog>

                <div className="flex justify-content-center">
                    <div className="card">
                        <h5 className="text-center">Register</h5>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="name" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}
                                            onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, name: e.target.value })))} />
                                    )} />
                                    <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Name*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <Controller name="email" control={control}
                                        rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } }}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
                                                onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, email: e.target.value })))} />
                                        )} />
                                    <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                                </span>
                                {getFormErrorMessage('email')}
                            </div>
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-phone" />
                                    <Controller name="phone" control={control}
                                        rules={{ required: 'Phone number is required.', pattern: { value: /^(0(2|3|4|7|8|9|5)\d{7}|05[0-9]{8})$/, message: 'Invalid phone number. E.g. 0223456789 or 0501234567' } }}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })}
                                                onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, phone: e.target.value })))} />
                                        )} />
                                    <label htmlFor="phone" className={classNames({ 'p-error': !!errors.phone })}>Phone*</label>
                                </span>
                                {getFormErrorMessage('phone')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="city" control={control} rules={{ required: 'City is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.city} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}
                                            onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, city: e.target.value })))} />
                                    )} />
                                    <label htmlFor="city" className={classNames({ 'p-error': errors.city })}>City*</label>
                                </span>
                                {getFormErrorMessage('city')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="neighborhood" control={control} rules={{ required: 'neighborhood is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.neighborhood} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}
                                            onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, neighborhood: e.target.value })))} />
                                    )} />
                                    <label htmlFor="neighborhood" className={classNames({ 'p-error': errors.neighborhood })}>neighborhood*</label>
                                </span>
                                {getFormErrorMessage('neighborhood')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="street" control={control} rules={{ required: 'street is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.street} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}
                                            onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, street: e.target.value })))} />
                                    )} />
                                    <label htmlFor="street" className={classNames({ 'p-error': errors.street })}>street*</label>
                                </span>
                                {getFormErrorMessage('street')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="building" control={control} rules={{ required: 'building is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.building} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}
                                            onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, building: e.target.value })))} />
                                    )} />
                                    <label htmlFor="building" className={classNames({ 'p-error': errors.building })}>building*</label>
                                </span>
                                {getFormErrorMessage('building')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                        <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter}
                                            onChange={(e) => (field.onChange(e.target.value), setDefaultValues(prevValues => ({ ...prevValues, password: e.target.value })))} />
                                    )} />
                                    <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                                </span>
                                {getFormErrorMessage('password')}
                            </div>
                            {/* <div className="field">
                                <span className="p-float-label">
                                    <Controller name="date" control={control} render={({ field }) => (
                                        <Calendar id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                    )} />
                                    <label htmlFor="date">Birthday</label>
                                </span>
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="country" control={control} render={({ field }) => (
                                        <Dropdown id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} options={countries} optionLabel="name" />
                                    )} />
                                    <label htmlFor="country">Country</label>
                                </span>
                            </div> */}
                            <div className="field-checkbox">
                                <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                            </div>

                            <Button type="submit" label="Submit" className="mt-2" /*onClick={hideDialog}*/ />
                        </form>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
export default Register