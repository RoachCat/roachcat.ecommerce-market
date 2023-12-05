<template>
  <div class="list-items">
    <div class="list-items-container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <Pagination />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";

export default {
  name: "ListItems",
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    ProductCard,
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
.list-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-items-container {
  width: 85%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
