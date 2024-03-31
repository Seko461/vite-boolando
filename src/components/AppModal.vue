<script>
import { state } from '../state';
export default {
    name: 'AppModal',
    props: ['product'],
    data() {
        return {
            state
        }
    }

}
</script>
<template>
    <div class="container" @click="$emit('closeModal')">
        <div class="modal">
            <h4>{{ product.label }}</h4>
        </div>
    </div>
</template>
<style scoped>
.container {
    background-color: #151515da;
    /* position: fixed;
    inset: 0;*/
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>