import React, { Component, Fragment } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
import '../wp-content/themes/monopo/css/wave.css'
import { NavLink, Link } from 'react-router-dom'
import '../../node_modules/owl.carousel/dist/owl.carousel'
import Sub from './Sub'
import FooterDecoration from './FooterDecoration'
import Footer from './Footer'
export default class Homepage extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <Fragment>
                <Sub />
                <FooterDecoration />
                <Footer />
            </Fragment>
        )
    }
}
