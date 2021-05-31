<template>
  <div class="product-image">
    <div class="thumbnail-group">
      <button
        class="thumbnail-container"
        v-for="(image, index) in product.pictures"
        :key="index"
        @click="changeImage(image.url, index)"
      >
        <img class="thumbnail-container__img" :src="image.url" alt="" />
      </button>
    </div>
    <div class="image-container">
      <img
        v-for="(image, index) in product.pictures"
        :key="index"
        class="image-container__img-responsive"
        :src="image.url"
        :alt="product.name"
      />
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
      selectedImageIndex: 0,
    };
  },
  created() {
    this.selectedImage = this.product.pictures[0].url;
  },
  methods: {
    changeImage(urlImage, imgIndex) {
      this.selectedImage = urlImage;
      this.selectedImageIndex = imgIndex;
    },
    returnPhoto() {
      let maxIndex = parseInt(this.product.pictures.length);
      if (this.selectedImageIndex === 0) {
        this.selectedImage = this.product.pictures[maxIndex - 1].url;
        this.selectedImageIndex = maxIndex - 1;
      } else {
        this.selectedImage = this.product.pictures[
          this.selectedImageIndex - 1
        ].url;
        this.selectedImageIndex--;
      }
    },
    turnPhoto() {
      let maxIndex = parseInt(this.product.pictures.length);
      if (this.selectedImageIndex < maxIndex - 1) {
        this.selectedImage = this.product.pictures[
          this.selectedImageIndex + 1
        ].url;
        this.selectedImageIndex++;
      } else {
        this.selectedImage = this.product.pictures[0].url;
        this.selectedImageIndex = 0;
      }
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
  overflow-y: scroll;
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
  height: 550px;
  display: flex;
  align-items: center;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow: hidden;
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__img-responsive {
    display: none;
  }
}

@media (max-width: 1150px) {
  .product-image {
    flex-direction: column;
    align-items: center;
  }
  .image-container {
    width: 90%;
  }
  .thumbnail-group {
    width: 95%;
    height: 20%;
  }
}

@media (max-width: 770px) {
  .image-container {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 90%;
    &__img {
      display: none;
    }
    &__img-responsive {
      display: block;
      scroll-snap-align: start;
      width: 100%;
      height: 100%;
      object-fit: contain;
      flex: 0 0 100%;
      &:target {
        transform: scale(0.8);
      }
    }
  }
  .thumbnail-group {
    display: none;
  }
}
</style>