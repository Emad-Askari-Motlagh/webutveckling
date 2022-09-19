class AboutComponent extends HTMLElement {
  constructor() {
    super();
    // element created
  }
  // connect component
  connectedCallback() {
    this.innerHTML = ` <section id="about">
      <div class="col-left">
        <div class="about-img">
          <img src="../public/work.png" alt="img">
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>me</span></h1>
        <h2>Front End Developer</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque
          repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt
          exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni!
          Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt
          reprehenderit libero enim!</p>
        <a href="#" class="cta">Download Resume</a>
      </div>
  </section>`;
  }
}
window.customElements.define("about-component", AboutComponent);
