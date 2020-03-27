import React, { Component, Fragment } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
import '../wp-content/themes/monopo/css/wave.css'
import '../../node_modules/owl.carousel/dist/owl.carousel'
import Sub from './Sub'
import FooterDecoration from './FooterDecoration'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class Homepage extends Component {
    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }
    render() {
        return (
            <Fragment>
                <Sub />
                <div data-aos="fade-up" id="footer-wrapper">
                    <FooterDecoration />
                    <Footer />
                </div>
            </Fragment>
        )
    }
}
