import React, {useEffect, useState} from 'react';
import "./Footer.scss"
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {scrollToSection} from "../../helpers";
import {ReactComponent as IconLogo} from "../../assets/images/logo-bookmark.svg";
import {ReactComponent as IconFacebook} from "../../assets/images/icon-facebook.svg";
import {ReactComponent as IconTwitter} from "../../assets/images/icon-twitter.svg";

const Footer = () => {
    const [numberOfJoined, setNumberOfJoined] = useState(35000);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    useEffect(() => {
        email !== "" && setIsEmailValid(true);
    }, [email]);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumberOfJoined(number => (number > 0 ? number - 7 : 0));
        }, 1);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.includes('@') && email !== '') {
            setIsEmailValid(true);
            setEmail("");
        } else {
            setIsEmailValid(false);
        }
    }

    return (
        <footer className="footer" id="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__info info">
                        <div className="footer__counter">
                            {numberOfJoined.toLocaleString()}+ ALREADY JOINED
                        </div>

                        <div className="footer__title title">
                            Stay up-to-date with what we're doing
                        </div>

                        <form className="footer__form" onSubmit={handleSubmit}>
                            <div className="footer__content">
                                <input
                                    className={`footer__input ${!isEmailValid ? 'invalid' : ''}`}
                                    placeholder="Enter your email address"
                                    name="email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <span className='footer__error'>Whoops, make sure it's an email</span>
                            </div>

                            <Button buttonColor="var(--color-light-red)">
                                Contact Us
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <ul className="footer__list">
                            <li className="footer__logo">
                                <Link to="#" onClick={(event) => scrollToSection(event, "hero")}>
                                    <IconLogo/>
                                </Link>
                            </li>

                            <li className="footer__item">
                                <Link to="#" onClick={(event) => scrollToSection(event, "features")}>
                                    Features
                                </Link>
                            </li>

                            <li className="footer__item">
                                <Link to="#" onClick={(event) => scrollToSection(event, "extensions")}>
                                    Pricing
                                </Link>
                            </li>

                            <li className="footer__item">
                                <Link to="#" onClick={(event) => scrollToSection(event, "footer")}>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="footer__social">
                            <a className="footer__social-facebook" href="https://www.facebook.com/" target={'_blank'}>
                                <IconFacebook/>
                            </a>
                            <a className="footer__social-twitter" href="https://twitter.com/?lang=pl" target={'_blank'}>
                                <IconTwitter/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;