import React, { Component, Fragment } from 'react'
import Test from './Services'
import About from './About'
import $ from 'jquery'
import TweenMax from 'gsap'
import * as Scroll from 'react-scroll'
import { Element } from 'react-scroll'
import Work from './Work'
import Team from './Team'
import Contact from './Contact'
const ScrollLink = Scroll.Link
export default class Sub extends Component {
    componentDidMount() {
        navbarScrol();

        function navbarScrol() {
            var wind = $(window);
            var HHeight = $('.header-height .fixed-header-bar').height();
            wind.on("scroll", function () {
                $('header').height(HHeight);
                var bodyScroll = wind.scrollTop();

                if (bodyScroll > 300) {
                    $('header').addClass('fixed-header');
                    TweenMax.to('.hero', 1, {
                        scale: 1.2,
                        autoAlpha: 0
                    });

                } else {
                    $('header').removeClass('fixed-header');
                    TweenMax.to('.hero', 1, {
                        scale: 1,
                        autoAlpha: 1
                    });
                }

            });
        }

    }
    render() {
        return (
            <Fragment>
                <header className="home-2">
                    <nav className="navbar header-nav navbar-expand-lg">
                        <div className="container container-large">
                            {/* Brand */}
                            <a className="navbar-brand" href="#">
                                <img style={{ width: "160px", height: "40px" }} className="light-logo" src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" title alt />
                                <img style={{ width: "160px", height: "40px" }} className="dark-logo" src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" title alt />
                            </a>
                            {/* / */}
                            {/* Mobile Toggle */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span />
                                <span />
                                <span />
                            </button>
                            {/* / */}
                            {/* Top Menu */}
                            <div className="collapse navbar-collapse justify-content-end" id="navbar">
                                <ul className="navbar-nav ml-auto align-items-center">
                                    <li className="m-dropdown m-mega-menu">
                                        <a className="nav-link" href="#work" data-scroll-nav={0}>Home</a>
                                        <i className="fa fa-angle-down m-dropdown-toggle" />
                                        <ul className="m-dropdown-menu m-dropdown-mega-menu">
                                            <li>
                                                <div className="container container-large">
                                                    <div className="row">
                                                        <div className="mm-column col-12 col-md-3 text-center">
                                                            <a href="index-1.html">
                                                                <p className="mm-header">Home V1</p>
                                                            </a>
                                                            <a href="index-1.html"><img className="img-fluid" src="assets/img/demo/1.jpg" alt={1} /></a>
                                                        </div> {/* mm-col */}
                                                        <div className="mm-column col-12 col-md-3 text-center">
                                                            <a href="index-2.html">
                                                                <p className="mm-header">Home V2</p>
                                                            </a>
                                                            <a href="index-2.html">
                                                                <img className="img-fluid" src="assets/img/demo/2.jpg" alt={1} />
                                                            </a>
                                                        </div> {/* mm-col */}
                                                        <div className="mm-column col-12 col-md-3 text-center">
                                                            <a href="index-3.html">
                                                                <p className="mm-header">Home V3</p>
                                                            </a>
                                                            <a href="index-3.html">
                                                                <img className="img-fluid" src="2.jpg" alt={1} />
                                                            </a>
                                                        </div> {/* mm-col */}
                                                        <div className="mm-column col-12 col-md-3 text-center">
                                                            <a href="index-4.html">
                                                                <p className="mm-header">Home V4 dark</p>
                                                            </a>
                                                            <a href="index-4.html">
                                                                <img className="img-fluid" src="assets/img/demo/3.jpg" alt={1} />
                                                            </a>
                                                        </div> {/* mm-col */}
                                                    </div> {/* row */}
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ScrollLink
                                            to="services"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            className="nav-link"
                                            activeClass='some-active-class'
                                        // data-scroll-nav={1}
                                        >Services
                                        </ScrollLink>
                                    </li>
                                    <li> <ScrollLink
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="nav-link"
                                        activeClass='some-active-class'
                                    // data-scroll-nav={1}
                                    >About
                                        </ScrollLink></li>
                                    <li> <ScrollLink
                                        to="works"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="nav-link"
                                        activeClass='some-active-class'
                                    // data-scroll-nav={1}
                                    >Works
                                        </ScrollLink></li>
                                    <li> <ScrollLink
                                        to="team"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="nav-link"
                                        activeClass='some-active-class'
                                    // data-scroll-nav={1}
                                    >Team
                                        </ScrollLink></li>
                                    <li className="m-dropdown m-dropdown-multilevel">
                                        <a className="nav-link" href="#">Pages</a>
                                        <i className="fa fa-angle-down m-dropdown-toggle" />
                                        <ul className="m-dropdown-menu">
                                            <li><a href="service-detail.html">Service Detail</a></li>
                                            <li><a href="work-detail.html">Portfolio Detail</a></li>
                                            <li><a href="work-page.html">Portfolio Page</a></li>
                                            <li><a href="service-detail-dark.html">Service Detail Dark</a></li>
                                            <li><a href="work-detail-dark.html">Portfolio Detail Dark</a></li>
                                            <li><a href="work-page-dark.html">Portfolio Page Dark</a></li>
                                        </ul>
                                    </li>
                                    <li> <ScrollLink
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="nav-link"
                                        activeClass='some-active-class'
                                    // data-scroll-nav={1}
                                    >Contact
                                        </ScrollLink></li>                                </ul>
                            </div>
                            {/* / */}
                        </div>{/* Container */}
                    </nav> {/* Navbar */}
                </header>
                <Element id='services' name='services' >
                    <Test />
                </Element>
                <Element id='about' name='about' >
                    <About />
                </Element>
                <Element id='works' >
                    <Work />
                </Element>
                <Element id='team' >
                    <Team />
                </Element>
                <Element id='contact' >
                    <Contact />
                </Element>
            </Fragment>
        )
    }
}
