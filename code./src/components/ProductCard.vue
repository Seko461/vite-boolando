<script>
export default {
    name: 'ProductCard',
    props: ['imageA', 'imageB', 'discount', 'eco', 'label', 'title', 'finalPrice', 'initialPrice'],
}
</script>

<template>
    <div class="card">
        <div class="item">
            <img class="a" :src="imageA" width="100%" alt="">
            <img class="b" :src="imageB" width="100%" alt="">
            <div class="heart">&hearts;</div>
            <div class="discount">{{ discount }}</div>
            <div class="eco">{{ eco }}</div>
        </div>
        <div class="description">
            <div class="label">{{ label }}</div>
            <div class="title">{{ title }}</div>
            <div class="price">
                <span class="final_price">{{ finalPrice }}&euro;</span>
                <span class="initial_price">{{ initialPrice }} &euro;</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
