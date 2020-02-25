import React, { Component } from 'react'
const contacts = [{
  id: 1,
  name: 'Apple',
  phoneNumber: 'IOS',
  image: 'https://cdn.worldvectorlogo.com/logos/apple.svg'
}, {
  id: 2,
  name: 'Google',
  phoneNumber: 'Android',
  image: 'https://cdn.worldvectorlogo.com/logos/android.svg'
}, {
  id: 3,
  name: 'Microsoft',
  phoneNumber: 'Windows mobile',
  image: 'https://cdn.worldvectorlogo.com/logos/windows.svg'
}, {
  id: 4,
  name: 'Blackberry',
  phoneNumber: 'Blackberry OS',
  image: 'https://cdn.worldvectorlogo.com/logos/bbm-blackberry-messenger.svg'
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
              
               <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-970px, 0px, 0px)', transition: 'all 0s ease 0s', width: 2910 }}>
                <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="team-item">
                        <div className="team-image purple-gradient">
                          <figure><img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/p960x960/81995164_1059332287739140_5501445565319217152_o.png?_nc_cat=102&_nc_ohc=P3MsmmWhulkAX9L3Kry&_nc_ht=scontent-sin6-2.xx&oh=acb3bb190b3c518c0ec279c91bb1e2cc&oe=5EF686DE" alt={1} /></figure>
                        </div>
                        <div className="team-text purple-gradient">
                          <h3>Mỹ Dung </h3>
                          <p>HTTT2018</p>
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
                <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="team-item">
                        <div className="team-image red-gradient">
                          <figure><img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p960x960/82179415_1059332344405801_4274071923622674432_o.png?_nc_cat=106&_nc_ohc=sFT6dZAFLCIAX95VfOK&_nc_ht=scontent.fsgn5-6.fna&oh=488489d6502cdf224366c59d75c171e5&oe=5EC57815" alt={1} /></figure>
                        </div>
                        <div className="team-text red-gradient">
                          <h3>Trúc Lam</h3>
                          <p>CTTT2019</p>
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
                          <figure><img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/p960x960/80838566_1059332304405805_1102369640748679168_o.png?_nc_cat=103&_nc_ohc=Bvngr-o5vi4AX9wsjqG&_nc_ht=scontent-sin6-2.xx&oh=8283d7e202d73c8903455886c348815c&oe=5EBD978C" alt={1} /></figure>
                        </div>
                        <div className="team-text dark-orange-gradient">
                          <h3>Khánh Hà </h3>
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
                </div>
                </div>
                <div className="owl-item cloned" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                </div>
                </div>
              </div>
              </div> 
              </div> 


              <div className="owl-carousel owl-theme owl-loaded owl-drag">
              
              <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-970px, 0px, 0px)', transition: 'all 0s ease 0s', width: 2910 }}>
               <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                 <div className="row">
                   <div className="col-lg-12">
                     <div className="team-item">
                       <div className="team-image purple-gradient">
                         <figure><img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p960x960/81389191_1059326194406416_4740685648925556736_o.png?_nc_cat=107&_nc_sid=a61e81&_nc_ohc=GVDjCoXT2iUAX9u6Shb&_nc_ht=scontent.fsgn5-6.fna&oh=6a6148dfbea77e78201cb1ef6c5a3962&oe=5EFEB810" alt={1} /></figure>
                       </div>
                       <div className="team-text purple-gradient">
                         <h3>Huỳnh Nhi </h3>
                         <p>KHCL2018</p>
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
                         <figure><img src="https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-9/p960x960/81195482_1059326207739748_5235779001720504320_o.png?_nc_cat=111&_nc_ohc=bVPry_t5YfgAX8noZ6B&_nc_ht=scontent-hkg3-2.xx&oh=28d755fe1ee911102b472ed694abf7a0&oe=5EBA1133" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Minh Hiền</h3>
                         <p>CNTT2018</p>
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
                         <figure><img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/81282016_1059326307739738_3996562193863671808_o.png?_nc_cat=100&_nc_sid=a61e81&_nc_ohc=0PYjlSm-XC8AX8eEsDM&_nc_ht=scontent.fsgn5-5.fna&oh=b579dfafdba831a06d10c113fe8b36fe&oe=5EB5A95B" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Quỳnh Như</h3>
                         <p>MMTT2018</p>
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
               </div></div>  <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                 <div className="row">
                   <div className="col-lg-12">
                     <div className="team-item">
                       <div className="team-image red-gradient">
                         <figure><img src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/p960x960/81366677_1059326357739733_3095581310471634944_o.png?_nc_cat=101&_nc_sid=a61e81&_nc_ohc=TY9rrtmAdywAX_fPVlR&_nc_ht=scontent.fsgn5-1.fna&oh=def669add9c02fd3bf06eef3345ba5fa&oe=5EF5D21A" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Thanh Tùng</h3>
                         <p>KTPM2019</p>
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
               </div></div>  <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                 <div className="row">
                   <div className="col-lg-12">
                     <div className="team-item">
                       <div className="team-image red-gradient">
                         <figure><img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p960x960/81216472_1059326394406396_4357299451992211456_o.png?_nc_cat=105&_nc_sid=a61e81&_nc_ohc=cSTxU4ZKzrUAX9fgSD_&_nc_ht=scontent.fsgn5-2.fna&oh=4a31ea47ae954dd6aa5e24a6f635d0a4&oe=5EF4F853" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Thảo Như</h3>
                         <p>MMTT2018</p>
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
                         <figure><img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p960x960/80853545_1059326281073074_7497384943002058752_o.png?_nc_cat=104&_nc_sid=a61e81&_nc_ohc=XGfSzHdBfeIAX--lwzb&_nc_ht=scontent.fsgn5-3.fna&oh=8babf623d1ab73144418a4963b7e3ceb&oe=5EB6651C" alt={1} /></figure>
                       </div>
                       <div className="team-text dark-orange-gradient">
                         <h3>Ngọc Thành </h3>
                         <p>ATCL 2019</p>
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
                         <figure><img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p960x960/81645681_1059326427739726_181628420281597952_o.png?_nc_cat=107&_nc_sid=a61e81&_nc_ohc=zei4BC1NK0kAX-8-R1f&_nc_ht=scontent.fsgn5-6.fna&oh=c674cc5139662de057d09b1d5e8c6af3&oe=5EB836EA" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Thúy Nga</h3>
                         <p>HTCL2019</p>
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
                         <figure><img src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p960x960/80974877_1059326554406380_8004959032672518144_o.png?_nc_cat=103&_nc_sid=a61e81&_nc_ohc=FHT0CYlhUTMAX_9v_gI&_nc_ht=scontent.fsgn5-7.fna&oh=3ea413b1067c945f946a37952c01e46b&oe=5EBA9CF6" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Trọng Phát</h3>
                         <p>CNTT2019</p>
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
                         <figure><img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p960x960/81619275_1059326584406377_4693003952797515776_o.png?_nc_cat=109&_nc_sid=a61e81&_nc_ohc=kNZcAFVTT7sAX8i68hl&_nc_ht=scontent.fsgn5-6.fna&oh=86bbdd9c5182f2fcacfcf5d049db1349&oe=5EF658A9" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Trung Dũng</h3>
                         <p>TMĐT2018</p>
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
                         <figure><img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p960x960/81027462_1061686994170336_5366519713176223744_o.png?_nc_cat=110&_nc_sid=a61e81&_nc_ohc=amcKcrDbn9EAX9G0mpE&_nc_ht=scontent.fsgn5-3.fna&oh=0f37d8d662bd0360095bb809d7c1a607&oe=5EFC3E5B" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Thủy Tiên</h3>
                         <p>USSH- DU LỊCH</p>
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
              
              <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-970px, 0px, 0px)', transition: 'all 0s ease 0s', width: 2910 }}>
            
               
               <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                 <div className="row">
                   <div className="col-lg-12">
                     <div className="team-item">
                       <div className="team-image red-gradient">
                         <figure><img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/81251207_1059314827740886_2403019878396067840_o.png?_nc_cat=108&_nc_sid=a61e81&_nc_ohc=6Woi5qPk8LoAX9DBvS1&_nc_ht=scontent.fsgn5-5.fna&oh=f4561d9b1d419b7e7d37b623d8efebe9&oe=5EC5496E" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Hữu Sang</h3>
                         <p>CNTT2017</p>
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
               </div></div>  <div className="owl-item" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                 <div className="row">
                   <div className="col-lg-12">
                     <div className="team-item">
                       <div className="team-image red-gradient">
                         <figure><img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p960x960/81168920_1059314757740893_2434855653462769664_o.png?_nc_cat=102&_nc_sid=a61e81&_nc_ohc=e7ytWWT3NGUAX_JwpQa&_nc_ht=scontent.fsgn5-4.fna&oh=e31359df16485791c72444c9fa9f5df6&oe=5EF3D1B0" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Thanh Hiển</h3>
                         <p>HTTT2018</p>
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
                         <figure><img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/81446123_1059314667740902_7071602462464933888_o.png?_nc_cat=100&_nc_sid=a61e81&_nc_ohc=gE-LAKT0CVwAX_cuxs0&_nc_ht=scontent.fsgn5-5.fna&oh=778273c5936f139cbe02830fe2a5cc56&oe=5EB91B88" alt={1} /></figure>
                       </div>
                       <div className="team-text dark-orange-gradient">
                         <h3>Khánh Duy </h3>
                         <p>PMCL2018</p>
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
                         <figure><img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p960x960/81166862_1059314647740904_5456340725014724608_o.png?_nc_cat=105&_nc_sid=a61e81&_nc_ohc=rdheA8xF7XkAX-fRFqX&_nc_ht=scontent.fsgn5-2.fna&oh=c58bd2147af0ca0452d6e9dc2bd93dfd&oe=5EB73EC2" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Anh Tú</h3>
                         <p>HTCL2019</p>
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
                         <figure><img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p960x960/80975160_1059314657740903_2811928802521776128_o.png?_nc_cat=111&_nc_sid=a61e81&_nc_ohc=94mrW7dOG5EAX98mCL-&_nc_ht=scontent.fsgn5-3.fna&oh=f7969e26707a8d08225d45e416d0e5db&oe=5EBC9D30" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Ngọc Hiền</h3>
                         <p>HTTT2018</p>
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
                         <figure><img src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p960x960/81891344_1059314714407564_6216946649650954240_o.png?_nc_cat=103&_nc_sid=a61e81&_nc_ohc=SBfRFxronysAX9K7DEz&_nc_ht=scontent.fsgn5-7.fna&oh=67ff366e60a3abe3d17783eae9abb65e&oe=5EC0842D" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Trúc Ly</h3>
                         <p>TMĐT2018</p>
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
                         <figure><img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p960x960/80800766_1059314747740894_4607720140115542016_o.png?_nc_cat=102&_nc_sid=a61e81&_nc_ohc=LHOQk8skgWIAX-VS4rL&_nc_ht=scontent.fsgn5-4.fna&oh=2f07e40d17a01ff31d8bfd06ae74ffa8&oe=5EC28516" alt={1} /></figure>
                       </div>
                       <div className="team-text red-gradient">
                         <h3>Thế Tuấn</h3>
                         <p>HTTT2019</p>
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
                <div className="owl-item cloned" style={{ width: '240px', marginRight: 30 }}><div className="team-slide">
                <div className="owl-nav disabled">
                      <button type="button" role="presentation" className="owl-prev">
                        <span aria-label="Previous">‹</span>
                      </button>
                      <button type="button" role="presentation" className="owl-next">
                        <span aria-label="Next">›</span></button>
                    </div>
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
