<script>
import { state } from '../state';
export default {
    name: 'ProductCard',
    props: ['product'],
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div @click="$emit('showProduct', product)" class="card">
        <div class="item">
            <img class="a" :src="product.imageA" width="100%" alt="">
            <img class="b" :src="product.imageB" width="100%" alt="">
            <div class="heart">&hearts;</div>
            <div class="discount" :class="product.discount === 'None' ? 'no-display' : ''">{{ product.discount }}</div>
            <div class="eco" :class="product.eco === 'None' ? 'no-display' : ''">{{ product.eco }}</div>
        </div>
        <div class="description">
            <div class="label">{{ product.label }}</div>
            <div class="title">{{ product.title }}</div>
            <div class="price">
                <span class="final_price">{{ product.finalPrice }}&euro;</span>
                <span class="initial_price">{{ product.initialPrice }} &euro;</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.no-display {
    display: none;
}
</style>
