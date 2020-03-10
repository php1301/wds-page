import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="  secondary-color-bg">
                <div className="row align-center">
                    <div className="columns xxlarge-10 xlarge-10 large-12 medium-10 small-11">
                        <div className="row align-justify">
                            <div className="columns large-2 medium-12 small-12 animation fromTop t-delay-20 p-t-5 show-for-large in-view">
                                <a href="https://osomstudio.com" className="logo"><img src="https://mk0osomstudioc8mx6dt.kinstacdn.com/app/themes/osomstudio/dist/images/logo-white.svg" alt="Osom Studio" data-lazy-src="https://mk0osomstudioc8mx6dt.kinstacdn.com/app/themes/osomstudio/dist/images/logo-white.svg" className="lazyloaded" data-was-processed="true" /><noscript>&lt;img src="https://mk0osomstudioc8mx6dt.kinstacdn.com/app/themes/osomstudio/dist/images/logo-white.svg" alt="Osom Studio"/&gt;</noscript></a>
                            </div>
                            <div className="columns large-3 medium-4 small-6 animation fromTop t-delay-40 in-view">
                                <p>ZOBACZ RÓWNIEŻ:</p>
                                <ul>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/studio-agencja-interaktywna/" target data-link="O nas">O nas</a>
                                    </li>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/co-robimy/" target data-link="Co robimy ?">Co robimy ?</a>
                                    </li>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/projekty/" target data-link="Projekty">Projekty</a>
                                    </li>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/blog/" target data-link="Blog">Blog</a>
                                    </li>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/kariera/" target data-link="Kariera">Kariera</a>
                                    </li>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/kontakt/" target data-link="Kontakt">Kontakt</a>
                                    </li>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/dane-spolki/" target data-link="Dane Spółki">Dane Spółki</a>
                                    </li>
                                    <li>
                                        <a className="link" href="https://osomstudio.com/polityka-prywatnosci/" target data-link="Polityka prywatności">Polityka prywatności</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns large-3 medium-4 small-6 animation fromTop t-delay-60 in-view">
                                <p>BĄDŹ NA BIEŻĄCO:</p>
                                <ul className="socials-list">
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.facebook.com/osomstudio/" target="_blank" data-link="Facebook" rel="noopener">Facebook</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.instagram.com/osom_studio/" target="_blank" data-link="Instagram" rel="noopener">Instagram</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.linkedin.com/company/osom-studio" target="_blank" data-link="Linkedin" rel="noopener">Linkedin</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://www.behance.net/osomstudioteam" target="_blank" data-link="Behance" rel="noopener">Behance</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://clutch.co/profile/osom-studio" target="_blank" data-link="Clutch" rel="noopener">Clutch</a>
                                    </li>
                                    <li>
                                        <a className="link osm-gtm-shares" href="https://dribbble.com/osomstudio" target="_blank" data-link="Dribbble" rel="noopener">Dribbble</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns large-3 medium-4 small-12 animation fromTop t-delay-80 in-view">
                                <p>SKONTAKTUJ SIĘ Z NAMI:</p>
                                <div className="footer-text">
                                    OSOM Studio Sp. z o.o.<br />
            Jaracza 47, lokal 7, 90-249 Łódź<br />
            Mokotowska 1, 00-640 Warszawa<br />
                                </div>
                                <div className="footer-text contact">
                                    <a className="secondary-color-2-link osm-gtm-email" href="mailto:office@osomstudio.com">office@osomstudio.com</a><br />
                                </div>
                            </div>
                            <div id="copyright" className="columns large-12 medium-12 small-12 animation fromTop t-delay-90 in-view">
                                Copyright © 2014-2020.
        </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
