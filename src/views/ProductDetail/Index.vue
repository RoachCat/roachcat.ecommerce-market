<template>
  <div class="product-detail">
    <div class="product" v-if="product">
      <img :src="product.pictures[0].url" :alt="product.name" />
      <p>{{ product.title }}</p>
      <p>{{ product.price | price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      product: null,
    };
  },
  async created() {
    let product = await this.$store.dispatch(
      "products/getProductById",
      this.$route.params.id
    );
    this.product = product;
  },
};
</script>

<style lang="scss" scoped>
</style>