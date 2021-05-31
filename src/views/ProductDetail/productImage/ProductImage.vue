<template>
  <div class="product-image">
    <div class="thumbnail-group">
      <button
        class="thumbnail-container"
        v-for="(image, index) in product.pictures"
        :key="index"
        @click="changeImage(image.url)"
      >
        <img class="thumbnail-container__img" :src="image.url" alt="" />
      </button>
    </div>
    <div class="image-container">
      <img
        class="image-container__img"
        :src="selectedImage"
        :alt="product.name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductImage",
  props: ["product"],
  data() {
    return {
      selectedImage: null,
    };
  },
  created() {
    this.selectedImage = this.product.pictures[0].url;
  },
  methods: {
    changeImage(urlImage) {
      this.selectedImage = urlImage;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-image {
  margin-top: 50px;
  width: 55%;
  display: flex;
  justify-content: space-around;
}

.thumbnail-group {
  width: 25%;
  height: 100%;
  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
  }
  &::-webkit-scrollbar-track {
    background-color: #efefef;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.thumbnail-container {
  width: 10em;
  height: 10em;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 6px;
  background-color: white;
  &:not(:first-child) {
    margin: 5px 0px;
  }
  &:hover {
    cursor: pointer;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.image-container {
  width: 65%;
  display: flex;
  align-items: center;
  &__img {
    width: 100%;
  }
}
</style>