import axios from "axios";

export default {
    namespaced: true,
    state: {
        allCategories: null,
    },
    getters: {},
    mutations: {
        setAllCategories(state, response) {
            state.allCategories = response
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
    },
};
