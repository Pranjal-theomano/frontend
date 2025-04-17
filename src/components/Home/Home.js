import React from 'react';
import './Home.css'; // You'll need to create this CSS file
import dataEngineering from '../../assets/aiml.jpg';
import mobileDevelopment from '../../assets/mobile.png';
import devOps from '../../assets/devops.png';
import devops_service from '../../assets/devops_service.jpg';
import remoteTeam from '../../assets/remote_team.jpg';
import mvpDevelopment from '../../assets/mvp_development.jpg';
import gameDevelopment from '../../assets/game_development.jpg';
import web3 from '../../assets/iot.jpg';
import automation from '../../assets/Automation.jpg';
import orderManagementImg from '../../assets/order_management.jpg';
import cryptoPaymentsImg from '../../assets/crypto.jpg';
import finTechImg from '../../assets/fin_tech.jpg';
import ventilationImg from '../../assets/smart_ventilation.jpg';
import reactLogo from '../../assets/svgs/react_icon.svg';
import angularLogo from '../../assets/svgs/angular.svg';
import vueLogo from '../../assets/svgs/vue.svg';
import dotnetLogo from '../../assets/svgs/net.svg';
import javaLogo from '../../assets/svgs/java.svg';
import pythonLogo from '../../assets/svgs/python.svg';
import nextjsLogo from '../../assets/svgs/nextjs.svg';
import nodejsLogo from '../../assets/svgs/nodejs.svg';
import androidLogo from '../../assets/svgs/android.svg';
import iosLogo from '../../assets/svgs/ios.svg';
import flutterLogo from '../../assets/svgs/flutter.svg';
import unityLogo from '../../assets/svgs/unity.svg';
import gcpLogo from '../../assets/svgs/gcp.svg';
import azureLogo from '../../assets/svgs/azure.svg';
import awsLogo from '../../assets/svgs/aws.svg';
import wordpressLogo from '../../assets/svgs/wordpress.svg';

import apica from '../../assets/corousel/apica.png';
import connectel from '../../assets/corousel/connectel.png';
import aws from '../../assets/corousel/aws.png';
import gcp from '../../assets/corousel/gcp.png';
import azure from '../../assets/corousel/azure.png';
import nibe from '../../assets/corousel/nibe.png';
import qopla from '../../assets/corousel/qopla.png';
import theomano from '../../assets/theomanologo2.png';

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="what-we-do">
          <h2 className="section-label">WHAT WE DO</h2>
          <h1 className="main-title">IT consulting and software engineering</h1>
          <p className="description">
            We cover the entire software development process, from product
            vision discussion to application design and software enhancement.
          </p>
          
          <div className="features">
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Remote team extension</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Custom software development</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Offices - Multiple Locations</span>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>AI & ML</h3>
            <h4>Data Engineering</h4>
            <img src={dataEngineering} alt="Data Engineering" />
          </div>
          <div className="service-card">
            <h3>Web &</h3>
            <h4>Mobile Development</h4>
            <img src={mobileDevelopment} alt="Mobile Development" />
          </div>
          <div className="service-card">
            <h3>DevOps</h3>
            <h4>Azure AWS & GCP</h4>
            <img src={devOps} alt="DevOps" />
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="carousel">
          <div className="carousel-track">
            <div className="carousel-slide">
              <img src={apica} alt="Apica" />
            </div>
            <div className="carousel-slide">
              <img src={connectel} alt="Connectel" />
            </div>
            <div className="carousel-slide">
              <img src={aws} alt="AWS" />
            </div>
            <div className="carousel-slide">
              <img src={gcp} alt="GCP" />
            </div>
            <div className="carousel-slide">
              <img src={azure} alt="Microsoft Azure" />
            </div>
            <div className="carousel-slide">
              <img src={nibe} alt="NIBE" />
            </div>
            <div className="carousel-slide">
              <img src={qopla} alt="Qopla" />
            </div>
            <div className="carousel-slide">
              <img src={apica} alt="Apica" />
            </div>
            <div className="carousel-slide">
              <img src={connectel} alt="Connectel" />
            </div>
            <div className="carousel-slide">
              <img src={aws} alt="AWS" />
            </div>
            <div className="carousel-slide">
              <img src={gcp} alt="GCP" />
            </div>
            <div className="carousel-slide">
              <img src={azure} alt="Microsoft Azure" />
            </div>
            <div className="carousel-slide">
              <img src={nibe} alt="NIBE" />
            </div>
            <div className="carousel-slide">
              <img src={qopla} alt="Qopla" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <h3 className="section-subtitle">OUR SERVICES</h3>
          <h2 className="section-title">We provide best services</h2>
          <p className="section-description">
            Our consulting process begins with a thorough assessment of your
            current infrastructure, workflows, and pain points.
          </p>
          <button className="learn-more-btn">Learn More ↗</button>
        </div>

        <div className="services-cards">
          <div className="service-card-large">
            <img src={remoteTeam} alt="Remote Team Extension" />
            <h3>Remote Team Extension</h3>
            <p>Stay ahead of the curve in-depth market analysis.</p>
            <button className="arrow-btn">↗</button>
          </div>

          <div className="service-card-large">
            <img src={mvpDevelopment} alt="MVP Development" />
            <h3>MVP Development</h3>
            <p>We have a best team for your shopping websites.</p>
            <button className="arrow-btn">↗</button>
          </div>

          <div className="service-card-large">
            <img src={gameDevelopment} alt="Game Development" />
            <h3>Game Development</h3>
            <p>Navigating organizational change can be complex.</p>
            <button className="arrow-btn">↗</button>
          </div>

          <div className="service-card-large">
            <img src={web3} alt="Web 3.0 & IoT" />
            <h3>Web 3.0 & IoT</h3>
            <p>We create vibrant, intuitive and minimalist branding.</p>
            <button className="arrow-btn">↗</button>
          </div>

          <div className="service-card-large wide">
            <img src={automation} alt="Automation & Prompt Engineering" />
            <div className="card-content">
              <h3>Automation & Prompt Engineering</h3>
              <p>Success requires a proactive strategic approach to business development.</p>
              <ul className="feature-list">
                <li>Customized Growth</li>
                <li>Market Penetration</li>
              </ul>
              <button className="arrow-btn">↗</button>
            </div>
          </div>

          <div className="service-card-large wide">
            <img src={devops_service} alt="DevOps Services" />
            <div className="card-content">
              <h3>DevOps Services</h3>
              <p>We are your partners in today's markets</p>
              <ul className="feature-list">
                <li>Industry Insights</li>
                <li>Optimize Resources</li>
              </ul>
              <button className="arrow-btn">↗</button>
            </div>
          </div>
        </div>
      </section>

      <section className="success-stories">
        <div className="success-stories-container">
          <div className="success-stories-content">
            <span className="concept-label">FROM CONCEPT TO</span>
            <h2 className="stories-title">Success Stories</h2>
            <p className="stories-description">
              Discover how top startups and SMEs use FiftyFive Tech to design
              and develop applications that engage, educate, and convert users.
            </p>
          </div>
          <button className="launch-mvp-btn">
            Launch your MVP
            <span className="arrow">↗</span>
          </button>
        </div>
      </section>

      <section className="case-studies">
        <div className="case-studies-grid">
          <div className="case-study-card">
            <img src={orderManagementImg} alt="Order Management System" />
            <div className="tags">
              <span className="tag">Food Tech</span>
              <span className="tag">Mobile and Web Development</span>
            </div>
            <h3>Order Management System</h3>
            <p>Developed a unified Point of Sale platform integrating third-party channels, with hybrid mobile apps using React Native, customizable web applications, and seamless cloud-based restaurant management for efficient operations.</p>
            <button className="arrow-btn">↗</button>
          </div>

          <div className="case-study-card">
            <img src={cryptoPaymentsImg} alt="Cryptocurrency Payments" />
            <div className="tags">
              <span className="tag">FinTech</span>
              <span className="tag">Affiliate Flow System</span>
            </div>
            <h3>Cryptocurrency Payments</h3>
            <p>Delivered a robust Merchant Payment system and Affiliate Flow system, enhancing cryptocurrency buying, selling, secure transactions, and third-party integrations for the client's crypto platform using Blockchain technology.</p>
            <button className="arrow-btn">↗</button>
          </div>

          <div className="case-study-card">
            <img src={finTechImg} alt="FinTech Platform" />
            <div className="tags">
              <span className="tag">FinTech</span>
              <span className="tag">Customer Relationship Management</span>
            </div>
            <h3>FinTech Platform</h3>
            <p>Configured third-party tools, updated documentation, enhanced frontend, validated and localized views, rationalized features, resolved bugs, implemented Notification and NordNet Linking services, and integrated CRM tool with COB links.</p>
            <button className="arrow-btn">↗</button>
          </div>
          <div className="case-study-card dark">
            <img src={ventilationImg} alt="Smart Air Ventilation" />
            <div className="case-study-content">
              <div className="tags">
                <span className="tag">Energy</span>
                <span className="tag">Web and Mobile Development</span>
              </div>
              <h3>Smart Air Ventilation</h3>
              <p>Developed a cross-platform mobile app with a new UI, integrating ventilation systems for improved air quality. Technologies used: C#, Kotlin, Swift, Flutter, GetX, and a clean architecture for efficient development.</p>
            </div>
            <button className="arrow-btn">→</button>
          </div>
        </div>
      </section>

      <section className="technologies-section">
        <div className="technologies-header">
          <h3 className="section-subtitle">HOW WE WORK</h3>
          <h2 className="section-title">Technology we offer</h2>
        </div>

        <div className="technologies-grid">
          <div className="technology-card">
            <img src={reactLogo} alt="React.js" className="tech-logo" />
            <h3>React.js</h3>
            <p>Redux, React - Native, ThreeJS, NextJS</p>
          </div>

          <div className="technology-card">
            <img src={angularLogo} alt="Angular" className="tech-logo" />
            <h3>Angular</h3>
            <p>NgRx, NGRX, MobX, Formly, Ionic</p>
          </div>

          <div className="technology-card">
            <img src={vueLogo} alt="Vue.js" className="tech-logo" />
            <h3>Vue.js</h3>
            <p>Vue.js, Vuex, Vue Router, Vue Meta</p>
          </div>

          <div className="technology-card">
            <img src={dotnetLogo} alt=".NET" className="tech-logo" />
            <h3>.NET</h3>
            <p>ASP.NET Core, MVC, Azure</p>
          </div>

          <div className="technology-card">
            <img src={javaLogo} alt="Java" className="tech-logo" />
            <h3>Java</h3>
            <p>Spring Framework, Kafka, Redis</p>
          </div>

          <div className="technology-card">
            <img src={pythonLogo} alt="Python" className="tech-logo" />
            <h3>Python</h3>
            <p>Django, FastAPI, Kubernetes, MySQL</p>
          </div>

          <div className="technology-card">
            <img src={nextjsLogo} alt="Next.js" className="tech-logo" />
            <h3>Next.js</h3>
            <p>JavaScript React Node.js</p>
          </div>

          <div className="technology-card">
            <img src={nodejsLogo} alt="Node.js" className="tech-logo" />
            <h3>Node.js</h3>
            <p>NestJS, Koa, PostgreSQL, AWS</p>
          </div>

          <div className="technology-card">
            <img src={androidLogo} alt="Android" className="tech-logo" />
            <h3>Android</h3>
            <p>MVP, MVVM, JUnit, SQLite+ Room</p>
          </div>

          <div className="technology-card">
            <img src={iosLogo} alt="iOS" className="tech-logo" />
            <h3>iOS</h3>
            <p>C/Swift, SnapKit, GCD, MapKit</p>
          </div>

          <div className="technology-card">
            <img src={flutterLogo} alt="Flutter" className="tech-logo" />
            <h3>Flutter</h3>
            <p>Bloc, Clean Architecture, Navigator 2.0</p>
          </div>

          <div className="technology-card">
            <img src={unityLogo} alt="Unity" className="tech-logo" />
            <h3>Unity</h3>
            <p>Neural Network NLP, TensorFlow</p>
          </div>

          <div className="technology-card">
            <img src={gcpLogo} alt="GCP" className="tech-logo" />
            <h3>GCP</h3>
            <p>Google Computer Engine, Kubernetes</p>
          </div>

          <div className="technology-card">
            <img src={azureLogo} alt="Azure" className="tech-logo" />
            <h3>Azure</h3>
            <p>Azure, Azure AI, Azure IoT hub</p>
          </div>

          <div className="technology-card">
            <img src={awsLogo} alt="AWS" className="tech-logo" />
            <h3>AWS</h3>
            <p>Amazon EC2, Amazon S3, Amazon</p>
          </div>

          <div className="technology-card">
            <img src={wordpressLogo} alt="WordPress" className="tech-logo" />
            <h3>WordPress</h3>
            <p>Html, CSS, PHP, Page Builders</p>
          </div>
        </div>
        
      </section>

      <section className="footer-cta">
        <div className="footer-cta-left">
          <img src={theomano} alt="FiftyFive Technologies" className="footer-logo" />
          <p className="footer-description">
            We provide the expertise and support to propel your business forward.
          </p>
          <div className="footer-email-form">
            <input type="email" placeholder="Enter Your Email" className="email-input" />
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>

        <div className="footer-cta-right">
          <h2 className="footer-title">Let's get started on something great</h2>
          <p className="footer-subtitle">
            Our team of IT experts looks forward to meeting with you and providing valuable insights tailored to your business.
          </p>
          <button className="appointment-btn">Get an appointment now</button>
          
          <div className="stats-container">
            <div className="stat-item">
              <h3>5</h3>
              <p>Hours</p>
              <span>Response Time</span>
            </div>
            <div className="stat-item">
              <h3>91%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-item">
              <h3>300+</h3>
              <p>IT Professionals</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Prompt Engineering</li>
              <li>Game Deveopemnt</li>
              <li>MVP Development</li>
              <li>Web 3.0 & IOT</li>
              <li>Remote Team</li>
              <li>DevOps</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Hire a developer</h3>
            <ul>
              <li>Front-end</li>
              <li>Back-end</li>
              <li>Mobile</li>
              <li>Cloud & Platforms</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Case Studies</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Offices</h3>
            <div className="office-locations">
              <div className="location">
                <span className="country">INDIA:</span> 37B - Thinkvalley , Sector 32 Gurgaon Haryana - 122002
              </div>
              <div className="location">J-2, Seema Sandesh, Jaipur Rajasthan 302004</div>
              <div className="location">Incuspaze Co-Work, 408, 4th Floor, Apollo Premier, Indore (MP) 452010</div>
              <div className="location">
                <span className="country">UK:</span> Wework, 33 Queen Street, London, England, EC4R 1AP
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href=" "><span className="social-icon">YouTube</span></a>
            <a href=" "><span className="social-icon">Twitter</span></a>
            <a href=" "><span className="social-icon">Instagram</span></a>
            <a href=" "><span className="social-icon">LinkedIn</span></a>
          </div>
          <div className="copyright">
            © 2025 All rights reserved by FIFTYFIVE TECHNOLOGIES
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home; 