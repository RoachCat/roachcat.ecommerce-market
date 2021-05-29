import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: null,
    },
    getters: {
        showAllProducts(state) {
            return state.products
        }
    },
    mutations: {
        setProducts(state, response) {
            state.produts = response;
        },
    },
    actions: {
        async getProductsByCategory({ commit }) {
            try {
                let response = await axios.get(
                    process.env.VUE_APP_MERCADOLIBRE_ROUTE +
                    `/sites/MCO/search?category=MCO1648`
                );
                if (response.status === 200) {
                    commit("setProducts", response.data);
                }
                return response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getProductById({ commit }, id) {
            try {
                let response = await axios.get(
                    process.env.VUE_APP_MERCADOLIBRE_ROUTE +
                    `/items/${id}?include_attributes=all`,
                );
                if (response.status === 200) {
                    commit("setProducts", response.data);
                }
                return response.data;
            } catch (error) {
                console.log(error);
            }
        },

    },
};
