<template>
  <div class="product-box column">
    <a href="#" class="product-item">
      <div class="product-item-image">
        <img :src="product.thumbnail" :alt="product.title" />
        <div class="product-item-image-hover"></div>
      </div>
      <div class="product-item-content">
        <div class="product-item-category">{{ product.category }}</div>
        <div class="product-item-title">{{ product.title }}</div>
        <div class="product-item-price">${{ product.price }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SingleProduct",
  props: {
    product: {
      type: Object,
    },
  },
};
</script>
