import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                        <h1 id="colorlib-logo"><a href="index.html">Mackenzie Ros</a></h1>
                        <span className="email"><i className="icon-mail"></i>rosm@uci.edu</span>
                    </div>
                    <br></br>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li><a href="#" data-nav-section="introduction">Introduction</a></li>
                                <li><a href="#" data-nav-section="about">About </a></li>
                                <li><a href="#" data-nav-section="experience">Experience</a></li>
                                <li><a href="#" data-nav-section="projects">Projects</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/mackenzie-ros-4761a811a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                            <li><a href="https://github.com/mackenzieros" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                        </ul>
                    </nav>
                    <div className="colorlib-footer">
                        <p>
                            <small>
                                Made with <i className="icon-heart" aria-hidden="true" />
                  </small>
                        </p>
                        <p>
                            <small>
                                Thanks, <a href="https://colorlib.com" target="_blank">Colorlib</a> for the inspiration.
                  </small>
                        </p>
                    </div>
                </aside>
            </div>
        );
    }
}