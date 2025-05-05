import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import axios from 'axios';
import './Register.css';

const Register = (props) => {
    // const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const { control, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: { city: '', neighborhood: '', street: '', building: '' },
            password: '',
            accept: false,
        },
    });

    const onSubmit = async (data) => {
        try {
            console.log("Submitting data:", data); // הדפס נתונים לבדיקה
            const res = await axios.post('http://localhost:8000/auth/register', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.status === 201) {
                setFormData(data);
                alert("Registration successful!");
                reset(); // איפוס הטופס לאחר הצלחה
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert("Registration failed. Please try again.");
        }
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const dialogFooter = (
        <div className="flex justify-content-center">
            <Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} />
        </div>
    );

    const passwordHeader = <h6>Choose a secure password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <Dialog header="Register" visible={props.visible} style={{ width: '50vw' }} onHide={() => props.setVisible(false)}>
            <div className="form-demo">
               

                <div className="flex justify-content-center">
                    <div className="card">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="name" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={fieldState.invalid ? 'p-invalid' : ''} />
                                    )} />
                                    <label htmlFor="name" className={errors.name ? 'p-error' : ''}>Name*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="email" control={control} rules={{
                                        required: 'Email is required.',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Invalid email address. E.g. example@email.com',
                                        },
                                    }} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={fieldState.invalid ? 'p-invalid' : ''} />
                                    )} />
                                    <label htmlFor="email" className={errors.email ? 'p-error' : ''}>Email*</label>
                                </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="phone" control={control} rules={{
                                        required: 'Phone number is required.',
                                        pattern: {
                                            value: /^(0(2|3|4|7|8|9|5)\d{7}|05[0-9]{8})$/,
                                            message: 'Invalid phone number. E.g. 0223456789 or 0501234567',
                                        },
                                    }} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={fieldState.invalid ? 'p-invalid' : ''} />
                                    )} />
                                    <label htmlFor="phone" className={errors.phone ? 'p-error' : ''}>Phone*</label>
                                </span>
                                {getFormErrorMessage('phone')}
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="address.city" control={control} rules={{ required: 'City is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={fieldState.invalid ? 'p-invalid' : ''} />
                                    )} />
                                    <label htmlFor="address.city" className={errors.address?.city ? 'p-error' : ''}>City*</label>
                                </span>
                                {getFormErrorMessage('address.city')}
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="address.neighborhood" control={control} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={fieldState.invalid ? 'p-invalid' : ''} />
                                    )} />
                                    <label htmlFor="address.neighborhood">Neighborhood</label>
                                </span>
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="address.street" control={control} rules={{ required: 'Street is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={fieldState.invalid ? 'p-invalid' : ''} />
                                    )} />
                                    <label htmlFor="address.street">Street*</label>
                                </span>
                                {getFormErrorMessage('address.street')}
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="address.building" control={control} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={fieldState.invalid ? 'p-invalid' : ''} />
                                    )} />
                                    <label htmlFor="address.building">Building</label>
                                </span>
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                        <Password id={field.name} {...field} toggleMask className={fieldState.invalid ? 'p-invalid' : ''} header={passwordHeader} footer={passwordFooter} />
                                    )} />
                                    <label htmlFor="password" className={errors.password ? 'p-error' : ''}>Password*</label>
                                </span>
                                {getFormErrorMessage('password')}
                            </div>

                            <div className="field-checkbox">
                                <Controller name="accept" control={control} rules={{ required: 'You must accept the terms.' }} render={({ field, fieldState }) => (
                                    <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={fieldState.invalid ? 'p-invalid' : ''} />
                                )} />
                                <label htmlFor="accept" className={errors.accept ? 'p-error' : ''}>I agree to the terms and conditions*</label>
                            </div>

                            <Button type="submit" label="Submit" className="mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Register;