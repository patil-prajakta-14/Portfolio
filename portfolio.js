
document.addEventListener("DOMContentLoaded", () => {
    const varOcg = document.createElement("div");
    varOcg.innerHTML = `
  

  <body>
    <!-- HEADER -->
    <header class="fixed-top py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="m-0">Prajakta Patil</h1>
        <nav class="d-none d-lg-block">
          <ul class="d-flex gap-4 list-unstyled m-0">
            <li><a href="#home" class="text-dark text-decoration-none fw-bold">Home</a></li>
            <li><a href="#about" class="text-dark text-decoration-none fw-bold">About</a></li>
            <li><a href="#education" class="text-dark text-decoration-none fw-bold">Education</a></li>
            <li><a href="#skills" class="text-dark text-decoration-none fw-bold">Skills</a></li>
            <li><a href="#projects" class="text-dark text-decoration-none fw-bold">Projects</a></li>
            <li><a href="#contact" class="text-dark text-decoration-none fw-bold">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="header container-fluid hero-section d-flex flex-column justify-content-center align-items-center" id="home">
      <p class="fs-4" style="color: #BEFF01;">Welcome to My Portfolio</p>
      <h1 class="display-4">Hello, I'm <b>Prajakta Patil</b></h1>
      <div class="mt-4">
        <a href="#projects" class="btn px-4 py-2" style="background-color:#BEFF01;">Projects</a>
        <a href="#contact" class="btn px-4 py-2 border border-dark" style="color: #BEFF01;">Hire Me</a>
      </div>
      ${[window.addEventListener("load", function () {
      const header = document.querySelector(".header");
      header.style.backgroundImage = "url('./images/background/imgi_33_mainhomedeep.jpg')";
      header.style.backgroundSize = "cover";
      header.style.backgroundPosition = "center";
      header.style.backgroundRepeat = "no-repeat";
      header.style.color = "white";
       })
    ]}
    </section>

    <!-- ABOUT -->
    <section class="container my-5" id="about">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4">
          <img src="./images/illustration/Profile-pic.jpg" alt="Prajakta Patil" 
            style="height: 400px;
            width: 400px;
            margin: 0 auto;
            display: block;
            border-radius: 50%;">
        </div>
        <div class="col-lg-6">
          <h2>About Me</h2>
          <p>
            My name is <b>Prajakta Patil</b>, and I am currently pursuing my Bachelor's degree in
                                    Computer Engineering at Trinity College of Engineering and Research,Pune. I am a
                                    passionate web developer with a keen interest in creating dynamic and responsive web
                                    applications. I have a strong foundation in HTML, CSS, JavaScript, and React and I
                                    am constantly exploring new technologies to enhance my skills. I have worked on
                                    several projects of web development, including building personal websites and
                                    contributing to open-source projects.I'm passionate about learning and growing as a
            developer.I'm always curious to learn new tools and skills
          </p>
          <a href="#contact" class="btn px-4 py-2" style="background-color:#BEFF01;">Hire Me</a>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="container-fluid pb-5" style="background-color: #F4F5F5;" id="education">
      <div class="container pt-5">
        <h2 class="text-center">Education<hr class="underline"></h2>
        <div class="row justify-content-center g-4 mt-4">
          ${[
            { title: "Bachelor of Engineering", year: "(2023-2026)", desc: "Pursuing BE at TCOER, Pune.", score: "7.86 CGPA" },
            { title: "HSC", year: "(2021-2022)", desc: "Completed HSC from Hon.BSV College, Akole(kh).", score: "89.33%" },
            { title: "SSC", year: "(2019-2020)", desc: "Completed SSC from Hon.BSV School, Akole(kh).", score: "89.43%" },
            
        ].map(edu => `
            <div class="col-md-4">
              <div class="edu-div text-center h-100">
                <h5>${edu.title}</h5>
                <p><i>${edu.year}</i></p>
                <hr/>
                <p>${edu.desc}</p>
                <p><i>${edu.score}</i></p>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="container-fluid pb-5" id="skills">
      <div class="container pt-5">
        <h2 class="text-center mb-5">My Skills<hr class="underline"></h2>
        <div class="row g-4 justify-content-center">
          ${[
            { name: "HTML-5", img: "html-5.png", desc: "Structuring web pages and content." },
            { name: "CSS-3", img: "css-3.png", desc: "Styling and responsive design." },
            { name: "Bootstrap", img: "bootstrap.png", desc: "Responsive and fast UI framework." },
            { name: "JavaScript", img: "js.png", desc: "Adds interactivity and logic." },
            { name: "React", img: "physics.png", desc: "Component-based UI library." },
            { name: "jQuery", img: "jQuery.png", desc: "Simplified DOM manipulation." },
            { name: "Redux", img: "Redux.png", desc: "State management library." }
        ].map(skill => `
            <div class="col-md-4 col-lg-3">
              <div class="skills-info text-center h-100">
                <img src="./images/illustration/${skill.img}" class="skills-img mb-3" alt="${skill.name}">
                <h5>${skill.name}</h5>
                <p>${skill.desc}</p>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="container-fluid pb-5" style="background-color: #F4F5F5;" id="projects">
      <div class="container pt-5">
        <h2 class="text-center mb-4">My Projects<hr class="underline"></h2>
        <div class="row g-4">
          ${[
            { name: "CSS Project", img: "CSS-Project.png", demo: "https://css-project-2-psi.vercel.app/", code: "https://github.com/patil-prajakta-14/CSS--Project-2" },
            { name: "Bootstrap Project 1", img: "Bootstrap-1.png", demo: "https://bootstrap-project-1-theta.vercel.app/", code: "https://github.com/patil-prajakta-14/Bootstrap-Project-1" },
            { name: "Bootstrap Project 2", img: "Bootstrap-2.png", demo: "https://bootstrap-project-1-h3eb.vercel.app/", code: "https://github.com/patil-prajakta-14/Bootstrap-Project-2" },
            { name: "React Props", img: "Props.png", demo: "https://props-project-five.vercel.app/", code: "https://github.com/patil-prajakta-14/Props-project" },
            { name: "React Routing", img: "Routing.png", demo: "https://routing-project-tau.vercel.app/", code: "https://github.com/patil-prajakta-14/Routing-project" },
            { name: "Dashboard", img: "Dashboard.png", demo: "https://dashboard-seven-amber-25.vercel.app/", code: "https://github.com/patil-prajakta-14/Dashboard" },
            { name: "Redux Project", img: "Redux-project.png", demo: "https://redux-project-fawn-theta.vercel.app/", code: "https://github.com/patil-prajakta-14/Redux-Project" },
            { name: "To do App (Redux)", img: "To-do.png", demo: "https://cw-day-3.vercel.app/", code: "https://github.com/patil-prajakta-14/cw-day-3" },


        ].map(proj => `
            <div class="col-md-4">
              <div class="card h-100">
                <img src="./images/illustration/${proj.img}" class="card-img-top" alt="${proj.name}">
                <div class="card-body text-center">
                  <h5>${proj.name}</h5>
                  <a href="${proj.demo}" target="_blank" class="btn m-1" style="background-color:#BEFF01;">View Project</a>
                  <a href="${proj.code}" target="_blank" class="btn m-1 border" style="border-color:#BEFF01;">View Code</a>
                </div>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-dark text-light py-5" id="contact">
      <div class="container">
        <div class="row text-center text-md-start">
          <div class="col-md-4 mb-4">
            <h5>About Me</h5>
            <p>I'm a passionate full-stack web developer focused on React, JavaScript, and UI/UX design.</p>
          </div>
          <div class="col-md-4 mb-4">
            <h5>Projects</h5>
            <ul class="list-unstyled">
              <li><a href="https://dashboard-seven-amber-25.vercel.app/" class="text-light text-decoration-none">Dashboard</a></li>
              <li><a href="https://props-project-five.vercel.app/" class="text-light text-decoration-none">Furniture Website</a></li>
              <li><a href="https://routing-project-tau.vercel.app/" class="text-light text-decoration-none">Pizzos</a></li>
              <li><a href="https://css-project-2-psi.vercel.app/" class="text-light text-decoration-none">NGO's</a></li>
            </ul>
          </div>
          <div class="col-md-4 mb-4">
            <h5>Contact Me</h5>
            <ul class="list-unstyled">
              <li><a href="mailto:prajaktapatil1492004@gmail.com" class="text-light text-decoration-none"><i class="fa-solid fa-envelope"></i> Mail</a></li>
              <li><a href="https://www.linkedin.com/in/prajakta-patil-224543320/" class="text-light text-decoration-none"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://github.com/patil-prajakta-14" class="text-light text-decoration-none"><i class="fa-brands fa-github"></i> GitHub</a></li>
              <li><a href="https://t.me/prajaktapatil1492004" class="text-light text-decoration-none"><i class="fa-brands fa-telegram"></i> Telegram</a></li>
            </ul>
          </div>
        </div>
        <hr class="border-light">
        <p class="text-center mb-0">&copy; 2025 Prajakta. All rights reserved.</p>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>`;
    document.body.appendChild(varOcg);
});
