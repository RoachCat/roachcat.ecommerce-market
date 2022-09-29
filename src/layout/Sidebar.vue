<template>
  <div class="sidebar" name="sidebar" id="sidebar">
    <div class="sidebar-container">
      <h2 class="sidebar-container__title sidebar-container__title--red">Categorías</h2>
      <ul class="categories">
        <li
          class="categories__category"
          v-for="category in allCategories"
          :key="category.id"
          @click="goToCategoryView(category.id)"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
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
    async goToCategoryView(categoryId) {
      this.$router.push({
        name: "Category",
        params: {
          id: categoryId,
        },
      });
      this.hideSidebar();
      this.$emit("handleSearchInputFlag");
    },
    hideSidebar() {
      let sidebar = document.getElementById("sidebar");
      let bodyOverlay = document.getElementById("body-overlay");
      document.body.style.overflow = "initial";
      sidebar.style.left = "-500px";
      bodyOverlay.style.display = "none";
      this.$emit("handleSidebarStatus", false);
      sidebar.scrollTo(0, 0);
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
.sidebar-container {
  padding: 15px 30px;
  &__title {
    text-align: left;
    // margin-left: 30px;
    // margin-bottom: 0px;
  }
}

.categories {
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  text-align: left;
  list-style-type: none;
  &__category {
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
    margin: 3px 0px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>