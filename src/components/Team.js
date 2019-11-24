import React, { Component } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
export default class Team extends Component {
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
                        <div id="tokyo_london" className="clearfix">
                            <a href="https://monopo.co.jp" className="pjax">tokyo</a><p>&nbsp;·&nbsp;</p><a href="https://monopo.london" target="_blank">london</a>
                        </div>
                        <ul id="menu" className="clearfix forpc">
                            <li className="js-text_btn rx360"><a href="https://monopo.co.jp/works/" className="pjax tra10 js-text_btn_h">WORK</a></li>
                            <li className="js-text_btn rx360"><a href="https://monopo.co.jp/solutions/" className="pjax tra10 js-text_btn_h">SOLUTIONS</a></li>
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
                                        <li className="js-sc_h tra20 delay07 js-text_btn rx360"><a href="https://monopo.co.jp/solutions/" className="pjax js-text_btn_h">Solutions</a></li>
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
                        <div id="team" className="common_docs">
                            <div className="fv js-height_set">
                                <div className="fixed js-op">
                                    <div className="circle">
                                        <div className="pic js-window_set tra15 delay15" />
                                        <div className="txt_block">
                                            <p className="txt1">WHO WE ARE</p>
                                            <h1 className="txt2 f_trump js-text">THE TEAM</h1>
                                        </div>
                                    </div>
                                    <div id="scroll_down" className="tra05">
                                        <p>SCROLL</p>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="box large mb78 mb45_sp js-sc">
                                    <h3 className="sub_topic js-sc_h tra20">MEMBERS</h3>
                                    <h2 className="topic js-sc_h tra20 delay01 mb25 mb18_sp">Meet the team</h2>
                                </div>
                                <div className="clearfix">
                                    <ul className="members clearfix">
                                        <li className="js-sc tra20">
                                            <img src="https://monopo.co.jp/wp-content/uploads/2017/11/yoshi4.jpg" alt="YOSHIYUKI SASAKI" />
                                            <h2 className="name">YOSHIYUKI SASAKI</h2>
                                            <p className="job">CEO, Producer</p>
                                            <div className="block">
                                                <div className="btn">
                                                    <a href="https://monopo.co.jp/works/#YOSHIYUKI-SASAKI" className="pjax js-text_btn rx360">
                                                        <div className="txt js-text_btn_h">HIS WORK</div>
                                                        <div className="box" />
                                                    </a>
                                                </div>
                                                <div className="sns clearfix">
                                                    <div className="fb tra10 hover"><a href="https://www.facebook.com/YoshiyukiSasaki" target="_blank" /></div>
                                                    <div className="insta tra10 hover"><a href="https://www.instagram.com/yoshi.sasaki/" target="_blank" /></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="js-sc tra20 delay01">
                                            <img src="https://monopo.co.jp/wp-content/uploads/2017/11/pic_team_shun.jpg" alt="SHUN OKADA" />
                                            <h2 className="name">SHUN OKADA</h2>
                                            <p className="job">COO</p>
                                            <div className="block">
                                                <div className="btn">
                                                    <a href="https://monopo.co.jp/works/#SHUN-OKADA" className="pjax js-text_btn rx360">
                                                        <div className="txt js-text_btn_h">HIS WORK</div>
                                                        <div className="box" />
                                                    </a>
                                                </div>
                                                <div className="sns">
                                                    <div className="fb tra10 hover"><a href="https://www.facebook.com/OkadaShun" target="_blank" /></div>
                                                    <div className="tw tra10 hover"><a href="https://twitter.com/shun_okada" target="_blank" /></div>
                                                    <div className="insta tra10 hover"><a href="https://www.instagram.com/shun.okada/" target="_blank" /></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn_more forsp js-sc tra20 js-more">
                                        <p>DISCOVER THE FULL TEAM</p>
                                    </div>
                                    <div className="js-more_hide">
                                        <ul className="members three clearfix">
                                            <li className="js-sc tra20 delay00">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2019/08/aya.jpg" alt="AYA APTON" />
                                                <h2 className="name">AYA APTON</h2>
                                                <p className="job">Strategic Planner, Producer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#AYA-APTON" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="https://www.linkedin.com/in/aya-apton-3bb83115a/" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/aya.apton/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay01">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2019/08/isaka-1.jpg" alt="YUKA ISAKA" />
                                                <h2 className="name">YUKA ISAKA</h2>
                                                <p className="job">PR</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#YUKA-ISAKA" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay02">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2019/08/narita.jpg" alt="MISAKI NARITA" />
                                                <h2 className="name">MISAKI NARITA</h2>
                                                <p className="job">Director</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#MISAKI-NARITA" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="members clearfix">
                                            <li className="js-sc tra20 delay00">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2019/08/GUI_2.jpg" alt="JULIE GUILLOT" />
                                                <h2 className="name">JULIE GUILLOT</h2>
                                                <p className="job">Project Manager</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#JULIE-GUILLOT" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="https://www.linkedin.com/in/guillotjulie/" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/red_sagi" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay01">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2019/02/mattijs.jpg" alt="MATTIJS DEVROEDT" />
                                                <h2 className="name">MATTIJS DEVROEDT</h2>
                                                <p className="job">London MD, Strategy Director</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#MATTIJS-DEVROEDT" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="https://www.linkedin.com/in/mattijsdevroedt/" target="_blank" /></div>
                                                        <div className="tw tra10 hover"><a href="https://twitter.com/mattijsd" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/mattijsd/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="members three clearfix">
                                            <li className="js-sc tra20 delay00">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2018/12/michele.jpg" alt="MICHELE ANGELORO" />
                                                <h2 className="name">MICHELE ANGELORO</h2>
                                                <p className="job">Senior Art Director</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#MICHELE-ANGELORO" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="http://eien.tokyo" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay01">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2018/12/mei1.jpg" alt="MEI KANAMOTO" />
                                                <h2 className="name">MEI KANAMOTO</h2>
                                                <p className="job">Art Director, Illustrator</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#MEI-KANAMOTO" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="http://mei-kanamoto.com" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay02">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/asako.jpg" alt="ASAKO TOMOTANI" />
                                                <h2 className="name">ASAKO TOMOTANI</h2>
                                                <p className="job">Producer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#ASAKO-TOMOTANI" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/asako.tomotani" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/morning_kid/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="members clearfix">
                                            <li className="js-sc tra20 delay00">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/chace2.jpg" alt="CHACE FEDOR" />
                                                <h2 className="name">CHACE FEDOR</h2>
                                                <p className="job">Creative Director, Producer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#CHACE-FEDOR" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/chase.fedorchuk" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/chasefloats/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay01">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2018/07/georgi.jpg" alt="GEORGI ROBERTS" />
                                                <h2 className="name">GEORGI ROBERTS</h2>
                                                <p className="job">Global Account Manager, Producer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#GEORGI-ROBERTS" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="members three clearfix">
                                            <li className="js-sc tra20 delay00">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/kenta.jpg" alt="KENTA TAKAHASHI" />
                                                <h2 className="name">KENTA TAKAHASHI</h2>
                                                <p className="job">Producer, Engineer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#KENTA-TAKAHASHI" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="tw tra10 hover"><a href="https://twitter.com/tkhshknt" target="_blank" /></div>
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/tkhshknt" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/tkhshknt/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay01">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/tanaken.jpg" alt="KENSUKE TANAKA" />
                                                <h2 className="name">KENSUKE TANAKA</h2>
                                                <p className="job">Producer</p>
                                                <div className="block">
                                                    <div className="sns clearfix">
                                                        <div className="tw tra10 hover"><a href="https://twitter.com/kensuketanaka" target="_blank" /></div>
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/k.tanaka0524" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/tanaken_sk/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay02">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/melanie.jpg" alt="MÉLANIE HUBERT" />
                                                <h2 className="name">MÉLANIE HUBERT</h2>
                                                <p className="job">Art director, Designer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#MELANIE-HUBERT" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="http://melanie-hubertcrozet.fr" target="_blank" /></div>
                                                        <div className="tw tra10 hover"><a href="https://twitter.com/melaniehc_" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="members clearfix">
                                            <li className="js-sc tra20 delay00">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/ryo.jpg" alt="RYO MIYAKAWA" />
                                                <h2 className="name">RYO MIYAKAWA</h2>
                                                <p className="job">Creative Director, Front-end engineer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#RYO-MIYAKAWA" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="http://r-miyakawa.com/" target="_blank" /></div>
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/miyakawa.ryo" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay01">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/yokoyan.jpg" alt="TAKAYUKI YOKOYAMA" />
                                                <h2 className="name">TAKAYUKI YOKOYAMA</h2>
                                                <p className="job">Art Director</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#TAKAYUKI-YOKOYAMA" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/takayuki.yokoyama.75" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="members three clearfix">
                                            <li className="js-sc tra20 delay00">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/kenmoku.jpg" alt="TAKUYA KENMOKU" />
                                                <h2 className="name">TAKUYA KENMOKU</h2>
                                                <p className="job">Art Director, Designer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#TAKUYA-KENMOKU" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="tw tra10 hover"><a href="https://twitter.com/KenmokuTakuya" target="_blank" /></div>
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/hikitaose.gt" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay01">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2018/01/inagu.jpg" alt="TOMOKI INAGUMA" />
                                                <h2 className="name">TOMOKI INAGUMA</h2>
                                                <p className="job">Planner, Copywriter</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#TOMOKI-INAGUMA" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HIS WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="fb tra10 hover"><a href="https://www.facebook.com/17guuu" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/17guuu/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="js-sc tra20 delay02">
                                                <img src="https://monopo.co.jp/wp-content/uploads/2017/11/tsubasa.jpg" alt="TSUBASA KAMIOKA" />
                                                <h2 className="name">TSUBASA KAMIOKA</h2>
                                                <p className="job">Director, Engineer</p>
                                                <div className="block">
                                                    <div className="btn">
                                                        <a href="https://monopo.co.jp/works/#TSUBASA-KAMIOKA" className="pjax js-text_btn rx360">
                                                            <div className="txt js-text_btn_h">HER WORK</div>
                                                            <div className="box" />
                                                        </a>
                                                    </div>
                                                    <div className="sns clearfix">
                                                        <div className="web tra10 hover"><a href="http://lamina.moo.jp/" target="_blank" /></div>
                                                        <div className="insta tra10 hover"><a href="https://www.instagram.com/tess_lamina/" target="_blank" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box large mb92 js-sc">
                                    <p className="attention js-sc_h tra20 delay03 mb142">Photographs by
              <span className="btn_detail_line js-text_btn rx360">
                                            <a href="http://guimartinez.com/" target="_blank" className="tra12 js-text_btn_h">Gui Martinez</a>
                                        </span><br />
                                        Shot on medium format reversal film
            </p>
                                </div>
                                <div className="black_block">
                                    <div className="box large js-sc">
                                        <h3 className="sub_topic js-sc_h tra20">CAREERS</h3>
                                        <h2 className="topic js-sc_h tra20 delay01 mb60 mb40_sp">Do you want to be part of the team?
                <br />We’re always looking for new and exciting talent.</h2>
                                        <div className="btn_detail white large js-sc_h tra20 delay02 js-text_btn rx360 mb92 mb70_sp">
                                            <a href="https://monopo.co.jp/careers/" className="tra10 pjax js-text_btn_h">JOB OPENINGS</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="box large js-sc">
                                    <h3 className="sub_topic js-sc_h tra20">OUR STUDIO</h3>
                                    <h2 className="topic js-sc_h tra20 delay01 mb40 mb27_sp">Let’s grab a coffee!</h2>
                                </div>
                                <ul className="slide_common js-sc tra20 white">
                                    <li className="on">
                                        <div className="main">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p1.jpg" className="tra25" />
                                        </div>
                                        <div className="sub">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p1b.jpg" className="tra25 delay02" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p2.jpg" className="tra25" />
                                        </div>
                                        <div className="sub">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p2b.jpg" className="tra25 delay02" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p3.jpg" className="tra25" />
                                        </div>
                                        <div className="sub">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p3b.jpg" className="tra25 delay02" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p4.jpg" className="tra25" />
                                        </div>
                                        <div className="sub">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p4b.jpg" className="tra25 delay02" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p5.jpg" className="tra25" />
                                        </div>
                                        <div className="sub">
                                            <img src="https://monopo.co.jp/wp-content/themes/monopo/img/pic_team_b1_p5b.jpg" className="tra25 delay02" />
                                        </div>
                                    </li>
                                </ul>
                                <div className="box large js-sc">
                                    <p className="attention js-sc_h tra20 mb78 mb40_sp">Photographs by
              <span className="btn_detail_line js-text_btn rx360">
                                            <a href="https://www.instagram.com/nvdg81/" target="_blank" className="tra12 js-text_btn_h">Nik van der Giesen</a>
                                        </span>
                                    </p>
                                    <div className="btn_detail small js-sc_h tra20 delay01 js-text_btn rx360 mb100 mb45_sp">
                                        <a href="https://monopo.co.jp/contact/" className="pjax tra10 js-text_btn_h">CONTACT US</a>
                                    </div>
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
                                    <li className="js-sc_h tra20 delay04"><a href="https://monopo.co.jp/solutions/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">SOLUTIONS</span></a></li>
                                    <li className="js-sc_h tra20 delay05"><a href="https://monopo.co.jp/vision/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">VISION</span></a></li>
                                    <li className="js-sc_h tra20 delay06"><a href="https://monopo.co.jp/careers/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">CAREERS</span></a></li>
                                    <li className="js-sc_h tra20 delay07"><a href="https://monopo.co.jp/team/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">TEAM</span></a></li>
                                    <li className="js-sc_h tra20 delay08"><a href="https://monopo.co.jp/contact/" className="pjax js-text_btn rx360"><span className="js-text_btn_h">CONTACT</span></a></li>
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

        )
    }
}
