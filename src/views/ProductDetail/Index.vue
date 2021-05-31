<template>
  <div class="product-detail">
    <section class="product" v-if="product">
    <h1 class="product__title">{{product.title}}</h1>
      <ProductImage class="product-image" :product="product" />
      <ProductInfo class="product-info" :product="product"/>
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
  &__title{
    display: none;
  }
}

@media (max-width: 770px) {
  .product{
    flex-direction: column;
    &__title{
      display: block;
      margin-top: 40px;
      margin-bottom: 0px;
    }
  }  
  .product-image{
    width: 100%;
  }
  .product-info{
    width: 100%;
  }
}
</style>