import { changeButton } from "../utils/selectors";

class ServiceComponent extends HTMLElement {
  constructor() {
    super();
    // element created

    var button = document.querySelector("#change_theme_button");
    var rr = document.querySelector("#services");
    var rrr = document.body.className;
    button?.addEventListener("click", () => {
      if (rrr === "light") {
        rr?.setAttribute("style", "background-color:#282828");
      }
    });
  }

  // connect component
  connectedCallback() {
    this.innerHTML = `
 <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">Serv<span>i</span>ces</h1>
        <p>React.js developers design and implement user interface components for
           JavaScript-based web and mobile applications using the React
            open-source library ecosystem. These skilled front-end developers are involved in all 
          stages of interface component design, from conception through to final testing! </p>
      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>React developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Nextjs developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
      </div>
    </div>
  </section>
      `;
  }
}

window.customElements.define("service-component", ServiceComponent);
