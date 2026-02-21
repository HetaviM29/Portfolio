const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const projectCards = [
  { title: 'AI-Powered Phishing Detection System (SaaS)', subtitle: 'ML & Cybersecurity', image: 'images/ai-phishing.png', url: 'https://github.com/HetaviM29/AI-resistent-Phishing-and-deception-framework' },
  { title: 'Student Management System', subtitle: 'MERN Stack', image: 'images/nda project.png', url: 'https://www.nrutyashreedanceacademy.in/' },
  { title: 'Patient Health Record (PHR) System', subtitle: 'MERN Stack', image: 'images/EHR.png', url: 'https://github.com/HetaviM29/EHR-System' }
];

const experienceCards = [
  { title: 'AI Web Developer Intern', subtitle: 'WhiteCode Technology Solutions', image: 'images/ai-web-developer.jpg' },
  { title: 'AWS Intern', subtitle: 'TechEasy Consultancy', image: 'images/aws-intern.jfif' },
  { title: 'Data Analytics & Power BI Intern', subtitle: 'Vodafone Idea Foundation', image: 'images/data-analytics-and-powerbi.png' },
  { title: 'Vice President - FESA', subtitle: 'First Year Student Association', image: 'images/vp-logo.avif' },
  { title: 'MERN Stack', subtitle: 'React • Node • MongoDB', image: 'images/mern.png' },
  { title: 'Languages', subtitle: 'C++ • Python • Java • JavaScript', image: 'images/langauges.png' },
  { title: 'Event Head - Techtonic', subtitle: 'National-Level Techfest', image: 'images/event-head.png' },
  { title: 'ACES Member', subtitle: 'Computer Engineering Association', image: 'images/aces.png' }
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
        <a href="https://www.linkedin.com/in/hetavi-modi-68a9ab290/" target="_blank" rel="noreferrer" className="social-link">
          <i className="fa-brands fa-linkedin-in"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/HetaviM29" target="_blank" rel="noreferrer" className="social-link">
          <i className="fa-brands fa-github"></i>
          <span>GitHub</span>
        </a>
        <a href="mailto:hetavimodi29@gmail.com" className="social-link">
          <i className="fa-regular fa-envelope"></i>
          <span>Email</span>
        </a>
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
            <img src="images/Profile Img.jpeg" alt="Hetavi Modi" className="hero-photo" />
          </div>
        </section>

        <section id="portfolio" className="panel section-block">
          <h3 className="section-title">Portfolio</h3>
          <p className="section-subtitle">Check out some of my work</p>
          <div className="grid three">
            {projectCards.map((card) => (
              <a href={card.url} target="_blank" rel="noreferrer" className="card-link" key={card.title}>
                <article className="card">
                  <img src={card.image} alt={card.title} />
                  <div className="card-body">
                    <h4>{card.title}</h4>
                    {card.subtitle && <p>{card.subtitle}</p>}
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="panel section-block">
          <h3 className="section-title">Experience</h3>
          <p className="section-subtitle">Roles & technologies I&apos;ve worked with</p>
          <div className="grid four exp-grid">
            {experienceCards.map((card) => (
              <div className="exp-item" key={card.title}>
                <div className="exp-card">
                  <img src={card.image} alt={card.title} />
                </div>
                <p className="exp-label">{card.title}</p>
                {card.subtitle && <p className="exp-subtitle">{card.subtitle}</p>}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="panel section-block">
          <h3 className="section-title">Contact</h3>
          <p className="section-subtitle">Get in touch with me!</p>
          
          <div className="contact-info">
            <a href="tel:+919529623267" className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91 9529623267</span>
              </div>
            </a>
            
            <a href="mailto:hetavimodi29@gmail.com" className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">hetavimodi29@gmail.com</span>
              </div>
            </a>
          </div>
          
          <div className="resume-download">
            <p>Want to know more about me?</p>
            <a href="files/Hetavi Modi Resume Nov 2025.pdf" download className="gradient-btn download-btn">
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
