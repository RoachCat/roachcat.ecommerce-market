<template>
  <div class="header">
    <div class="header-bar">
      <p class="home" @click="goToSection('Home')">Soy un Home jasjasajs</p>
      <div class="search-input-container">
        <input
          class="search-input-container__search-input"
          type="text"
          placeholder="Busca un producto..."
          ref="search-input"
          v-model="searchData"
          @keyup.enter="searchItems"
        />
        <button class="search-input-container__button" @click="searchItems">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <nav class="nav-bar">
      <ul class="sections-container">
        <li
          class="sections-container__li"
          v-for="(item, index) in navBarItems"
          :key="index"
          :name="item.name"
          @click="goToSection(item.routeName)"
        >
          <i :class="item.icon"></i>
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    cleanInputFlag: {
      type: Number,
    },
  },
  data() {
    return {
      navBarItems: [
        {
          name: "Categorías",
          routeName: "Sidebar",
          icon: "fas fa-bars",
        },
        {
          name: "About",
          routeName: "About",
          icon: "",
        },
      ],
      searchData: "",
    };
  },
  watch: {
    cleanInputFlag() {
      this.searchData = "";
      localStorage.clear();
    },
  },
  created() {
    if (localStorage.getItem("searchValue")) {
      this.searchData = localStorage.getItem("searchValue");
    }
  },
  mounted() {
    if (this.$route.name === "Home") {
      this.$refs["search-input"].focus();
    }
  },
  methods: {
    async searchItems() {
      if (this.searchData !== "" && this.searchData !== null) {
        this.$router.push({
          name: "ProductsSought",
          params: { value: this.searchData },
        });
      }
      this.$refs["search-input"].blur();
      localStorage.setItem("searchValue", this.searchData);
    },
    goToSection(sectionName) {
      if (sectionName === "Sidebar") {
        this.$emit("displaySidebar", true);
      } else {
        this.$router.push({ name: sectionName });
        this.searchData = "";
        localStorage.clear();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 45px 0px;
  background-color: $header-color;
}

.home {
  top: 35px;
  left: 50px;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
}

.search-input-container {
  width: 40%;
  position: relative;
  &__search-input {
    width: 100%;
    height: 30px;
    font-size: 22px;
    padding: 0px 5px;
    &:focus {
      outline: 0;
    }
  }
  &__button {
    position: absolute;
    padding: 0px;
    right: 0;
    top: 9px;
    background: none;
    border: none;
    color: #918d8d;
    font-size: 16px;
    cursor: pointer;
  }
}

.nav-bar {
  display: flex;
  align-items: center;
  background-color: $nav-bar-color;
  height: 35px;
  padding: 0px 100px;
}
.sections-container {
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  &__li {
    padding: 4px 20px;
    border-left: 1px solid #5eaaa8;
    &:hover {
      cursor: pointer;
    }
  }
  &__li:last-child {
    border-right: 1px solid #5eaaa8;
  }
}
</style>
