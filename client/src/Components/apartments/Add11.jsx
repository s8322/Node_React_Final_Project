//  import React from 'react';
//     import { useForm } from 'react-hook-form';
//     const Add=()=>{
   
//       const { register, handleSubmit, formState: { errors } } = useForm();
//       const onSubmit = data => console.log(data);
//       console.log(errors);
      
//       return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input type="text" placeholder="city" {...register("city", {required: true, maxLength: 80})} />
//           <input type="text" placeholder="neighborhood" {...register} />
//           <input type="text" placeholder="street" {...register("street", {required: true, maxLength: 80})} />
//           <input type="number" placeholder="building" {...register("building", {required: true, max: 1000, min: -2})} />
//           <input type="text" placeholder="floor" {...register("floor", {required: true})} />
//           <input type="number" placeholder="price" {...register("price", {, min: 0})} />
//           <textarea {...register("description", {required: true, maxLength: 300})} />
//           <input type="text" placeholder="img" {...register} />
//           <input type="number" placeholder="size" {...register("size", {required: true, min: 1})} />
//           <input type="number" placeholder="numOfRooms" {...register("numOfRooms", {required: true})} />
//           <select {...register("airDirections", { required: true })}>
//             <option value="0">0</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//           </select>
//           <input type="checkbox" placeholder="view" {...register} />
//           <input type="checkbox" placeholder="sukkahBalcony" {...register} />
//           <input type="text" placeholder="bars" {...register} />
    
//           <input type="submit" />
//         </form>
//       );
//     }


// // return(
// //     <></>
// // )

// export default Add
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { InputText } from 'primereact/inputtext';
// import { InputNumber } from 'primereact/inputnumber';
// import { Dropdown } from 'primereact/dropdown';
// import { Checkbox } from 'primereact/checkbox';
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';

// const Add = () => {
  
//   // const toast = React.useRef(null);
  
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = (data) => {
//       console.log(data);
//       // toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'Data has been submitted', life: 3000 });
//   };
  
//   return (
//     <div className="p-fluid">
//       {/* <Toast ref={toast} /> */}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="p-field">
//           <label htmlFor="city">City</label>
//           <InputText id="city" {...register("city", { required: true, maxLength: 80 })} />
//           {errors.city && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="neighborhood">Neighborhood</label>
//           <InputText id="neighborhood" {...register("neighborhood", { required: true })} />
//           {errors.neighborhood && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="street">Street</label>
//           <InputText id="street" {...register("street", { required: true, maxLength: 80 })} />
//           {errors.street && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="building">Building</label>
//           <InputNumber id="building" {...register("building", { required: true, max: 1000, min: -2 })} />
//           {errors.building && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="floor">Floor</label>
//           <InputText id="floor" {...register("floor", { required: true })} />
//           {errors.floor && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="price">Price</label>
//           <InputNumber id="price" {...register("price", { required: true, min: 0 })} />
//           {errors.price && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="description">Description</label>
//           <InputText id="description" {...register("description", { required: true, maxLength: 300 })} />
//           {errors.description && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="size">Size</label>
//           <InputNumber id="size" {...register("size", { required: true, min: 1 })} />
//           {errors.size && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="numOfRooms">Number of Rooms</label>
//           <InputNumber id="numOfRooms" {...register("numOfRooms", { required: true })} />
//           {errors.numOfRooms && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field">
//           <label htmlFor="airDirections">Air Directions</label>
//           <Dropdown id="airDirections" {...register("airDirections", { required: true })} options={[
//             { label: 'Select air direction', value: null },
//             { label: '0', value: 0 },
//             { label: '1', value: 1 },
//             { label: '2', value: 2 },
//             { label: '3', value: 3 },
//             { label: '4', value: 4 }
//           ]} />
//           {errors.airDirections && <small className="p-error">This field is required</small>}
//         </div>

//         <div className="p-field-checkbox">
//           <Checkbox inputRef={register} name="view" />
//           <label htmlFor="view">View</label>
//         </div>

//         <div className="p-field-checkbox">
//           <Checkbox inputRef={register} name="sukkahBalcony" />
//           <label htmlFor="sukkahBalcony">Sukkah Balcony</label>
//         </div>

//         <div className="p-field">
//           <label htmlFor="bars">Bars</label>
//           <InputText id="bars" {...register("bars")} />
//         </div>

//         <Button label="Submit" type="submit" />
//       </form>
//     </div>
//   );
// }

// export default Add;