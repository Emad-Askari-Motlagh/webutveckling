"use strict";
class ProjectComponent extends HTMLElement {
    constructor() {
        super();
        // element created
    }
    // connect component
    connectedCallback() {
        this.innerHTML = `<section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>Portfolio</h1>
            <h2>Easy order & Alliancecodes AB</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div class="project-img">
            <a href='https://alliancecodes.se'><img src="../public/work.jpg" alt="Work sample1"/></a>
         
            <a href="https://next-test-socket.herokuapp.com">
            <img src="../public/image_6487327-3.jpg" alt="Work sample2">
            </a>
           
            
        </div>
      
      </div>
    </div>
  </section>`;
    }
}
window.customElements.define("project-component", ProjectComponent);
