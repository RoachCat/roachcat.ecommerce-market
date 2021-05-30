<template>
  <div class="product-card" @click="goToProduct(product.id)">
    <div class="img-container">
      <img class="img-container__img" :src="product.thumbnail" :alt="product.name" />
    </div>
    <hr class="product-card__wrapper-line" />
    <div class="info-container">
      <p class="info-container__title underline-title" :title="product.title">
        {{ product.title | snippet }}
      </p>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 250px;
  margin: 0px 18px 20px 18px;
  padding-top: 2px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
  &__wrapper-line {
    margin: 0px auto;
    width: 90%;
    border-width: thin;
    border-color: rgba(226, 219, 219, 0.2);
  }
  &:hover .underline-title {
    text-decoration: underline;
  }
}

.img-container {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    width: 90%;
  }
}
.info-container {
  padding: 5px 15px 15px 15px;
  &__title {
    margin: 0px;
    padding-top: 2px;
    text-align: left;
  }
  &__price {
    font-weight: bold;
    text-align: left;
    margin: 7px 0px 0px 0px;
    color: $sidebar-color;
    font-size: 18px;
  }
}

</style>