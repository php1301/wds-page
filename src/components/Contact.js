import React, { Component } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                {/* wrapper start */}
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
                        <div id="tokyo_london" className="clearfix">
                            <a href="https://monopo.co.jp" className="pjax">tokyo</a><p>&nbsp;·&nbsp;</p><a href="https://monopo.london" target="_blank">london</a>
                        </div>
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
                                <li className="tra10">
                                    <form method="post" name="hjp" action="https://monopo.co.jp/wp-content/themes/monopo/lang.php">
                                        <input type="hidden" name="language" defaultValue="jp" />
                                        <a href="javascript:hjp.submit()">JP</a>
                                    </form>
                                </li>
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
                                                    <div className="btn_detail_line white js-text_btn rx360"><a href="https://www.facebook.com/monopo.tokyo/posts/2171838176268102" target="_blank" className="tra05 js-text_btn_h">SEE MORE</a></div>
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
                                            <li className="tra10">
                                                <form method="post" name="jp" action="https://monopo.co.jp/wp-content/themes/monopo/lang.php">
                                                    <input type="hidden" name="language" defaultValue="jp" />
                                                    <a href="javascript:jp.submit()">JAPANESE</a>
                                                </form>
                                            </li>
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
                        <div id="contact" className="common_docs">
                            <div className="illust">
                                <img src="https://monopo.co.jp/wp-content/themes/monopo/img/illust_contact.png" alt="monopo" />
                            </div>
                            <div className="box mb97">
                                <h3 className="sub_topic">CONTACT</h3>
                                <h2 className="topic">Get in touch</h2>
                                <div className="clearfix">
                                    <div className="left">
                                        <p className="sub_topic2">TOKYO HQ</p>
                                        <p className="desc min">
                                            monopo inc.<br />
                                            Path Omotesando A3<br />
                                            5-6-5 Jingumae<br />
                                            Shibuya-ku, Tokyo, 150-0001, Japan
              </p>
                                        <div className="btn_detail_line tra20 js-text_btn rx360 mb20 mb18_sp">
                                            <a href="https://www.google.co.jp/maps/place/%E3%80%92150-0001+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%A5%9E%E5%AE%AE%E5%89%8D%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%96+%EF%BC%B0%EF%BD%81%EF%BD%94%EF%BD%88%EF%BC%AF%EF%BC%AD%EF%BC%AF%EF%BC%B4%EF%BC%A5%EF%BC%B3%EF%BC%A1%EF%BC%AE%EF%BC%A4%EF%BC%AF%EF%BC%A1/@35.665966,139.7081265,18z/data=!3m1!4b1!4m5!3m4!1s0x60188ca108d9ff7b:0x9c0bf2f36082708b!8m2!3d35.6659736!4d139.7087487" className="tra12 js-text_btn_h" target="_blank">VIEW ON MAP</a>
                                        </div>
                                        <p className="desc mb08 mb10_sp">contact@monopo.co.jp</p>
                                        <p className="desc">+81 03 3400 6996</p>
                                    </div>
                                    <div className="right">
                                        <p className="sub_topic2">LONDON OFFICE</p>
                                        <p className="desc min">
                                            monopo london Ltd<br />
                                            Netil House<br />
                                            1 Westgate Street<br />
                                            E8 3RL, London, United Kingdom
              </p>
                                        <div className="btn_detail_line tra20 js-text_btn rx360 mb20 mb18_sp">
                                            <a href="https://goo.gl/maps/HkZcAer4xWK2" className="tra12 js-text_btn_h" target="_blank">VIEW ON MAP</a>
                                        </div>
                                        <p className="desc mb08">contact@monopo.london</p>
                                        <div className="btn_detail_line tra20 js-text_btn rx360">
                                            <a href="https://monopo.london/" className="tra12 js-text_btn_h" target="_blank">VISIT THE LONDON WEBSITE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box contact_form js-sc">
                                <p className="sub_topic2 mb12 mb10_sp js-sc_h tra20">CONTACT FORM</p>
                                <form id="form1" className="form clearfix" action="https://monopo.co.jp/wp-content/themes/monopo/validate.php" method="POST">
                                    <div id="s1" className="js-switch_h active tra20">
                                        <div className="mb25 clearfix">
                                            <input type="text" name="name" placeholder="Name*" className="js-sc_h tra20" />
                                            <input type="text" name="last_name" placeholder="Last name*" className="js-sc_h tra20 delay01" />
                                            <input type="text" name="email" placeholder="Email*" className="js-sc_h tra20 delay02" />
                                            <input type="text" name="phone_number" placeholder="Phone number" className="js-sc_h tra20 delay03" />
                                            <textarea name="message" placeholder="Your message..." className="js-sc_h tra20 delay04" defaultValue={""} />
                                        </div>
                                    </div>
                                    <input type="hidden" defaultValue="7fc415a9f3153dd6fe3ae467035a4b9efe894270" name="hash" />
                                    <div id="post" className="btn_detail contact js-sc_h tra20 delay05 js-text_btn rx360">
                                        <div className="tra10 js-text_btn_h">SUBMIT</div>
                                    </div>
                                    <div className="error_txt">
                                        <p className="form_val1">All fields with * must be filled in.</p>
                                        <p className="form_val2">Your email address seems to be incorrect.</p>
                                        <p className="form_val3">Sorry, we have some connexion problems. Please try again.</p>
                                    </div>
                                </form>
                            </div>
                            <div id="contact_confirm" className="box">
                                <p className="sub_topic2 mb25 mb25_sp">CONFIRM YOUR MESSAGE</p>
                                <ul className="confirm">
                                    <li className="clearfix">
                                        <p className="left">Your name:</p>
                                        <p className="right json_name" />
                                    </li>
                                    <li className="clearfix">
                                        <p className="left">Your email:</p>
                                        <p className="right json_email" />
                                    </li>
                                    <li className="clearfix btm">
                                        <p className="left">Your phone:</p>
                                        <p className="right json_phone" />
                                    </li>
                                    <li className="clearfix">
                                        <p className="left">Your message:</p>
                                        <p className="right json_message" />
                                    </li>
                                </ul>
                                <form id="form2" action="https://monopo.co.jp/wp-content/themes/monopo/send.php" method="POST"><input type="hidden" defaultValue="7fc415a9f3153dd6fe3ae467035a4b9efe894270" name="hash" /></form>
                                <div className="btn_block js-sc on clearfix">
                                    <div className="btn_cancel js-sc_h tra20 delay05 js-text_btn rx360">
                                        <div id="edit" className="tra10 js-text_btn_h">EDIT</div>
                                    </div>
                                    <div className="btn_detail contact js-sc_h tra20 delay05 js-text_btn rx360">
                                        <div id="submit" className="tra10 js-text_btn_h">CONFIRM</div>
                                    </div>
                                </div>
                            </div>
                            <div id="contact_thx" className="box">
                                <p className="sub_topic2 mb25 mb25_sp">THANK YOU FOR CONTACTING US</p>
                                <p className="desc">
                                    Your message has been sent. We will reply to you as soon as possible.
          </p>
                            </div>
                        </div>
                    </div>
                    {/* ajax_area end */}
                    {/* footer start */}
                    <div id="footer">
                        <div className="center clearfix js-sc">
                            <div className="block1">
                                <ul className="lang clearfix forsp js-sc_h tra20">
                                    <li className>
                                        <form method="post" name="spjp" action="https://monopo.co.jp/wp-content/themes/monopo/lang.php">
                                            <input type="hidden" name="language" defaultValue="jp" />
                                            <a href="javascript:spjp.submit()">JAPANESE</a>
                                        </form>
                                    </li>
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