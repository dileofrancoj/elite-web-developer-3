"use strict";
(() => {
    const name = "fran";
    const PI = 3.14;
    let married = false;
    let counter = null;
    counter = 1;
    const heroes = 20;
    const villans = 21;
    let delta;
    const fran = {
        name: 'franco',
        lastname: 'di leo'
    };
    if (heroes > villans) {
        delta = heroes - villans;
    }
    else {
        delta = Number('1A');
        console.log('typeof(delta)', typeof (delta));
    }
    if (Number.isNaN(delta)) {
        delta = 0;
    }
    console.log(delta);
    let obj = { x: 0 };
    let val = "fran";
    if (typeof val === "number") {
        console.log(`${val.toFixed(2)}`);
    }
    else if (typeof val == 'string') {
        val.toUpperCase();
    }
    const product = "Chaleco de nieve";
    product.toLowerCase();
})();
