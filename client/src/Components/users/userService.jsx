import axios from 'axios';
export const UserService = {
    // getProductsData() {
        async getUsersData() {
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
        },
        
        getCustomersSmall() {
            return Promise.resolve(this.getUsersData().slice(0, 10));
        },

        getCustomersMedium() {
            return Promise.resolve(this.getUsersData().slice(0, 50));
        },

        getCustomersLarge() {
            return Promise.resolve(this.getUsersData().slice(0, 200));
        },

        getCustomersXLarge() {
            return Promise.resolve(this.getUsersData());
        },

        getCustomers(params) {
            const queryParams = params
                ? Object.keys(params)
                      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                      .join('&')
                : '';

            return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
        }
    
    };
    export default UserService 
  