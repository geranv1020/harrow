import * as React from "react";
import Header from "../common/header";
import { useFormik } from 'formik';
import { ContactSchema } from "../schemas";
import '../App.css';
import state from "../state";
import Modal from 'react-modal'
import Footer from "../common/footer";

const medinfo = () => {

    const [isLoader, setIsLoader] = useState(false);
    const [openLoadermodal, setopenLoadermodal] = useState(false)
    
    const [isSubmit, setIsSubmit] = useState(false);
    const [openmodal, setopenmodal] = useState(false)
    const [tnc, settnc] = useState(false)

    const initialValues = {
        rhp_name: "",
        practice_name: "",
        city: "",
        states: "",
        zip: "",
        phone_no: "",
        contact_time:"",
        email: "",
        hcp: "",
        response: "",
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
            "rhp_name": values.rhp_name,
            "practice_name": values.practice_name,
            "city": values.city,
            "states": values.states,
            "zip": values.zip,
            "phone_no": values.phone_no,
            "contact_time": values.contact_time,
            "email": values.email,
            "hcp": values.hcp,
            "response": values.response,
            
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
            <section className="pagetitle pagetitleCONTACT">
                <div className="container">
                    <div className="pagetitle-text">
                        <h1>MEDICAL INFORMATION REQUEST FORM</h1>
                        <h3>Please fill out the following form to request medical information</h3>
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
                <section className="ab-sec1 anesthesia contactus">
                        <div className="container">
                            <div className="contact-header">
                                <h2>Contact Information of Requesting Healthcare Professional</h2>
                            </div>

                            <div className="form" id="medinfo-form" onSubmit={handleSubmit}>
                            <form>
                                <div className="form-rows">
                                    <div className="form-col-L">
                                        <div className="form-input-rows">
                                            <div className="form-input-col6" key="1">
                                                <input type="text" name="rhp_name" placeholder=""
                                                    value={values.rhp_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.rhp_name && touched.rhp_name ? "input-error" : null}
                                                />
                                                <label for="rhp_name">Name of Requesting Healthcare Professional*</label>
                                                {errors.rhp_name && touched.rhp_name ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.rhp_name}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="2">
                                                <input type="text" name="practice_name" placeholder="" 
                                                    value={values.practice_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.practice_name && touched.practice_name ? "input-error" : null}
                                                />
                                                <label for="practice_name">Instition Name/Practice Name*</label>
                                                {errors.practice_name && touched.practice_name ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.practice_name}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="2">
                                                <input type="text" name="city" placeholder="" 
                                                    value={values.city}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.city && touched.city ? "input-error" : null}
                                                />
                                                <label for="city">City*</label>
                                                {errors.city && touched.city ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.city}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="5">
                                                <select name="states" required="Required"
                                                    value={values.states}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.states && touched.states ? "input-error" : null}
                                                >
                                                    <option value="1">State*</option>
                                                    {state.map((res) => {
                                                        return (
                                                        <option key={res}>{res}</option>
                                                        )
                                                    })}
                                                </select>
                                                {errors.states && touched.states ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.states}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="2">
                                                <input type="text" name="zip" placeholder="" 
                                                    value={values.zip}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.zip && touched.zip ? "input-error" : null}
                                                />
                                                <label for="zip">ZIP(XXXXX)*</label>
                                                {errors.zip && touched.zip ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.zip}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="4">
                                                <input type="text" name="phone_no" placeholder=""
                                                    value={values.phone_no.replace(/\D/g,'')}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.phone_no && touched.phone_no ? "input-error" : null}
                                                />
                                                <label for="phone_no">Phone Number (XXX-XXX-XXXX)*</label>
                                                {errors.phone_no && touched.phone_no ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.phone_no}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="2">
                                                <input type="text" name="contact_time" placeholder="" 
                                                    value={values.contact_time}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.contact_time && touched.contact_time ? "input-error" : null}
                                                />
                                                <label for="contact_time">Best Time to Contact*</label>
                                                {errors.contact_time && touched.contact_time ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.contact_time}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="3">
                                                <input type="text" name="email" placeholder=""
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.email && touched.email ? "input-error" : null}
                                                />
                                                <label for="email">Email*</label>
                                                {errors.email && touched.email ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.email}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="6">
                                                <select name="hcp" required="Required"
                                                    value={values.hcp}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.hcp && touched.hcp ? "input-error" : null}
                                                >
                                                    <option value="1">Type of HCP*</option>
                                                    <option value="MD">MD</option>
                                                    <option value="DO">DO</option>
                                                    <option value="OD">OD</option>
                                                    <option value="Ph.D">Ph.D</option>
                                                    <option value="R.Ph">R.Ph</option>
                                                    <option value="R.N.">R.N.</option>
                                                    <option value="PharmD">PharmD</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {errors.hcp && touched.hcp ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.hcp}</p>
                                                    : null}
                                            </div>
                                            <div className="form-input-col6" key="8">
                                                <select name="response" required="Required"
                                                    value={values.response}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.response && touched.response ? "input-error" : null}
                                                >
                                                    <option value="1">Preferred Method of Response*</option>
                                                    <option value="Phone">Phone</option>
                                                    <option value="Email">Email</option>
                                                    <option value="MSL Visit Requested ">MSL Visit Requested</option>
                                                </select>
                                                {errors.response && touched.response ?
                                                    <p style={{ color: "red", fontSize: "15px" }}>{errors.response}</p>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textarea-header">
                                        <h2>Medical Inquiry</h2>
                                        <p>Please type your question below with as much detail as possible.</p>
                                    </div>
                                    <div className="form-col-R">
                                        <textarea name="inquiry" placeholder=""
                                        value={values.inquiry}
                                        onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="checkbox-info">
                                    <p>
                                        Request Not Valid Without Healthcare Professional’s Acknowledgement Below: By clicking the acknowledgement, I hereby confirm that the
                                        medical information requested was at my initiation, as a healthcare provider, and not solicited in any manner by an ImprimisRx/Harrow
                                        representative. I also certify that the information provided will not be shared with other parties. The wording above accurately reflects the
                                        medical information I am requesting to be provided to me by ImprimisRx/Harrow.
                                    </p>
                                </div>
                                <div className="required-fields">
                                    <div className="form-row-submit">
                                        <div className="checkboxs checked">
                                        <input type="checkbox" name="check"
                                            value={values.check}
                                            onChange={handleChange} checked
                                        />
                                        <label for="checkbox">Healthcare Professional Approved</label>
                                        {/* <span className="checkmarks"></span> */}
                                        </div>
                                        <div className="date-input">
                                            <label for="date">Date (mm/dd/yyyy)*</label>
                                            <input type="date" id="date" name="date"/>
                                        </div>
                                        <div className="submit-btns button-div" style={{ width: "200px"}}>
                                            <input type="submit" value="Submit" />
                                        </div>
                            
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

export default medinfo

