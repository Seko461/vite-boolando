<script >
import ProductCard from './ProductCard.vue';
// import { infoCardA } from '../info_cards_a';
// import { infoCardB } from '../info_cards_b';

import { state } from '../state.js'

export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {

            state,
            visible: false,
        }
    },
    methods: {
        sonoQui() {
            console.log('sono qui');
            this.visible = true;
        },
        notVisible() {
            this.visible = false;
        }

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


                <div v-if="state.products.length == state.products.length">
                    <ProductCard :product="product" :key="product.id" v-for="product in state.products" @click="sonoQui" />
                </div>

                <div v-if="visible === true" @click="notVisible">
                    <h1>Ciao</h1>
                </div>







            </div>
        </div>

    </main>
</template>

<style lang="scss"></style>
