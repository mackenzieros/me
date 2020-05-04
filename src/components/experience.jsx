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
                                                My role on the team was to develop and test RESTful API endpoints in node.js while assuring efficiency and maintainability. 
                                                Worked with other engineering teams to create and enhance platform capabilities.
                                                Developed applications and scripts to monitor health and performance of a distributed processing system.
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