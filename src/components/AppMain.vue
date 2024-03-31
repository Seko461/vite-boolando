<script >
import ProductCard from './ProductCard.vue';
// import { infoCardA } from '../info_cards_a';
// import { infoCardB } from '../info_cards_b';


import { state } from '../state.js'

export default {
    name: 'AppMain',
    props: ['product', 'showProduct'],
    components: {
        ProductCard,

    },
    data() {
        return {

            state,


        }
    },
    methods: {

    },
    mounted() {

        console.log(this.state);
        this.state.getProducts(this.state.base_products_api_url)

        // axios.get('http://localhost:3000/products')
        //     .then(response => {
        //         console.log(response);
        //         this.state.products = response.data
        //     })
    }

}




</script>

<template>
    <main class="site_main">
        <div class="container">
            <!-- --------first row ------------->
            <div class="row">


                <div>
                    <ProductCard :product="product" :key="product.id" v-for="product in state.products"
                        @showProduct="showProduct" />

                </div>


            </div>
        </div>

    </main>
</template>

<style lang="scss"></style>
