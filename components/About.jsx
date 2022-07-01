import React from 'react';
import Image from 'next/image';
import { FaReact, FaAirbnb } from 'react-icons/fa';

function About() {
    return (
        <>
            <div id="about">
                <br />
                <br />
                <br />
            </div>
            <div className="container screensize">
                <div>
                    <h1 className="text-white text-center">About me</h1>
                    <h4 className="text-gray text-center d-block">
                        I am a student in high school studying Programming and
                        Robotics. I have interest in server side programming but
                        I am learning front end web development and desktop
                        application development as well. <br /> <br /> I learned
                        basics of{' '}
                        <a href="https://dotnet.microsoft.com/en-us/">.NET</a>{' '}
                        at school, I was also learning on my own{' '}
                        <a href="https://nodejs.org/en/">Nodejs</a>,{' '}
                        <a href="https://reactjs.org/">React</a>, and currently
                        I am learning{' '}
                        <a href="https://www.rust-lang.org/">Rust</a>. <br /> I
                        am also fascinated by cybersecurity and I hope that I
                        will be working in this field one day.
                    </h4>
                </div>
            </div>
        </>
    );
}

export default About;
