import Image from 'next/image';

import Modal from '../Modal'

export default function AppPage() {
  return (
    <main>
      <a className="navbar-brand" id="goTop"></a>
      <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{ backgroundColor: "green" }} id="navbartop">
        <a className="navbar-brand" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="fa fa-bars d-md-none" style={{ fontSize: "medium" }}></span>
        </a> 
        <a className="navbar-brand" href="/">Siniotech</a>
        <a className="navbar-brand  d-md-none" href="tel:+2347016807004"><i className="fa fa-phone"></i></a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#about">ABOUT</a>
            </li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#service">SERVICES</a></li>
            {/* <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="https://mujaware.com/blog">BLOG</a></li> */}
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#portfolio">PORTFOLIO</a></li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#testimonial">TESTIMONIAL</a></li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#training">TRAINING</a></li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
      <nav className="nav-tabs mt-5 d-md-none scrollmenu">
        <a className="nav-link" href="#about">ABOUT</a>
        <a className="nav-link" href="#service">SERVICES</a>
        <a className="nav-link" href="#portfolio">PORTFOLIO</a>
        <a className="nav-link" href="#testimonial">TESTIMONIAL</a>
        <a className="nav-link" href="#training">TRAINING</a>
        <a className="nav-link" href="#contact">CONTACT</a>
        {/* <a className="nav-link" href="https://mujaware.com/blog">BLOG</a> */}
      </nav>

      <div className='container bg-success text-white d-flex justify-content-center align-items-center' style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col-12">
            <h4 className="text-white text-center">Get Your Free Website:</h4>
            <h4 className="text-white text-center">Discover How to Quickly Get More Sales with Your Website</h4><br />
          </div>

          <div className='col-6'>
            <h5>You will be able to:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Save money without hiring web designer or developer.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Get all-done-for-you business website.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Turn your website visitors to leads & customers.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Already set up for 100 clients.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> End soon</li>
            </ul>
          </div>
          <div className='col-6'>
            <Image src={"/images/web-exa.png"} height={100} width={100} alt={"picture"} className='d-block img-fluid img-thumbnail mx-auto' />
          </div>
        </div>
      </div>
      {/* <!--start of optin copy--> */}
      <p className="text-center mt-4"><a className="btn btn-outline-success" href="/apps/leads">Get Yours Now for Free</a></p>

      <div className="jumbotron text-center">
        <h1 className="text-capitalizez" style={{ fontSize: "larger" }}>Are You Looking for a Software Developer/Engineer to Build Your Apps?</h1>
        <p style={{ fontSize: "normal" }} >We help small businesses who want to design and build their apps (web apps or mobile apps), so they can focus on other parts of their business operations</p>
        <p className="text-center mt-4"><a className="btn btn-outline-info font-weight-bold" href="/apps/apply">Claim your FREE 30 Minutes Consultation Call! (Valued at N10,000) <br /> Get in touch now</a></p>  
        {/* <button style={{ fontSize: 20 }} className="btn btn-success  mt-3 text-capitalize" data-toggle="modal"
          data-target="#consultModal">Claim your Free 30 Mins Consultation Call! (valued at N10,000) <br />Get in touch now.</button> */}
      </div>

      <div className="jumbotron text-center">
        <h2>About Us</h2>
        <p>Who we are</p>
      </div>
      <div className="container" id="about">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 card text-center" >
            <p>Siniotech is also specializes on web and mobile application development and other related products or services.</p>
            <p>We started operating several years ago and have gathered more in experience in working with individual, group, organisation and businesses.</p>
            <p>We help small businesses in running adverts and developing web and mobile applications that bring great value to them</p>
            <p>We prided ourselves on the team that have done great jobs in bringing us to this level of professionalism. </p>
            <p>Our team comprises of local and foreign web designers, web developers, and mobile app developer.</p>
            <p>With this team we are able to discern ourselves remarkably from our competitors in many ways.</p>
            <p className="text-center mt-4"><a className="btn btn-outline-success font-weight-bold" href="/apps/apply">Claim your FREE 30 Minutes Consultation Call! (Valued at N10,000) <br /> Get in touch now</a></p>

            {/* <p className="text-center">
              <button className="btn btn-success text-capitalize" data-toggle="modal"
              data-target="#consultModal">Claim your FREE 30 Minutes Consultation Call! (Valued at N10,000) <br /> Get in touch now</button>
            </p> */}
            <br />
          </div>
        </div>
      </div><br /><br />

      <div className="jumbotron text-center">
        <h2>Services</h2>
        <p>What we offer</p>
      </div>
      <div className="container text-center" id="service">
        <div className="row scrollrowss">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card ">
            <div className="card-body">
              <h5 className="card-title">Business Website</h5>
              <p className="card-text">We design and build business website with appealing and intuitive user experience and user interface that help clients to reach more customers and make sales.</p>
              <p><a className="btn btn-outline-success " href="/apps">Learn more</a></p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card ">
            <div className="card-body">
              <h5 className="card-title">Ecommerce Website</h5>
              <p className="card-text">We design and build e-commerce website with appealing and intuitive user experience and user interface that help clients to reach more customers and make sales.</p>
              <p><a className="btn btn-outline-success " href="/apps">Learn more</a></p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card ">
            <div className="card-body">
              <h5 className="card-title">Web & Mobile Apps</h5>
              <p className="card-text">We design and build applications with appealing and intuitive user experience and user interface that help clients to reach more customers and make sales.</p>
              <p><a className="btn btn-outline-success " href="/apps">Learn more</a></p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card ">
            <div className="card-body">
              <h5 className="card-title">Consulting</h5>
              <p className="card-text">We help individuals, organisations or businesses in decision making by providing advisory services and recommendations or
                acting on behalf of our clients in getting their projects done</p>
              <p><a className="btn btn-outline-success" href="/apps">Learn more</a></p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card ">
            <div className="card-body">
              <h5 className="card-title">Coaching</h5>
              <p className="card-text">We coach individuals, organisations or businesses in digital marketing and sales by providing support and guide.</p>
              <p><a className="btn btn-outline-success" href="/apps">Learn more</a></p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "green" }}>Trainings</h5>
              <p className="card-text">We provide digital courses and train our prospective students or clients on digital marketing and sales, website design, web and mobile app development</p>
              <p><a className="btn btn-outline-success" href="/apps">Learn more</a></p>
            </div>
          </div>
        </div>
      </div><br />

      <div className="jumbotron text-center">
        <h2>Portfolio</h2>
        <p>What we have created</p>
      </div>

      <div id="portfolio" className="container text-center">

        <div className="row scrollrowss">

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title d-none">Nigeria</h5>
              <p className="card-text">We had helped several businesses in running their advertisings and publicity digitally</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title d-none">Nigeria</h5>
              <p className="card-text">We had also helped several businesses in setting up their digital marketing and sales funnels
              </p>
            </div>
          </div>


          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title d-none"><strong>Nigeria</strong></h5>
              <p className="card-text">Yes, we built online commerce website to help our clients reach more prospects and customers and make sales online.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title d-none"><strong>Nigeria</strong></h5>
              <p className="card-text">Yes, we built Content Management System (CMS) to help our clients to distrubute and share their contents and informations</p>
            </div>
          </div>



          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title d-none"><strong>Nigeria</strong></h5>
              <p className="card-text">Yes, we had built company or business websites and web apps that convert prospects to leads and customers for our clients </p>
            </div>
          </div>


          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title d-none"><strong>Nigeria</strong></h5>
              <p className="card-text">Yes, we built Database Management System(DMS) to manage businesses or companies data</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 card">
            <div className="card-body">
              <h5 className="card-title d-none">Nigeria</h5>
              <p className="card-text">We built Daily Business Transaction System (DTS) to help our clients manage daily business transaction</p>
            </div>
          </div>

        </div>
      </div><br /><br />



      <div className='jumbotron text-center'>
        <h3>Testimonials</h3>
        <p>What our customers say</p>
      </div>

      <div id="testimonial" className="container carousel slide text-center" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        {/* <!-- The slideshow --> */}
        <div className="carousel-inner">
          <div className="carousel-item active card" style={{ borderColor: "green", height: 130, maxWidth: "100%" }}>
            {/* <!-- <img src="la.jpg" alt="Los Angeles"> --> */}
            <h5>This company is the best. I am so happy with the result!<br /><span>Usman Dauwud, Vice
              President, Jafmuh Info Tech</span></h5>
          </div>
          <div className="carousel-item card" style={{ borderColor: "green", height: 130, maxWidth: "100%" }}>
            {/* <!-- <img src="chicago.jpg" alt="Chicago"> --> */}
            <h5>Thank you... wow!!<br /><span>Muhammad Mutawakkil, Computer Instructor, KCS</span></h5>
          </div>
          <div className="carousel-item card" style={{ borderColor: "green", height: "130px", maxWidth: "100%" }}>
            {/* <!-- <img src="ny.jpg" alt="New York"> --> */}
            <h5>Thank you . Impressive<br /><span>Pharm Bello Salih, CEO/Founder,
              Bushara Pharmacy</span></h5>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>

      </div><br /><br />

      {/* <!-- Container (Contact Section) --> */}
      <div id="contact" className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-5">
            <h2 className="text-center">LOCATION</h2>
            <p><span className="glyphicon glyphicon-map-marker"></span> #704 N-TSG-Makama, Naibawa, Kumbotso LG, Kano
              State, Nigeria</p>
          </div>

          <div className="col-sm-7 slideanim">
            <h2 className="text-center">SUBSCRIBE</h2>
            <form name="subscriber-form" id="subscriber-form">
              <div className="form-group">
                <input type="email" className="form-control" name="email" size={50} placeholder="Email Address"
                  required />
              </div>

              <div className="form-group text-center">
                <button type="submit" className="btn btn-danger" id="subscribe">Subscribe</button><br />
                <p id="subscribe_result" style={{ backgroundColor: 'green', color: "white" }}></p>
              </div>
            </form>
            <p>Subscribe to our free yearly online and offline training on digital marketing and sales and be notified when it is time.</p>
          </div>

        </div>
      </div>
      <hr />


      {/* <!-- Image of location section*/}
      <div className="container-fluid text-center" >
        <Image src='/images/mujawaremap.png' className='d-block img-fluid mx-auto' sizes='100vw' style={{ width: "100%", margin: 10, height: 'auto' }} alt={'map'} width={0} height={0} />
      </div>
      <hr />

      <div className='container bg-success text-white d-flex justify-content-center align-items-center' style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col-12">
            <h4 className="text-white text-center">Get Your Free Website:</h4>
            <h4 className="text-white text-center">Discover How to Quickly Get More Sales with Your Website</h4><br />
          </div>

          <div className='col-6'>
            <h5>You will be able to:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Save money without hiring web designer or developer.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Get all-done-for-you business website.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Turn your website visitors to leads & customers.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Already set up for 100 clients.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> End soon</li>
            </ul>
          </div>
          <div className='col-6'>
            <Image src={"/images/web-exa.png"} height={100} width={100} alt={"picture"} className='d-block img-fluid img-thumbnail mx-auto' />
          </div>
        </div>
      </div>
      {/* <!--start of optin copy--> */}
      <p className="text-center mt-4"><a className="btn btn-outline-warning font-weight-bold" href="/apps/leads">Get Yours Now for Free</a></p>
     
      {/* <!--Container (Footer section) --> */}
        <footer className="container-fluid text-center" id="desktop">
          <a href="#goTop" title="To Top">
            <span className="fa fa-chevron-up text-success"></span>
          </a>
          <p><a href="privacy">Privacy policy</a>   |   <a href="terms">Terms and conditions</a></p>
          <p>&copy; Siniotech 2024. All right reserved</p>
        </footer>
     
      <div className="card">
        <nav className="navbar navbar-expand-md navbar-light d-md-none fixed-bottom" id="navbarbtm">
          <a className="navbar-brand" href="sms://+2347016807004" ><i className="fa fa-comment"></i></a>
          <a className="navbar-brand" href="mailto:siniotech@gmail.com"><i className="fa fa-envelope"></i></a>
          <a className="navbar-brand" href="https://maps.google.com/maps?
        q=Bushara+Pharmacy+Naibawa+Kumbotso+Kano+Nigeria" target="_blank"><i className="fa fa-map-marker"></i></a>
          <a className="navbar-brand" href="https://wa.me/+2347016807004"><i className="fa fa-whatsapp"></i></a>
        </nav>
      </div>
      <Modal />
    </main>
  )
}
