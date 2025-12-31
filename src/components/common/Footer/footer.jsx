import "./footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer h-screen">
            {/* TOP */}
            <div className="footer-top">
                {/* LEFT */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={"/assets/images/logo.png"} alt="ChronicGPT" />
                        <div>
                            <h3>ChronicGPT Inc <small><br />AI Doctors for Chronic Care</small></h3>
                        </div>
                    </div>

                    <p>
                        We offer reliable healthcare insights, expert advice, and digital
                        tools to support your journey towards a healthier lifestyle.
                    </p>

                    <div className="footer-talk">
                        <h4>Talk to me!</h4>
                        <div className="footer-input">
                            <input type="email" placeholder="Enter E-mail ID" />
                            <span className="send-icon"><FaPaperPlane /></span>
                        </div>
                    </div>
                </div>

                {/* CENTER */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/trust">How it Works</a></li>
                        <li><a href="/journey">Journey</a></li>
                    </ul>

                </div>

                {/* RIGHT */}
                <div className="footer-trust">
                    <h4>Trusted by healthcare professionals & patients alike</h4>

                    <div className="trust-badge">
                        <img src={"/assets/images/h1.png"} className="img100 img10" />
                        <img src={"/assets/images/h2.png"} className="img100 img20" />
                        <img src={"/assets/images/h3.png"} className="img100 img30" />
                    </div>

                    <div className="footer-social">
                        <h4>Connect with us</h4>

                        <div className="social-icons">
                            <a href="https://facebook.com" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="footer-divider" />

            {/* BOTTOM */}
            <div className="footer-bottom">

                <p >Copyright © ChronicGPT 2025</p>
                <p >Privacy Policy</p>
                <p >Terms & Conditions</p>
                {/* <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div> */}

                <p className="footer-credit">
                    Designed & Developed by Etheraldesign.io
                </p>
            </div>
        </footer>
    );
}

export default Footer;
