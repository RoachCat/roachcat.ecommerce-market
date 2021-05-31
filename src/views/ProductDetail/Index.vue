<template>
  <div class="product-detail">
    <section class="product" v-if="product">
      <ProductImage :product="product" />
      <ProductInfo :product="product"/>
    </section>
  </div>
</template>

<script>
import ProductImage from "./productImage/ProductImage";
import ProductInfo from "./productInfo/ProductInfo"

export default {
  name: "ProductDetail",
  components: {
    ProductImage,
    ProductInfo
  },
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
.product {
  width: 100%;
  max-width: 1500px;
  max-height: calc(100vh - 20vh);
  margin: 0px auto;
  display: flex;
}
</style>