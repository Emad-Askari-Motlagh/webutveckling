"use strict";
var innerHTML = ` <div id="error-modal" >
<div class="error-modal-container">
 <span>OBS! Sorry, Page didnt find</span>
</div>`;
class ErrorComponent extends HTMLElement {
  constructor() {
    super();
    // element created
    const css = document.createElement("link");
    css.href = "./style.css";
    css.rel = "stylesheet";
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });
    // Append it to the shadow root
    // Create text node and add word count to it

    const text = document.createElement("span");
    text.id = "error-modal";
    // console.log(text.id);
    shadow.appendChild(text);
  }
  // connect component
  connectedCallback() {
    const ee = document.querySelector(".error-modal");

    console.log(ee);
  }
}

window.customElements.define("error-component", ErrorComponent);
