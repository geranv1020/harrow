import React from "react";

import Header from "../common/header";
import Footer from "../common/footer";
import './home.css';

const Home = () => {
	return (
		<>
			<Header />
			{/*hero*/}
			<section className="banner">
				<div className="container">
					<div className="banner-text">
						<h1>Harrow Medical Affairs</h1>
						<h3>Committed to scientific integrity.</h3>
					</div>
				</div>
			</section>
			{/*learn more*/}
			<section className="home-s2">
				<div className="text">
					<p>
						At Harrow Medical Affairs, our mission is to challenge the scientific landscape, by partnering with<br />
                        physicians to advance the science around necessary and sight saving medications for the patients<br />
                        we serve.
					</p>
				</div>
				<div className="image-row">
                    <div className="icon-container">
                        <div className="icon">
                            <img src="group-1495.png" alt="phone/tablet icon" />
                        </div>
                        <div className="icon-title">
                            <h2>Clinical Data</h2>
                        </div>
                        <div>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon">
                            <img src="group-1494.png" alt="filed form icon" />
                        </div>
                        <div className="icon-title">
                            <h2>Clinical Data</h2>
                        </div>
                        <div>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon">
                            <img src="group-1493.png" alt="hands over heart icon" />
                        </div>
                        <div className="icon-title">
                            <h2>Clinical Data</h2>
                        </div>
                        <div>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
			</section>
			{/*recent posts*/}
			<section className="home-s3">
				<div className="container recent">
                    <h1>Most Recent Posts</h1>
                    <div className="post-row">
                        <div className="container posts">
						    <div className="top-half">
							    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								    eiusmod tempor.
                                </p>
						    </div>
						    <div className="bottom-half">
							    <span className="bold-text">Iheezo</span>
							    <button>Learn More</button>
						    </div>
					    </div>
                        <div className="container posts">
                            <div className="top-half">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor.
                                </p>
                            </div>
                            <div className="bottom-half">
                                <span className="bold-text">Verkazia</span>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className="container posts">
                            <div className="top-half">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor.
                                </p>
                            </div>
                            <div className="bottom-half">
                                <span className="bold-text">Flarex</span>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;
