<template>
  <div class="product-image">
    <button class="img-button__left" @click="returnPhoto">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="img-button__right" @click="turnPhoto">
      <i class="fas fa-chevron-right"></i>
    </button>
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
    <div class="image-container" ref="image-container">
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
      numberOfImages: this.product.pictures.length,
      imageContainer: null,
      imageContainerInitialWidth: null,
      imageContainerWidth: null,
      maxScroll: null,
      actualScroll: null,
      cancelLeft: false,
      cancelRight: false,
    };
  },
  created() {
    this.selectedImage = this.product.pictures[0].url;
  },
  mounted() {
    this.imageContainer = this.$refs["image-container"];
    let touchStart;
    let touchEnd;
    this.imageContainer.addEventListener("touchstart", (event) => {
      touchStart = event.changedTouches[0].clientX;
    });
    this.imageContainer.addEventListener("touchend", (event) => {
      touchEnd = event.changedTouches[0].clientX;
      if (Math.floor(touchStart - touchEnd) > 200) {
        this.turnPhoto();
      } else if (Math.floor(touchStart - touchEnd) < -200) {
        this.returnPhoto();
      }
    });
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
        this.selectedImage =
          this.product.pictures[this.selectedImageIndex - 1].url;
        this.selectedImageIndex--;
      }
    },
    turnPhoto() {
      let maxIndex = parseInt(this.product.pictures.length);
      if (this.selectedImageIndex < maxIndex - 1) {
        this.selectedImage =
          this.product.pictures[this.selectedImageIndex + 1].url;
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
  position: relative;
  margin-top: 50px;
  width: 55%;
  display: flex;
  justify-content: space-around;
}

.thumbnail-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 90vh;
  overflow-y: scroll;
  &:hover::-webkit-scrollbar-track {
    background-color: #efefef;
  }
  &:hover::-webkit-scrollbar-thumb {
    border-radius: 20px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
}

.thumbnail-container {
  width: 5em;
  height: 5em;
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

.thumbnail-button {
  width: 8em;
  height: 8em;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
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
  width: 75%;
  height: 550px;
  display: flex;
  align-items: center;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow: hidden;
  &__img {
    width: 100%;
    height: 100%;
    margin-left: 1%;
    object-fit: contain;
  }
  &__img-responsive {
    display: none;
  }
}

.img-button {
  &__left,
  &__right {
    display: none;
    position: absolute;
    top: 50%;
    border: none;
    background: none;
    font-size: 40px;
    color: rgb(180, 180, 180);
  }
  &__left {
    left: 30px;
  }
  &__right {
    right: 30px;
  }
}

@media (max-width: 1150px) {
  .image-container {
    width: 90%;
    align-items: center;
    margin-right: 1%;
  }
}

@media (max-width: 770px) {
  .product-image {
    width: 100%;
    margin-top: 20px;
  }
  .image-container {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 90%;
  }
  .img-button {
    &__left,
    &__right {
      display: block;
    }
  }
  .thumbnail-group {
    display: none;
  }
}
</style>