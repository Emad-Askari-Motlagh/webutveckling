import { change_style_function } from "./utils/style-modifiers.js";
var toggle = document.querySelector(".header .nav-bar .nav-list .parent");
var mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
var menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
var header = document.querySelector(".header.container");
var contact = document.querySelector("#contact_element");
var moreToggle = document.querySelector(".unorder_list_navbar");
var my_button = document.getElementById("my_button");
var my_header = document.getElementById("my_header");
if (my_button) {
    my_button.addEventListener("click", function () {
        my_header && change_style_function(my_header);
    });
}
if (toggle) {
    toggle.addEventListener("click", function () {
        if (moreToggle) {
            moreToggle.classList.forEach(function (res) {
                if (res) {
                    if (res.includes("navbar_list1") && moreToggle) {
                        moreToggle.classList.remove("navbar_list1");
                    }
                    else {
                        moreToggle && moreToggle.classList.add("navbar_list1");
                    }
                }
            });
        }
    });
}
