import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (

            <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="colorlib-heading animate-box">Work Experience</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-1">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="#">Internship at CalAmp</a> <span> 2019 </span></h2>
                                            <p>
                                                Joined the LMACTC API team for the Summer and Fall. 
                                                My role on the team was to develop and test RESTful API endpoints in node.js while assuring efficiency and readability on top of a legacy system. 
                                                In coordination with the team, I designed and developed the API for the company's new product.
                                                I also resolved technical problems of the API resulting in code and application quality improvements.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="#">Undergrad at University of California, Irvine</a>
                                                <span> 2017 - 2019</span></h2>
                                            <p>
                                                Graduated in December of 2019 with a Bachelors in Computer Science.
                                                <br></br>
                                                I have taken courses on Data Structures, Algorithms, OOP, AI, Machine Learning, Computer Networks, Network Security, Data Management, Information Retrieval, System Design, and Operating Systems,
                                                so I have a solid grasp on fundamental CS concepts.
                                                <br></br>
                                                I was a member of the Cambodian Awareness Organization; I learned Brazilian Jiu Jitsu, boxing, and how to play Smash badly and DnD like a troll.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}