import React from 'react';
import Image from 'next/image';

function Projects() {
    return (
        <>
            <div id="projects">
                <br />
                <br />
                <br />
            </div>
            <div className="projects container">
                <h1 className="text-white text-center pb-5">My projects</h1>
                <h2 className="text-white text-center py-5">Web</h2>
                <div className="d-flex justify-content-center flex-column flex-md-row">
                    <div className="card mx-5 border my-5 my-md-0">
                        <Image
                            src="/imgs/spejs.png"
                            height={250}
                            width={406}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Spejs</h5>
                            <p className="card-text">
                                Small website about Nasa and Space. <br /> This
                                was my first project with Nextjs <br /> and for
                                same reason a wanted to do <br /> something with
                                API
                            </p>
                            <div className="d-flex justify-content-between">
                                <a
                                    href="https://idkjanevim.github.io/spejs-nextjs/"
                                    className="btn btn-primary"
                                >
                                    Go to website
                                </a>
                                <a
                                    href="https://github.com/idkjanevim/spejs-nextjs"
                                    className="btn btn-primary"
                                >
                                    Go to Github page
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card mx-5 border my-5 my-md-0">
                        <Image
                            src="/imgs/portfolio.png"
                            height={250}
                            width={406}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">My portfolio website</h5>
                            <p className="card-text">
                                My portfolio (this website). <br /> I wanted a
                                way to showcase my work so I built this
                            </p>
                            <div className="d-flex justify-content-between pt-5">
                                <a
                                    href="https://idkjanevim.github.io/spejs-nextjs/"
                                    className="btn btn-primary"
                                >
                                    Go to website
                                </a>
                                <a
                                    href="https://github.com/idkjanevim/spejs-nextjs"
                                    className="btn btn-primary"
                                >
                                    Go to Github page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-white text-center py-5">Other</h2>
                <div className="d-flex justify-content-center flex-sm-column flex-lg-row">
                    <div className="card mx-5 border my-5 my-md-0">
                        <Image
                            src="/imgs/pong.png"
                            height={250}
                            width={406}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Pong</h5>
                            <p className="card-text text-wrap">
                                Pong clone made with Rust. <br /> This was my
                                first real atempt of making something <br />{' '}
                                with Rust, I thougt that making simple game
                                could <br /> be good way to learn
                            </p>
                            <div className="d-flex justify-content-between">
                                <a
                                    href="https://github.com/idkjanevim/Pong-Rust"
                                    className="btn btn-primary"
                                >
                                    Go to Github page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
