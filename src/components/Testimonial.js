import React, { Component } from 'react'
import photo from "../wp-content/themes/monopo/img/photo-1.png"
export default class Testimonial extends Component {
  render() {
    return (
      <section className="testimonial between">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 centered text-center text-lg-left">
              <div>
                <h2 className="title-text">What People Says</h2>
                <p className="sub-title mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="nav-custom mt-40 text-center text-lg-left text-md-left">
                  <i className="fas fa-arrow-left nav-left" />
                  <i className="fas fa-arrow-right nav-right" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="testi-content testi-2-bg">
                <div className="owl-carousel owl-theme owl-loaded">
                  <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1460px, 0px, 0px)', transition: 'all 0s ease 0s', width: 4380 }}><div className="owl-item cloned" style={{ width: 730 }}><div className="testi-item text-center">
                    <p>"Breakfast agreeable incommode departure it an. By ignorant at on wondered relation.
                  Enough at tastes really so cousin am of."</p>
                    <div className="author">
                      <img src={photo} alt={1} />
                      <p className="author-text">Nattasha, Aloka CEO</p>
                    </div>
                  </div></div><div className="owl-item cloned" style={{ width: 730 }}><div className="testi-item text-center">
                    <p>"There is nothing to prevent us from living on the Moon. Many books have been
                  written on this subject. ."</p>
                    <div className="author">
                      <img src={photo} alt={1} />
                      <p className="author-text">Rafian Sevent</p>
                    </div>
                  </div></div><div className="owl-item active" style={{ width: 730 }}><div className="testi-item text-center">
                    <p>"Breakfast agreeable incommode departure it an. By ignorant at on wondered relation.
                  Enough at tastes really so cousin am of."</p>
                    <div className="author">
                      <img src={photo} alt={1} />
                      <p className="author-text">Nattasha, Aloka CEO</p>
                    </div>
                  </div></div><div className="owl-item" style={{ width: 730 }}><div className="testi-item text-center">
                    <p>"There is nothing to prevent us from living on the Moon. Many books have been
                  written on this subject. ."</p>
                    <div className="author">
                      <img src={photo} alt={1} />
                      <p className="author-text">Rafian Sevent</p>
                    </div>
                  </div></div><div className="owl-item cloned" style={{ width: 730 }}><div className="testi-item text-center">
                    <p>"Breakfast agreeable incommode departure it an. By ignorant at on wondered relation.
                  Enough at tastes really so cousin am of."</p>
                    <div className="author">
                      <img src={photo} alt={1} />
                      <p className="author-text">Nattasha, Aloka CEO</p>
                    </div>
                  </div></div><div className="owl-item cloned" style={{ width: 730 }}><div className="testi-item text-center">
                    <p>"There is nothing to prevent us from living on the Moon. Many books have been
                  written on this subject. ."</p>
                    <div className="author">
                      <img src={photo} alt={1} />
                      <p className="author-text">Rafian Sevent</p>
                    </div>
                  </div>
                    </div>
                  </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev">
                      <span aria-label="Previous">‹</span>
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                      <span aria-label="Next">›</span></button>
                  </div>
                  {/* <div className="owl-dots disabled"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="partner mt-40">
        <div className="container">
          <div className="owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{ transform: 'translate3d(-1110px, 0px, 0px)', transition: 'all 0s ease 0s', width: 3552 }}>
                <div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="ahttps://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item active" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item active" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item active" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item active" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item active" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div></div><div className="owl-item cloned" style={{ width: 222 }}><div className="parter-item">
                  <img src="https://webdevstudios.org/wp-content/uploads/2019/01/Asset-2.png" alt={1} />
                </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span></button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </div> */}
      </section>
    )
  }
}
