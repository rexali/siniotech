import Image from 'next/image';

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
                        <h4 className="text-white text-center">How to Get Your Free E-commerce Website to Fast-Track Your Sales</h4><br />
                    </div>

                    <div className='col-6'>
                        <h5>You will be able to:</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Save money without hiring a fullstack engineer.</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Make sales and profits Quickly.</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Convert your website visitors into leads & customers.</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>10 already set up for clients.</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Ending soon</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <Image src={"/images/web-exa.png"} height={100} width={100} alt={"picture"} className='d-block img-fluid img-thumbnail mx-auto' />
                    </div>
                </div>
            </div>
            {/* <!--start of optin copy--> */}
            <p className="text-center mt-4"><a className="btn btn-outline-warning font-weight-bold" href="/apps/leads">Get Yours Now for Free</a></p><hr />

            <div className="jumbotron text-center">
                <h1 className="text-capitalizez" style={{ fontSize: "larger" }}>How to Get Your Free E-commerce Website to Fast-Track Your Sales</h1>
                <p style={{ fontSize: "normal" }} >We help small businesses and companies who want to solve their problems with low sales and customer base, so they can focus on other parts of their business operations, stop worrying about low sales, reach more customers or clients and increase revenue.</p>
                <p className="text-center mt-4"><a className="btn btn-outline-info font-weight-bold" href="/apps/apply">Claim your FREE 30 Minutes Consultation Call! (Valued at N10,000) <br /> Get in touch now</a></p>
                {/* <button style={{ fontSize: 20 }} className="btn btn-success  mt-3 text-capitalize" data-toggle="modal"
          data-target="#consultModal">Claim your Free 30 Mins Consultation Call! <br />Get in touch now.</button> */}
            </div>

            <div className='jumbotron'>
                <h3>
                    How to Get Your Free E-commerce Website to Fast-Track Your Sales: Your Online Presence to Boost Your Sales Without Breaking a Bank.
                </h3>
            </div>

            <div className='jumbotron'>
                <p>Dear Business Owners,</p>
                <p>
                    Are you having a problem of reaching more prospective customers and boost sales? Yeah I have also suffered from this same problem before but today It's no more.
                </p>
                <p>
                    I have worked hard day and night to solve this one problem and I believe you don't have to go through the same suffering and pain I had gone through.

                </p>

                <p>

                    Alas! There&apos;s a solution to your problem which is having your &apos;online presence&apos; in the form of marketplace platform aka ecommerce website customised for your products to sell products not only online and but also offline. How? I will answer that shortly.

                </p>
                <p>
                    All you need to do is to get product details ready and upload it by simply filling the product form and that is all and start promoting your unique product detail page online. On this we are going to help you on this if you find it challenging. Besides the platform will take care of your payment processing for you if a distance user wants to use online payment options while you take of delivery.
                </p>
                <p>
                    Alas! There is a solution to your problem which is our complete digital marketing solutions package to transform business and sell your products or services online.

                </p>
                <p>
                    And those potential customers that comes to your door or shop you will take care of their payment at cash and carry basis while still using the platform.

                </p>
                <p>

                    Imagine what it will be like to be able to reach more prospective customers, make more sales and profits with the money you could have spent building e-commerce website that would have cost you hundred thousands of naira.
                </p>
                <p>
                    You would be able to save a large sum of money that you would have spent to hire a consultant/developer to build and also to maintain it for you.

                </p>
                <p>
                    To build one, you would spend at least ₦500k and above.
                </p>

                <p>
                    And to hire a Fullstack Engineer to maintain and update it for you, you would spend at least ₦200k and above per month.
                </p>
                <p>
                    I am digital marketer certified by Google and also software developer/engineer. I had helped several businesses with advisory services and how to grow their business using digital marketing and e-commerce website.
                </p>

                <p>
                    I discovered that many small business owners are facing problem of high cost of building a marketplace website coupled with marketing expense. So I decided to help solve it in my own way.
                </p>

                <ul>
                    <li>
                        You don &apos;t need to pay anything for building the website but for a domain name and a hosting platform
                    </li>
                    <li>
                        You &apos;ll get free update and customised features or functionalities if you can pay your monthly maintenance and retainer fee.
                    </li>
                    <li>You &apos;ll be able to upload unlimited number of products to sell</li>
                    <li>You &apos;ll not share the platform with any body except the people you allow or help to upload product in your platform.</li>
                    <li>You &apos;ll received free content on how to promote your  product details page or the platform as a whole.</li>
                </ul>

                <p>
                    This link here below is a demo of what you are going to get:

                    -------------  embed a video here--------------
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
                        src="https://www.youtube.com/embed/wKLWsVxQs3w" width="700" height="520">Loading…</iframe>
                </p>

                <p>Many a person or business owners we had helped have these to say about us.</p>
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



                <p>Get your free e-commerce website and pay only for hosting, domain name and monthly maintenance fee and get it launched within a week with 100% money back guaranteed.</p>

                <p>
                    Here is what you will get if you take this offer now:
                </p>

                <ul>
                    <li>One-time Set up Fee: ₦25,000</li>
                    <li>Maintenance Fee: ₦75,000 per month</li>
                    <li>BONUS: FREE E-COMMERCE WEBSITE (N500,000)</li>
                    <li>BONUS: FREE regular contents on how to promote your products and make sales (₦25,000)</li>
                    <li>BONUS: FREE 1 Month Online Promotion Service for your platform (₦50,000)</li>
                    <li>BONUS: FREE 1 Month Data Entry Service to upload your product details on the platform (₦25,000)</li>
                    <li>BONUS: FREE update to the site at anytime you want to add a new feature to the website that are not beyond our capabilities (₦50,000)</li>
                    <li>BONUS: FREE 1 Week Training on how to use the platform (₦50,000) </li>
                    <li>RAND TOTAL is : ₦800,000</li>
                </ul>
                <p>
                    Right now you can get all these set up for you for just N75,000 only for the first month. Are you surprised? Well, please do not be.
                </p>

                <p>
                    Register to take this offer now. We are taking only 3 potential prospects so that we can render effective service to them. So be the first.

                </p>
                <p>
                    If after we have set it up for you and you are dissatisfied or not pleased you can cancel the monthly maintenance fee and get all the money back at anytime by just sending us an email or call.

                </p>

                <p>
                    What are you waiting for? Enter your email address and tap next to get started now
                </p>
                <p className="text-center mt-4"><a className="btn btn-outline-success font-weight-bold" href="/apps/ecommerce">Claim your FREE 30 Minutes Consultation Call! (Valued at N10,000) <br /> Get in touch now</a></p>

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
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>Save money without hiring a copywriter.</li>
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
        </main>
    )
}
