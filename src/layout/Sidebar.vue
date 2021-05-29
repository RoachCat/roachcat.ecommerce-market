<template>
  <div class="sidebar" name="sidebar" ref="sidebar">
    <ul class="categories">
      <li
        class="categories__category"
        v-for="category in allCategories"
        :key="category.id"
        @click="goToCategorySection(category.id)"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["sidebarFlag"],
  name: "Sidebar",
  data() {
    return {
      allCategories: null,
    };
  },
  async created() {
    this.allCategories = await this.$store.dispatch(
      "categories/getAllCategories"
    );
  },
  methods: {
    goToCategorySection(categoryId) {
      console.log(categoryId);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -500px;
  width: 20%;
  height: 100vh;
  background-color: $sidebar-color;
  transition: ease 0.3s all;
  z-index: 10;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    background-color: #579795;
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

.categories {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 15px 20px;
  text-align: left;
  list-style-type: none;
  &__category {
    padding: 5px 0px;
    margin: 3px 0px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>