import React, { useEffect, useState } from "react";
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
const Update = ({ visible, setVisible, setProducts, apartment, getApartmentsDataById }) => {
  const { user, token } = useSelector((state) => state.token);
  const [showMessage, setShowMessage] = useState(false);
  const [options, setOptions] = useState("");
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      city: apartment?.address?.city || '',
      neighborhood: apartment?.address?.neighborhood || '',
      street: apartment?.address?.street || '',
      building: apartment?.address?.building || '',
      floor: apartment?.floor || '',
      price: apartment?.price || '',
      description: apartment?.description || '',
      img: apartment?.img || '',
      size: apartment?.size || '',
      numOfRooms: apartment?.numOfRooms || '',
      airDirections: apartment?.airDirections || null,
      view: false,
      sukkahBalcony: false,
    },
  });
  const onSubmit = async (data) => {
    console.log("llllllllllllllll",data);
    // console.log(data);
    const option = [];
    if (data.view)
      option.push("נוף מרשים")
    if (data.sukkahBalcony)
      option.push("מרפסת סוכה")
    const newApartment = {
      _id:apartment._id,
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
      const res = await axios.put('http://localhost:8000/apartment', newApartment, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      });

      if (res.status === 201) {
        getApartmentsDataById()

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
  useEffect(() => {
    console.log(apartment);
  })
  return (

    <div>
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top">
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <h5>Apartment Added Successfully!</h5>
        </div>
      </Dialog>

      <Dialog visible={visible} onHide={() => setVisible(false)} position="top">

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
                        defaultValue={apartment.address.city}
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
                        defaultValue={apartment.address.neighborhood}

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
                        defaultValue={apartment.address.street}

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
                        defaultValue={apartment.address.building}

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
                        defaultValue={apartment.floor}

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
                        defaultValue={apartment.price}

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
                      <InputText id={field.name}
                        defaultValue={apartment.description}
                        {...field} />
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
                      <InputText id={field.name}
                        defaultValue={apartment.img}
                        {...field} />
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
                        defaultValue={apartment.size}

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
                        defaultValue={apartment.numOfRooms}

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

                      <Dropdown id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })}
                        defaultValue={apartment.airDirections}
                        {...field} options={[
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
                    defaultValue={apartment.view}
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
      </Dialog>
    </div>
  );
};

export default Update;