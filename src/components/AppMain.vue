<script >
import ProductCard from './ProductCard.vue';
import { infoCardA } from '../info_cards_a';
import { infoCardB } from '../info_cards_b';

export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {
            infoCardA,
            infoCardB,
        }
    }

}




</script>

<template>
    <main class="site_main">
        <div class="container">
            <!-- --------first row ------------->
            <div class="row">
                <ProductCard :product="product" :key="product.id" v-for="product in infoCardA" />

            </div>
            <!-- --------second row ------------->
            <div class="row">
                <ProductCard :product="product" :key="product.id" v-for="product in infoCardB" />

            </div>



        </div>


    </main>
</template>

<style lang="scss"></style>
