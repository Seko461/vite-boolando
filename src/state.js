import { reactive } from 'vue';
import axios from 'axios';

//global state
export const state = reactive({
    //State (data)
    message: 'this is a test',
    products: [],
    base_products_api_url: 'http://localhost:3000/products',
    //Actions (methods) that change the state
    getProducts(url) {
        axios.get(url)
            .then(response => {
                console.log(response);
                this.products = response.data
            })
            .catch(err => {
                console.error(err.message)
            })
    },

})