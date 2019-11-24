import React, { Component } from 'react';
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
class Loader extends Component {
    // componentDidMount(){
    //     setTimeout(() => {
    //         document.querySelector("#load .bg").fadeOut(300, function() {
    //             document.querySelector("#load").addClass("s1"), document.querySelector("#load .logo").addClass("tra30")
    //         })
    //     }, 100), setTimeout(function() {
    //         document.querySelector("#load .logo").addClass("on")
    //     }, 1800), setTimeout(function() {
    //         document.querySelector("#load").addClass("s2")
    //     }, 2e3)
    // }
    // Sets the opacity to 0 100ms after component mounted and removes loader from DOM 2 seconds after
    //   componentDidMount() {
    //     setTimeout(() => {

    //       document.querySelector('.loader-container').style.transition = 'opacity 5s';
    //       document.querySelector('.loader-container').style.opacity = '0';

    //       setTimeout(() => {
    //         document.querySelector('.loader-container').remove();
    //       }, 2000);

    //     }, 100);
    //   }

    render() {
        return (
            <div id="load" className="s1 s2">
                <div className="bg"/>
                <div className="circle tra20">
                    <svg className="base" width={500} height={500} viewBox="0 0 500 500">
                        <circle className="c1" cx={250} cy={250} r={248} stroke="#fff" strokeWidth={2} fill="none" />
                        <circle className="c2" cx={250} cy={250} r={248} stroke="#fff" strokeWidth={2} fill="none" />
                    </svg>
                    <p className="logo js-blur tra30 on"><img src="https://monopo.co.jp/wp-content/themes/monopo/img/logo_monopo.png" alt="monopo" /></p>
                </div>
            </div>

        );
    }
}

export default Loader;
