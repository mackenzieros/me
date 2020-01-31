import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (

            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p>
                                            I am <strong>Mackenzie Ros</strong>, a college graduate from the University of California, Irvine (Zoot zoot zoot!) I love learning new things and engaging in the challenges that may come with them.
                                        </p>
                                        <p>
                                            I love coding and fitness. I usually read but I mostly listen. I only write when I have to...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                            data-animate-effect="fadeInLeft">
                            {/* <span class="heading-meta">What I do?</span> */}
                            <h2 class="colorlib-heading">What do I do?</h2>
                        </div>
                    </div>
                    <div class="row row-pt-md">
                        <div class="col-md-4 text-center animate-box">
                            <div class="services color-1">
                                <span class="icon">
                                    <i class="icon-layers2"></i>
                                </span>
                                <div class="desc">
                                    <h3>Web Development</h3>
                                    <p>
                                        Experienced in building full-stack web applications (backend-focus) using technologies such as node.js, django, and ajax
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center animate-box">
                            <div class="services color-2">
                                <span class="icon">
                                    <i class="icon-bulb"></i>
                                </span>
                                <div class="desc">
                                    <h3>AI and Machine Learning</h3>
                                    <p>
                                        Enthralled by having made a checkers-playing agent, I am now studying deep learning and reviewing machine learning techniques
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center animate-box">
                            <div class="services color-3">
                                <span class="icon">
                                    <i class="icon-data"></i>
                                </span>
                                <div class="desc">
                                    <h3>DevOps</h3>
                                    <p>
                                        Love efficiency and learning of tech that provide the means like Docker and Serverless. Now learning about orchestration
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}