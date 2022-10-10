"use strict";
class LayoutComponent extends HTMLElement {
    constructor() {
        super();
        // element created
        const script = document.createElement("script");
        script.setAttribute("type", "module");
        script.setAttribute("src", "../header-component.js");
    }
    // connect component
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
      <div class="module">
      <header-component ></header-component>
      <slot name='with-layout'></slot>
      </div>`;
    }
}
window.customElements.define("layout-component", LayoutComponent);
