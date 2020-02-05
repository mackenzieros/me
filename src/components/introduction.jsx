import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (

      <section id="colorlib-hero" className="js-fullheight" data-section="introduction">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Hi, <br />I'm Mackenzie</h1>
                        <p>
                          <a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1sBCXdN75RBGFaI5Rtl5BQ4J3flzg40Rc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Download resume <em className="icon-download4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>...and I <br /> love to build!</h1>
                        {/* <h2>The nitty gritty<a href="https://colorlib.com/" target="_blank">https://github.com/mackenzieros</a></h2> */}
                        <p><a className="btn btn-primary btn-learn" href="https://github.com/mackenzieros" target="_blank" rel="noopener noreferrer">View projects <em className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}