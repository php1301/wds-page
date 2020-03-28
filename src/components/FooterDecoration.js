import React, { Component } from 'react'

export default class FooterDecoration extends Component {
    render() {
        return (
            <section className="idea" id="idea">
                <div className="wave-wrapper animation SlidefromDown in-view">
                    <div className=" wave-pink" />
                </div>
                <div className="inner   primary-color-bg">
                    <div className="row align-center text-center">
                        <div className="columns xxlarge-6 xlarge-6 large-7 medium-8 small-11">
                            <h2 className="headline xxlarge white-color animation fromDown t-delay-20 idea-header in-view">Let's Do This!</h2>
                            <p className="white-color">Let’s get to work on a common project!<br />
                                <br />
                                You’re curious what we can do for your business? You want to benefit from online marketing or you need graphic design services in your company?<br />
                                <br /></p>
                            <a className="idea-contact-button button secondary-white-color animation fromDown t-delay-60 no-decoration in-view"><span>Contact Us Now</span></a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
