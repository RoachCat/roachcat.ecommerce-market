<template>
  <div class="product-detail">
    <div class="product" v-if="item">
      <img :src="item.pictures[0].url" alt="" />
      <p>{{ item.title }}</p>
      <p>{{ item.price | price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      item: null,
    };
  },
  async created() {
    let item = await this.$store.dispatch(
      "products/getProductById",
      this.$route.params.id
    );
    this.item = item;
  },
};
</script>

<style lang="scss" scoped>
</style>