import { change_style_function } from "../utils/style-modifiers.js";
//Create the header class
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        // element created
        //Create the css element
        const css = document.createElement("link");
        css.href = "./style.css";
        css.rel = "stylesheet";
        //Create the script element
        const script = document.createElement("script");
        script.setAttribute("type", "module");
        script.setAttribute("src", "../header-component.js");
        // Create a shadow root
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
          <li><span><a id="home" href="/src/index.html" data-after="Home">Home</a></span></li>
          <li><a  href="/src/form/form_cont.html" data-after="Service">Register</a></li>
          <li><a href="#projects" data-after="Projects">Projects</a></li>
          <li><a href="#about" data-after="About">About</a></li>
          <li ><a href="#contact" data-after="Contact">Contact</a></li>
          <li ><button class='change_theme_button' id='change_theme_button'>Change theme</button> </li>
        </ul>
      </div>
    </div>
</header>
</section>`;
        //Get elements from the dom tree
        var my_button = document.getElementById("my_button");
        var my_header = document.getElementById("my_header");
        var moreToggle = document.querySelector(".unorder_list_navbar");
        var toggle = document.getElementById("header");
        const home = document.getElementById("home");
        var changeButton = document.getElementById("change_theme_button");
        //Get the local storgage value
        const theme = window.localStorage.getItem("theme");
        var changeButton = document.getElementById("change_theme_button");
        //Get the endpoint attribute and set it to anchor tag
        const endpoint = this.getAttribute("endpoint");
        if (home && endpoint) {
            home === null || home === void 0 ? void 0 : home.setAttribute("href", endpoint);
        }
        //Check if button is not null
        if (my_button) {
            //Add click handler
            my_button.addEventListener("click", function () {
                //Set change style function
                my_header && change_style_function(my_header);
            });
        }
        //open and close the menu toggle
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
        //Change the theme of the application to dark
        document.body.classList.toggle("dark");
        changeButton === null || changeButton === void 0 ? void 0 : changeButton.addEventListener("click", () => {
            //Change the theme of the application to light
            document.body.classList.toggle("light");
            if (theme === "light") {
                //Set the new local storage value
                window.localStorage.setItem("theme", "light");
            }
            else
                window.localStorage.setItem("theme", "dark");
        });
    }
}
window.customElements.define("header-component", HeaderComponent);
