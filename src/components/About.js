import React, { Component } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
export default class About extends Component {
    render() {
        return (
            <section className="about between" data-scroll-index={2}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 ">
                            <div className="title text-center">
                                <h2 className="title-text"><span className="orange-underline">About</span></h2>
                                <p>We're your Creative Agency, since 2018</p>
                                <div className="dash" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="about-slide">
                                <div className="about-image about-2-bg">
                                    <div className="owl-carousel owl-theme owl-loaded">
                                        <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1150px, 0px, 0px)', transition: 'all 2s ease 0s', width: 4025 }}><div className="owl-item cloned" style={{ width: 575 }}><div className="about-item">
                                            <figure className="red-gradient">
                                                <img className="img-fluid" src="https://i.imgur.com/NRKX1bU.jpg" alt="about" />
                                            </figure>
                                        </div></div><div className="owl-item cloned" style={{ width: 575 }}><div className="about-item">
                                            <figure className="dark-orange-gradient">
                                                <img className="img-fluid" src="https://i.imgur.com/xeNCleG.jpg" alt="about" />
                                            </figure>
                                        </div></div><div className="owl-item active" style={{ width: 575 }}><div className="about-item">
                                            <figure className="blue-gradient">
                                                <img className="img-fluid" src="https://i.imgur.com/NRKX1bU.jpg" alt="about" />
                                            </figure>
                                        </div></div><div className="owl-item" style={{ width: 575 }}><div className="about-item">
                                            <figure className="red-gradient">
                                                <img className="img-fluid" src="https://i.imgur.com/xeNCleG.jpg" alt="about" />
                                            </figure>
                                        </div></div><div className="owl-item" style={{ width: 575 }}><div className="about-item">
                                            <figure className="dark-orange-gradient">
                                                <img className="img-fluid" src="https://i.imgur.com/NRKX1bU.jpg" alt="about" />
                                            </figure>
                                        </div></div><div className="owl-item cloned" style={{ width: 575 }}><div className="about-item">
                                            <figure className="blue-gradient">
                                                <img className="img-fluid" src="https://i.imgur.com/xeNCleG.jpg" alt="about" />
                                            </figure>
                                        </div></div><div className="owl-item cloned" style={{ width: 575 }}><div className="about-item">
                                            <figure className="red-gradient">
                                                <img className="img-fluid" src="https://i.imgur.com/NRKX1bU.jpg" alt="about" />
                                            </figure>
                                        </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 centered">
                            <div className="about-text text-center text-lg-left mt-mobile">
                                <h2>Who We Are</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quas
                                  dolore, exercitationem, quisquam aspernatur at temporibus possimus fugiat fugit nulla iusto
            illum delectus iure architecto ea, ex assumenda? Quia, voluptatibus?</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text text-center text-lg-left mt-mobile mt-40">
                                <h2>Our Vision</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quas
                                  dolore, exercitationem, quisquam aspernatur at temporibus possimus fugiat fugit nulla iusto
            illum delectus iure architecto ea, ex assumenda? Quia, voluptatibus?</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text text-center text-lg-left mt-mobile mt-40">
                                <h2>How we work</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quas
                                  dolore, exercitationem, quisquam aspernatur at temporibus possimus fugiat fugit nulla iusto
            illum delectus iure architecto ea, ex assumenda? Quia, voluptatibus?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
