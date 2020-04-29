import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
// import Social from '../components/Social';

import demo1 from '../assets/images/animation.gif';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                We can work and travel in Europe securely.
              </h1>
              <Scroll type="id" element="demo">
                <a href="#demo" className="btn btn-outline btn-xl">
                  See how it works !
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="demo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">Try it for yourself.</h2>
            <p>Open app with mobile and scan qr codes.</p>
            <a className="badge-link" href="https://medicpass.app/app/">
              medicpass.app/app
            </a>
            <div className="badges">
              <div className="row">
                <div className="col-lg-4">
                  <div class="code">
                    <img src="https://us-central1-health-pass.cloudfunctions.net/api/qr/valid" />
                  </div>
                  <p>Allowed</p>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <div class="code">
                    <img src="https://us-central1-health-pass.cloudfunctions.net/api/qr/invalid" />
                  </div>
                  <p>Restricted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Discover what all the buzz is about!
            </h2>
            <p>
              Our app is available on any mobile device! Download now to get
              started!
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unique Features, Data safety and Accessibility</h2>
          <p className="text-muted">Check out what you can do with this app!</p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Transparency</h3>
                    <p className="text-muted">
                      One authority and a lot of eyes. Certificate can by
                      checked by anyone.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Security</h3>
                    <p className="text-muted">
                      Certificate is cryptographicly signed, contaning basic
                      info and status.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Offline support</h3>
                    <p className="text-muted">
                      For scanning and showing certificate you don't need to
                      look for mobile data.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Accesibility</h3>
                    <p className="text-muted">
                      Application can be used on any device. Certificate can be
                      printed. There is also other options for verification.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Scalability</h3>
                    <p className="text-muted">
                      Easy integration with existing data. Low complexity in
                      infrastructure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Flexibility</h3>
                    <p className="text-muted">
                      Certificate has 24h expiration time. This gives ability
                      for quick response and fast communication during any
                      crisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Start&nbsp;secure&nbsp;future.
          </h2>
          <Scroll type="id" element="contact">
            {/* <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a> */}
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    {/* <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart"></i>
          new friends!
        </h2>
        <Social />
      </div>
    </section> */}

    <Footer />
  </Layout>
);

export default IndexPage;
