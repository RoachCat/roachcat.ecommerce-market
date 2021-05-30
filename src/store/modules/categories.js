import axios from "axios";

export default {
    namespaced: true,
    state: {
        allCategories: null,
        sidebarCategoryInfo: null
    },
    getters: {},
    mutations: {
        setAllCategories(state, response) {
            state.allCategories = response
        },
        setSidebarCategoryInfo(state, response) {
            state.sidebarCategoryInfo = response
        }
    },
    actions: {
        async getAllCategories({ commit }) {
            try {
                let response = await axios.get(
                    process.env.VUE_APP_MERCADOLIBRE_ROUTE +
                    `/sites/MCO/categories`
                );
                if (response.status === 200) {
                    commit("setAllCategories", response.data);
                }
                return response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getSidebarCategoryInfo({ commit }, categoryId) {
            try {
                let response = await axios.get(
                    process.env.VUE_APP_MERCADOLIBRE_ROUTE +
                    `/categories/${categoryId}`
                );
                if (response.status === 200) {
                    commit("setSidebarCategoryInfo", response.data);
                }
                return response.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
