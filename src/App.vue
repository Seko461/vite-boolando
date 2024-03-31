<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import AppModal from './components/AppModal.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppModal
  },
  data() {
    return {
      isModalOpen: false,
      productModal: null
    }
  },
  methods: {
    showProduct(product) {
      console.log('this product is clicked');
      this.isModalOpen = true;
      this.productModal = product;
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :showProduct="showProduct" />
  <AppModal :product="productModal" v-if="isModalOpen" @close-modal="isModalOpen = false" />
  <AppFooter />
</template>

<style ></style>
