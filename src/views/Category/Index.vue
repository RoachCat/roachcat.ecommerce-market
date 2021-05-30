<template>
  <div class="category">
    <div class="spinner-container" v-if="!thereIsData">
      <Loading />
    </div>
    <template v-else>
      <h1>{{ this.selectedCategory.name }}</h1>
      <div class="category-content">
        <CategorySidebar
          v-if="selectedCategory.children_categories.length > 0"
          :childrenCategories="selectedCategory"
        />
        <CategoryItems :productsByCategory="productsByCategory" />
      </div>
    </template>
  </div>
</template>

<script>
import CategoryItems from "./categoryItems/CategoryItems";
import CategorySidebar from "./categorySidebar/CategorySidebar";
import Loading from "@/components/Loading";

export default {
  name: "Category",
  components: {
    CategoryItems,
    CategorySidebar,
    Loading,
  },
  data() {
    return {
      selectedCategory: null,
      productsByCategory: null,
      thereIsData: false,
    };
  },
  watch: {
    "$route.path": async function () {
      this.thereIsData = false;
      this.getCategoryInfo();
      this.getProductsByCategory();
    },
  },
  async created() {
    await this.getCategoryInfo();
    await this.getProductsByCategory();
  },
  methods: {
    async getCategoryInfo() {
      this.selectedCategory = await this.$store.dispatch(
        "categories/getSidebarCategoryInfo",
        this.$route.params.id
      );
    },
    async getProductsByCategory() {
      let params = {
        category: this.$route.params.id,
      };
      let response = await this.$store.dispatch(
        "products/getProductsByCategory",
        params
      );
      this.productsByCategory = response.results;
      this.thereIsData = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.category-content {
  margin-top: 30px;
    padding: 0px 100px;
  display: flex;
}

@media (min-width: 1500px) {
  .category-content {
    padding: 0px 150px;
  }
}

.spinner-container {
  position: relative;
  width: 100%;
  margin-top: 15%;
}
</style>