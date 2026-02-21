const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const projectCards = [
  { title: 'AI-Powered Phishing Detection SaaS', image: 'images/ABP.png' },
  { title: 'Student Management System', image: 'images/nda project.png' },
  { title: 'Patient Health Record Platform', image: 'images/EHR.png' }
];

const experienceCards = [
  { title: 'AI Web Developer Intern', subtitle: 'WhiteCode Technology Solutions', image: 'images/react.jpeg' },
  { title: 'AWS Intern', subtitle: 'EC2 • S3 • DynamoDB • Lambda', image: 'images/nodejs.jpeg' },
  { title: 'Data Analytics Intern', subtitle: 'Power BI Dashboards', image: 'images/python.jpeg' },
  { title: 'MERN Development', subtitle: 'React • Node • MongoDB', image: 'images/mongodb.jpeg' },
  { title: 'Cloud Deployment', subtitle: 'Scalable Full-Stack Delivery', image: 'images/java.jpeg' },
  { title: 'Technical Leadership', subtitle: 'FESA • ACES • Tectonic', image: 'images/github-removebg-preview.png' }
];

function App() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <h1 className="logo">Hetavi Modi</h1>
          <nav>
            <ul className="menu">
              {navLinks.map((link) => (
                <li key={link.id}><a href={`#${link.id}`}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <aside className="social-bar">
        <a href="https://www.linkedin.com/in/hetavi-modi-68a9ab290/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/HetaviM29" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href="mailto:hetavimodi29@gmail.com"><i className="fa-regular fa-envelope"></i></a>
        <a href="https://hetavimodi-portfolio.vercel.app/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
      </aside>

      <main>
        <section id="home" className="hero panel">
          <div className="hero-text">
            <h2>Welcome to my Website, here&apos;s who I am and what I do</h2>
            <p>
              I&apos;m currently pursuing a B.E. in Computer Science at Sinhgad Academy of Engineering.
              With hands-on experience in <strong>MERN stack</strong>, <strong>AI/ML</strong>, and <strong>AWS cloud</strong>,
              I build practical, high-impact software solutions. I have delivered AI-powered websites,
              worked on real-time applications, and optimized workflows through automation.
            </p>
            <p>
              I&apos;m always eager to learn, experiment, and take on challenging projects that combine
              engineering excellence with user-focused design.
            </p>
            <a className="gradient-btn" href="#portfolio">Portfolio <i className="fa-regular fa-circle-right"></i></a>
          </div>
          <div className="hero-photo-wrap">
            <img src="images/profile2.jpeg" alt="Hetavi Modi" className="hero-photo" />
          </div>
        </section>

        <section id="portfolio" className="panel section-block">
          <h3 className="section-title">Portfolio</h3>
          <p className="section-subtitle">Check out some of my work</p>
          <div className="grid three">
            {projectCards.map((card) => (
              <article className="card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="card-body"><h4>{card.title}</h4></div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="panel section-block">
          <h3 className="section-title">Experience</h3>
          <p className="section-subtitle">Roles & technologies I&apos;ve worked with</p>
          <div className="grid three">
            {experienceCards.map((card) => (
              <article className="card mini" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="card-body">
                  <h4>{card.title}</h4>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel section-block">
          <h3 className="section-title">Contact</h3>
          <p className="section-subtitle">Submit the form below to get in touch with me!</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <textarea rows="7" placeholder="Enter your message"></textarea>
            <button type="submit" className="gradient-btn">Let&apos;s connect!</button>
          </form>
        </section>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
