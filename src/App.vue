<template>
  <div id="app" class="app">
    <div class="body-overlay" id="body-overlay" ref="body-overlay"></div>
    <Sidebar
      @handleSidebarStatus="handleShowSidebar"
      :sidebarFlag="showSidebar"
      ref="sidebar"
      id="sidebar"
    />
    <Header @displaySidebar="handleShowSidebar" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/layout/Header";
import Sidebar from "@/layout/Sidebar";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
  watch: {
    showSidebar() {
      let bodyOverlay = this.$refs["body-overlay"];
      let sidebar = document.getElementById("sidebar");
      if (this.showSidebar) {
        sidebar.style.left = "0";
        document.body.style.overflow = "hidden"
        bodyOverlay.style.display = "block";
        bodyOverlay.addEventListener("click", () => {
          this.showSidebar = false;
        });
      } else {
        document.body.style.overflow = "initial"
        sidebar.style.left = "-500px";
        bodyOverlay.style.display = "none";
      }
    },
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    handleShowSidebar(data) {
      this.showSidebar = data;
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  background-color: $primary-color;
  // &::-webkit-scrollbar-track {
  //   background-color: rgb(218, 210, 210);
  // }
  // &::-webkit-scrollbar {
  //   width: 10px;
  // }
  // &::-webkit-scrollbar-thumb {
  //   border-radius: 20px;
  //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  //   background-color: rgba(0, 0, 0, 0.1);
  // }
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body-overlay {
  width: 100vw;
  height: 100vh;
  display: none;
  position: fixed;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>
