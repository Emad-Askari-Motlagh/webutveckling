import { change_style_function } from "./utils/style-modifiers.js";

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    // element created
  }
  // connect component
  connectedCallback() {
    this.innerHTML = `<section><header id="header">
    <div class="nav-bar">
      <div class="brand">
        <a href="#hero">
          <h1 id="my_header"><span>E</span>mad <span>A</span>skareimotlagh</h1>
        </a>
      </div>

      <div class="nav-list">
        <div class="parent">
          <div class="bar"></div>
        </div>
        <ul class="unorder_list_navbar">
          <li><span><a href="#hero" data-after="Home">Home</a></span></li>
          <li><a href="#services" data-after="Service">Services</a></li>
          <li><a href="#projects" data-after="Projects">Projects</a></li>
          <li><a href="#about" data-after="About">About</a></li>
          <li ><a href="#contact" data-after="Contact">Contact</a></li>
        </ul>
      </div>
    </div>
</header>
</section>`;
    var my_button = document.getElementById("my_button");
    var my_header = document.getElementById("my_header");
    var moreToggle = document.querySelector(".unorder_list_navbar");
    var toggle = document.getElementById("header");
    if (my_button) {
      my_button.addEventListener("click", function () {
        my_header && change_style_function(my_header);
      });
    }

    if (toggle) {
      toggle.addEventListener("click", function () {
        console.log("to");
        if (moreToggle) {
          moreToggle.classList.forEach(function (res) {
            if (res) {
              if (res.includes("navbar_list1") && moreToggle) {
                moreToggle.classList.remove("navbar_list1");
              } else {
                moreToggle && moreToggle.classList.add("navbar_list1");
              }
            }
          });
        }
      });
    }
  }
}
window.customElements.define("header-component", HeaderComponent);
