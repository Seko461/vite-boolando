<script>
import { state } from '../state';
export default {
    name: 'AppModal',
    props: ['product'],
    data() {
        return {
            state,
            changeImage: true
        }
    },
    methods: {
        changeImage() {
            this.changeImage = !this.changeImage
        }
    }

}
</script>
<template>
    <div class="modal-container" @click="$emit('closeModal')">
        <div class="modal" @click.stop="closeModal">

            <div class="modal-header">
                <button type="button" class="closeBtn" @click="$emit('closeModal')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- bottom -->
            <div class="modal-main">
                <!-- left -->
                <div class="left">
                    <div class="product-images">

                        <div class="image">
                            <img :src="changeImage === true ? product.imageA : product.imageB" alt="">
                            <div class="buttons">
                                <button @click="changeImage()">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                <button @click="changeImage()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        <!-- thumbnail -->
                        <div class="thumbnail">
                            <img @click="changeImage = true" :src="product.imageA" alt=""
                                :style="changeImage === true ? 'opacity: 1' : 'opacity: 0.5'">
                            <img @click="changeImage = false" :src="product.imageB" alt=""
                                :style="changeImage === false ? 'opacity: 1' : 'opacity: 0.5'">
                        </div>
                    </div>
                </div>
                <!-- right -->
                <div class="right">
                    <div class="description">
                        <div class="label">Label: {{ product.label }}</div>
                        <div class="title">{{ product.title }}</div>
                        <div class="price">
                            <span class="final_price">Price: {{ product.finalPrice }}&euro;</span>
                            <span class="initial_price">{{ product.initialPrice }} &euro;</span>
                        </div>
                        <div class="badges">
                            <div class="badge-eco" :class="product.eco === 'None' ? 'no-display' : ''">{{ product.eco }}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>
<style scoped>
.no-display {
    display: none;
}
</style>