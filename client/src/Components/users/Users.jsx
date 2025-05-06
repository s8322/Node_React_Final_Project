import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UserService } from './userService'
import axios from 'axios';
const Users = () => {
    const [customers, setCustomers] = useState([]);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
    const deleteUser = async (id) => {   
        try {
            const res = await axios({
                method: 'delete',
                url: 'http://localhost:8000/user',
                headers: {},
    
                data: {
                    _id:id
                }
            });
            if (res.status === 200) {
                setCustomers(res.data)
                    }
        } catch (e) {
            return [];
        }}
        const func=async()=>{
            try {
                const res = await axios.get(`http://localhost:8000/user`)
                if (res.status === 200) {
                    // console.log("carsUser",res.data)
                    console.log(res.data);
                    return res.data;
                }
            } catch (e) {
                return [];
            }
        }
    useEffect(() => {
        // UserService.getCustomersXLarge().then((data) => setCustomers(data));
        func()
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                           <Column field="name" header="שם" style={{ width: '15%', textAlign: 'right' }}></Column>
            <Column field="email" header="דואר אלקטרוני" style={{ width: '20%', textAlign: 'right' }}></Column>
            <Column field="phone" header="טלפון" style={{ width: '10%', textAlign: 'right' }}></Column>
            <Column field="address.city" header="עיר" style={{ width: '15%', textAlign: 'right' }}></Column>
            <Column field="address.street" header="רחוב" style={{ width: '15%', textAlign: 'right' }}></Column>
            <Column field="address.building" header="מס' בניין" style={{ width: '10%', textAlign: 'right' }}></Column>
            <Column field="roles" header="מנהל/משתמש" style={{ width: '15%', textAlign: 'right' }}></Column>
            <Column
                header="פעולות"
                body={(rowData) => (
                    <button
                        onClick={() => deleteUser(rowData)}
                        style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                    >
                        מחק
                    </button>
                )}
                style={{ width: '10%', textAlign: 'center' }}
            ></Column>
            </DataTable>
        </div>
    );
}
export default Users