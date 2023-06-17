<template>
  <div class="main-page">
    <div class="container" v-container-width="80">
      <h1>Home Page</h1>
      <p v-font-size="20" v-font-color="'blue'">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like)
      </p>
      <app-content :students="students" />
      <hr />
      <life-cycle />
      <h3>Latest Products</h3>
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
  </div>
</template>

<script>
import AppContent from "@/components/AppContent.vue";
import LifeCycle from "@/components/LifeCycle.vue";
import SingleProduct from "@/components/SingleProduct.vue";
import productMixin from "@/mixins/productMixin";
export default {
  components: {
    SingleProduct,
    AppContent,
    LifeCycle,
  },
  mixins: [productMixin],
  // Local Directives
  directives: {
    containerWidth(el, cmd) {
      el.style.maxWidth = cmd.value + "%";
      el.style.marginRight = "auto";
      el.style.marginLeft = "auto";
    },
  },
  data() {
    return {
      students: ["Ahmed", "Ali", "Sami"],
    };
  },
};
</script>
