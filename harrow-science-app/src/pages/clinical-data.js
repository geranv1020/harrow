import React, { useState } from "react";

import Header from "../common/header";
import Footer from "../common/footer";
import '../App.css';

function Clinical() {

    const medications = [
        { title: 'Vevye ', description: 'Vevye (cyclosporine ophthalmic solution 0.1%) is a calcineurin inhibitor immunosuppressant indicated for the treatment of the signs and symptoms of dry eye disease.' },
        /*{ title: 'IHEEZO', description: 'IHEEZO (chloroprocaine HCl ophthalmic gel 3%) is an ester anesthetic indicated for ocular surface anesthesia.' },*/
        { title: 'Triesence', description: 'Triesence (triamcinolone acetonide injectable suspension 40mg/ml) is a synthetic corticosteroid indicated for the treatment of the following ophthalmic diseases: sympathetic ophthalmia, temporal arteritis, uveitis, and ocular inflammatory conditions unresponsive to topical corticosteroids as well as for visualization during vitrectomy.' },
        { title: 'Ilevro', description: 'Ilevro (nepafenac ophthalmic suspension 0.3%) is a nonsteroidal, anti-inflammatory prodrug indicated for the treatment of pain and inflammation associated with cataract surgery.' },
        { title: 'Verkazia', description: 'Verkazia (cyclosporine ophthalmic emulsion 0.1%) is a calcineurin inhibitor immunosuppressant indicated for the treatment of vernal keratoconjunctivitis in children and adults.' },
        /*{ title: 'Flarex', description: 'Flarex (fluorometholone acetate ophthalmic suspension 0.1%) is indicated for use in the treatment of steroid responsive inflammatory conditions of the palpebral and bulbar conjunctiva, cornea, and anterior segment of the eye.' },
        /*{ title: 'Tobradex ST', description: 'Tobradex ST (tobramycin and dexamethasone ophthalmic suspension 0.3%/0.05%) is a topical antibiotic and corticosteroid combination for steroid-responsive inflammatory ocular conditions for which a corticosteroid is indicated and where superficial bacterial ocular infections or a risk of bacterial ocular infections exists.' },*/
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

                {/*--------------------Vevye---------------------*/}

                 <div className="container-row">
                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30703441/"><img src="vevyelinkone.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Wirta D, et al. Vevye Phase II<br />
                            study vs Restasis
                        </h2>
                        <p className="line-three">
                            Purpose: To compare the efficacy, safety, and<br />
                            tolerability of waterfree cyclosporine formulation<br />
                            (CyclASol) at 2 concentrations (0.1% and 0.05% <br />
                            of cyclosporine [CsA]) to vehicle when . . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/34481407/"><img src="vevyelinktwo.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Sheppard J, et al. Vevye Phase III<br />
                            ESSENCE-1 study
                        </h2>
                        <p className="line-three">
                            Purpose: To assess the efficacy, safety, and<br />
                            tolerability of a topical water-free cyclosporine<br />
                            A formulation (CyclASol 0.1% ophthalmic<br />
                            solution) in comparison with vehicle . . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>

                    <div className="box">
                        <a href="https://jamanetwork.com/journals/jamaophthalmology/fullarticle/2803655"><img src="vevyelinkthree.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Akpek E, et al. Vevye Phase III<br />
                            ESSENCE-2 study
                        </h2>
                        <p className="line-three">
                            Purpose: To assess efficacy, safety, and tolerability<br />
                            of a water-free cyclosporine ophthalmic solution,<br />
                            0.1% (CyclASol [Novaliq GmbH]), applied<br />
                            twice daily in DED compared with vehicle.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>
                </div>

                <div className="container-row">
                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/28091781/"><img src="vevyelinkfour.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Gehlsen U, et al. Cyclosporine/<br />
                            F4H5 vs Restasis vs<br />
                            dexamethasone and goblet cell<br />
                            density
                        </h2>
                        <p className="line-three">
                            Purpose: Cyclosporine A (Cs) has been used as<br />
                            effective topical therapy for inflammatory dry<br />
                            eye disease since more than a decade. However,<br />
                            due to its lipophilic character, Cs is formulated . . . 
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/29339249/"><img src="vevyelinkfive.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Agarwal P, et al. Cyclosporine/<br />
                            F4H5 vs Restasis vs Ikervis and<br />
                            corneal penetration
                        </h2>
                        <p className="line-three">
                            Purpose: This study demonstrated that SFAs can<br />
                            significantly improve the local bioavailability of<br />
                            hydrophobic drugs by increasing corneal penetration<br />
                            as well as prolonging precorneal residence. 
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>
                </div>


                {/* ------------------Triesence-----------------*/}

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
                            Purpose: To evaluate the safety and efficacy of<br />
                            preservative-free triamcinolone (TRIESENCE(R)<br />
                            suspension) for visualization during pars plana<br />
                            vitrectomy.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
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
                            Purpose: To evaluate the comparative<br />
                            effectiveness of 3 regional corticosteroid injections<br />
                            for uveitic macular edema (ME): periocular<br />
                            triamcinolone acetonide (PTA), intravitreal<br />
                            triamcinolone acetonide (ITA), and the intravitreal<br />
                            dexamethasone implant (IDI).
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
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
                            Purpose: To report expanded 2-year follow-up of<br />
                            a previously reported randomized trial evaluating<br />
                            intravitreal 0.5 mg ranibizumab or 4 mg<br />
                            triamcinolone combined with focal/grid laser<br />
                            compared with focal/grid laser alone for<br />
                            treatment of diabetic macular edema (DME).
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
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
                            Purpose: To assess the outcomes of intravitreal<br />
                            benzyl alcohol-free triamcinolone acetonide<br />
                            suspension in uveitis-related macular oedema.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
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
                            Purpose: To evaluate the efficacy and safety of<br />
                            preservative-free triamcinolone acetonide<br />
                            (Triesence) for the treatment of macular edema.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30053470/"><img src="Linksix.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Ganapathy P, et al. Long-term use<br />
                            of triamcinolone for uveitis
                        </h2>
                        <p className="line-three">
                            Purpose: Noninfectious uveitis has been treated<br />
                            historically with corticosteroid therapy in<br />
                            varying doses and routes. Triesence, a<br />
                            preservative-free sterile formulation of . . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
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
                            Objective  To evaluate the clinical outcome of an<br />
                            intravitreal injection of triamcinolone acetonide<br />
                            as treatment of diffuse diabetic macular edema.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
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
                        Importance: Diabetic retinopathy (DR) may progress<br />
                        following cataract surgery due to surgery-induced<br />
                        inflammation. The effect of intravitreal bevacizumab<br />
                        (BVB) and triamcinolone acetonide (TCA), which . . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>

                    <div className="box">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/23449717/"><img src="Linknine.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Chen H, et al. Pharmacokinetics of<br />
                            various intravitreal triamcinolone
                        </h2>
                        <p className="line-three">
                            Purpose: We sought to better characterize the<br />
                            intravitreal profile of different triamcinolone formulations.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Triesence</p>
                    </div>
                </div>



                {/*---------------------------------ilevro--------------------------------*/}

                <div className="container-row">
                    <div className="box">
                        <a href="https://www.sciencedirect.com/science/article/pii/S0886335013013825?fr=RR-2&ref=pdf_download&rr=813931258eb612da"><img src="ilevrolinkone.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Modi S, et al. Ilevro Phase III<br />
                            Studies in cataract surgery
                        </h2>
                        <p className="line-three">
                            To evaluate once-daily nepafenac 0.3% to prevent<br />
                            and treat ocular pain and inflammation after<br />
                            cataract surgery.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Ilevro</p>
                    </div>

                    <div className="box">
                        <a href="https://www.aaojournal.org/article/S0161-6420(16)31411-7/fulltext"><img src="ilevrolinktwo.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Singh R, et al. Ilevro Phase III<br />
                            Studies in diabetic retinopathy
                        </h2>
                        <p className="line-three">
                            Purpose: To demonstrate the efficacy and safety<br />
                            of once-daily nepafenac 0.3% ophthalmic suspension<br />
                            versus vehicle, based on clinical outcomes, after<br />
                            cataract surgery in patients with diabetes.
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Ilevro</p>
                    </div>

                    <div className="box">
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5319126/"><img src="ilevrolinkthree.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            McCafferty S, et al. Nepafenac for<br />
                            pseudophakic cystoid macular<br />
                            edema prevention
                        </h2>
                        <p className="line-three">
                            Purpose: Define the effectiveness of a topical<br />
                            non-steroidal anti-inflammatory drug (NSAID) added<br />
                            to topical steroid use after uncomplicated<br />
                            phacoemulsification for the prevention of . . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Ilevro</p>
                    </div>
                </div>

                <div className="container-row">
                    <div className="box">
                        <a href="https://bjo.bmj.com/content/101/4/423.long"><img src="ilevrolinkfour.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Pollack A, et al. Nepafenac for<br />
                            prevention of macular edema in<br />
                            patients with diabetic retinopathy<br />
                            undergoing cataract surgery 
                        </h2>
                        <p className="line-three">
                            Purpose: This study evaluated nepafenac<br />
                            ophthalmic suspension 0.1% for prevention<br />
                            of macular oedema (MO) when used 90 days<br />
                            following cataract surgery in patients . . . . 
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Ilevro</p>
                    </div>

                    <div className="box">
                        <a href="https://journals.lww.com/jcrs/pages/articleviewer.aspx?year=2007&issue=09000&article=00017&type=Abstract"><img src="ilevrolinkfive.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Walters T, et al. nepafenac,<br />
                            amfenac, ketorolac, and bromfenac<br />
                            in-vitro pharmacodynamics
                        </h2>
                        <p className="line-three">
                            Purpose: To evaluate the aqueous humor<br />
                            concentrations and cyclooxygenase (COX) inhibitory<br />
                            activities of nepafenac, amfenac, ketorolac,<br />
                            and bromfenac after topical ocular. . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Ilevro</p>
                    </div>

                    <div className="box">
                        <a href="https://www.tandfonline.com/doi/full/10.1080/02713683.2020.1725061?scroll=top&needAccess=true"><img src="ilevrolinksix.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Cagini C, et al. Nepafenac vs<br />
                            Diclofenac in cataract surgery
                        </h2>
                        <p className="line-three">
                            Purpose: To compare, using laser flare meter<br />
                            (LFM), the efficacy of topical nepafenac 0.1,<br />
                            % and diclofenac 0.1% ophthalmic solution in<br />
                            the control of anterior chamber . . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Ilevro</p>
                    </div>
                </div>




                {/*----------------------------verkazia-------------------------------------*/}

                <div className="container-row">
                    <div className="box">
                        <a href="https://iovs.arvojournals.org/article.aspx?articleid=2782377"><img src="verkazialinkone.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Leonardi A, Et al. Verkazia Phase II<br />
                            study in Pediatric Vernal<br />
                            Keratoconjunctivitis 
                        </h2>
                        <p className="line-three">
                            Purpose : NOVATIVE (NCT00328653) was a<br />
                            randomized phase II/lll trial that evaluated the efficacy<br />
                            and safety of CsA CE in children and adolescents with<br />
                            moderate-to-severe VKC . . . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Verkazia</p>
                    </div>

                    <div className="box">
                        <a href="https://www.aaojournal.org/article/S0161-6420(18)31697-X/fulltext"><img src="verkazialinktwo.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Leonardi, A et al. Verkazia Phase III<br />
                            study in Pediatric Vernal<br />
                            Keratoconjunctivitis
                        </h2>
                        <p className="line-three">
                            Purpose: Vernal keratoconjunctivitis (VKC) is a<br />
                            chronic, allergic, and potentially severe ocular<br />
                            disease affecting children and adolescents<br />
                            that can lead to impaired quality . . . . 
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Verkazia</p>
                    </div>

                    <div className="box">
                        <a href="https://www.ajo.com/article/S0002-9394(19)30577-X/fulltext"><img src="verkazialinkthree.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Leonardi, A, et al. Phase III 12<br />
                            month safety extension study
                        </h2>
                        <p className="line-three">
                        Purpose: To assess the safety and efficacy of<br />
                        cyclosporine A cationic emulsion (CsA CE) 0.1%<br /> 
                        eye drops in pediatric patients with severe active<br />
                        vernal keratoconjunctivitis (VKC).
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Verkazia</p>
                    </div>
                </div>

                <div className="container-row">
                    <div className="box">
                        <a href="https://www.nature.com/articles/s41433-022-02342-6"><img src="verkazialinkfour.png" alt="lorem"></img></a>
                        <p className="line-one">lorem ipsum lorem ipsum</p>
                        <h2 className="line-two">
                            Leonardi A, et al. Pool analysis of<br />
                            data
                        </h2>
                        <p className="line-three">
                            Purpose: Cyclosporine A cationic ophthalmic<br />
                            emulsion (CsA CE) was evaluated in paediatric<br />
                            and adolescent patients with vernal<br />
                            keratoconjunctivitis (VKC) in the NOVATIVE. . .
                        </p>
                        <button>Learn More</button>
                        <p className="line-four">Verkazia</p>
                    </div>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Clinical;