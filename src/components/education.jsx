import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <section class="colorlib-education" data-section="education">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                            data-animate-effect="fadeInLeft">
                            <span class="heading-meta">What I know</span>
                            <h2 class="colorlib-heading animate-box">Education</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <div class="fancy-collapse-panel">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                    href="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">Bachelor's Degree in Computer Science
                                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                                            aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <p>
                                                            <strong>University of California, Irvine</strong> <small>2017 - Dec 2019</small>
                                                            <br />
                                                            <small><strong>Major GPA: </strong>3.704</small>
                                                            <br />
                                                            <small><strong>Courses taken: </strong>
                                                                Data Structures,
                                                                System Design,
                                                                Design and Analysis of Algorithms,
                                                                Information Retrieval,
                                                                Data Management,
                                                                Machine Learning,
                                                                Computer Networks,
                                                                Network Security,
                                                                Operating Systems,
                                                                Project in OS,
                                                                Project in Databases and Web Apps,
                                                                User Interaction Software,
                                                                Next Generation Search Systems
                                                                </small>
                                                        </p>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>
                                                            Member of the STEM transfers scholars program and the Cambodian Awareness Organization; Also learned Brazilian Jiu Jitsu, boxing, and how to play Smash and DnD.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                    data-animate-effect="fadeInLeft">
                                    <h2 class="colorlib-heading animate-box">Self-learning</h2>
                                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                        <div class='desc'>
                                            <p>
                                                <strong>Guides and lectures: </strong>
                                                <ul class="self-learning-list-prog">
                                                    <li>Progressive Web Apps Training: Intro to Service Worker (Google Developers 2020)</li>
                                                </ul>
                                                <ul class="self-learning-list-done">
                                                    <li>Express web framework (Node.js/JavaScript) (Mozilla MDN 2018)</li>
                                                    <li>Serverless Introduction (Serverless 2019)</li>
                                                    <li>Computer Systems Security (MIT OpenCourseWare 2019)</li>
                                                    <li>Docker for beginners (Docker Labs 2020)</li>
                                                    <li>React Native (Facebook React Native Guides 2020)</li>
                                                </ul>

                                                <strong>Training and workshops: </strong>
                                                <ul class="self-learning-list-prog">
                                                    <li>NLP with Python (Udemy 2020)</li>
                                                </ul>
                                                <ul class="self-learning-list-done">
                                                    <li>Design and Analysis of Algorithms (Stanford Lagunita 2019)</li>
                                                    <li>Half-Day Apache Kafka Workshop (Instaclustr 2020)</li>
                                                    <li>Hands-on workshop: Introduction to Machine Learning with Apache Spark and Redis (Twilio 2020)</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};