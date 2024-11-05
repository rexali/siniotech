import Image from '../../../../../node_modules/next/image';

export default function RecruiterPage() {

    return (
        <main>
            <div className="container text-black mt-4">
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
            </div>
            <div>
                <iframe className="d-block mx-auto" width="640" height="1140" src="https://docs.google.com/forms/d/e/1FAIpQLScjmWpo1EBRHxTDQpnkcWIbVpz4B4UrDLZ7wG2rB3h_F49K0w/viewform?embedded=true" >Loading…</iframe>
            </div>
        </main>
    )

}