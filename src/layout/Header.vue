<template>
  <div class="header">
    <div class="header-bar">
      <div class="search-input-container">
        <input
          class="search-input-container__search-input"
          type="text"
          placeholder="Busca un producto..."
          ref="search-input"
        />
        <button class="search-input-container__button" @click="search">
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
  data() {
    return {
      navBarItems: [
        {
          name: "All",
          routeName: "Sidebar",
          icon: "fas fa-bars",
        },
        {
          name: "About",
          routeName: "About",
          icon: "",
        },
      ],
    };
  },
  mounted(){
    this.$refs["search-input"].focus()
  },
  methods: {
    search() {
      console.log("Hola");
    },
    goToSection(sectionName){
      if (sectionName === "Sidebar") {
        this.$emit("displaySidebar", true)        
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  display: flex;
  justify-content: center;
  padding: 45px 0px;
  background-color: $header-color;
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
    &:hover{
      cursor: pointer;
    }
  }
  &__li:last-child {
    border-right: 1px solid #5eaaa8;
  }
}
</style>
