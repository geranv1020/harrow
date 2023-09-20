import React from "react";

import Header from "../common/header";
import Footer from "../common/footer";
import '../App.css';

function Clinical() {
    return (
        <>
            < Header />
            {/*hero*/}
            <section className="banner2">
                <div className="container clinical-banner">
                    <img src="/header2.jpg" className="hero" alt="science" />
                    <div className="clin-banner-text">
                        <h1>Clinical Data</h1>
                        <h3>Because the conscientious, explicit and judicious use of evidence in making decisions about patient care matters.</h3>
                    </div>
                </div>
            </section>

            {/*medication menu and description*/}
            <section className="container topscreen-btns">
                <div className="med-menu">
                    <div className="buttons-row">
                        <button>All</button>
                        <button>Vevye</button>
                        <button>IHEEZO</button>
                        <button>Triesence</button>
                        <button>Ilevro</button>
                        <button>Verkazia</button>
                        <button>Flarex</button>
                        <button>Tobradex ST</button>
                    </div>
                </div>
                <div className="med-description">
                    <p>
                        <span>Vevye</span> (cyclosporine ophthalmic solution 0.1%) is a calcineurin inhibitor immunosuppressant indicated for the<br />
                        treatment of the signs and symptoms of dry eye disease. Please see Prescribing Information for more details.
                    </p>
                </div>
            </section>

            {/*data containers*/}
            <section className="container data-boxes">
                <div className="container-row">
                    <div className="box">
                        <img src="/grey-square.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            lorem ipsum lorem ipsum<br />
                            lorem ipsum
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <img src="/grey-square.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            lorem ipsum lorem ipsum<br />
                            lorem ipsum
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <img src="/grey-square.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            lorem ipsum lorem ipsum<br />
                            lorem ipsum
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>
                </div>

                <div className="container-row">
                    <div className="box">
                        <img src="/grey-square.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            lorem ipsum lorem ipsum<br />
                            lorem ipsum
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <img src="/grey-square.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            lorem ipsum lorem ipsum<br />
                            lorem ipsum
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <img src="/grey-square.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            lorem ipsum lorem ipsum<br />
                            lorem ipsum
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Clinical;