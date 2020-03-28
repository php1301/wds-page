import React, { Component, Fragment } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
import '../wp-content/themes/monopo/css/wave.css'
import '../../node_modules/owl.carousel/dist/owl.carousel'
import Sub from './Sub'
import FooterDecoration from './FooterDecoration'
import Footer from './Footer'
import AOS from 'aos';
import * as Scroll from 'react-scroll'
import 'aos/dist/aos.css';
import $ from 'jquery'
const ScrollLink = Scroll.Link
export default class Homepage extends Component {
    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            console.log(scroll)
            if (scroll > 800) {
                $('.to-top').css("display", "block")
            }
            else {
                $('.to-top').css("display", "none")
            }
        })
    }
    render() {
        return (
            <Fragment>
                <Sub />
                <div data-aos="fade-up" id="footer-wrapper">
                    <FooterDecoration />
                    <Footer />
                </div>
                <ScrollLink
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="to-top"
                    activeClass='some-active-class'
                // data-scroll-nav={1}
                >
                    <i className="fa fa-angle-up" aria-hidden="true" />
                </ScrollLink>
            </Fragment>
        )
    }
}
