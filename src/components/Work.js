import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <div>
        <section className="work between" data-scroll-index={3}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="title text-center mb-40">
                  <h2 className="title-text"><span>Work</span></h2>
                  <p>Digital Marketing Agency, providing innovative,</p>
                  <div className="dash" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer"><div className="owl-stage" style={{ transition: 'all 0s ease 0s', width: 2883, transform: 'translate3d(361px, 0px, 0px)' }}><div className="owl-item active center" style={{ width: '720.6px' }}><div className="work-item" data-position={0}>
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <img className="img-fluid" src="https://i.imgur.com/E9B54mF.png" alt />
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="work-title">
                      <h2>Of Monsters and Men</h2>
                      <p>Web Development, UI / UX</p>
                      <a className="button-work dark-orange-gradient" href>View Project</a>
                    </div>
                  </div>
                </div>
              </div></div><div className="owl-item active" style={{ width: '720.6px' }}><div className="work-item" data-position={1}>
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <img className="img-fluid" src="https://i.imgur.com/9JRpjgn.jpg" alt />
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="work-title">
                      <h2>Midnight Town</h2>
                      <p>Web Development, UI / UX</p>
                      <a className="button-work purple-gradient" href>View Project</a>
                    </div>
                  </div>
                </div>
              </div></div><div className="owl-item" style={{ width: '720.6px' }}><div className="work-item" data-position={2}>
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <img className="img-fluid" src="https://i.imgur.com/qPe98BD.png" alt />
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="work-title">
                      <h2>Panorama</h2>
                      <p>Photography / Video</p>
                      <a className="button-work green-gradient" href>View Project</a>
                    </div>
                  </div>
                </div>
              </div></div><div className="owl-item" style={{ width: '720.6px' }}><div className="work-item" data-position={3}>
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <img className="img-fluid" src="https://i.imgur.com/pGmXMgT.jpg" alt />
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="work-title">
                      <h2>Mombasa</h2>
                      <p>Branding / Art Direction</p>
                      <a className="button-work pink-gradient" href>View Project</a>
                    </div>
                  </div>
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
                  <span aria-label="Next">›</span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mt-40">
                {/* <a className="dark-button" href>VIEW ALL WORKS</a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}