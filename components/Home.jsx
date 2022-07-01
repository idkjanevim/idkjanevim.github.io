import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function Home() {
    useEffect(() => {
        const typewriter = new Typewriter('#write', {
            loop: false,
            delay: 75,
        })
            .pauseFor(250)
            .typeString('Hi, My name is Ondřej Hrzán')
            .start();
    }, []);
    return (
        <>
            <div id="home">
                <br />
            </div>
            <div className="container d-grid screensize">
                <div>
                    <div className="row mt-5">
                        <div className="col">
                            <h1
                                id="write"
                                className="text-white text-center"
                            ></h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <h2 className="text-gray text-center">
                                I am a junior programmer!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
