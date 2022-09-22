"use strict";
class HeroComponent extends HTMLElement {
    constructor() {
        super();
        // element created
    }
    // connect component
    connectedCallback() {
        this.innerHTML = `
      <section id="hero">
        <div class="hero_container">
          <button id="my_button" type="button">
            Change header style
          </button>
          <div class="parent_with_pic">
            <div class="name_parent">
              <h1>
                Hello, <span></span>
              </h1>
              <h1>
                My Name is <span></span>
              </h1>
              <h1>
                Emad <span></span>
              </h1>
              <a href="#projects" type="button" class="ctaa">
                Portfolio
              </a>
            </div>

           
<img class="primary_img" src="../public/emad2.jpg" />

       
     
          </div>
          <div id="contact_element" class="contact_parent">
            <label>My direct email</label>
            <input placeholder="Contact me" />
          </div>
        </div>
      </section>
    `;
    }
}
window.customElements.define("hero-component", HeroComponent);
