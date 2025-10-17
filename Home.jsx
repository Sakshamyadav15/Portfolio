import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="portfolio-container">
      <div className="decorative-background">
        <div className="dots-grid dots-grid-1" />
        <div className="dots-grid dots-grid-2" />
        <div className="border-box border-box-1" />
        <div className="border-box border-box-2" />
        <div className="border-box border-box-3" />
      </div>

      <section className="hero-section">
        <div className="content-wrapper">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="title-normal">Elias is a </span>
                <span className="title-accent">web designer </span>
                <span className="title-normal">and </span>
                <span className="title-accent">front-end developer</span>
              </h1>
              <p className="hero-description">
                He crafts responsive websites where technologies meet creativity
              </p>
              <button className="btn-primary">Contact me!!</button>
            </div>
            <div className="hero-image-wrapper">
              <div className="logo-outline">
                <div className="logo-part logo-part-left">
                  <div className="logo-square" style={{ left: "39px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "39px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "78px" }} />
                  <div className="logo-square" style={{ left: "39px", top: "78px" }} />
                </div>
                <div className="logo-part logo-part-right">
                  <div className="logo-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "39px", top: "78px" }} />
                  <div className="logo-square" style={{ left: "39px", top: "39px" }} />
                  <div className="logo-square" style={{ left: "39px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "78px" }} />
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a668da7957a1d1121d16f6ceae682ab02ade1dcf?width=914"
                alt="Elias profile"
                className="hero-image"
              />
              <div className="dots-grid hero-dots" />
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">projects</span>
              </h2>
              <div className="title-line" />
            </div>
            <a href="#" className="view-all-link">View all ~~&gt;</a>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2596e0521f62bf001b8cf53a68c6c3e4c703151b?width=661"
                alt="ChertNodes project"
                className="project-image"
              />
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">SCSS</span>
                <span className="tag">Python</span>
                <span className="tag">Flask</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">ChertNodes</h3>
                <p className="project-description">Minecraft servers hosting</p>
                <div className="project-buttons">
                  <button className="btn-primary btn-small">Live &lt;~&gt;</button>
                  <button className="btn-secondary btn-small">Cached &gt;=</button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/50e1d29b95640240d70a4dd43175562fb6cc30e4?width=661"
                alt="ProtectX project"
                className="project-image"
              />
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Express</span>
                <span className="tag">Discord.js</span>
                <span className="tag">Node.js</span>
              </div>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">SCSS</span>
                <span className="tag">Python</span>
                <span className="tag">Flask</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">ProtectX</h3>
                <p className="project-description">Discord anti-crash bot</p>
                <div className="project-buttons">
                  <button className="btn-primary btn-small">Live &lt;~&gt;</button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/982716bffffcd9dda58fe4d9d6cfd573c14c3131?width=661"
                alt="Kahoot project"
                className="project-image"
              />
              <div className="project-tags">
                <span className="tag">CSS</span>
                <span className="tag">Express</span>
                <span className="tag">Node.js</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">Kahoot Answers Viewer</h3>
                <p className="project-description">Get answers to your kahoot quiz</p>
                <div className="project-buttons">
                  <button className="btn-primary btn-small">Live &lt;~&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">skills</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="skills-grid">
            <div className="skills-decorative">
              <div className="dots-grid skills-dots-1" />
              <div className="dots-grid skills-dots-2" />
              <div className="border-box skills-box-1" />
              <div className="border-box skills-box-2" />
              <div className="logo-large">
                <div className="logo-large-part logo-large-left">
                  <div className="logo-large-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "57px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "28px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "57px" }} />
                </div>
                <div className="logo-large-part logo-large-right">
                  <div className="logo-large-square" style={{ left: "28px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "28px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "57px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "57px" }} />
                </div>
              </div>
            </div>

            <div className="skills-blocks">
              <div className="skill-block">
                <div className="skill-header">Languages</div>
                <div className="skill-divider" />
                <div className="skill-items">
                  <span className="skill-item">TypeScript</span>
                  <span className="skill-item">Lua</span>
                  <span className="skill-item">Python</span>
                  <span className="skill-item">JavaScript</span>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-header">Databases</div>
                <div className="skill-divider" />
                <div className="skill-items">
                  <span className="skill-item">SQLite</span>
                  <span className="skill-item">PostgreSQL</span>
                  <span className="skill-item">Mongo</span>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-header">Other</div>
                <div className="skill-divider" />
                <div className="skill-items">
                  <span className="skill-item">HTML</span>
                  <span className="skill-item">CSS</span>
                  <span className="skill-item">EJS</span>
                  <span className="skill-item">SCSS</span>
                  <span className="skill-item">REST</span>
                  <span className="skill-item">Jinja</span>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-header">Tools</div>
                <div className="skill-divider" />
                <div className="skill-items">
                  <span className="skill-item">VSCode</span>
                  <span className="skill-item">Neovim</span>
                  <span className="skill-item">Linux</span>
                  <span className="skill-item">Figma</span>
                  <span className="skill-item">XFCE</span>
                  <span className="skill-item">Arch</span>
                  <span className="skill-item">Git</span>
                  <span className="skill-item">Font Awesome</span>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-header">Frameworks</div>
                <div className="skill-divider" />
                <div className="skill-items">
                  <span className="skill-item">React</span>
                  <span className="skill-item">Vue</span>
                  <span className="skill-item">Disnake</span>
                  <span className="skill-item">Discord.js</span>
                  <span className="skill-item">Flask</span>
                  <span className="skill-item">Express.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">about-me</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                Hello, i'm Elias! I'm a self-taught front-end developer based in
                Kyiv, Ukraine. I can develop responsive websites from scratch
                and raise them into modern user-friendly web experiences.
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p>
              <button className="btn-primary">Read more -&gt;</button>
            </div>
            <div className="about-image-wrapper">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/40179677c15c5b737b75c3bff11e024b4bec5bc4?width=678"
                alt="About Elias"
                className="about-image"
              />
              <div className="dots-grid about-dots-1" />
              <div className="dots-grid about-dots-2" />
              <div className="about-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">contacts</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="contact-grid">
            <p className="contact-description">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </p>
            <div className="contact-box">
              <h3 className="contact-box-title">Message me here</h3>
              <div className="contact-links">
                <a href="#" className="contact-link">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24.1641 7.65906C22.543 6.87826 20.8325 6.32099 19.0751 6.00114C19.0592 5.99832 19.0428 6.00076 19.0283 6.0081C19.0137 6.01544 19.0017 6.02733 18.9938 6.04214C18.7735 6.45211 18.5298 6.98835 18.3595 7.40816C16.4651 7.10643 14.5383 7.10643 12.6439 7.40816C12.4539 6.9405 12.239 6.48443 12.0002 6.04214C11.9922 6.02749 11.9801 6.01574 11.9656 6.00842C11.9511 6.0011 11.9348 5.99856 11.9189 6.00114C10.1611 6.31928 8.45021 6.87684 6.82991 7.65906C6.81605 7.66461 6.80445 7.67504 6.7971 7.68858C3.55651 12.7706 2.66745 17.7279 3.10339 22.623C3.10495 22.6459 3.11901 22.6689 3.1362 22.6836C5.02325 24.1507 7.13396 25.2708 9.37832 25.9962C9.39417 26.0014 9.4112 26.0013 9.42693 25.9957C9.44267 25.99 9.45629 25.9793 9.46582 25.965C9.94707 25.2763 10.3752 24.5498 10.7439 23.7856C10.7516 23.7699 10.7543 23.752 10.7514 23.7345C10.7486 23.7171 10.7405 23.7011 10.7283 23.6889C10.7202 23.6809 10.7107 23.6747 10.7002 23.6708C10.027 23.3993 9.37503 23.0731 8.7502 22.6951C8.73275 22.6847 8.71977 22.6677 8.71395 22.6476C8.70814 22.6274 8.70993 22.6057 8.71895 22.5869C8.72427 22.5747 8.73231 22.564 8.74239 22.5557C8.87364 22.4524 9.00489 22.3442 9.12989 22.236C9.14093 22.2266 9.15418 22.2206 9.16821 22.2186C9.18225 22.2166 9.19655 22.2186 9.20957 22.2245C13.3017 24.1858 17.7314 24.1858 21.7735 22.2245C21.787 22.2183 21.8018 22.2162 21.8164 22.2182C21.831 22.2202 21.8448 22.2264 21.8563 22.236C21.9813 22.3442 22.1126 22.4524 22.2438 22.5557C22.2544 22.5639 22.263 22.5747 22.2687 22.5872C22.2744 22.5996 22.277 22.6134 22.2764 22.6272C22.2758 22.641 22.2719 22.6544 22.2651 22.6663C22.2584 22.6781 22.2489 22.688 22.2376 22.6951C21.6142 23.0765 20.9614 23.4024 20.286 23.6692C20.2752 23.6733 20.2655 23.6798 20.2574 23.6883C20.2493 23.6968 20.243 23.7071 20.2391 23.7184C20.2355 23.7294 20.2341 23.741 20.2349 23.7525C20.2357 23.7641 20.2387 23.7754 20.2438 23.7856C20.6188 24.5482 21.0485 25.2763 21.5204 25.965C21.5299 25.9793 21.5435 25.99 21.5593 25.9957C21.575 26.0013 21.592 26.0014 21.6079 25.9962C23.856 25.2731 25.9701 24.1528 27.8594 22.6836C27.8688 22.6768 27.8767 22.6677 27.8824 22.6572C27.8881 22.6467 27.8914 22.635 27.8922 22.623C28.4141 16.9637 27.0188 12.0474 24.1954 7.69022C24.1925 7.68302 24.1883 7.67653 24.1829 7.67116C24.1775 7.66579 24.1711 7.66167 24.1641 7.65906ZM11.3549 19.6417C10.1221 19.6417 9.10801 18.4544 9.10801 16.9982C9.10801 15.5403 10.1033 14.353 11.3549 14.353C12.6158 14.353 13.6205 15.5502 13.6017 16.9982C13.6017 18.4544 12.6064 19.6417 11.3549 19.6417ZM19.661 19.6417C18.4298 19.6417 17.4142 18.4544 17.4142 16.9982C17.4142 15.5403 18.4095 14.353 19.661 14.353C20.922 14.353 21.9282 15.5502 21.9079 16.9982C21.9079 18.4544 20.922 19.6417 19.661 19.6417Z" fill="#ABB2BF"/>
                  </svg>
                  <span>!Elias#3519</span>
                </a>
                <a href="#" className="contact-link">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF"/>
                  </svg>
                  <span>elias@elias.me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-divider" />
        <div className="content-wrapper">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                </div>
                <span className="footer-name">Elias</span>
                <span className="footer-email">elias@elias-dev.ml</span>
              </div>
              <p className="footer-tagline">Web designer and front-end developer</p>
            </div>
            <div className="footer-media">
              <h4 className="footer-media-title">Media</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="GitHub">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="#ABB2BF"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Figma">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 16C16 15.1159 16.3687 14.2681 17.0251 13.643C17.6815 13.0179 18.5717 12.6667 19.5 12.6667C20.4283 12.6667 21.3185 13.0179 21.9749 13.643C22.6313 14.2681 23 15.1159 23 16C23 16.8841 22.6313 17.7319 21.9749 18.357C21.3185 18.9821 20.4283 19.3333 19.5 19.3333C18.5717 19.3333 17.6815 18.9821 17.0251 18.357C16.3687 17.7319 16 16.8841 16 16ZM9 22.6667C9 21.7826 9.36875 20.9348 10.0251 20.3096C10.6815 19.6845 11.5717 19.3333 12.5 19.3333H16V22.6667C16 23.5507 15.6313 24.3986 14.9749 25.0237C14.3185 25.6488 13.4283 26 12.5 26C11.5717 26 10.6815 25.6488 10.0251 25.0237C9.36875 24.3986 9 23.5507 9 22.6667ZM16 6V12.6667H19.5C20.4283 12.6667 21.3185 12.3155 21.9749 11.6904C22.6313 11.0652 23 10.2174 23 9.33333C23 8.44928 22.6313 7.60143 21.9749 6.97631C21.3185 6.35119 20.4283 6 19.5 6H16ZM9 9.33333C9 10.2174 9.36875 11.0652 10.0251 11.6904C10.6815 12.3155 11.5717 12.6667 12.5 12.6667H16V6H12.5C11.5717 6 10.6815 6.35119 10.0251 6.97631C9.36875 7.60143 9 8.44928 9 9.33333ZM9 16C9 16.8841 9.36875 17.7319 10.0251 18.357C10.6815 18.9821 11.5717 19.3333 12.5 19.3333H16V12.6667H12.5C11.5717 12.6667 10.6815 13.0179 10.0251 13.643C9.36875 14.2681 9 15.1159 9 16Z" fill="#ABB2BF"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Discord">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24.1641 7.65906C22.543 6.87826 20.8325 6.32099 19.0751 6.00114C19.0592 5.99832 19.0428 6.00076 19.0283 6.0081C19.0137 6.01544 19.0017 6.02733 18.9938 6.04214C18.7735 6.45211 18.5298 6.98835 18.3595 7.40816C16.4651 7.10643 14.5383 7.10643 12.6439 7.40816C12.4539 6.9405 12.239 6.48443 12.0002 6.04214C11.9922 6.02749 11.9801 6.01574 11.9656 6.00842C11.9511 6.0011 11.9348 5.99856 11.9189 6.00114C10.1611 6.31928 8.45021 6.87684 6.82991 7.65906C6.81605 7.66461 6.80445 7.67504 6.7971 7.68858C3.55651 12.7706 2.66745 17.7279 3.10339 22.623C3.10495 22.6459 3.11901 22.6689 3.1362 22.6836C5.02325 24.1507 7.13396 25.2708 9.37832 25.9962C9.39417 26.0014 9.4112 26.0013 9.42693 25.9957C9.44267 25.99 9.45629 25.9793 9.46582 25.965C9.94707 25.2763 10.3752 24.5498 10.7439 23.7856C10.7516 23.7699 10.7543 23.752 10.7514 23.7345C10.7486 23.7171 10.7405 23.7011 10.7283 23.6889C10.7202 23.6809 10.7107 23.6747 10.7002 23.6708C10.027 23.3993 9.37503 23.0731 8.7502 22.6951C8.73275 22.6847 8.71977 22.6677 8.71395 22.6476C8.70814 22.6274 8.70993 22.6057 8.71895 22.5869C8.72427 22.5747 8.73231 22.564 8.74239 22.5557C8.87364 22.4524 9.00489 22.3442 9.12989 22.236C9.14093 22.2266 9.15418 22.2206 9.16821 22.2186C9.18225 22.2166 9.19655 22.2186 9.20957 22.2245C13.3017 24.1858 17.7314 24.1858 21.7735 22.2245C21.787 22.2183 21.8018 22.2162 21.8164 22.2182C21.831 22.2202 21.8448 22.2264 21.8563 22.236C21.9813 22.3442 22.1126 22.4524 22.2438 22.5557C22.2544 22.5639 22.263 22.5747 22.2687 22.5872C22.2744 22.5996 22.277 22.6134 22.2764 22.6272C22.2758 22.641 22.2719 22.6544 22.2651 22.6663C22.2584 22.6781 22.2489 22.688 22.2376 22.6951C21.6142 23.0765 20.9614 23.4024 20.286 23.6692C20.2752 23.6733 20.2655 23.6798 20.2574 23.6883C20.2493 23.6968 20.243 23.7071 20.2391 23.7184C20.2355 23.7294 20.2341 23.741 20.2349 23.7525C20.2357 23.7641 20.2387 23.7754 20.2438 23.7856C20.6188 24.5482 21.0485 25.2763 21.5204 25.965C21.5299 25.9793 21.5435 25.99 21.5593 25.9957C21.575 26.0013 21.592 26.0014 21.6079 25.9962C23.856 25.2731 25.9701 24.1528 27.8594 22.6836C27.8688 22.6768 27.8767 22.6677 27.8824 22.6572C27.8881 22.6467 27.8914 22.635 27.8922 22.623C28.4141 16.9637 27.0188 12.0474 24.1954 7.69022C24.1925 7.68302 24.1883 7.67653 24.1829 7.67116C24.1775 7.66579 24.1711 7.66167 24.1641 7.65906ZM11.3549 19.6417C10.1221 19.6417 9.10801 18.4544 9.10801 16.9982C9.10801 15.5403 10.1033 14.353 11.3549 14.353C12.6158 14.353 13.6205 15.5502 13.6017 16.9982C13.6017 18.4544 12.6064 19.6417 11.3549 19.6417ZM19.661 19.6417C18.4298 19.6417 17.4142 18.4544 17.4142 16.9982C17.4142 15.5403 18.4095 14.353 19.661 14.353C20.922 14.353 21.9282 15.5502 21.9079 16.9982C21.9079 18.4544 20.922 19.6417 19.661 19.6417Z" fill="#ABB2BF"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="footer-copyright">© Copyright 2022. Made by Elias</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
