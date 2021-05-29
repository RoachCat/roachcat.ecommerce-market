<template>
  <div class="product-card" @click="goToProduct(product.id)">
    <div class="img-container">
      <img class="img-container__img" :src="product.thumbnail" alt="" />
    </div>
    <div class="info-container">
      <p class="info-container__title">{{ product.title }}</p>
      <p class="info-container__price">{{ product.price | price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    goToProduct(productId) {
      this.$router.push({
        name: "ProductDetail",
        params: {
          id: productId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  cursor: pointer;
  width: 300px;
  margin: 20px;
}

.img-container {
  height: 80%;
  display: flex;
  align-items: center;
  background-color: white;
  &__img {
    width: 100%;
  }
}
.info-container {
  &__title,
  &__price {
    font-weight: bold;
    text-align: left;
    margin: 5px;
  }
}
</style>