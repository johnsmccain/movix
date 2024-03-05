import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Movix provide you with new movie releases every week
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/johnsdanlami" className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://github.com/Johnsmccain" className="icon">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/johnsdanlami" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com/in/John-danlami-b5a745154" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
