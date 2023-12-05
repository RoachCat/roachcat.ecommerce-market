<template>
  <div class="products-sought">
    <div class="spinner-container" v-if="!thereIsData">
      <Loading />
    </div>
    <template v-else>
      <h1>Resultados de la búsqueda: {{ $route.params.value }}</h1>
      <section class="products-sought-content">
        <CategorySidebar :childrenCategories="selectedCategory" />
        <ListItems :products="products" />
      </section>
    </template>
  </div>
</template>

<script>
import ListItems from "@/components/ListItems";
import CategorySidebar from "@/components/CategorySidebar";
import Loading from "@/components/Loading";

export default {
  name: "ProductsSought",
  components: {
    ListItems,
    CategorySidebar,
    Loading,
  },
  data() {
    return {
      products: null,
      thereIsData: false,
      selectedCategory: null,
    };
  },
  watch: {
    "$route.path": async function () {
      this.thereIsData = false;
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      let params = {
        q: this.$route.params.value,
      };
      let response = await this.$store.dispatch(
        "products/getProductBySearch",
        params
      );
      let categoryId = response.filters[0].values[0].path_from_root[0].id;
      let categories = await this.$store.dispatch(
        "categories/getSidebarCategoryInfo",
        categoryId
      );
      this.selectedCategory = categories;
      this.products = response.results;
      this.thereIsData = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.products-sought-content {
  width: 100%;
  max-width: 1500px;
  display: flex;
  margin: 0px auto;
}

.spinner-container {
  position: relative;
  width: 100%;
  margin-top: 15%;
}
</style>
