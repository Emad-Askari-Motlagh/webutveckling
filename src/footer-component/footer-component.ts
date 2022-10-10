class FooterComponent extends HTMLElement {
  constructor() {
    super();
    // element created
  }
  // connect component
  connectedCallback() {
    this.innerHTML = ` <section id="footer">
    <div class="footer_container">
     
      <div class="social_networks">
        <div class="social-icon">
          <div class="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
          </div>
          <div class="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
          </div>
          <div class="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
          </div>
        </div>
      </div>
  
    
    </div>
    <p>Copyright © 2022 Alliancecodes AB. All rights reserved</p>
  </section>`;
  }
}
window.customElements.define("footer-component", FooterComponent);
