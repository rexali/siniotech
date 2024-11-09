import Image from 'next/image';

export default function Page() {

    return (
        <main>

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
                </nav><br /><br />
                <nav className="nav-tabs d-md-none scrollmenu">
                    <a className="nav-link" href="#about">ABOUT</a>
                    <a className="nav-link" href="#service">SERVICES</a>
                    <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                    <a className="nav-link" href="#pricing">PRICING</a>
                    <a className="nav-link" href="#training">TRAINING</a>
                    <a className="nav-link" href="#contact">CONTACT</a>
                    <a className="nav-link" href="https://mujaware.com/blog">BLOG</a>
                </nav>
            
                <iframe
                  className="d-block mx-auto mt-4"
                  style={{
                      position: 'absolute',
                      top: 100,
                      bottom: 0,
                      right: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                  }}
                 src="https://docs.google.com/forms/d/e/1FAIpQLSdDG8Ar469CUwOptJptdQcT5YyDqhb2m6b-k-H2iROMlqNkiA/viewform?embedded=true">Loading…</iframe>

        </main>
    )

}