import Vue from "vue";

Vue.filter("price", value => {
    let parsedValue = new Intl.NumberFormat('es-CO').format(value)
    return "$ " + parsedValue;
});