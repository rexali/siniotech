import Image from "next/image";

export default function StaffingPage() {

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

            <div className='container bg-success text-white d-flex justify-content-center align-items-center' style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-center">
                            How to Recruit a Tech Talent to Fast-Track Your Business:
                            Discover How to Quickly Get the Right Talent without Spending Dime and Time
                        </h5>
                    </div>

                    <div className='col-6'>
                        What you will get:
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You do not need to pay anything upfront to get the right talent for you.</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You only pay when you start enjoying the service of the talent.</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You can discontinue with our services at anytime without spending a dime</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Your talent will get free training from us </li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You will get free content on how to recruit a talents with high speed</li>

                        </ul>
                    </div>
                    <div className='col-6'>
                        <Image src={"/images/mypic.jpg"} height={100} width={100} alt={"picture"} className='d-block img-fluid img-thumbnail mx-auto' />
                        <p className='text-center'>Bello Aliyu</p>
                    </div>
                </div>
            </div>
            {/* <!--start of optin copy--> */}
            <p className="text-center mt-4"><a className="btn btn-outline-warning font-weight-bold" href="/staffing/leads">DOWNLOAD NOW</a></p>

            {/* <div className="text-center my-4" id="download">
                <a data-target="#myOptin" data-toggle="modal" className="btn btn-lg btn-warning" style={{ fontSize: "2.5vw" }}>DOWNLOAD NOW</a>
            
            </div> */}

            <div className="jumbotron text-center">
                <h1 className="text-capitalizez" style={{ fontSize: "larger" }}>Are You Looking to Hire a Right Talent for Your Business?</h1>
                <p style={{ fontSize: "normal" }} >We help small businesses who want to hire the right talents for their businesses, so they can focus on other parts of their business operations</p>
                <p className="text-center mt-4">
                    <a className="btn btn-outline-success font-weight-bold" href="/staffing/apply">
                        Claim your Free 30 Mins Consultation Call! (valued at N10,000) <br />Get in touch now
                    </a>
                </p>
                {/* <button style={{ fontSize: 20 }} className="btn btn-success  mt-3 text-capitalize" data-toggle="modal"
                    data-target="#consultModal">Claim your Free 30 Mins Consultation Call! (valued at N10,000) <br />
                    Get in touch now.
                    </button> */}
            </div>
            <div className="jumbotron">
                <p style={{ fontSize: "normal" }} >We specialize in hiring the following talents:</p>
                <ul>
                    <li>Software Developer/Engineer (for Mobile and Web App)</li>
                    <li>Digital Marketer</li>
                    <li>Data Scientist/Analyst</li>
                    <li>Content Creator/Marketer</li>
                    <li>DevOps Engineer</li>
                    <li>Quality Assurance Engineer</li>
                </ul>
            </div>

            <div className="jumbotron">

                <p>Dear Business Owner,</p>

                <p>I am Aliyu Bello, a recruiter and digital Marketer.</p>

                <p>
                    Let us face it, recruiting talent on your own is frustrating at best. If you would rather spend that spend that time with friends and family, let our firm handle your talent recruitment or staffing this year for you.
                </p>

                <p> Yeah! I have also suffered from this same problem before but today It is no more.</p>


                <p> I have worked hard day and night to solve this one problem and I believe you do not have to go through the same suffering and pain I had gone through.</p>

                <p>Alas! There is a solution to your problem which is an online recruiting system to get the right talent for your business.</p>

                <p>
                    All you need to do is to get us the job description or requirements and we will handle the rest for using our system.
                </p>
                <p>Besides if you want we can take care of your talent training and payment for you and you then take care of putting to a good use of the talent.</p>

                <p>
                    Imagine what it will be like to be able to get the right talent and get the job done and get your products or services to the market as quickly as possible, make more sales and profits, and reduce costs of outsourcing the task to a third party.
                </p>
                <p>
                    I am a talent recruiter and a software developer. I had helped several businesses with staffing and advices on how to grow their business by getting the right talent or person to implement that your plans
                </p>
                <p>
                    I discovered that many small business owners are facing problem of hiring a wrong person and the high cost associated with this process . So I decided to help  you solve it in my own well researched and followed ways.
                </p>

                <p> You will be able to:</p>

                <ul>
                    <li>  You do not need to pay anything upfront to get the right talent for you.</li>
                    <li> You only pay when you start enjoying the service of the talent.
                    </li>
                    <li> You can discontinue with our services at anytime without spending a dime</li>
                    <li> Your talent will get free training from us </li>
                    <li> You will get free content on how to start your to recruit with high velocity </li>
                </ul>
                <p>Here is a link to show you how your website will look like after you have edited and uploaded it to your server. View it here: https://siniotech.com</p>

                <p>I have helped several business owners to hire the right person or talent for their jobs. These what they have to say:</p>
                <ul>
                    <li> Great! Thank you. By Donaltus L.</li>
                    <li> Lovely! I like it. I will call you soon. By Muhammad Yusuf</li>
                    <li> Please I need it. Get one for me. By Mustapha Imam</li>
                </ul>

                <p>Get your free talent today and Pay only if you are satisfied with his/her services</p>
                <p>Here is what you will get if you take this offer now (use table):</p>

                <ul>
                    <li>One-time Fee: N100,500</li>
                    <li>Maintenance Fee: N10,500 per month</li>

                    <li>BONUS: FREE Talent Training (N300,000)</li>

                    <li>BONUS: FREE Contents on how to hire a talent with high velocity  (N25,000)</li>
                    <li>BONUS: FREE Replacement services in case our talent leave you (N100,000)</li>
                    <li>GRAND TOTAL is : N536,000</li>

                </ul>



                <p>Right now you can have all these today set up for you by paying N95,000 only. Are you surprised? Do not be. Yes I mean it.</p>

                <p>Register by sending a job description and requirements to us. Take this offer now. We are taking only 3 prospects so that we can render effective service to them. So be the first.
                    Think of how much it will cost you if you do not take action on this problem.</p>

                <p>
                    If after we have get you the talent and you are dissatisfied or not pleased, you can cancel the monthly maintenance fee at anytime by just sending us an email or call.

                </p>

                <p>Think about about how much it will cost you every day if you do not take action now.</p>


                <p className="text-center mt-4">
                    <a className="btn btn-outline-success font-weight-bold" href="/staffing/apply">
                        Claim your Free 30 Mins Consultation Call! (valued at N10,000) <br />Get in touch now
                    </a>
                </p>
            </div>

            {/* container */}
            <div className='container bg-success text-white d-flex justify-content-center align-items-center' style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-center">
                            How to Recruit a Tech Talent to Fast-Track Your Business:
                            Discover How to Quickly Get the Right Talent without Spending Dime and Time
                        </h5>
                    </div>

                    <div className='col-6'>
                        You will be able to:
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You do not need to pay anything upfront to get the right talent for you.</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You only pay when you start enjoying the service of the talent.
                            </li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You can discontinue with our services at anytime without spending a dime</li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> Your talent will get free training from us </li>
                            <li className="list-group-item bg-success text-justify"><i className="fa fa-star"></i> You will get free content on how to start your to recruit with high velocity </li>

                        </ul>
                    </div>
                    <div className='col-6'>
                        <Image src={"/images/mypic.jpg"} height={100} width={100} alt={"picture"} className='d-block img-fluid img-thumbnail mx-auto' />
                        <p className='text-center'>Bello Aliyu</p>
                    </div>
                </div>
            </div>
            {/* <!-- optin end--> */}
            <p className="text-center mt-4"><a className="btn btn-outline-success font-weight-bold" href="/staffing/leads">DOWNLOAD NOW</a></p>

            <p className="text-center mt-4" style={{ fontSize: 12 }}> <a href="privacy" className="text-success">Privacy Policy</a> | <a href="terms" className="text-success">Terms and Conditions</a></p>
        </main>
    )

}