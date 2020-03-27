import React, { Component } from 'react'
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Element } from 'react-scroll'
export default class Test extends Component {
  componentDidMount() {
    $(document).ready(function () {

      aboutSlider();

      function aboutSlider() {
        var aboutSlide = window.$('.about-image .owl-carousel');
        aboutSlide.owlCarousel({
          loop: true,
          margin: 30,
          mouseDrag: false,
          autoplay: true,
          center: false,
          dots: false,
          dragEndSpeed: 700,
          smartSpeed: 2000,
          responsiveClass: true,
          autoplayHoverPause: true,
          autoplayTimeout: 3000,
          responsive: {
            0: {
              items: 1,
              margin: 0,
            },
            600: {
              items: 1,
              margin: 0,
            },
            1000: {
              items: 1,
              margin: 0,
            }
          }
        });
      }


      // work slider
      workSlder();

      function workSlder() {
        var owl = window.$('.work .owl-carousel');

        owl.children().each(function (index) {
          $(this).attr('data-position', index); // NB: .attr() instead of .data()
        });

        owl.owlCarousel({
          loop: false,
          margin: 30,
          mouseDrag: true,
          autoplay: false,
          center: true,
          dots: true,
          nav: false,
          slideBy: 'page',
          dragEndSpeed: 700,
          smartSpeed: 1000,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              margin: 20,
            },
            600: {
              items: 2,
              margin: 30,
            },
            1000: {
              items: 2,
              margin: 0,

            }
          }
        });

        $(document).on('click', '.work .owl-item>div', function () {
          owl.trigger('to.owl.carousel', $(this).data('position'));
        });
        owl.trigger('refresh.owl.carousel');
      }



      // team slider
      teamSlider();

      function teamSlider() {
        var teamSlide = window.$('.team .owl-carousel');
        teamSlide.owlCarousel({
          loop: true,
          // rewind: true,
            margin: 30,
            mouseDrag: true,
            autoplay: false,
            center: false,
            dots: false,
            nav: false,
            dotsEach: true,
            dragEndSpeed: 700,
            smartSpeed: 1000,
            responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              margin: 20,
            },
            600: {
              items: 2,
              margin: 30,
            },
            1000: {
              items: 3,
              margin: 30,
            }
          }
        });
      }

      // testimonial slider
      testiSlider();

      function testiSlider() {
        var testiSlide = window.$('.testi-content .owl-carousel');
        testiSlide.owlCarousel({
          loop: true,
          margin: 30,
          mouseDrag: false,
          autoplay: false,
          center: false,
          dots: false,
          dragEndSpeed: 700,
          smartSpeed: 1000,
          responsiveClass: true,
          animateOut: 'fadeOut',
          responsive: {
            0: {
              items: 1,
              margin: 20,
            },
            600: {
              items: 1,
              margin: 30,
            },
            1000: {
              items: 1,
              margin: 0,

            }
          }
        });

        $(".nav-left").on('click', function () {
          testiSlide.trigger('next.owl.carousel');
        });
        $(".nav-right").on('click', function () {
          testiSlide.trigger('prev.owl.carousel');
        });
      }


      // partner slider
      partnerSlider();

      function partnerSlider() {
        var partnerSlide = window.$('.partner .owl-carousel');
        partnerSlide.owlCarousel({
          loop: true,
          margin: 30,
          mouseDrag: true,
          autoplay: false,
          center: false,
          dots: false,
          dragEndSpeed: 700,
          smartSpeed: 2000,
          responsiveClass: true,
          responsive: {
            0: {
              items: 2,
              margin: 20,
            },
            600: {
              items: 3,
              margin: 30,
            },
            1000: {
              items: 5,
              margin: 0,
            }
          }
        });
      }


      // service 2 slider
      serviceSlide2();

      function serviceSlide2() {
        var service2Slide = window.$('.service-2 .owl-carousel');
        service2Slide.children().each(function (index) {
          $(this).attr('data-position', index); // NB: .attr() instead of .data()
        });


        service2Slide.owlCarousel({
          loop: false,
          margin: 30,
          startPosition: '1',
          mouseDrag: false,
          autoplay: false,
          dots: false,
          dragEndSpeed: 700,
          smartSpeed: 1000,
          responsiveClass: true,
          responsive: {
            0: {
              center: true,
              items: 1,
              margin: 20,
            },
            600: {
              items: 3,
              center: true,
              margin: 30,
            },
            1000: {
              items: 3,
              margin: 0,
              center: true,

            }
          }
        });


        $(".nav-left-service-2").on('click', function () {
          service2Slide.trigger('prev.owl.carousel');
        });
        $(".nav-right-service-2").on('click', function () {
          service2Slide.trigger('next.owl.carousel');
        });

        $(document).on('click', '.service-2 .owl-item>div', function () {
          service2Slide.trigger('to.owl.carousel', $(this).data('position'));
        });

      }

    })
  }
  render() {
    return (
        <section className="hero-2 bg-hero-2 between" data-scroll-index={0}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mt-80">
                <div className="hero-text-2 text-center text-lg-left">
                  <h1 className="fading" style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>Where your ideas <br />
                    evolve to <span>products.</span> </h1>
                  <p className="fading" style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>Web design and development agency that creates rich digital experiences
          </p>
                  <p className="sub-title mt-40 fading" style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>What we provide :</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-40" data-scroll-index={1}>
            <div className="row">
              <div className="col-12 col-lg-7 offset-lg-1 col-md-12 col-sm-12">
                <div className="service-2 fading" style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                  <div className="owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transition: 'all 0s ease 0s', width: 1142, transform: 'translate3d(0px, 0px, 0px)' }}><div className="owl-item active" style={{ width: '285.4px' }}><div className="service-2-item dark-orange-gradient" data-position={0}>
                      <div className="icon-service-2">
                        <i className="fas fa-pencil-ruler" aria-hidden="true" />
                      </div>
                      <div className="service-2-text">
                        <h3>Development</h3>
                        <hr className="line" />
                        <ul>
                          <li>Graphic</li>
                          <li>Custom Illustration</li>
                          <li>Logo Design</li>
                          <li>Art Direction</li>
                        </ul>
                        <div className="link-3 text-center">
                          <a href="#">Learn more <i className="fa fa-angle-right" aria-hidden="true" /> </a>
                        </div>
                      </div>
                    </div></div><div className="owl-item active center" style={{ width: '285.4px' }}><div className="service-2-item dark-orange-gradient" data-position={1}>
                      <div className="icon-service-2">
                        <i className="fa fa-paint-brush" aria-hidden="true" />
                      </div>
                      <div className="service-2-text">
                        <h3>Design</h3>
                        <hr className="line" />
                        <ul>
                          <li>Graphic</li>
                          <li>Custom Illustration</li>
                          <li>Logo Design</li>
                          <li>Art Direction</li>
                        </ul>
                        <div className="link-3 text-center">
                          <a href="#">Learn more <i className="fa fa-angle-right" aria-hidden="true" /> </a>
                        </div>
                      </div>
                    </div></div><div className="owl-item active" style={{ width: '285.4px' }}><div className="service-2-item dark-orange-gradient" data-position={2}>
                      <div className="icon-service-2">
                        <i className="fa fa-code" aria-hidden="true" />
                      </div>
                      <div className="service-2-text">
                        <h3>Web Design</h3>
                        <hr className="line" />
                        <ul>
                          <li>Graphic</li>
                          <li>Custom Illustration</li>
                          <li>Logo Design</li>
                          <li>Art Direction</li>
                        </ul>
                        <div className="link-3 text-center">
                          <a href="#">Learn more <i className="fa fa-angle-right" aria-hidden="true" /> </a>
                        </div>
                      </div>
                    </div></div><div className="owl-item active" style={{ width: '285.4px' }}><div className="service-2-item dark-orange-gradient" data-position={3}>
                      <div className="icon-service-2">
                        <i className="fas fa-seedling" aria-hidden="true" />
                      </div>
                      <div className="service-2-text">
                        <h3>Branding</h3>
                        <hr className="line" />
                        <ul>
                          <li>Graphic</li>
                          <li>Custom Illustration</li>
                          <li>Logo Design</li>
                          <li>Art Direction</li>
                        </ul>
                        <div className="link-3 text-center">
                          <a href="#">Learn more <i className="fa fa-angle-right" aria-hidden="true" /> </a>
                        </div>
                      </div>
                    </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled" /></div>
                  <div className="nav-custom mt-40 text-center">
                    <i className="fas fa-arrow-left nav-left-service-2" />
                    <i className="fas fa-arrow-right nav-right-service-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
