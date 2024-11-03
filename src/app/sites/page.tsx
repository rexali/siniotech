import Image from "next/image";

export default function SitesPage() {

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
                <div className='bg-success text-white d-flex justify-content-center align-items-center' style={{ marginTop: 60 }}>
                    <div className="row">
                        <div className="col-12">
                            <h5 className="text-center">
                                FREE BUSINESS WEBSITE: Discover How to Get Your Free Money-making Website Without Spendng a Dime
                            </h5>
                        </div>

                        <div className='col-6'>
                            You will be able to:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Save money without hiring web designer or developer.</li>
                                <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Get your do-It-Yourself business website.</li>
                                <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Turn your website visitors to leads & customers.</li>
                                <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> 1000 copies already downloaded.</li>
                                <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> End soon</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <Image src={"/images/mypic.jpg"} height={100} width={100} alt={"picture"} className='d-block img-fluid rounded-circle mx-auto' />

                            <p className='text-center'>Bello Aliyu</p>
                        </div>
                    </div>
                </div>
                {/* <!--start of optin copy--> */}

                <div className="text-center mt-4" id="download"><a data-target="#myOptin" data-toggle="modal" className="btn btn-lg btn-warning" style={{ fontSize: "2.5vw" }}>DOWNLOAD NOW</a></div>

                <p>Dear Business Owner,</p>
                <p>I am Bello Aliyu, a web designer and digital marketer.</p>
                <p>Let us face it, designing or developing your own website now is frustrating, time-consuming and much money involved. So let me help you.</p>
                <p>I have decided to help you by giving you a free website template that you can edit and upload to your server if you can follow simple and easy instructions that a pupil in primary school could follow.</p>
                <p>Imagine what it will be like to have to your business website that would make you to stand out from your competitors, get more leads and customers, and make you money.</p>
                <p>Like I said earlier, I am a web designer and digital marketer. With this, I am in a best position to provide this type of solution to you and your business</p>
                <p>
                    With this free website, you will be able to:
                    <ul>
                        <li> Save money without hiring web designer or developer</li>
                        <li> Save time and get your business website online quickly</li>
                        <li> Do do it yourself without anyone help</li>
                        <li> Duplicate it for another new website if you want</li>
                        <li> Turn your website visitors to leads & customers</li>
                    </ul>
                </p>
                <p>Here is a link to show you how your website will look like after you have edited and uploaded it to your server. View it here: https://siniotech.com</p>
                <p>Besides these are what others have to say about this offer:
                    <ul>
                        <li> Great! Thank you. By Donaltus L.</li>
                        <li> Lovely! I like it. I will call you soon. By Muhammad Yusuf</li>
                        <li> Please I need it. Get one for me. By Mustapha Imam</li>
                    </ul>
                </p>
                <p>This business website is free. All you need to get it is to enter your active email, get your copy downloaded right away.</p>
                <p>I have forseen a challange you may face after you mayt have downloaded it. So I have included a bonus to this offer. With this bonus you will be able to edit the website template with a simple instruction you can follow which I have added to the website template.</p>
                <p>Dowload your copy now before june 30 ..</p> <p className="text-center"><a data-target="#myOptin" data-toggle="modal" className="btn btn-lg btn-warning" style={{ fontSize: "2.5vw", color: "black", fontWeight: "bold" }}>DOWNLOAD NOW</a></p> <p>Think about about how much it will cost you every day if you do not take action now.</p>
                <p>Remember I said it is free. All you need to download your copy now is your active email. If after download, you do not like it you can unsubscribe your email from our list.</p>
            </div>
            <p className="text-center mt-4" style={{ fontSize: 12 }}> <a href="privacy" className="text-success">Privacy Policy</a> | <a href="terms" className="text-success">Terms and Conditions</a></p>

        </main>
    )

}