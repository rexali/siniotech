export default function Modal() {

    return (
        <div>
            {/* <!-- Modal htmlFor consultaltion Request --> */}
            <div id="consultModal" className="modal fade" role="dialog">
                <div className="modal-dialog modal-lg" style={{ marginTop: "50px" }}>

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-center">Book a consultation</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form role="form" name="myForm" id="consultationForm" method="POST" action={"/api/applications"}>
                                <div className="form-group">
                                    <label htmlFor="firstnm"><span className="fa fa-user"></span> First Name</label>
                                    <input type="text" className="form-control" id="fname" name="firstName" placeholder="Enter first name"
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastnm"><span className="fa fa-user"></span> Last Name</label>
                                    <input type="text" className="form-control" id="lname" name="lastName" placeholder="Enter last name"
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emai"><span className="fa fa-envelope"></span> Email Address</label>
                                    <input type="email" className="form-control" id="email" name="emailAddress"
                                        placeholder="Enter email address" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="foneNumber"><span className="fa fa-phone"></span> Phone</label>
                                    <input type="phonenumber" className="form-control" id="phone" name="phone"
                                        placeholder="Enter phone number" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fortime"><span className="fa fa-clock-o"></span> When should we call you?</label>
                                    <input type="datetime-local" className="form-control" id="timetocall" name="timeToCall" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="skype"><span className="fa fa-skype"></span> Skype ID</label>
                                    <input type="text" className="form-control" id="skypeid" name="skypeId"
                                        placeholder="Enter Skype ID" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service"><span className="fa fa-tasks"></span> What service are you currently looking htmlFor?</label>
                                    <select name="service" id="service" className="form-control" required>
                                        <option value="">Select</option>
                                        <option value="Make More Sales">Make More Sales</option>
                                        <option value="Business website">Business Website</option>
                                        <option value="ecommerce website">ecommerce Website</option>
                                        <option value="marketing and sales funnel">Marketing and sales funnel</option>
                                        <option value="Business Blog">Business Blog</option>
                                        <option value="Advertising">Advertising</option>
                                        <option value="Digital marketing">Digital marketing</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="rev"><span className="fa fa-money"></span> What is your current annual revenue?</label>
                                    <select name="revenue" id="revenue" className="form-control" required>
                                        <option value="Null">Select</option>
                                        <option value="less than N500,000">Less Than N 500, 000</option>
                                        <option value="N500, 000 - 1 Million">N500, 000 - N 1 Million</option>
                                        <option value="N 1 Million - 10 Million">N 1 Millions - N10 Millions</option>
                                        <option value="N 10 Million - 100 Million">N 10 Millions - N100 Millions</option>
                                        <option value="N 100 Million - 500 Million">N 100 Millions - Over</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inv"><span className="fa fa-money"></span> How much are you ready to invest?</label>
                                    <select name="invest" id="invest" className="form-control" required>
                                        <option value="Null">Select</option>
                                        <option value="less than N500,000">Less Than N 500, 000</option>
                                        <option value="N500, 000 - 1 Million">N500, 000 - N 1 Million</option>
                                        <option value="N 1 Million - 10 Million">N 1 Million - N10 Millions</option>
                                        <option value="N 10 Million - 100 Million">N 10 Millions - N100 Millions</option>
                                        <option value="N 100 Million - 500 Million">N 100 Millions - Over</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="happy"><span className="fa fa-reply"></span> If we could do one thing htmlFor your business that would make you very happy, what would that be?</label>
                                    <input type="text" className="form-control" id="happy" name="happy"
                                        placeholder="Enter your response here" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="bizname"><span className="fa fa-bank"></span> Business Name</label>
                                    <input type="text" className="form-control" id="business" name="business"
                                        placeholder="Enter business or company name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="req"><span className="fa fa-gear"></span> Specific requirements</label>
                                    <textarea className="form-control" id="requirements" name="requirements"
                                        placeholder="Enter any specific requirements or details of the project here" rows={5}
                                        required></textarea>
                                </div>

                                <button type="submit" id="request" className="btn btn-default btn-success btn-block"><span
                                    className="fa fa-power-off"></span> BOOK YOUR FREE 30 MINUTES CONSULTATION CALL NOW!</button><br />
                                <p className="text-center" id="consult_result" style={{ backgroundColor: "green", color: "white" }}></p>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
