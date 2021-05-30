import Vue from "vue";

Vue.filter("price", value => {
    let stringValue = value.toString()
    let parsedValue = 0
    if (stringValue.length === 4) {
        parsedValue = new Intl.NumberFormat('de-DE').format(value)
    } else {
        parsedValue = new Intl.NumberFormat('es-CO').format(value)
    }
    return "$ " + parsedValue;
});