import React, { Component } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'

export default class Vision extends Component {
  render() {
    return (
      <div>
        <div id="wrapper" className="js-height_set">
          {/* header start */}
          <div id="header">
            <h2 className="logo">
              <a href="https://monopo.co.jp" className="pjax">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.7 80" className="tra15">
                  <g>
                    <path className="cls-1" d="M65.15.8C58.73.8,52.45,3.52,46.47,8.9,42.19,3.52,36.3.8,28.9.8A24.41,24.41,0,0,0,16.08,4.86v-1a2.31,2.31,0,0,0-2.3-2.33H2.32A2.31,2.31,0,0,0,0,3.89V61.83a2.32,2.32,0,0,0,2.32,2.33H13.78a2.32,2.32,0,0,0,2.3-2.33v-37c0-1.24,3.15-4.87,4.56-5.69,1.74-1,3-2.24,6.84-2.24,1.46,0,8.09,0,8.09,9.79V61.83a2.33,2.33,0,0,0,2.32,2.33H49.36a2.33,2.33,0,0,0,2.32-2.33v-37c0-1.24,3.09-4.89,4.56-5.69,1.88-1,3-2.24,6.84-2.24,1.46,0,8.64,0,8.64,9.22V61.83a2.33,2.33,0,0,0,2.32,2.33H85.51a2.32,2.32,0,0,0,2.32-2.33V26.68c0-7.28-1.64-13.24-4.9-17.74C78.93,3.52,72.94.8,65.15.8Z" /><path className="cls-1" d="M215.76.88a28.67,28.67,0,0,0-15.71,4.79V4.11a2.33,2.33,0,0,0-2.32-2.33H186.4a2.32,2.32,0,0,0-2.32,2.33V61.83a2.32,2.32,0,0,0,2.32,2.33h11.34a2.34,2.34,0,0,0,2.32-2.33v-37c4-5.78,8.9-7.94,14.91-7.94,3.61,0,6.24.24,7.78,2,1.64,1.92,2.47,4.19,2.47,10.17V61.83a2.34,2.34,0,0,0,2.34,2.33h11.32a2.34,2.34,0,0,0,2.34-2.33V29C241.21,5.76,227.35.88,215.76.88Z" /><path className="cls-1" d="M135.39,0a32.45,32.45,0,1,0,32.14,32.45A32.29,32.29,0,0,0,135.39,0Zm0,49.72c-8.84,0-16-7.74-16-17.28s7.17-17.28,16-17.28,16,7.74,16,17.28S144.23,49.72,135.39,49.72Z" /><path className="cls-1" d="M289.21,0a32.45,32.45,0,1,0,32.14,32.45A32.29,32.29,0,0,0,289.21,0Zm0,49.72c-8.84,0-16-7.74-16-17.28s7.17-17.28,16-17.28,16,7.74,16,17.28S298.05,49.72,289.21,49.72Z" /><path className="cls-1" d="M444.56,0A32.45,32.45,0,1,0,476.7,32.45,32.29,32.29,0,0,0,444.56,0Zm0,49.72c-8.84,0-16-7.74-16-17.28s7.17-17.28,16-17.28,16,7.74,16,17.28S453.4,49.72,444.56,49.72Z" /><path className="cls-1" d="M369.8.17a31,31,0,0,0-16.34,4.68V4a2.32,2.32,0,0,0-2.3-2.3H339.69A2.29,2.29,0,0,0,337.43,4V77.68A2.3,2.3,0,0,0,339.69,80h11.47a2.33,2.33,0,0,0,2.3-2.32V59a31,31,0,0,0,16.34,4.68c17.13,0,29.44-12.76,29.44-31.77C399.24,13.36,386.93.17,369.8.17Zm.1,48.47c-9.26,0-16-6.37-16-16.7s6.84-16.7,16-16.7c8,0,14.4,7.48,14.4,16.7S377.85,48.64,369.9,48.64Z" />
                  </g>
                </svg>
              </a>
            </h2>
            <ul id="menu" className="clearfix forpc">
              <li className="js-text_btn rx360"><a href="https://monopo.co.jp/works/" className="pjax tra10 js-text_btn_h">WORK</a></li>
              <li className="js-text_btn rx360"><a href="https://monopo.co.jp/services/" className="pjax tra10 js-text_btn_h">SERVICES</a></li>
              <li className="js-text_btn rx360"><a href="https://monopo.co.jp/vision/" className="pjax tra10 js-text_btn_h">VISION</a></li>
              <li className="js-text_btn rx360"><a href="https://monopo.co.jp/team/" className="pjax tra10 js-text_btn_h">TEAM</a></li>
              <li className="js-text_btn rx360"><a href="https://monopo.co.jp/careers/" className="pjax tra10 js-text_btn_h">CAREERS</a></li>
              <li className="js-text_btn rx360"><a href="https://monopo.co.jp/contact/" className="pjax tra10 js-text_btn_h">CONTACT</a></li>
            </ul>
            <div id="lang" className="forpc">
              <ul className="lang clearfix">
                <li className="on tra10">
                  <form method="post" name="hen" action="https://monopo.co.jp/wp-content/themes/monopo/lang.php">
                    <input type="hidden" name="language" defaultValue="en" />
                    <a href="javascript:hen.submit()">EN</a>
                  </form>
                </li>
              </ul>
            </div>
            <div id="btn_menu">
              <div className="rotate tra10">
                <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                  <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                </svg>
                <div className="bar">
                  <span className="s1 tra05" />
                  <span className="s2 tra05" />
                  <span className="s3 tra05" />
                </div>
                <div className="txt forpc js-text">CLOSE</div>
              </div>
            </div>
            <div id="block_menu">
              <div className="scroll_area">
                <div className="block1 tra15">
                  <ul className="menu">
                    <li className="js-sc_h tra20 delay06 js-text_btn rx360"><a href="https://monopo.co.jp/works/" className="pjax js-text_btn_h">Work</a></li>
                    <li className="js-sc_h tra20 delay07 js-text_btn rx360"><a href="https://monopo.co.jp/services/" className="pjax js-text_btn_h">Services</a></li>
                    <li className="js-sc_h tra20 delay08 js-text_btn rx360"><a href="https://monopo.co.jp/vision/" className="pjax js-text_btn_h">Vision</a></li>
                    <li className="js-sc_h tra20 delay09 js-text_btn rx360"><a href="https://monopo.co.jp/team/" className="pjax js-text_btn_h">Team</a></li>
                    <li className="js-sc_h tra20 delay10 js-text_btn rx360"><a href="https://monopo.co.jp/careers/" className="pjax js-text_btn_h">Careers</a></li>
                    <li className="js-sc_h tra20 delay11 js-text_btn rx360"><a href="https://monopo.co.jp/contact/" className="pjax js-text_btn_h">Contact</a></li>
                  </ul>
                </div>
                <div className="block2 tra15 delay01">
                  <div className="center">
                    <p className="topic js-sc_h tra20 delay08">LATEST NEWS</p>
                    <ul className="news">
                      <li className="clearfix js-sc_h tra20 delay10">
                        <div className="left">
                          <img src="https://monopo.co.jp/wp-content/uploads/2019/11/cb.jpg" />
                        </div>
                        <div className="right">
                          <p className="date">19.11.21</p>
                          <p className="title">WE’RE OFFERING A NEW SERVICE!</p>
                          <div className="btn_detail_line white js-text_btn rx360"><a href="https://monopo.co.jp/bridge/" target="_blank" className="tra05 js-text_btn_h">SEE MORE</a></div>
                        </div>
                      </li>
                      <li className="clearfix js-sc_h tra20 delay11">
                        <div className="left">
                          <img src="https://monopo.co.jp/wp-content/uploads/2019/06/younglions-2019-1.jpg" />
                        </div>
                        <div className="right">
                          <p className="date">19.05.24</p>
                          <p className="title">YOUNG LIONS - SPIKES COMPETITIONS</p>
                        </div>
                      </li>
                    </ul>
                    <p className="topic js-sc_h tra20 delay11">FOLLOW US</p>
                    <ul className="sns clearfix js-sc_h tra20 delay10">
                      <li className="fb">
                        <a href="https://www.facebook.com/monopo.Inc/" target="_blank">
                          <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                            <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                          </svg>
                        </a>
                      </li>
                      <li className="tw">
                        <a href="https://twitter.com/monopo_tokyo/" target="_blank">
                          <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                            <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                          </svg>
                        </a>
                      </li>
                      <li className="insta">
                        <a href="https://www.instagram.com/monopo_japan/" target="_blank">
                          <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                            <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                          </svg>
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="https://www.linkedin.com/company/6983868/" target="_blank">
                          <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                            <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <ul className="lang clearfix js-sc_h tra20 delay12">
                      <li className="on tra10">
                        <form method="post" name="en" action="https://monopo.co.jp/wp-content/themes/monopo/lang.php">
                          <input type="hidden" name="language" defaultValue="en" />
                          <a href="javascript:en.submit()">ENGLISH</a>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header end */}
          {/* ajax_area start */}
          <div id="ajax_area">
            <div id="vision" className="common_docs">
              <div className="fv js-height_set">
                <div className="fixed js-op">
                  <div className="circle">
                    <div className="pic js-window_set tra15 delay15" />
                    <div className="txt_block">
                      <p className="txt1">OUR VISION</p>
                      <h1 className="txt2 f_trump js-text">A BRAND OF <br />COLLECTIVE CREATIVITY</h1>
                    </div>
                  </div>
                  <div id="scroll_down" className="tra05">
                    <p>SCROLL</p>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="box large mb142">
                  <p className="desc js-sc tra20">
                    monopo is a catalyst for <span className="large">innovative</span>, design-driven solutions that connect, motivate, and inspire. Our collective of <span className="large">globally-minded people</span> mobilizes creative communities, breaking down barriers of language and culture. <span className="large">Collaborative by nature</span>, we exercise our spirit of curiosity by engaging with partners internationally. We believe in invention with integrity and are proud to share our work with the world.
          </p>
                </div>
                <div className="pic i1 js-sc js-sc_pic tra20"><img src="https://monopo.co.jp/wp-content/themes/monopo/img/illust_vision_1.png" /></div>
                <div className="box large mb134 js-sc">
                  <h3 className="sub_topic js-sc_h tra20">WE BELIEVE IN</h3>
                  <h2 className="topic js-sc_h tra20 delay01 mb25 mb18_sp">Collective Creativity</h2>
                  <p className="desc js-sc_h tra20 delay02">
                    monopo believes in the power of Collective Creativity. Putting a small team of the right talent together to tackle a brief with their uncompromised passion and perspective. We keep the core agency skills internal while investing heavily in nurturing a community of specialized creatives, strategists. It’s the type of diversity that could never be brought in-house.<br />
                    <br />
                    Collective Creativity also means that we consider our clients and agency partners as members of the community. We work flexibly with internal teams and third-party agencies, without the counter-productive dynamics of “agency vs. client” or “lead agency vs. supporting agency”.
          </p>
                </div>
                <div className="pic i2 js-sc js-sc_pic tra20"><img src="https://monopo.co.jp/wp-content/themes/monopo/img/illust_vision_2.png" /></div>
                <div className="box large mb134 js-sc">
                  <h3 className="sub_topic js-sc_h tra20">THROUGH “GLOCAL” COMMUNITY</h3>
                  <h2 className="topic js-sc_h tra20 delay01 mb25 mb18_sp">Born in Tokyo, growing up in London</h2>
                  <p className="desc js-sc_h tra20 delay02 mb57 mb40_sp">
                    We started in Tokyo,  the business and creative capital of Asia and one of the world’s greatest and most dynamic cities. This puts us in a unique position to collaborate with international creators and organizations. At the start of 2019 we expanded to London, Europe’s most diverse creative capital. It enabled us to grow the community we had built and make it richer with a greater variety of skills and perspectives. The result is a diverse international community of creatives, thinkers and producers that we can bring together based on the specific challenge at hand.
          </p>
                  <div className="btn_detail large js-sc_h tra20 delay03 js-text_btn rx360 mb92 mb70_sp">
                    <a href="https://monopo.london/" target="_blank" className="tra10 js-text_btn_h">MONOPO.LONDON WEBSITE</a>
                  </div>
                </div>
                <div className="black_block bg_pbt">
                  <ul className="slide_common js-sc tra20">
                    <li className="on">
                      <div className="main">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p1.jpg" className="tra25" />
                      </div>
                      <div className="sub">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p1b.jpg" className="tra25 delay02" />
                      </div>
                    </li>
                    <li>
                      <div className="main">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p2.jpg" className="tra25" />
                      </div>
                      <div className="sub">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p2b.jpg" className="tra25 delay02" />
                      </div>
                    </li>
                    <li>
                      <div className="main">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p3.jpg" className="tra25" />
                      </div>
                      <div className="sub">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p3b.jpg" className="tra25 delay02" />
                      </div>
                    </li>
                    <li>
                      <div className="main">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p4.jpg" className="tra25" />
                      </div>
                      <div className="sub">
                        <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b2_p4b.jpg" className="tra25 delay02" />
                      </div>
                    </li>
                  </ul>
                  <div className="box large js-sc">
                    <h3 className="sub_topic js-sc_h tra20">INHOUSE PROJECT</h3>
                    <h2 className="topic js-sc_h tra20 delay01 mb25 mb18_sp">poweredby.tokyo</h2>
                    <p className="desc js-sc_h tra20 delay02 mb57 mb40_sp">
                      For our in-house project poweredby.tokyo, we formed a community of creatives from all over the world who now call Tokyo home. Through documentaries, narrative films, photography, and editorial content, together we communicate and document the real Tokyo, authentically and organically. We create compelling, world class work by collaborating with companies and organizations that want to expand their global presence.
            </p>
                    <div className="btn_detail white large js-sc_h tra20 delay03 js-text_btn rx360 mb92 mb70_sp">
                      <a href="http://poweredby.tokyo/" target="_blank" className="tra10 js-text_btn_h">POWEREDBY.TOKYO WEBSITE</a>
                    </div>
                    <p className="sub_topic2 js-sc tra20 mb32 mb32_sp">SOME BRANDS WITH WHO WE COLLABORATED</p>
                    <ul className="logos js-sc tra20 delay01 clearfix">
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_pen.png" className="pen" /></li>
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_beams.png" className="BEAMS" /></li>
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_bna.png" className="BnA HOTEL" /></li>
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_vans.png" className="VANS" /></li>
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_hypebeast.png" className="HYPEBEAST" /></li>
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_transit.png" className="TRANSIT" /></li>
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_rmag.png" className="R Magazine" /></li>
                      <li><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_c_harveynichols.png" className="HARVEY NICHOLS" /></li>
                    </ul>
                  </div>
                </div>
                <div className="box large mb134 js-sc">
                  <h3 className="sub_topic js-sc_h tra20">OUR CULTURE</h3>
                  <h2 className="topic js-sc_h tra20 delay01 mb25 mb18_sp">Nurturing a culture of Collective Creativity</h2>
                  <p className="desc js-sc_h tra20 delay02">
                    We host open weekly catered lunches and monthly parties at our office to encourage communication between people of different countries and language in order to push creative and cultural boundaries.
          </p>
                </div>
                <ul className="slide_common js-sc tra20 white">
                  <li className="on">
                    <div className="main">
                      <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b3_p1.jpg" className="tra25" />
                    </div>
                    <div className="sub">
                      <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b3_p1b.jpg" className="tra25 delay02" />
                    </div>
                  </li>
                  <li>
                    <div className="main">
                      <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b3_p2.jpg" className="tra25" />
                    </div>
                    <div className="sub">
                      <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b3_p2b.jpg" className="tra25 delay02" />
                    </div>
                  </li>
                  <li>
                    <div className="main">
                      <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b3_p3.jpg" className="tra25" />
                    </div>
                    <div className="sub">
                      <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_vision_b3_p3b.jpg" className="tra25 delay02" />
                    </div>
                  </li>
                </ul>
                <div className="box large js-sc mb134 clearfix">
                  <p className="sub_topic2 js-sc_h tra20 mb18 mb10_sp">MONOPO NIGHT</p>
                  <p className="desc left3 js-sc_h tra20 delay01">
                    monopo night is a monthly party held at our office every second Friday. The organizers change every month, and they are responsible for creating a new theme each time. Everyone and anyone is welcome to attend, clients, creator friends, families etc.
          </p>
                  <div className="pic i3 js-sc_pic_h tra20"><img src="https://monopo.co.jp/wp-content/themes/monopo/img/illust_vision_3.png" /></div>
                </div>
                <div className="box large js-sc mb134 clearfix">
                  <p className="sub_topic2 right3 js-sc_h tra20 mb18 mb10_sp">MONOPO TABLE</p>
                  <p className="desc right3 js-sc_h tra20 delay01">
                    Lunch is catered every Wednesday and we like to seize that as an opportunity to invite visitors in, to break bread and chat. It’s a casual way of bringing people into the monopo family.
          </p>
                  <div className="pic i4 js-sc_pic_h tra20"><img src="https://monopo.co.jp/wp-content/themes/monopo/img/illust_vision_4.png" /></div>
                </div>
              </div>
            </div>
          </div>
          {/* ajax_area end */}
          {/* footer start */}
          <div id="footer">
            <div className="center clearfix js-sc">
              <div className="block1">
                <ul className="lang clearfix forsp js-sc_h tra20">
                  <li className="on">
                    <form method="post" name="spen" action="https://monopo.co.jp/wp-content/themes/monopo/lang.php">
                      <input type="hidden" name="language" defaultValue="en" />
                      <a href="javascript:spen.submit()">ENGLISH</a>
                    </form>
                  </li>
                </ul>
                <p className="topic js-sc_h tra20 delay01">TOKYO</p>
                <p className="txt1 js-sc_h tra20 delay02">
                  contact@monopo.co.jp<br />
                  +81 3 3400 6996
        </p>
                <p className="topic js-sc_h tra20 delay03">LONDON</p>
                <p className="txt1 mb js-sc_h tra20 delay04">
                  contact@monopo.london
        </p>
                <div className="btn_detail_line white js-sc_h tra20 delay03 js-text_btn rx360"><a href="https://monopo.london/" target="_blank" className="js-text_btn_h">VISIT MONOPO.LONDON</a></div>
              </div>
              <div className="block2">
                <p className="topic js-sc_h tra20 delay02">OUR IN-HOUSE PROJECT</p>
                <div className="logo js-sc_h tra20 delay03"><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_pbt.png" alt="poweredby.tokyo" /></div>
                <div className="btn_detail_line white js-sc_h tra20 delay04 js-text_btn rx360 mb"><a href="https://poweredby.tokyo/" target="_blank" className="js-text_btn_h">VISIT THE WEBSITE</a></div>
                <p className="topic js-sc_h tra20 delay05">FOLLOW US</p>
                <ul className="sns clearfix js-sc_h tra20 delay06">
                  <li className="fb">
                    <a href="https://www.facebook.com/monopo.tokyo/" target="_blank">
                      <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                        <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                      </svg>
                    </a>
                  </li>
                  <li className="tw">
                    <a href="https://twitter.com/monopo_tokyo" target="_blank">
                      <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                        <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                      </svg>
                    </a>
                  </li>
                  <li className="insta">
                    <a href="https://www.instagram.com/monopo_japan/" target="_blank">
                      <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                        <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                      </svg>
                    </a>
                  </li>
                  <li className="linkedin">
                    <a href="https://www.linkedin.com/company/6983868/" target="_blank">
                      <svg className="base forpc" width={50} height={50} viewBox="0 0 50 50">
                        <circle className="c1" cx={25} cy={25} r={23} stroke="#fff" strokeWidth={1} fill="none" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block3">
                <ul className="menu">
                  <li className="js-sc_h tra20 delay03"><a href="https://monopo.co.jp/works/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">WORK</span></a></li>
                  <li className="js-sc_h tra20 delay04"><a href="https://monopo.co.jp/services/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">SERVICES</span></a></li>
                  <li className="js-sc_h tra20 delay05"><a href="https://monopo.co.jp/vision/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">VISION</span></a></li>
                  <li className="js-sc_h tra20 delay06"><a href="https://monopo.co.jp/careers/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">CAREERS</span></a></li>
                  <li className="js-sc_h tra20 delay07"><a href="https://monopo.co.jp/team/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">TEAM</span></a></li>
                  <li className="js-sc_h tra20 delay08"><a href="https://monopo.co.jp/contact/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">CONTACT</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* footer end */}
        </div>
        {/* wrapper end */}
        {/* popup start */}
        <div id="popup" className="forsp">
          <div id="btn_menu_close" className="tra10">
            <div className="bar">
              <span className="s1 tra05" />
              <span className="s2 tra05" />
              <span className="s3 tra05" />
            </div>
          </div>
          <div id="filter">
            <ul className="sort">
              <li className="js-sc_h tra20 txt">Filter by:</li>
              <li className="js-sc_h tra20 delay01"><a href="#ALL" className="js-filter on" filter="all" title="ALL PROJECT">ALL PROJECTS</a></li>
              <li className="js-sc_h tra20 delay02"><a href="#DIGITAL" className="js-filter" filter="digital" title="DIGITAL">DIGITAL</a></li>
              <li className="js-sc_h tra20 delay03"><a href="#BRAND_IDENTITY" className="js-filter" filter="brand" title="BRAND IDENTITY">BRAND IDENTITY</a></li>
              <li className="js-sc_h tra20 delay04"><a href="#CAMPAIGNS" className="js-filter" filter="campaigns" title="CAMPAIGNS">CAMPAIGNS</a></li>
              <li className="js-sc_h tra20 delay05"><a href="#VIDEO" className="js-filter" filter="video" title="VIDEO">VIDEO</a>
              </li><li className="js-sc_h tra20 delay06"><a href="#PHOTOGRAPHY" className="js-filter" filter="photography" title="PHOTOGRAPHY">PHOTOGRAPHY</a>
              </li><li className="js-sc_h tra20 delay07"><a href="#INSTALLATIONS" className="js-filter" filter="installations" title="INSTALLATIONS">INSTALLATIONS</a></li>
              <li className="js-sc_h tra20 delay08"><a href="#PBT" className="js-filter" filter="pbt" title="POWEREDEBY.TOKYO">POWEREDEBY.TOKYO</a></li>
            </ul>
          </div>
        </div>
        {/* popup end */}
      </div>
    )
  }
}

