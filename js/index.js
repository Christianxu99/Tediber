'use strict';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

let vue = new Vue({
    el: "#vue",
    data: {
        isHidden: false
    }
})

let order = new Vue({
    el: "#order",

    data() {
        return {
            content: {
                body: [{
                    orderNumber: "405560003",
                    orderDate: "1 mai 2019",
                    orderDispatching: "3 mai 2019",

                }, ]
            }
        }
    },

})

let app = new Vue({
    el: "#app",

    data() {
        return {
            content: {
                body: [{
                        photos: "5.jpg",
                        products: "L’INCROYABLE MATELAS TEDIBER",
                        prices: 750,
                        sizes: "160 x 200",
                        quantities: 1

                    },
                    {

                        photos: "Tediber 0307-retouche.jpg",
                        products: "L’INCROYABLE OREILLER TEDIBER",
                        prices: 85,
                        sizes: "60 x 60",
                        quantities: 2
                    },
                    {

                        photos: "5886_600*600px.jpg",
                        products: "L’INCROYABLE COUETTE TEDIBER",
                        prices: 210,
                        sizes: "240 x 220",
                        quantities: 1
                    },

                ]
            }
        }
    },

})

let shipping = new Vue({
    el: "#shipping",

    data() {
        return {
            content: {
                body: [{
                        title: "ADRESSE DE COLLECTE",
                        type: "POINT RELAIS",
                        orderAdress: "57 rue Jean Pierre Timbaud",
                        orderCity: "PARIS",
                        orderZipcode: "75011",
                        orderCountry: "France"
                    },

                    {
                        title: "VOS COORDONNÉES",
                        name: "Shannon Honniball",
                        phone: "0664262272",

                    },

                    {
                        title: "LIVRAISON ESTIMÉE",
                        dateEstimated: "jeudi 9 mai 2019",


                    },
                    {
                        title: "MODE DE LIVRAISON",
                        typeofship: "livraison standard en point relais",


                    },
                ]
            }
        }
    },

})

let total = new Vue({
    el: "#total",

    data() {
        return {
            content: {
                body: [{
                    subtotal: 1130,
                    delivery : "GRATUIT",
                    total : 1130
                }, ]
            }
        }
    },

})