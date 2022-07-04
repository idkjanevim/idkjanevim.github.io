import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        if (name == "" || email == "" || subject == "" || msg == "") {
            console.log("You need to fill all of the input");
            return;
        }

        emailjs
            .sendForm(
                "gmail",
                "template_wl8y8qr",
                form.current,
                "D_B7KkmYeFwBhGTw3"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setName("");
        setEmail("");
        setMsg("");
        setSubject("");
    };
    return (
        <>
            <div id='contact'>
                <br />
                <br />
                <br />
            </div>
            <div className='screensize container my-5'>
                <h1 className='text-white text-center my-5'>Contact me!</h1>
                <form
                    className='d-flex justify-content-center'
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <div className='d-flex flex-column d-sm-block'>
                        <div className='row mt-5 mb-3 r'>
                            <div className='col-12 col-sm-6 c'>
                                <input
                                    value={name}
                                    name='name'
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    type='text'
                                    className='form-control-lg form-control text-white mb-3'
                                    placeholder='Name'
                                />
                            </div>
                            <div className='col-12 col-sm-6  c'>
                                <input
                                    value={email}
                                    name='email'
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type='text'
                                    className='form-control-lg form-control text-white'
                                    placeholder='Email'
                                />
                            </div>
                        </div>
                        <div className='row r mb-3 '>
                            <div className='col-sm-12 c'>
                                <input
                                    name='subject'
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(e.target.value);
                                    }}
                                    type='text'
                                    className='form-control-lg form-control text-white'
                                    placeholder='Subject'
                                />
                            </div>
                        </div>
                        <div className='row r '>
                            <div className='col-sm-12 c'>
                                <textarea
                                    name='msg'
                                    value={msg}
                                    onChange={(e) => {
                                        setMsg(e.target.value);
                                    }}
                                    className='form-control-lg form-control message text-white'
                                    placeholder='Message'
                                />
                            </div>
                        </div>
                        <div className='row r mt-3'>
                            <div className='idk'>
                                <input
                                    type='submit'
                                    value='Send'
                                    className='btn btn-dark2 btn-lg bt-block text-white idk'
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
