import React, { Component } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
import {NavLink, Link} from 'react-router-dom'
export default class Homepage extends Component {
    componentDidMount(){
    
}
render() {
    return (
        <div>
            <div>
                <div id="wrapper" className="js-height_set">
                    {/* header start */}
                    <div id="header">
                        <h2 className="logo">
                            <a href="." className="pjax">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.7 80" className="tra15">
                                    <g>
                                        <path className="cls-1" d="M65.15.8C58.73.8,52.45,3.52,46.47,8.9,42.19,3.52,36.3.8,28.9.8A24.41,24.41,0,0,0,16.08,4.86v-1a2.31,2.31,0,0,0-2.3-2.33H2.32A2.31,2.31,0,0,0,0,3.89V61.83a2.32,2.32,0,0,0,2.32,2.33H13.78a2.32,2.32,0,0,0,2.3-2.33v-37c0-1.24,3.15-4.87,4.56-5.69,1.74-1,3-2.24,6.84-2.24,1.46,0,8.09,0,8.09,9.79V61.83a2.33,2.33,0,0,0,2.32,2.33H49.36a2.33,2.33,0,0,0,2.32-2.33v-37c0-1.24,3.09-4.89,4.56-5.69,1.88-1,3-2.24,6.84-2.24,1.46,0,8.64,0,8.64,9.22V61.83a2.33,2.33,0,0,0,2.32,2.33H85.51a2.32,2.32,0,0,0,2.32-2.33V26.68c0-7.28-1.64-13.24-4.9-17.74C78.93,3.52,72.94.8,65.15.8Z" /><path className="cls-1" d="M215.76.88a28.67,28.67,0,0,0-15.71,4.79V4.11a2.33,2.33,0,0,0-2.32-2.33H186.4a2.32,2.32,0,0,0-2.32,2.33V61.83a2.32,2.32,0,0,0,2.32,2.33h11.34a2.34,2.34,0,0,0,2.32-2.33v-37c4-5.78,8.9-7.94,14.91-7.94,3.61,0,6.24.24,7.78,2,1.64,1.92,2.47,4.19,2.47,10.17V61.83a2.34,2.34,0,0,0,2.34,2.33h11.32a2.34,2.34,0,0,0,2.34-2.33V29C241.21,5.76,227.35.88,215.76.88Z" /><path className="cls-1" d="M135.39,0a32.45,32.45,0,1,0,32.14,32.45A32.29,32.29,0,0,0,135.39,0Zm0,49.72c-8.84,0-16-7.74-16-17.28s7.17-17.28,16-17.28,16,7.74,16,17.28S144.23,49.72,135.39,49.72Z" /><path className="cls-1" d="M289.21,0a32.45,32.45,0,1,0,32.14,32.45A32.29,32.29,0,0,0,289.21,0Zm0,49.72c-8.84,0-16-7.74-16-17.28s7.17-17.28,16-17.28,16,7.74,16,17.28S298.05,49.72,289.21,49.72Z" /><path className="cls-1" d="M444.56,0A32.45,32.45,0,1,0,476.7,32.45,32.29,32.29,0,0,0,444.56,0Zm0,49.72c-8.84,0-16-7.74-16-17.28s7.17-17.28,16-17.28,16,7.74,16,17.28S453.4,49.72,444.56,49.72Z" /><path className="cls-1" d="M369.8.17a31,31,0,0,0-16.34,4.68V4a2.32,2.32,0,0,0-2.3-2.3H339.69A2.29,2.29,0,0,0,337.43,4V77.68A2.3,2.3,0,0,0,339.69,80h11.47a2.33,2.33,0,0,0,2.3-2.32V59a31,31,0,0,0,16.34,4.68c17.13,0,29.44-12.76,29.44-31.77C399.24,13.36,386.93.17,369.8.17Zm.1,48.47c-9.26,0-16-6.37-16-16.7s6.84-16.7,16-16.7c8,0,14.4,7.48,14.4,16.7S377.85,48.64,369.9,48.64Z" />
                                    </g>
                                </svg>
                            </a>
                        </h2>
                        <div id="tokyo_london" className="clearfix">
                            <a href="." className="pjax">tokyo</a><p>&nbsp;·&nbsp;</p><a href="https://monopo.london" target="_blank">london</a>
                        </div>
                        <ul id="menu" className="clearfix forpc">
                            <li className="js-text_btn rx360"><a href="./works/" className="pjax tra10 js-text_btn_h">WORK</a></li>
                            <li className="js-text_btn rx360"><a href="./solutions/" className="pjax tra10 js-text_btn_h">SOLUTIONS</a></li>
                            <li className="js-text_btn rx360"><a href="./vision/" className="pjax tra10 js-text_btn_h">VISION</a></li>
                            <li className="js-text_btn rx360"><Link to={"/team"} className="pjax tra10 js-text_btn_h">TEAM</Link></li>
                            <li className="js-text_btn rx360"><a href="./careers/" className="pjax tra10 js-text_btn_h">CAREERS</a></li>
                            <li className="js-text_btn rx360"><a href="./contact/" className="pjax tra10 js-text_btn_h">CONTACT</a></li>
                        </ul>
                        <div id="lang" className="forpc">
                            <ul className="lang clearfix">
                                <li className="tra10">
                                    <form method="post" name="hjp" action="./wp-content/themes/monopo/lang.php">
                                        <input type="hidden" name="language" defaultValue="jp" />
                                        <a href="javascript:hjp.submit()">JP</a>
                                    </form>
                                </li>
                                <li className="on tra10">
                                    <form method="post" name="hen" action="./wp-content/themes/monopo/lang.php">
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
                                        <li className="js-sc_h tra20 delay06 js-text_btn rx360"><a href="./works/" className="pjax js-text_btn_h">Work</a></li>
                                        <li className="js-sc_h tra20 delay07 js-text_btn rx360"><a href="./solutions/" className="pjax js-text_btn_h">Solutions</a></li>
                                        <li className="js-sc_h tra20 delay08 js-text_btn rx360"><a href="./vision/" className="pjax js-text_btn_h">Vision</a></li>
                                        <li className="js-sc_h tra20 delay09 js-text_btn rx360"><a href="./team/" className="pjax js-text_btn_h">Team</a></li>
                                        <li className="js-sc_h tra20 delay10 js-text_btn rx360"><a href="./careers/" className="pjax js-text_btn_h">Careers</a></li>
                                        <li className="js-sc_h tra20 delay11 js-text_btn rx360"><a href="./contact/" className="pjax js-text_btn_h">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="block2 tra15 delay01">
                                    <div className="center">
                                        <p className="topic js-sc_h tra20 delay08">LATEST NEWS</p>
                                        <ul className="news">
                                            <li className="clearfix js-sc_h tra20 delay10">
                                                <div className="left">
                                                    <img src="./wp-content/uploads/2019/11/cb.jpg" />
                                                </div>
                                                <div className="right">
                                                    <p className="date">19.11.21</p>
                                                    <p className="title">WE’RE OFFERING A NEW SERVICE!</p>
                                                    <div className="btn_detail_line white js-text_btn rx360"><a href="./bridge/" target="_blank" className="tra05 js-text_btn_h">SEE MORE</a></div>
                                                </div>
                                            </li>
                                            <li className="clearfix js-sc_h tra20 delay11">
                                                <div className="left">
                                                    <img src="./wp-content/uploads/2019/06/younglions-2019-1.jpg" />
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
                                                <form method="post" name="jp" action="./wp-content/themes/monopo/lang.php">
                                                    <input type="hidden" name="language" defaultValue="jp" />
                                                    <a href="javascript:jp.submit()">JAPANESE</a>
                                                </form>
                                            </li>
                                            <li className="on tra10">
                                                <form method="post" name="en" action="./wp-content/themes/monopo/lang.php">
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
                        <div id="fv" className="js-height_set">
                            <div className="fixed js-height_set">
                                <div id="video1" />
                                <div id="video2" />
                                <h1 className="copy f_trump js-text js-op">A TOKYO ORIGINAL</h1>
                                <h2 className="desc f_trump js-text_word js-op2 delay02">TOKYO BORN. LONDON RAISED. <br /> COMMUNITY DRIVEN. <br /> FULL SERVICE CREATIVE TO TRANSFORM BRANDS AND BUSINESSES.</h2>
                            </div>
                            <div id="scroll_down" className="tra05">
                                <p>SCROLL</p>
                            </div>
                        </div>
                        <div id="service_list" className="js-height_set">
                            <div className="block js-sc">
                                <h3 className="txt1 js-sc_h tra20">OUR SERVICES</h3>
                                <h2 className="txt2 js-sc_h tra20 delay01">Brand design</h2>
                                <h2 className="txt2 js-sc_h tra20 delay02">Media Strategy</h2>
                                <h2 className="txt2 js-sc_h tra20 delay03">Digital Design + Tech</h2>
                                <h2 className="txt2 btm js-sc_h tra20 delay04">Content Production</h2>
                                <div className="btn_detail_line js-sc_h tra20 delay09 js-text_btn rx360">
                                    <a href="./solutions/" className="pjax tra12 js-text_btn_h">LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                        <div id="recent_work" className="js-height_set r0">
                            <div className="fixed">
                                <div className="circle">
                                    <svg className="base" width={464} height={464} viewBox="0 0 464 464">
                                        <circle className="c1" cx={232} cy={232} r={230} stroke="#fff" strokeWidth={2} fill="none" />
                                        <circle className="c2 tra10" cx={232} cy={232} r={230} stroke="#fff" strokeWidth={2} fill="none" />
                                    </svg>
                                    <ul className="num">
                                        <li className="n0 tra05"><div className="js-slide_go tra05" go={0} /></li>
                                        <li className="n1 tra05"><div className="js-slide_go tra05" go={1} /></li>
                                        <li className="n2 tra05"><div className="js-slide_go tra05" go={2} /></li>
                                        <li className="n3 tra05"><div className="js-slide_go tra05" go={3} /></li>
                                        <li className="n4 tra05"><div className="js-slide_go tra05" go={4} /></li>
                                        <li className="n5 tra05"><div className="js-slide_go tra05" go={5} /></li>
                                    </ul>
                                </div>
                                <div className="btn js-text_btn l25 tra20">
                                    <a href="./works_detail2.php" className="pjax">
                                        <div className="txt js-text_btn_h forpc">EXPLORE<br />DETAILS</div>
                                        <div className="txt forsp">EXPLORE DETAILS</div>
                                        <div className="arrow tra10 delay02 forpc" />
                                        <svg className="base forpc" width={98} height={98} viewBox="0 0 98 98">
                                            <circle className="c1" cx={49} cy={49} r={47} stroke="#fff" strokeWidth={1} fill="none" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="btn_all">
                                    <a href="./works" className="pjax js-text_btn rx360">
                                        <div className="txt js-text_btn_h">ALL WORKS</div>
                                        <div className="box" />
                                    </a>
                                </div>
                                <ul className="slide">
                                    <li link="./works/canada-goose/">
                                        <div className="pic" style={{ backgroundImage: 'url("./wp-content/uploads/2019/07/canadagoose-cover.jpg")' }}>
                                            <div className="pic_circle">
                                                <div className="pic_circle_inner js-window_set tra15" style={{ backgroundImage: 'url("./wp-content/uploads/2019/07/canadagoose-cover.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="txt_block">
                                            <p className="txt1">RECENT WORK</p>
                                            <h2 className="txt2 f_trump js-text">CANADA GOOSE<br />
                                                NOMAD COLLECTION</h2>
                                            <div className="logo tra20 delay08" style={{ backgroundImage: 'url("./wp-content/uploads/2019/07/cglogo.png")' }} />
                                        </div>
                                    </li>
                                    <li link="./works/adidas-pulseboost-hd-ultraboost19/">
                                        <div className="pic" style={{ backgroundImage: 'url("./wp-content/uploads/2019/08/01_Project-cover-withfilter-1.jpg")' }}>
                                            <div className="pic_circle">
                                                <div className="pic_circle_inner js-window_set tra15" style={{ backgroundImage: 'url("./wp-content/uploads/2019/08/01_Project-cover-withfilter-1.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="txt_block">
                                            <p className="txt1">RECENT WORK</p>
                                            <h2 className="txt2 f_trump js-text">ADIDAS<br />
                                                PULSEBOOST HD &amp; ULTRABOOST19</h2>
                                            <div className="logo tra20 delay08" style={{ backgroundImage: 'url("./wp-content/uploads/2019/08/adidas_logo.png")' }} />
                                        </div>
                                    </li>
                                    <li link="./works/maison-special/">
                                        <div className="pic" style={{ backgroundImage: 'url("./wp-content/uploads/2019/03/01_Project-cover-maison-special.jpg")' }}>
                                            <div className="pic_circle">
                                                <div className="pic_circle_inner js-window_set tra15" style={{ backgroundImage: 'url("./wp-content/uploads/2019/03/01_Project-cover-maison-special.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="txt_block">
                                            <p className="txt1">RECENT WORK</p>
                                            <h2 className="txt2 f_trump js-text">MAISON SPECIAL<br />
                                                BRANDING &amp; WEBSITE</h2>
                                            <div className="logo tra20 delay08" style={{ backgroundImage: 'url("./wp-content/uploads/2019/03/logo-maison-special-1.png")' }} />
                                        </div>
                                    </li>
                                    <li link="./works/hikaru-utada-songs/">
                                        <div className="pic" style={{ backgroundImage: 'url("./wp-content/uploads/2019/01/01_Project-cover-withfilter.jpg")' }}>
                                            <div className="pic_circle">
                                                <div className="pic_circle_inner js-window_set tra15" style={{ backgroundImage: 'url("./wp-content/uploads/2019/01/01_Project-cover-withfilter.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="txt_block">
                                            <p className="txt1">RECENT WORK</p>
                                            <h2 className="txt2 f_trump js-text">HIKARU UTADA ''FACE MY FEARS'' <br />
                                                GLOBAL WEBSITE</h2>
                                            <div className="logo tra20 delay08" style={{ backgroundImage: 'url("./wp-content/uploads/2019/01/logo.png")' }} />
                                        </div>
                                    </li>
                                    <li link="./works/studio-marlmarl-creative/">
                                        <div className="pic" style={{ backgroundImage: 'url("./wp-content/uploads/2018/11/01_Project-cover-withfilter.jpg")' }}>
                                            <div className="pic_circle">
                                                <div className="pic_circle_inner js-window_set tra15" style={{ backgroundImage: 'url("./wp-content/uploads/2018/11/01_Project-cover-withfilter.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="txt_block">
                                            <p className="txt1">RECENT WORK</p>
                                            <h2 className="txt2 f_trump js-text">STUDIO MARLMARL CREATIVE</h2>
                                            <div className="logo tra20 delay08" style={{ backgroundImage: 'url("./wp-content/uploads/2018/11/logo.png")' }} />
                                        </div>
                                    </li>
                                    <li link="./works/comp-rebranding/">
                                        <div className="pic" style={{ backgroundImage: 'url("./wp-content/uploads/2018/03/comp-cover-withfilter.jpg")' }}>
                                            <div className="pic_circle">
                                                <div className="pic_circle_inner js-window_set tra15" style={{ backgroundImage: 'url("./wp-content/uploads/2018/03/comp-cover-withfilter.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="txt_block">
                                            <p className="txt1">RECENT WORK</p>
                                            <h2 className="txt2 f_trump js-text">COMP REBRANDING</h2>
                                            <div className="logo tra20 delay08" style={{ backgroundImage: 'url("./wp-content/uploads/2018/03/LOGO-WHITE.png")' }} />
                                        </div>
                                    </li>
                                </ul>
                                <div id="scroll_down" className="forpc tra12">
                                    <p>NEXT PROJECT</p>
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
                                    <li className>
                                        <form method="post" name="spjp" action="./wp-content/themes/monopo/lang.php">
                                            <input type="hidden" name="language" defaultValue="jp" />
                                            <a href="javascript:spjp.submit()">JAPANESE</a>
                                        </form>
                                    </li>
                                    <li className="on">
                                        <form method="post" name="spen" action="./wp-content/themes/monopo/lang.php">
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
                                <div className="logo js-sc_h tra20 delay03"><img src="./wp-content/themes/monopo/img/logo_pbt.png" alt="poweredby.tokyo" /></div>
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
                                    <li className="js-sc_h tra20 delay03"><a href="./works/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">WORK</span></a></li>
                                    <li className="js-sc_h tra20 delay04"><a href="./solutions/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">SOLUTIONS</span></a></li>
                                    <li className="js-sc_h tra20 delay05"><a href="./vision/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">VISION</span></a></li>
                                    <li className="js-sc_h tra20 delay06"><a href="./careers/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">CAREERS</span></a></li>
                                    <li className="js-sc_h tra20 delay07"><a href="team.html" className="pjax js-text_btn rx360"><span className="js-text_btn_h">TEAM</span></a></li>
                                    <li className="js-sc_h tra20 delay08"><a href="./contact/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">CONTACT</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>  {/* footer end */}
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

        </div>
    )
}
}
