<script >
import ProductCard from './ProductCard.vue';
import { infoCardA } from '../info_cards_a';
import { infoCardB } from '../info_cards_b';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {
            products: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products')
            .then(response => {
                console.log(response);
                this.products = response.data
            })
    }

}




</script>

<template>
    <main class="site_main">
        <div class="container">
            <!-- --------first row ------------->
            <div class="row">
                <ProductCard :product="product" :key="product.id" v-for="product in products" />


            </div>




        </div>


    </main>
</template>

<style lang="scss"></style>
