import React from "react";

import Header from "../common/header";
import Footer from "../common/footer";

const Home = () => {

    return (
        <>
            < Header />
            {/*hero*/}
            <section className="banner">
                <div className="container">
                    <div className="banner-text">
                        <h1>Harrow Medical Affairs</h1>
                        <div className="banner-text-h3-desk">
                            <h3>Committed to scientific integrity.</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/*learn more*/}
            <section className="home-s2">
                <div className="container">
                    <p>
                        At Harrow Medical Affairs, our mission is to challenge the scientific landscape, by partnering with
                        physicians to advance the science around necessary and sight saving medications for the patients
                        we serve.
                    </p>
                </div>
                <div className="image-row">
                    <div className="icon">
                        <img src="group-1495.png" alt="phone/tablet icon" />
                        <button>Learn More</button>
                    </div>
                    <div className="icon">
                        <img src="group-1494.png" alt="filed form icon" />
                        <button>Learn More</button>
                    </div>
                    <div className="icon">
                        <img src="group-1493.png" alt="hands over heart icon" />
                        <button>Learn More</button>
                    </div>
                </div>
            </section>
            {/*recent posts*/}
            <section className="home-s3">
                <div className="post-row">
                    <div className="container">
                        <div className="top-half">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="bottom-half">
                            <span className="bold-text">Important:</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="top-half">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="bottom-half">
                            <span className="bold-text">Important:</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="top-half">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="bottom-half">
                            <span className="bold-text">Important:</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Home;