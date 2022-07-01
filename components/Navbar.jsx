import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-5 sticky-top">
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-white fw-bold fs-3">
                    ¯\_(ツ)_/¯
                </a>
                <button //CollapseButton
                    type="button"
                    className="navbar-toggler custom-toggler text-white justify-self-end"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div //Links
                    className="collapse navbar-collapse justify-content-center align-items-center"
                    id="navbarCollapse"
                >
                    <div className="navbar-nav">
                        <Link href="#">
                            <a className="nav-item nav-link text-white lnk mx-2">
                                Home
                            </a>
                        </Link>
                        <Link href="#about">
                            <a className="nav-item nav-link text-white lnk mx-2">
                                About
                            </a>
                        </Link>
                        <Link href="#projects">
                            <a className="nav-item nav-link text-white lnk mx-2">
                                Projects
                            </a>
                        </Link>
                        <Link href="#contact">
                            <a className="nav-item nav-link text-white lnk mx-2">
                                Contact
                            </a>
                        </Link>

                        <div className="fs-5 mt-2 d-lg-none border-bottom pb-4 d-flex">
                            <div className="k">
                                <a href="https://github.com/idkjanevim">
                                    <i className="bi bi-github text-white d-lg-none"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div //Social
                    className="d-none d-lg-flex d-xl-flex"
                >
                    <div className="k mx-3">
                        <a href="https://github.com/idkjanevim">
                            <i className="bi bi-github text-white d-none d-lg-inline d-xl-inline"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
