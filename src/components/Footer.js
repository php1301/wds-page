import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="secondary-color-bg">
                <div className="row align-center">
                    <div className="columns xxlarge-10 xlarge-10 large-12 medium-10 small-11">
                        <div className="row align-justify">
                            <div className="columns large-2 medium-12 small-12 animation fromTop t-delay-20 p-t-5 show-for-large in-view">
                                <a  href="https://osomstudio.com" className="logo"><img style={{ width: "215px" }} src="https://i.imgur.com/UsiRjMt.png" alt="WDS Studio" data-lazy-src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" className="lazyloaded" data-was-processed="true" /><noscript>&lt;img src="https://mk0osomstudioc8mx6dt.kinstacdn.com/app/themes/osomstudio/dist/images/logo-white.svg" alt="WDS Studio"/&gt;</noscript></a>
                            </div>
                            <div className="columns large-3 medium-4 small-6 animation fromTop t-delay-40 in-view">
                                <p>See Also:</p>
                                <ul>
                                    <li>
                                        <a className="link" href="https://webdevstudios.org/" target data-link="Webdev">Old Website</a>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div className="columns large-3 medium-4 small-6 animation fromTop t-delay-60 in-view">
                                <p>Stay Informed:</p>
                                <ul className="socials-list">
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.facebook.com/webdevstudios.org/" target="_blank" data-link="Facebook" rel="noopener">Facebook</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.facebook.com/webdevstudios.org/" target="_blank" data-link="Instagram" rel="noopener">Instagram</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.facebook.com/webdevstudios.org/" target="_blank" data-link="LinkedIn" rel="noopener">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.facebook.com/webdevstudios.org/" target="_blank" data-link="Behance" rel="noopener">Behance</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns large-3 medium-4 small-12 animation fromTop t-delay-80 in-view">
                                <p>CONTACT US:</p>
                                <div className="footer-text">
                                    Webdev Studio B8.4<br />
            University Of Information Technology<br />
            Quarter 6, Linh Trung Ward, Thu Duc District, Ho Chi Minh City, Vietnam<br />
                                </div>
                                <div className="footer-text contact">
                                    <a className="secondary-color-2-link osm-gtm-email" href="mailto:office@osomstudio.com">xinchao@webdevstudios.org</a><br />
                                </div>
                            </div>
                            {/* <div id="copyright" className="columns large-12 medium-12 small-12 animation fromTop t-delay-90 in-view">
                                Copyright © 2018-2020.
        </div> */}
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
