import Vue from "vue";

Vue.filter("snippet", value => {
    let snippet = value.length >= 40 ? value.slice(0, 40) + "..." : value
    return snippet;
});