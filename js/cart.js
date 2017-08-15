/**
 * Created by dereban on 15.08.2017.
 */
var cart = {};
function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    }
    else {
        $('.main-cart').html('Корзина пуста!');
    }
}
function showCart() {
    if (!isEmpty(cart)) {
        $('.main-cart').html('Корзина пуста!');
    }
    else {
        $.getJSON('goods.json', function (data) {
            var goods = data;
            var out = '';
            for (var id in cart) {
                out += `<button data-id="${id}" class="del-goods">X</button>`;
                out += `<img src="Images/${goods[id].img}">`;
                out += `${goods[id].name }`;
                out += `${cart[id] }`;
                out += `<br>`;
            }
            $('.main-cart').html(out);
            $('.del-goods').on('click', delGoods);
        });
    }
}
function delGoods() {
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function isEmpty(object) {
    for (var key in object)
        if (object.hasOwnProperty(key)) return true;
    return false;
}
$(document).ready(function () {
    loadCart();
});