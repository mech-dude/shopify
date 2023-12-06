/*
window.addEventListener('DOMContentLoaded', (event)=>{
const img = document.createElement("img").src = "http://www.google.com/intl/en_com/images/logo_plain.png";
const appnd = document.querySelector(".GiftBox-LauncherNotification .GiftBox-LauncherCircle .GiftBox-Launcher .hNuUbd");
if(appnd) appnd.appendChild(img);
});
GIFTBOX_CUSTOM_LAUNCHER_ICON = "https:{{ "png-transparent-car-rat-fink-hot-rod-stickerbomb-monsters-car-mammal-face-cat-like-mammal-thumbnail.png" | asset_url }}";
*/


window.GIFTBOX_CUSTOM_UPDATE_CART = () => {
    SLIDECART_UPDATE();
}
window.GIFTBOX_CUSTOM_CART_ITEMS_SELECTORS = ["#slidecarthq .item"];
window.GIFTBOX_CUSTOM_CART_REMOVE_INPUTS_SELECTORS = ["#slidecarthq .item .quantity-selector button.decrease, #slidecarthq .item .quantity-selector input, #slidecarthq .item .quantity-selector button.increase"];