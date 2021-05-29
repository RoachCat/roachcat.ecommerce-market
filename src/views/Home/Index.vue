<template>
  <div class="home">
    <div class="products-container">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  name: "Home",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: null,
    };
  },
  async created() {
    let products = await this.$store.dispatch("products/getProductsByCategory");
    this.products = products.results;
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 0px 150px;
}

.products-container {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
