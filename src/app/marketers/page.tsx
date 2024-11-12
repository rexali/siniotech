import Image from '../../../node_modules/next/image';
import Modal from '../Modal';



export default function MarketersPage() {
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
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="https://mujaware.com/blog">BLOG</a></li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#portfolio">PORTFOLIO</a></li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#pricing">PRICING</a></li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#training">TRAINING</a></li>
            <li className="nav-item"><a style={{ color: 'white' }} className="nav-link" href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>


      <div className='container bg-success text-white d-flex justify-content-center align-items-center' style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col-12">
            <h4 className="text-white text-center">FREE REPORT:Discover How to Quickly Make Sales and Profits Using Copywriting Techniques</h4><br />
          </div>

          <div className='col-6'>
            <h5>You will be able to:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Save money to higher copywriter.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Make sales and profits Quickly.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Convert your website visitors into leads & customers.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>100 copiesa already downloaded.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Ending soon</li>
            </ul>
          </div>
          <div className='col-6'>
            <Image src={"/images/web-exa.png"} height={100} width={100} alt={"picture"} className='d-block img-fluid img-thumbnail mx-auto' />
          </div>
        </div>
      </div>
      {/* <!--start of optin copy--> */}
      <p className="text-center mt-4"><a className="btn btn-outline-warning font-weight-bold" href="/marketers/leads">Get Yours Now for Free</a></p><hr />

      <div className="jumbotron text-center">
        <h1 className="text-capitalizez" style={{ fontSize: "larger" }}>Are You Looking for a Digital Marketer?</h1>
        <p style={{ fontSize: "normal" }} >We help small businesses and companies who want to solve their problems with low sales and customer base, so they can focus on other parts of their business operations, stop worrying about low sales, reach more customers or clients and increase revenue.</p>
        <p className="text-center mt-4"><a className="btn btn-outline-info font-weight-bold" href="/marketers/apply">Claim your FREE 30 Minutes Consultation Call! (Valued at N10,000) <br /> Get in touch now</a></p>
        {/* <button style={{ fontSize: 20 }} className="btn btn-success  mt-3 text-capitalize" data-toggle="modal"
          data-target="#consultModal">Claim your Free 30 Mins Consultation Call! <br />Get in touch now.</button> */}
      </div>

      <div className='jumbotron'>
        <h3>
          Transform Your Business Revenue and Profits: Discover How to Boost Sales, Enhance Customer Experience and Stay Ahead of Competition with our Digital Marketing Solutions
        </h3>
      </div>

      <div className='jumbotron'>
        <p>Dear Business Owners,</p>
        <p>
          Let us face it, preparing your sales copy, marketing and sales funnel, setting up digital advertising,  writing your own landing page and lead magnet contents are frustrating.
        </p>
        <p>
          I know you would rather spend that beautiful days and weekend with friends and family.  So let our firm handle your digital marketing solutions this year for you.
        </p>

        <p>
          I had such problems of writing, setting up digital sales funnels and advertising and preparing digital marketing solutions for my business before but not now that I have found a better ways of doing it.

        </p>
        <p>I have worked hard, day and night, to solve these problems and I believe you do not have to go through the same suffering and pain I had gone through.
        </p>
        <p>
          Alas! There is a solution to your problem which is our complete digital marketing solutions package to transform business and sell your products or services online.

        </p>
        <p>
          It is easy. You do not need to do anything by yourself and you need to just give us go ahead. We will write your copies (sales letters, email copies and advert copies), setup an advertising campaign, set up sales funnels with landing pages integrated with email marketing softwares, WhatsApp etc and start generating qualified leads and making conversion and sales.

        </p>
        <p>
          Imagine what it will be like to be able to reach more prospective customers and make more sales and profits while you spend time with other aspects of your business.


        </p>
        <p>
          Imagine how you will feel to be able to have enough time for your family and friends and go to that dream holiday with them.


        </p>
        <p>
          All these are achievable if you give us a go-ahead to do it for you.
        </p>

        <p>
          I am digital marketer certified by Google and a software developer. I had helped several businesses with advices and how to grow their business using digital marketing and other related tools.

        </p>
        <p>
          I discovered that many small business owners are facing problem of high cost of building a website with marketing expense. So I decided to help you solve this in my own way.

        </p>

        <ul>
          <li>
            You do not need to pay anything for building the website.</li>
          <li>You only pay for maintenance of the third party hosting platform.</li>
          <li>You will not share the platform with any body except the people you allowed to use your platform</li>
          <li>You will be educated with free content on how to start your e-commerce website without having a product to sell</li>
        </ul>

        <p>
          This link here below is a demo of what you are going to get:

          -------------  embed a video here--------------
        </p>

        <p>Many a person or business owners we had helped have these to say about us. These what they have to say:</p>
        <ul>
          <li>
            Thank you. I was able to showcase more of my products at large. Idris Daniel, Owner of Danimart
          </li>
          <li>
            My business good will and reputation have been enhanced by having your website. Thanks. Muhd Zubair, Owner of Hycare LTD
          </li>
          <li>
            I was able to reach more customers to buy my fishes by having your website. Thanks. Mal. Mustapha Ojo, Owner of Binaman Fishery
          </li>
        </ul>
        <p>It will take use 7 days or less to get everything set up for you from writing copies, setting sales funnels, advertising campaign and generation of leads and sales. We are not going to ship anything but all is online. And pay us ₦95,000, only if you are satisfied with our services</p>

        <p>
          Here is what you will get if you take this offer now:
        </p>
        <ul>
          <li>One-time Set up Fee: N95, 000</li>
          <li>Maintenance Fee: N1,500 per month</li>
          <li>BONUS: FREE E-COMMERCE WEBSITE (N500,000)</li>
          <li>BONUS: FREE contents on how to promote your products and make sales (N25,000)</li>
          <li>BONUS: FREE support services in case of any disruption of service (N10,000)</li>
          <li>BONUS: FREE update to the site at anytime you want to add more features to the website that are not beyond our capabilities (N50,000)</li>
          <li>Grand Total is : N681,500</li>
        </ul>
        <p>
          Right now you can have all these above today set up for you by paying just N45,000 only. Yes I mean it. Are you surprised? Please do not be.

        </p>

        <p>
          Register to take this offer now. We are taking only 5 potential prospects so that we can render effective service to them. So be the first.

        </p>
        <p>
          If after we have set it up for you and you are dissatisfied or not pleased you can cancel the monthly maintenance fee and get all the money back at anytime by just sending us an email or call.

        </p>

        <p>
          What are you waiting for? Enter your email address and tap next to get started now
        </p>
        <p className="text-center mt-4"><a className="btn btn-outline-success font-weight-bold" href="/marketers/apply">Claim your FREE 30 Minutes Consultation Call! (Valued at N10,000) <br /> Get in touch now</a></p>

        {/* <p className='text-center'>
          <button style={{ fontSize: 20 }} className="btn btn-success  mt-3 text-capitalize" data-toggle="modal"
            data-target="#consultModal">Claim your Free 30 Mins Consultation Call! <br />Get in touch now.</button>
        </p> */}

      </div><hr />

      <div className='container bg-success text-white d-flex justify-content-center align-items-center' style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col-12">
            <h4 className="text-white text-center">FREE REPORT:</h4>
            <h4 className="text-white text-center">Discover How to Quickly Make Sales and Profits Using Copywriting</h4><br />
          </div>

          <div className='col-6'>
            <h5>You will be able to:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Save money to higher copywriter.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Make sales and profits Quickly.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Convert your website visitors into leads & customers.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>100 copiesa already downloaded.</li>
              <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Ending soon</li>
            </ul>
          </div>
          <div className='col-6'>
            <Image src={"/images/web-exa.png"} height={100} width={100} alt={"picture"} className='d-block img-fluid img-thumbnail mx-auto' />
          </div>
        </div>
      </div>
      {/* <!--start of optin copy--> */}
      <p className="text-center mt-4"><a className="btn btn-outline-warning font-weight-bold" href="/marketers/leads">Get Yours Now for Free</a></p>
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
    </main>
  )
}
