import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="oneFourthColumn">
                <a href="index.html" style={{ textDecoration: 'none' }}>
                    <img src="/white-harrow.svg" alt="Harrow" className="footerNewLogo" />
                </a>
            </div>
            <div className="oneFourthColumn address">
                <h4>Address</h4>
                <p>
                    102 Woodmont Blvd., Suite 610<br />
                    Nashville, TN 37205
                </p>
             </div>
            <div className="oneFourthColumn phone">
                <h4>Phone</h4>
                <p>
                    <a href="tel:+16157334730" class="textLink">(615) 733 4730</a><br />
                    <a href="tel:+16157334737" class="textLink">(615) 733 4737 (Investor Relations)</a>
                </p>
            </div>
            <div className="oneFourthColumn linkedin">
                <h4>Social</h4>
                <p>
                    <a href="https://www.linkedin.com/company/harrow-health-inc">
                        <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '100px', filter: 'brightness(0) invert(1)' }}
                    /></a>
                </p>
                <div className="site-link">
                    <a href="https://www.harrow.com/index.html">Visit Harrow site</a>
                </div>
            </div>
            <div className="fullWidthColumn" id="footerBottom">
                <div className="copyright">&copy; 2023 Harrow, Inc.</div>
                <div className="footerRight">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="cookies.html">Cookie Notice</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;