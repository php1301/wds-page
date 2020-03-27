import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
const ScrollLink = Scroll.Link
export default class Contact extends Component {
    render() {
        return (
            <section className="work-with mt-80" data-scroll-index={5}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="title">
                                <h2 className="title-text" data-text="CONTACT">LET'S WORK TOGETHER</h2>
                                <p>Get in touch with us to get started.</p>
                                <div className="dash" />
                                <div className="mt-50"> <a className="light-button" href="mailto:xinchao@webdevstudios.org">MAIL US</a></div>
                            </div>
                            <ScrollLink
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                activeClass='some-active-class'
                            // data-scroll-nav={1}
                            ><a className="to-top dark-orange-gradient">
                                    <i className="fa fa-angle-up" aria-hidden="true" />
                                    <p>PAGE</p>
                                    <p>TOP</p>
                                </a>
                            </ScrollLink>

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
