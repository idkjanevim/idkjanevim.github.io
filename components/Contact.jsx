import React from 'react';

function Contact() {
    return (
        <>
            <div id="contact">
                <br />
                <br />
                <br />
            </div>
            <div className="screensize container my-5">
                <h1 className="text-white text-center my-5">Contact me!</h1>
                <form className="d-flex justify-content-center">
                    <div className="d-flex flex-column d-sm-block">
                        <div className="row mt-5 mb-3 r">
                            <div className="col-12 col-sm-6 c">
                                <input
                                    type="text"
                                    className="form-control-lg form-control text-white mb-3"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="col-12 col-sm-6  c">
                                <input
                                    type="text"
                                    className="form-control-lg form-control text-white"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="row r mb-3 ">
                            <div className="col-sm-12 c">
                                <input
                                    type="text"
                                    className="form-control-lg form-control text-white"
                                    placeholder="Subject"
                                />
                            </div>
                        </div>
                        <div className="row r ">
                            <div className="col-sm-12 c">
                                <textarea
                                    className="form-control-lg form-control message text-white"
                                    placeholder="Message"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
