import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: null,
    productSearched: null,
    pages: 0,
  },
  getters: {
    showAllProducts(state) {
      return state.products;
    },
    showPages(state) {
      return state.pages;
    },
  },
  mutations: {
    setProducts(state, response) {
      state.produts = response;
      if (response.paging) {
        state.pages = Math.ceil(response.paging.total / 50);
      }
    },
    setProductSearched(state, response) {
      state.productSearched = response;
      state.pages = Math.ceil(response.paging.total / 50);
    },
  },
  actions: {
    async getProductById({ commit }, id) {
      try {
        let response = await axios.get(
          process.env.VUE_APP_MERCADOLIBRE_ROUTE +
            `/items/${id}?include_attributes=all`
        );
        if (response.status === 200) {
          commit("setProducts", response.data);
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductsByCategory({ commit }, params) {
      try {
        let response = await axios.get(
          process.env.VUE_APP_MERCADOLIBRE_ROUTE + `/sites/MCO/search`,
          {
            params: params,
          }
        );
        if (response.status === 200) {
          commit("setProducts", response.data);
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductBySearch({ commit }, params) {
      try {
        let response = await axios.get(
          process.env.VUE_APP_MERCADOLIBRE_ROUTE + `/sites/MCO/search`,
          {
            params: params,
          }
        );
        if (response.status === 200) {
          commit("setProductSearched", response.data);
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
