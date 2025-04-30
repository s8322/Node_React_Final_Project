
import React, { useState, useEffect } from "react";
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

const Update = ({ setVisible, setProducts, userId }) => {
  const { user, token } = useSelector((state) => state.token);
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();
  const [showMessage, setShowMessage] = useState(false);
  const [options, setOptions] = useState("");

  useEffect(() => {
    const fetchuserData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/user/${apartmentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const apartment = res.data;
        Object.keys(apartment).forEach(key => {
          setValue(key, apartment[key]);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchApartmentData();
  }, [apartmentId, setValue, token]);

  const onSubmit = async (data) => {
    const option = [];
    if (data.view) option.push("נוף מרשים");
    if (data.sukkahBalcony) option.push("מרפסת סוכה");

    const updatedApartment = {
      user: user._id,
      address: {
        city: data.city,
        neighborhood: data.neighborhood,
        street: data.street,
        building: data.building,
      },
      floor: data.floor,
      price: data.price,
      description: data.description,
      img: data.img,
      size: data.size,
      numOfRooms: data.numOfRooms,
      airDirections: data.airDirections,
      options: option,
    };

    try {
      const res = await axios.put(`http://localhost:8000/apartment/`,apartmentId, updatedApartment, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      });

      if (res.status === 200) {
        const fetchedProducts = await ApartmentService.getProducts();
        setProducts(fetchedProducts.slice(0, 12));
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
          <h5>Apartment Updated Successfully!</h5>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Update Apartment</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            {/* ... (שאר הקוד עבור הטפסים שמלאים, ללא שינוי) */}
            <Button type="submit" label="Update Apartment" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;