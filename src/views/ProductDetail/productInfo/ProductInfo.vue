<template>
  <div class="product-info">
    <div class="info-container">
      <h1 class="info-container__title">{{ product.title }}</h1>
      <p class="info-container__price">{{ product.price | price }}</p>
      <label for="quantity" class="quantity">
        Cantidad:
        <input id="quantity" type="number" min="0" class="quantity__input" />
      </label>
      <article class="description-article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit
        quod, autem magni rerum porro dignissimos recusandae molestiae officia
        quasi consequuntur id commodi quo quos cupiditate numquam dolorem magnam
        necessitatibus libero saepe illum qui similique. Alias nostrum iure
        sapiente inventore numquam tempora quae reprehenderit, molestiae nemo
        quod autem necessitatibus facilis vero cupiditate eum rem itaque? Totam
        nulla, numquam incidunt in nemo provident mollitia at enim officia et
        voluptatibus reprehenderit ut illum, maxime sed fuga iste dolores.
        Doloremque dignissimos dolores illo voluptate accusamus ratione, rem
        illum, architecto sed fugit similique eveniet itaque labore deleniti
        iusto ipsum distinctio. Repellendus quaerat maiores aut voluptas at
        eius. Quod atque quasi rerum vitae nulla, neque, eius eaque voluptatum
        soluta dolorem aliquid adipisci? Molestias, aspernatur nam?
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: ["product"],
  data() {
    return {};
  },
  created() {
    console.log(this.product);
  },
};
</script>

<style lang="scss" scoped>
.product-info {
  display: flex;
  justify-content: center;
  width: 45%;
  margin-top: 50px;
  text-align: left;
}

.info-container {
  width: 70%;
  height: fit-content;
  background-color: $product-info-background;
  border-radius: 12px;
  padding: 50px;
  &__title {
    margin-top: 0px;
  }
  &__price {
    color: $sidebar-color;
    font-weight: bold;
    font-size: 26px;
  }
}

.description-article {
  margin-top: 20px;
  line-height: 23px;
}

.quantity {
  font-weight: bold;
  font-size: 16px;
  &__input {
    font-size: 16px;
    border: none;
    height: 1.8em;
    &:focus {
      outline: 0;
    }
  }
}
</style>