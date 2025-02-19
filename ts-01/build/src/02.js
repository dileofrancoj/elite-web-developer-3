"use strict";
(() => {
    const ages = [30, 36, 34, 46];
    const names = ["Franco", "Pablito", "Joaquin", "Seba"];
    ages.forEach((age) => {
        console.log('age:', age);
    });
    const product1 = {
        id: 1,
        name: 'Sombrilla de playa',
        price: 95,
        stock: true,
        quantity: 150,
    };
    const product2 = {
        id: 2,
        name: 'Reposera',
        price: 30,
        stock: true,
        quantity: 75,
        label: [
            {
                title: 'Reforzada',
                color: '#6BBB4A'
            }
        ]
    };
    const products = [product1, product2];
    const filterProduct = (products, id) => {
        return products.filter((product) => product.id === id);
    };
    function modifyHeaders(header) {
        header.jwt = 'some-jwt';
    }
})();
