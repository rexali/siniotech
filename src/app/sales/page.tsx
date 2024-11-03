import Image from "next/image";

export default function SalesPage() {

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
                            <h4 className="text-white text-center">Make More Sales:</h4>
                            <h5 className="text-warning text-center">Discover How to Quickly Make More Sales and Profit Reaching More Prospects and Customers</h5><br />
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
                {/* <!--Sales letter--> */}
                <div className="text-black mt-4">
                    <Image src={"/images/mypic.jpg"} height={100} width={100} alt={"picture"} className='d-block img-fluid rounded-circle mx-auto' />

                    <p>Dear Business owner,</p>
                    <p>I am Bello Aliyu.</p>
                    <p>Let us face it, making more sales is not easy and frustrating, time-consuming and much money involved. So I let me help you.</p>
                    <p>Are you having a problem of reaching more prospective leads, customers and sales?</p>
                    <p>I have had problems of reaching more prospects and make more sales before but not now that I have found a better ways of doing it</p>
                    <p>Are you afraid of loosing your customers to your competitors?</p>
                    <p>Fear of loosing customers to competitors has been part of my business but as soon as I discovered how to retain my customers the fear goes</p>
                    <p>Do you dream or hope of making more sales and profits and be able to afford a holiday at your place of choice?</p>
                    <p>I had also hoped and dreamed of making more sales to be financially secure and free and be able to have a splendid holiday.</p>
                    <p>Are you finding it difficult to raise money to achieve all these? Yeah I have also suffered from this same problem before but today not anymore after I discovered how to make more sales and money.</p>
                    <p>I have worked hard day and night to solve this one problem and I believe you do not have to go through the same suffering and pain I had gone through.</p>
                    <p>Alas! There is a solution to your problem which can be solved with our unique marketing and sales funnels.</p>
                    <p>All you need to do is to get a pro to set up your marketing and sales funnels that involves different campaigns to acquire leads or prospects, monetize the leads and customers and engage the customer and turn them to advocates and promoters.</p>
                    <p>And let the pro to hire and train your sales representative to handle the backend of the funnel and close sales for your products or services.</p>
                    <p>Imagine what it will be like to be able to reach more prospective customers and make more sales and profits, get your dreams and hopes fulfilled and travel round the world and get a deserved rest.</p>
                    <p id="portfolio">I am a Digital Marketer cum Data Scientist certified by Google and IBM respectively</p>
                    <p>I had helped several businesses to make more sales and profits and how to grow their businesses using digital marketing and online commerce strategies</p>
                    <p>From data analysis I carried out, I discovered that many small business owners are facing problem of high cost of building a website coupled with marketing expense. So I decided to help solve it in my own way.</p>
                    <p>
                        If you give us the opportunity to help you, here is What you will get from us:
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Marketing funnel to reach more prospects and acquire more leads</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Sales funnel to monetize the leads and customers and</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Marketing software (Email Marketing Software) to send email and engage and turn the customers to advocates and promoters</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  Quarterly Report to helps you make informed business decision making</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  Advert copies and running adverts to pull traffic to your marketing funnel</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  Email copies to load into marketing software  and engage your leads and customers</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  Advisory or counseling on digital marketing and sales tools</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  Hiring and training of sales representative to close sales for you</li>
                        </ul>
                    </p>
                    <p>Here is a link to see a demo below of what you are going to get:</p>

                    <p className="text-center" id="contact"><button className="btn btn-sm btn-warning text-white">Watch demo</button></p>

                    <p>I have helped several small business owners to have their own e-commerce website. These what they have to say:</p>
                    <p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-times"></i> I was able to reach more customers to buy my fishes by having your website. Thanks. Mal. Mustapha Ojo, Owner of Binaman Fishery</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-times"></i> My business good will and reputation have been enhanced by having your website. Thanks. Muhd Zubair, Owner of Hycare LTD</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-times"></i> Thank you. I was able to showcase more of my products and make sales. Idris Daniel, Owner of Danimart</li>
                        </ul>
                    </p>
                    <p id="offer">Get your advert running with marketing and sales funnels set up and delivered for you within 7 days</p>
                    <p id="bonus">Here is the additional values you will get if you take this offer now</p>
                    <p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  One-time Set up Fee: N750,000</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Maintenance Fee: N250,000 per month</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> BONUS: FREE E-COMMERCE WEBSITE (N500,000)</li>
                            <li className="list-group-item bg-success text-justifyr"><i className="fa fa-star"></i> BONUS: FREE CONTENTS on how to promote your products and make sales (N25,000)</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  BONUS: FREE SUPPORT SERVICES in case of any disruption (N10,000)</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>   BONUS: FREE REPORT delivered quarterly (N10,000)</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  BONUS: FREE update to the site at anytime you want to add new features to the funnels that are not beyond our capabilities (N50,000)</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i>  Grand Total is : N1,000,000</li>
                        </ul>
                    </p>
                    <p>Right now you can have all these set up for you today by paying N250,000 only. Yes I mean it.</p>
                    <p>Schedule a free consultation call to take this offer now. We are taking only 10 prospects so that we can render effective service to them. So be the first.</p>
                    <p>If after we have set it up for you and you are dissatisfied or not pleased you can cancel the monthly maintenance fee at anytime by just sending us an email or call.</p>
                    <p className="text-center"><a href="#consultModal" data-toggle="modal" className="btn btn-warning">Claim Your Free Consultation Call Now</a></p>

                    <footer className="container-fluid text-center" id="desktop">
                        <a href="#goTop" title="To Top">
                            <span className="fa fa-chevron-up text-success"></span>
                        </a>
                        <p>&copy; Siniotech 2021. All right reserved</p>
                        <p><a href="privacy" className="text-warning">Privacy policy</a>   |   <a href="terms" className="text-warning">Terms and conditions</a></p>
                    </footer>
                </div>
            </div>
        </main>
    )

}