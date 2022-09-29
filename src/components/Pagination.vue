<template>
  <nav class="pagination">
    <div
      class="pagination__page"
      v-for="(page, index) in pagesInPagination"
      :key="index"
      @click="changePage(page)"
    >
      {{ page }}
    </div>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      pages: 0,
      pagesInPagination: [],
      currentPage: 1,
    };
  },
  // watch: {
  //   pages() {
  //     console.log(this.pages);
  //   },
  // },
  created() {
    this.pages = this.$store.getters["products/showPages"];
    this.buildPaginationPanel(this.currentPage);
  },
  methods: {
    buildPaginationPanel(currentPage) {
      this.pagesInPagination = [];
      let pagesToPush;
      if (this.pages <= 10) {
        pagesToPush = this.pages;
      }
      if (currentPage >= 1 || currentPage <= 5) {
        pagesToPush = 10        
      }
      for (let i = 1; i <= pagesToPush; i++) {
        this.pagesInPagination.push(i);
      }
      console.log(currentPage);
      console.log(this.pagesInPagination);
    },
    changePage(page) {
      this.currentPage = page;
      this.buildPaginationPanel(this.currentPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  width: auto;
  height: 50px;
  margin: 20px 0px 50px 0px;
  border: 1px solid red;
  &__page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border-left: 1px solid red;
    border-right: 1px solid red;
    cursor: pointer;
  }
}
</style>