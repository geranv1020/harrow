import React, { useState } from "react";

import Header from "../common/header";
import Footer from "../common/footer";
import '../App.css';

function Clinical() {

    const medications = [
        { title: 'Vevye ', description: 'Vevye (cyclosporine ophthalmic solution 0.1%) is a calcineurin inhibitor immunosuppressant indicated for the treatment of the signs and symptoms of dry eye disease.' },
        { title: 'IHEEZO', description: 'IHEEZO (chloroprocaine HCl ophthalmic gel 3%) is an ester anesthetic indicated for ocular surface anesthesia.' },
        { title: 'Triesence', description: 'Triesence (triamcinolone acetonide injectable suspension 40mg/ml) is a synthetic corticosteroid indicated for the treatment of the following ophthalmic diseases: sympathetic ophthalmia, temporal arteritis, uveitis, and ocular inflammatory conditions unresponsive to topical corticosteroids as well as for visualization during vitrectomy.' },
        { title: 'Ilevro', description: 'Ilevro (nepafenac ophthalmic suspension 0.3%) is a nonsteroidal, anti-inflammatory prodrug indicated for the treatment of pain and inflammation associated with cataract surgery.' },
        { title: 'Verkazia', description: 'Verkazia (cyclosporine ophthalmic emulsion 0.1%) is a calcineurin inhibitor immunosuppressant indicated for the treatment of vernal keratoconjunctivitis in children and adults.' },
        { title: 'Flarex', description: 'Flarex (fluorometholone acetate ophthalmic suspension 0.1%) is indicated for use in the treatment of steroid responsive inflammatory conditions of the palpebral and bulbar conjunctiva, cornea, and anterior segment of the eye.' },
        { title: 'Tobradex ST', description: 'Tobradex ST (tobramycin and dexamethasone ophthalmic suspension 0.3%/0.05%) is a topical antibiotic and corticosteroid combination for steroid-responsive inflammatory ocular conditions for which a corticosteroid is indicated and where superficial bacterial ocular infections or a risk of bacterial ocular infections exists.' },
    ];
    const [selectedMedication, setSelectedMedication] = useState(null);

    const handleMedicationClick = (medication) => { setSelectedMedication(medication);
    };

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
                        {medications.map((medication, index) => (
                            <button
                                key={index}
                                onClick={() => handleMedicationClick(medication)}
                                className={selectedMedication === medication ? 'active' : ''}
                            >
                                {medication.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="med-description container" id="description">
                    {selectedMedication && (
                        <p>{selectedMedication.description}</p>
                    )}
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