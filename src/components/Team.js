import React, { Component } from 'react'
const contacts = [{
  id: 1,
  name: 'Quyết Chiến',
  phoneNumber: 'IOS',
  image: 'https://lh3.google.com/u/2/d/1yNrN7XRzlk2X6rh3hsCK8IFtlnx_nZMx=w250-h238-p-k-nu-iv1'
}, {
  id: 2,
  name: 'Thiện Đạt',
  phoneNumber: 'Android',
  image: 'https://lh3.google.com/u/2/d/1AO1_2wQIxMomwMDKBJKJXwBHS1lW8yU9=w250-h238-p-k-nu-iv1'
}, {
  id: 3,
  name: 'Châu Giang',
  phoneNumber: 'Windows mobile',
  image: 'https://lh3.google.com/u/2/d/11E6cNsT2cXlXYA98zU2lvg_XLPau-iGa=w250-h238-p-k-nu-iv2'
}, {
  id: 4,
  name: 'Công Minh',
  phoneNumber: 'Blackberry OS',
  image: 'https://lh3.google.com/u/2/d/1r__gcFORs4r_oK1M-aUMxvvrGCKV3L53=w250-h238-p-k-nu-iv1'
}];
export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: contacts
    }
  }

  handleSearch = (e) => {
    let searchQuery = e.target.value.toLowerCase()
    console.log(searchQuery)
    let display = contacts.filter((el) => {
      let displayValue = el.name.toLowerCase()
      return displayValue.indexOf(searchQuery) !== -1
    })
    this.setState({
      display
    })
  }
  render() {
    return (
      <div>
        <section className="team between" >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="title text-center">
                  <h2 className="title-text"><span className="orange-underline">Team</span></h2>
                  <p>Good design is simple, clear and uncluttered.</p>
                  <div className="dash" />
                  <div className="team-image-boss dark-orange-gradient">
                    <figure>
                      <p style={{
                        position: "absolute",
                        top: "50%",
                        left: "10%",
                      }}>
                        The
                        </p>
                      <img src="https://lh3.google.com/u/2/d/1XMnyfgRrYP_dViJ9db1_2mNSQjlAXTQ3=w1860-h935-iv1" alt={1} /></figure>
                    <p style={{
                      position: "absolute",
                      top: "50%",
                      right: "10%",
                    }}>
                      boss
                    </p>
                  </div>
                  <div class="search-box">
                    <div class="searchform">
                      <input onChange={this.handleSearch} id="s" type="text" placeholder="Search member" />
                      <div class="close">
                        <span class="front"></span>
                        <span class="back"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{ transform: 'translate3d(-970px, 0px, 0px)', transition: 'all 0s ease 0s', width: 2910 }}>
                  <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="team-item">
                          <div className="team-image dark-orange-gradient">
                            <figure><img src="https://lh3.google.com/u/2/d/1yNrN7XRzlk2X6rh3hsCK8IFtlnx_nZMx=w250-h238-p-k-nu-iv1" alt={1} /></figure>
                          </div>
                          <div className="team-text dark-orange-gradient">
                            <h3>Quyết Chiến  </h3>
                            <p>CTTT2018</p>
                            <ul className="team-social">
                              <li><a href><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div>

                  <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="team-item">
                          <div className="team-image dark-orange-gradient">
                            <figure><img src="https://lh3.google.com/u/2/d/11E6cNsT2cXlXYA98zU2lvg_XLPau-iGa=w250-h238-p-k-nu-iv2" alt={1} /></figure>
                          </div>
                          <div className="team-text dark-orange-gradient">
                            <h3>Châu Giang</h3>
                            <p>CNCL2018</p>
                            <ul className="team-social">
                              <li><a href><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div>
                  <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="team-item">
                          <div className="team-image blue-gradient">
                            <figure><img src="https://lh3.google.com/u/2/d/1AO1_2wQIxMomwMDKBJKJXwBHS1lW8yU9=w250-h238-p-k-nu-iv1" alt={1} /></figure>
                          </div>
                          <div className="team-text blue-gradient">
                            <h3>Thiện Đạt </h3>
                            <p>PMCL2017</p>
                            <ul className="team-social">
                              <li><a href><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
                              <li><a href><i className="fab fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div>
                  <div className="owl-item cloned" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                  </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              <ul className="contacts-list">
                {this.state.display.map((item) => {
                  return (
                    <li className="contact">
                      <img src={item.image} width="60px" height="60px" className="contact-image" />
                      <div className="contact-info">
                        <div className="contact-name">{item.name}</div>
                        <div className="contact-number">{item.phoneNumber}</div>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-970px, 0px, 0px)', transition: 'all 0s ease 0s', width: 2910 }}>
                <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="team-item">
                        <div className="team-image purple-gradient">
                          <figure><img src="https://lh3.google.com/u/2/d/1SwGSN7SiVQU7Y5M59AiAAuc4yuq6RCWD=w250-h238-p-k-nu-iv1" alt={1} /></figure>
                        </div>
                        <div className="team-text purple-gradient">
                          <h3>Tài Triển </h3>
                          <p>PMCL2017</p>
                          <ul className="team-social">
                            <li><a href><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-behance" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="team-item">
                        <div className="team-image red-gradient">
                          <figure><img src="https://lh3.google.com/u/2/d/1BDYwh7vnSd3faMsJJSKSfokkd0H4A6s4=w250-h238-p-k-nu-iv1" alt={1} /></figure>
                        </div>
                        <div className="team-text red-gradient">
                          <h3>Yến Chi - CNTT2018</h3>
                          <p>Graphic Designer</p>
                          <ul className="team-social">
                            <li><a href><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-behance" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="team-item">
                        <div className="team-image dark-orange-gradient">
                          <figure><img src="https://lh3.google.com/u/2/d/1r__gcFORs4r_oK1M-aUMxvvrGCKV3L53=w250-h238-p-k-nu-iv1" alt={1} /></figure>
                        </div>
                        <div className="team-text dark-orange-gradient">
                          <h3>Công Minh </h3>
                          <p>PMCL2017</p>
                          <ul className="team-social">
                            <li><a href><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-behance" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="team-item">
                        <div className="team-image red-gradient">
                          <figure><img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/p960x960/81267887_1059332267739142_4832716765035233280_o.png?_nc_cat=101&_nc_ohc=VdtS2-ps7foAX_2ueuv&_nc_ht=scontent-sin6-2.xx&oh=625b83e8eb247c5e7c930c83e941c46e&oe=5EF6FB64" alt={1} /></figure>
                        </div>
                        <div className="team-text red-gradient">
                          <h3>Hoàng Hiệp </h3>
                          <p>PMCL2016</p>
                          <ul className="team-social">
                            <li><a href><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
                            <li><a href><i className="fab fa-behance" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div className="owl-item cloned" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                </div>
                </div>
              </div>
              </div>

            </div>
          </div>
        </section>
      </div>


    )
  }
}
