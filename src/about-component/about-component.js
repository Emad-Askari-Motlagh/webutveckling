"use strict";
class AboutComponent extends HTMLElement {
    constructor() {
        super();
        // element created
    }
    // connect component
    connectedCallback() {
        this.innerHTML = `<div id="about">
      <div class="col-left">
        <div class="about-img">
          <img src="../public/w.svg" alt="img">
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>me</span></h1>
        <h2>Front End Developer</h2>
        <p>As an artist, my first love will always be crafting the visual. 
          Through Juno I was able to leverage my creative skills with an incredible web development toolkit,
           and now I spend most days branding,
           designing and building out web interfaces as a freelancer.</p>
           <button class="download-button">
           <a download="custom-filename.jpg" href="../public/cv17.jpg" >Download Resume
          </a>
           </button>
      
      </div>
  </div>`;
    }
}
window.customElements.define("about-component", AboutComponent);
