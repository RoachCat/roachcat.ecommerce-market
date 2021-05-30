<template>
  <div class="category-items">
    <ProductCard
      v-for="product in productsByCategory"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  name: "CategoryItems",
  props: ["productsByCategory"],
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.category-items {
  width: 75%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>