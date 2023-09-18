import React, { useState } from "react";
import '../App.css';
import './investigator.css';
import Header from "../common/header";
import { useFormik } from 'formik';
import { ContactSchema } from "../schemas";
import country from "../country";
import Modal from 'react-modal'
import Footer from "../common/footer";



const Investigator = () => {

    const [isLoader, setIsLoader] = useState(false);
    const [openLoadermodal, setopenLoadermodal] = useState(false)
    
    const [isSubmit, setIsSubmit] = useState(false);
    const [openmodal, setopenmodal] = useState(false)
    const [tnc, settnc] = useState(false)
    
    const initialValues = {
        full_name: "",
        phone_no: "",
        email: "",
        city: "",
        states: "",
        country: "",
        product: "",
        indication: "",
        title_of_study:"",
        rationale: "",
        endpoint: "",
        years_experience: "",
        involved_studies: "",
        coordinator: "",
        check: false
    }
    const handleClose = () => {
        window.location.reload();
        setopenmodal(false)
    }
    
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: ContactSchema,
        onSubmit: (values, action) => {
            // setIsLoader(true);
            // setopenLoadermodal(true);
            setIsSubmit(true);
            setopenmodal(true);
            contactApi();
        }
    })
    
    const contactApi = () => {
        let data = {
            "full_name": values.full_name,
            "phone_no": values.phone_no,
            "email": values.email,
            "city": values.city,
            "states": values.states,
            "country": values.country,
            "product": values.product,
            "indication": values.indication,
            "title_of_study": values.title_of_study,
            "rationale": values.rationale,
            "endpoint": values.endpoint,
            "years_experience": values.years_experience,
            "involved_studies": values.involved_studies,
            "coordinator": values.coordinator
        }
        fetch("https://api.harrowscience.com/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            res.json().then((result) => {
                // setIsLoader(false);
                // setopenLoadermodal(false);
                // setIsSubmit(true);
                // setopenmodal(true);
            })
        });
    }

    return (
        <>
            <Header />
            <section className="pagetitle-inv">
                    <div className="container">
                        <div className="pagetitle-text">
                            <h1>SUBMIT AN INVESTIGATOR-INITIATED TRIAL PROPOSAL</h1>
                            <p>Please fill out the following form to submit your proposal.</p>
                        </div>
                        <div className="pg-icon-2"><img src="img/pg-icon-2.png" alt="" /></div>
                        <div className="pg-icon-3"><img src="img/pg-icon-3.png" alt="" /></div>
                    </div>
            </section>
            {/* <!-- ==============================PAGETITLE SECTION--> */}
            {isSubmit ? <Modal isOpen={openmodal} onRequestClose={() => setopenmodal(false)}
                    shouldCloseOnOverlayClick={true}
                    style={{
                        overlay: {
                            zIndex: "500",
                            alignItems: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            position: "fixed"
                        },
                            content: {
                            width: "80%",
                            height: "auto",
                            minHeight: "180px",
                            borderRadius: "8px",
                            left: "50%",
                            top: "50%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "50%",
                            transform: "translate(-50%,-50%)"
                        }
                    }}
            >
                <div>
                        <div className='modal-head'  style={{ borderBottom: "0" }}>
                            <h3 style={{ color: "#293b97", fontWeight: "700", lineHeight: "0.6"  }}>Thank you for your message.</h3>
                            <p style={{color: "#293b97"}}>We'll be in contact soon.</p>
                            <button onClick={handleClose}><span>X</span></button>
                        </div>
                    </div>
            </Modal> : null}
    
            {isLoader ? <Modal isOpen={openLoadermodal} onRequestClose={() => setopenLoadermodal(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                        overlay: {
                            zIndex: "500",
                            alignItems: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            position: "fixed"
                        },
                        content: {
                            width: "auto",
                            height: "auto",
                            minHeight: "40px",
                            borderRadius: "8px",
                            left: "50%",
                            top: "50%",
                            right: "auto",
                            bottom: "auto",
                            transform: "translate(-50%,-50%)"
                        }
                    }}
            >
                    <div>
                        <div className='modal-head'  style={{ borderBottom: "0", top:"0", padding:"0" }}>
                            <h5 style={{ color: "#293b97", fontWeight: "700", lineHeight: "0.6", marginBottom: "0"  }}>Please wait...</h5>
                        </div>
                    </div>
            </Modal> : null}
            
            {false ? <div className="container">
                <div className="message">
                <h2>Thank you for your message</h2>
                <p style={{marginTop:"10px"}}>We'll be in contact soon</p>
                </div>
           </div> :
                <section className="section-one">
                    <div className="container">
                        <div className="contact-header">
                            <h2>Use the form below to submit a proposal</h2>
                            <p>
                                At Harrow, we believe in the need to support independent research conducted by qualified individuals that address important
                                unanswered questions and improve patient care. Submission of a proposal does not guarantee funding. The committee will evaluate
                                proposals for scientific merit, alignment with our medical strategy, and available funding.
                            </p>
                            <p>
                                Please fill out all fields with as much detail as possible so we may better evaluate your proposal.
                            </p>
                            <p>
                                If your proposal is accepted, you will be responsible for study design, initiation, management, data analysis, monitoring, reporting, and
                                writing, and publishing.
                            </p>
                            <h3>Please provide your information below.</h3>
                        </div>
  
                        <div className="form" id="iit-form" onSubmit={handleSubmit}>
                            <form className="form-input-rows">
                                <div className="row">
                                    <div className="col" key="1">
                                        <label for="full_name">Investigator Full Name*</label>
                                        <input type="text" name="full_name" id="inv-input" placeholder=""
                                            value={values.full_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.full_name && touched.full_name ? "input-error" : null}
                                        />
                                        {errors.full_name && touched.full_name ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.full_name}</p>
                                            : null}
                                    </div>
                                    <div className="col" key="4">
                                        <label for="phone_no">Phone Number*</label>
                                        <input type="text" name="phone_no" id="inv-input" placeholder=""
                                            value={values.phone_no.replace(/\D/g,'')}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.phone_no && touched.phone_no ? "input-error" : null}
                                        />
                                        {errors.phone_no && touched.phone_no ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.phone_no}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="3">
                                        <label for="email">Email*</label>
                                        <input type="text" name="email" id="inv-input" placeholder=""
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.email && touched.email ? "input-error" : null}
                                        />
                                        {errors.email && touched.email ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.email}</p>
                                            : null}
                                    </div>
                                    <div className="form-input-col6" key="2">
                                        <label for="city">City*</label>
                                        <input type="text" name="city" id="inv-input" placeholder=""
                                            value={values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.city && touched.city ? "input-error" : null}
                                        />
                                        {errors.city && touched.city ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.city}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="2">
                                        <label for="state">State, Province or Territory</label>
                                        <input type="text" name="state" id="inv-input" placeholder=""
                                            value={values.states}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.states && touched.states ? "input-error" : null}
                                        />
                                        {errors.states && touched.states ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.states}</p>
                                            : null}
                                    </div>
                                    <div className="form-input-col6" key="6">
                                        <option value="1">Country*</option>
                                        <select name="country" id="inv-input" required="Required"
                                            value={values.country}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.country && touched.country ? "input-error" : null}
                                        >
                                            {country.map((res) => {
                                                return (
                                                    <option key={res}>{res}</option>
                                                )
                                            })}
                                        </select>
                                        {errors.country && touched.country ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.country}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="6">
                                        <select name="product" id="inv-input" required="Required"
                                            value={values.product}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.product && touched.product ? "input-error" : null}
                                        >
                                            <option value="1">Product*</option>
                                            <option>Iheezo</option>
                                            <option>Ilevro</option>
                                            <option>Triesence</option>
                                            <option>Vevye</option>
                                            <option>Verkazia</option>
                                            <option>Vigamox</option>
                                            <option>Other</option>
                                        </select>
                                        {errors.product && touched.product ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.product}</p>
                                            : null}
                                    </div>
                                    <div className="form-input-col6" key="2">
                                        <label for="indication">Indication</label>
                                        <input type="text" name="indication" id="inv-input" placeholder=""
                                            value={values.indication}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.indication && touched.indication ? "input-error" : null}
                                        />
                                        {errors.indication && touched.indication ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.indication}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="2">
                                        <label for="title_of_study">Title of Study*</label>
                                        <input type="text" name="title_of_study" id="inv-input" placeholder=""
                                            value={values.title_of_study}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.title_of_study && touched.title_of_study ? "input-error" : null}
                                        />
                                        {errors.title_of_study && touched.title_of_study ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.title_of_study}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="2">
                                        <label for="rationale">Rationale for Trial*</label>
                                        <input type="text" name="rationale" id="inv-input" placeholder=""
                                            value={values.rationale}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.rationale && touched.rationale ? "input-error" : null}
                                        />
                                        {errors.rationale && touched.rationale ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.rationale}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="2">
                                        <label for="endpoint">Primary Objective/Endpoint</label>
                                        <input type="text" name="endpoint" id="inv-input" placeholder=""
                                            value={values.endpoint}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.endpoint && touched.endpoint ? "input-error" : null}
                                        />
                                        {errors.endpoint && touched.endpoint ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.endpoint}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="2">
                                        <label for="years_experience">How many years of clinical research experience do you have?</label>
                                        <input type="text" name="years_experience" id="inv-input" placeholder=""
                                            value={values.years_experience}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.years_experience && touched.years_experience ? "input-error" : null}
                                        />
                                        {errors.years_experience && touched.years_experience ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.years_experience}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="2">
                                        <label for="involved_studies">How many clinical studies are you currently involved in?</label>
                                        <input type="text" name="involved_studies" id="inv-input" placeholder=""
                                            value={values.involved_studies}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.involved_studies && touched.involved_studies ? "input-error" : null}
                                        />
                                        {errors.involved_studies && touched.involved_studies ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.involved_studies}</p>
                                            : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-input-col6" key="2">
                                        <label for="coordinator">Do you have a dedicated research coordinator(s)?</label>
                                        <input type="text" name="coordinator" id="inv-input" placeholder=""
                                            value={values.coordinator}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.coordinator && touched.coordinator ? "input-error" : null}
                                        />
                                        {errors.coordinator && touched.coordinator ?
                                            <p style={{ color: "red", fontSize: "15px" }}>{errors.coordinator}</p>
                                            : null}
                                    </div>
                                </div>
                                <div>
                                    <div class="resume">
                                    <h4></h4>
                                    <input type="email"/>
                                    <button class="btn">Resume</button>
                                    </div>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </section>}
  
            <Footer />
        </>
    )
}
export default Investigator
