import Image from '../../../node_modules/next/image';
import Modal from '../Modal';



export default function Home() {
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
      <nav className="nav-tabs mt-5 d-md-none scrollmenu">
        <a className="nav-link" href="#about">ABOUT</a>
        <a className="nav-link" href="#service">SERVICES</a>
        <a className="nav-link" href="#portfolio">PORTFOLIO</a>
        <a className="nav-link" href="#pricing">PRICING</a>
        <a className="nav-link" href="#training">TRAINING</a>
        <a className="nav-link" href="#contact">CONTACT</a>
        <a className="nav-link" href="https://mujaware.com/blog">BLOG</a>
      </nav>

      <div className="jumbotron text-center">
        <h1 className="text-capitalizez" style={{ fontSize: "larger" }}>Are You Looking for a Digital Marketer?</h1>
        <p style={{ fontSize: "normal" }} >We help small businesses and companies who want to solve their problems with low sales and customer base, so they can focus on other parts of their business operations, stop worrying about low sales, reach more customers or clients and increase revenue.</p>
        <button style={{ fontSize: 20 }} className="btn btn-success  mt-3 text-capitalize" data-toggle="modal"
          data-target="#consultModal">Claim your Free 30 Mins Consultation Call! <br />Get in contact now.</button>
      </div>



    </main>
  )
}
