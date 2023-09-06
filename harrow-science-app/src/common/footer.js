import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="oneFourthColumn">
                <a href="index.html" style={{ textDecoration: 'none' }}>
                    <img src="assets/new_logo.png" alt="Harrow" className="footerNewLogo" />
                </a>
            </div>
            <div className="oneFourthColumn">
                <h4>Address</h4>
                <p>
                    102 Woodmont Blvd., Suite 610<br />
                    Nashville, TN 37205
                </p>
             </div>
            <div className="oneFourthColumn">
                <h4>Phone</h4>
                <p>
                    <a href="tel:+16157334730" class="textLink">(615) 733 4730</a><br />
                    <a href="tel:+16157334737" class="textLink">(615) 733 4737 (Investor Relations)</a>
                </p>
            </div>
            <div className="oneFourthColumn">
                <h4>Social</h4>
                <p>
                    <a href="https://www.facebook.com">
                        <img src="assets/linkedin.svg" alt="LinkedIn" style={{ width: '100px', filter: 'brightness(0) invert(1)' }}
                    /></a>
                </p>
            </div>
            <div className="fullWidthColumn" id="footerBottom">
                <div className="copyright">&copy; 2022 Harrow, Inc.</div>
                <div className="footerRight">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="cookies.html">Cookie Notice</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;