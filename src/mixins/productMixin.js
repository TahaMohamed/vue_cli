const productMixin = {
  data() {
    return {
      alertMessage: "",
      isAlertTrue: false,
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
export default productMixin;
