"use strict";
class HeroComponent extends HTMLElement {
    constructor() {
        super();
        // element created
        var header = document.getElementById("header");
    }
    // connect component
    connectedCallback() {
        this.innerHTML = `
      <section id="introduction" >
        <div class="introduction_container">
      
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
            <img class="primary_img" src="../public/emi.png" />
          </div>
       
        </div>
      </section>
    `;
    }
}
window.customElements.define("introduction-component", HeroComponent);
