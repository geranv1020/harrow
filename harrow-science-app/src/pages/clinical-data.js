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
                        <a href="https://pubmed.ncbi.nlm.nih.gov/18827733/"><img src="Linkone.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Dyer D, et al. Triamcinolone for<br/>
                            visualization during pars plana<br />
                            vitrectomy
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30269924/"><img src="Linktwo.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Thorne J, et al. Triamcinolone vs<br />
                            Dexamethasone Implant for uveitic<br />
                            macular edema, the POINT study
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/21459214/"><img src="Linkthree.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Elman M, et al. 2-year follow-<br />
                            up of laser and triamcinolone vs<br /> 
                            ranibizumab for diabetic macular<br />
                            edema
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
                        <a href="https://pubmed.ncbi.nlm.nih.gov/28318344/"><img src="Linkfour.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Steeples L, et al. Triamcinolone<br />
                            for cystoid macular edema and<br />
                            inflammatory uveitis
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/26218262/"><img src="Linkfive.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Chang A, et al. Safety and<br />
                            efficacy for triamcinolone<br />
                            for macular edema
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30053470/"><img src="Linksix.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Ganapathy P, et al. Long-term use<br />
                            of triamcinolone for uveitis
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
                        <a href="https://jamanetwork.com/journals/jamaophthalmology/fullarticle/414998"><img src="Linkseven.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Jonas J, et al. Triamcinolone<br />
                            for diffuse diabetic macular edema
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/32356581/"><img src="Linkeight.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Sasongko M, et al. Triamcinolone vs<br />
                            bevacizumab, analysis of diabetic<br />
                            retinopathy progression post<br />
                            cataract surgery, the DiMECAT trial
                        </h2>
                        <p className="line-three">
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Nam velou valupiu ameru.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">lorem ipsum</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/23449717/"><img src="Linknine.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Chen H, et al. Pharmacokinetics of<br />
                            various intravitreal triamcinolone
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