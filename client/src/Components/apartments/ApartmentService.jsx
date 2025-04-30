import axios from 'axios';
export const ApartmentService = {

        async getApartmentsData() {
            try {
                const res = await axios.get(`http://localhost:8000/apartment`)
                if (res.status === 200) {

                    return res.data;
                }
            } catch (e) {
                return [];
            }
        },
        
        getProductsMini() {
            return Promise.resolve(this.getApartmentsData().slice(0, 5));
        },
        getProductsSmall() {
            return Promise.resolve(this.getApartmentsData().slice(0, 10));
        },
        getProducts() {
            return Promise.resolve(this.getApartmentsData());
        },
        getProductsWithOrdersSmall() {
            return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
        },
    
        getProductsWithOrders() {
            return Promise.resolve(this.getProductsWithOrdersData());
        }
    };
    export default ApartmentService 
  