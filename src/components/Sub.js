import React, { Component, Fragment } from 'react'
import Services from './Services'
import About from './About'
import $ from 'jquery'
import TweenMax from 'gsap'
import * as Scroll from 'react-scroll'
import { Element } from 'react-scroll'
import Work from './Work'
import Team from './Team'
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from './Testimonial'
const ScrollLink = Scroll.Link
export default class Sub extends Component {
    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        window.$(".navbar-toggler").on("click", function (a) {
            a.preventDefault() 
            window.$("header").addClass("fixed-header")
        });
        window.$('.navbar-nav .nav-link').on('click', function () {
            let toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                window.$('.navbar-collapse').collapse('hide');
            }
        });
    
        //dropdown
        dropDown();
    
        function dropDown() {
            var mDropdown = $(".m-dropdown-toggle")
            mDropdown.on("click", function () {
                $(this).parent().toggleClass("open-menu-parent");
                $(this).next('ul').toggleClass("open-menu");
                $(this).toggleClass("open");
            });
            $(".submenu").attr("style", "display: none!important");
    
            $(".dropdowns").on('mouseover', function () {
                $(".submenu").attr("style", "display: block!important");
            });
            $(".dropdowns").on('mouseleave', function () {
                $(".submenu").attr("style", "display: none!important");
            });
        }
        navbarScrol();

        function navbarScrol() {
            var wind = $(window);
            var HHeight = $('.header-height .fixed-header-bar').height();
            wind.on("scroll", function () {
                $('header').height(HHeight);
                var bodyScroll = wind.scrollTop();

                if (bodyScroll > 100) {
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
                                        <a className="nav-link" data-scroll-nav={0}>Home</a>
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
                                        to="testimonial"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="nav-link"
                                        activeClass='some-active-class'
                                    // data-scroll-nav={1}
                                    >Testimonial
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
                <Element data-aos="fade-down" id='services' name='services' >
                    <Services />
                </Element>
                <Element data-aos="fade-right" id='about' name='about' >
                    <About />
                </Element>
                <Element data-aos="fade-left" id='works' >
                    <Work />
                </Element>
                <Element data-aos="fade-right" id='testimonial' >
                    <Testimonial />
                </Element>
                <Element data-aos="fade-left" id='team' >
                    <Team />
                </Element>
                <Element data-aos="fade-right" id='contact' >
                    <Contact Link={ScrollLink} />
                </Element>
            </Fragment>
        )
    }
}
