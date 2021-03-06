import Head from 'next/head';
import Particles from 'react-tsparticles';
import { loadTrianglesPreset } from 'tsparticles-preset-triangles';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import React, { useState, useEffect } from 'react';
 
function particlesInit(tsparticles) {
    loadTrianglesPreset(tsparticles);
}

function Index() {
    const [useWindowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener('resize', handleResize);

            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <>
            <Head>
                <title>Hrzán Ondřej</title>
            </Head>
            <Particles
                options={{
                    preset: 'triangles',
                    background: {
                        color: { value: '#2e249' },
                    },
                    particles: {
                        opacity: {
                            value: 0,
                        },
                        move: {
                            speed: 1,
                        },
                        links: {
                            opacity: 0.5,
                        },
                        number: {
                            value:
                                useWindowSize.width < 1600 &&
                                useWindowSize.width >= 1000
                                    ? 50
                                    : useWindowSize.width < 1000 &&
                                      useWindowSize.width >= 500
                                    ? 30
                                    : useWindowSize.width < 500
                                    ? 20
                                    : useWindowSize.width > 1900
                                    ? 120
                                    : 80,
                        },
                    },
                }}
                init={particlesInit}
                className="prtcls"
            />

            <Navbar />

            <Home />

            <About />

            <Projects />

            <Contact />
        </>
    );
}

export default Index;
