<template>
  <div class="products">
    <h2>Our Products</h2>
    <div class="grid-container">
      <div
        class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4 grid-x-wrapper"
      >
        <single-product
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></single-product>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "@/components/SingleProduct.vue";
export default {
  name: "MyStore",
  components: {
    SingleProduct,
  },
  data() {
    return {
      name: "Orange",
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>

<style lang="scss">
@import "https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"; // please enter your current path
@import "../assets/css/products.scss"; // please enter your current path
</style>
