<template>
  <aside class="category-sidebar">
    <div class="categories-container">
      <h3 class="categories-container__title">
        Explora más en {{ childrenCategories.name }}
      </h3>
      <ul class="children-categories">
        <li
          class="children-categories__category"
          v-for="category in childrenCategories.children_categories"
          :key="category.id"
          @click="goToCategoryView(category.id)"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "CategorySidebar",
  props: {
    childrenCategories: {
      type: Object,
    },
  },
  methods: {
    async goToCategoryView(categoryId) {
      this.$router.push({
        name: "Category",
        params: {
          id: categoryId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.category-sidebar {
  width: 25%;
}

.categories-container {
  padding: 0px 20px;
  &__title {
    text-align: left;
    margin-top: 0;
  }
}

.children-categories {
  display: flex;
  flex-direction: column;
  text-align: left;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  &__category {
    margin: 5px 0px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
