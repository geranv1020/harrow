import React from "react";

import Header from "../common/header";
import Footer from "../common/footer";

function Clinical() {
    return (
        <>
            < Header />
            {/*hero*/}
            <section className="banner2">
                <div className="container">
                    <div className="banner-text">
                        <h1>Clinical Data</h1>
                        <div className="banner-text-h3">
                            <h3>Because the conscientious, explicit and judicious use of evidence in making decisions about patient care matters.</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/*medication menu and description*/}
            <section className="container">
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
                        Vevye (cyclosporine ophthalmic solution 0.1%) is a calcineurin inhibitor immunosuppressant indicated for the treatment of the signs and symptoms of dry eye disease. Please see Prescribing Information for more details.
                    </p>
                </div>
            </section>

            {/*data containers*/}
            <section className="container">
                <div className="container-row">
                    <div className="box">
                        <img src="image.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2>lorem ipsum lorem ipsum lorem ipsum</h2>
                        <p className="line-three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velou valupiu ameru.</p>
                        <p className="line-four">lorem ipsum</p>
                        <button>Learn More</button>
                    </div>

                    <div className="box">
                        <img src="image.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2>lorem ipsum lorem ipsum lorem ipsum</h2>
                        <p className="line-three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velou valupiu ameru.</p>
                        <p className="line-four">lorem ipsum</p>
                        <button>Learn More</button>
                    </div>

                    <div className="box">
                        <img src="image.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2>lorem ipsum lorem ipsum lorem ipsum</h2>
                        <p className="line-three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velou valupiu ameru.</p>
                        <p className="line-four">lorem ipsum</p>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className="container-row">
                    <div className="box">
                        <img src="image.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2>lorem ipsum lorem ipsum lorem ipsum</h2>
                        <p className="line-three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velou valupiu ameru.</p>
                        <p className="line-four">lorem ipsum</p>
                        <button>Learn More</button>
                    </div>

                    <div className="box">
                        <img src="image.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2>lorem ipsum lorem ipsum lorem ipsum</h2>
                        <p className="line-three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velou valupiu ameru.</p>
                        <p className="line-four">lorem ipsum</p>
                        <button>Learn More</button>
                    </div>

                    <div className="box">
                        <img src="image.png" alt="lorem"></img>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2>lorem ipsum lorem ipsum lorem ipsum</h2>
                        <p className="line-three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velou valupiu ameru.</p>
                        <p className="line-four">lorem ipsum</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Clinical;