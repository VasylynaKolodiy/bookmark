import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import {handlerOnClickCloseMenu, handlerOnClickHamburger, scrollToSection} from "../../helpers";
import Button from "../Button/Button";
import "../../assets/variables/variables.scss";
import {ReactComponent as IconLogo} from "../../assets/images/logo-bookmark.svg";
import {ReactComponent as IconFacebook} from "../../assets/images/icon-facebook.svg";
import {ReactComponent as IconTwitter} from "../../assets/images/icon-twitter.svg";
import {ReactComponent as IconClose} from "../../assets/images/icon-close.svg";
import {ReactComponent as IconHamburger} from "../../assets/images/icon-hamburger.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="#" onClick={(event) => scrollToSection(event, "hero")}>
                            <IconLogo/>
                        </Link>

                        <div className="header__menu-close" onClick={handlerOnClickCloseMenu}>
                            <IconClose/>
                        </div>
                    </div>

                    <div className="header__hamburger" onClick={handlerOnClickHamburger}>
                        <IconHamburger/>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <Link to="#" onClick={(event) => scrollToSection(event, "features")}>
                                    Features
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="#" onClick={(event) => scrollToSection(event, "extensions")}>
                                    Pricing
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="#" onClick={(event) => scrollToSection(event, "footer")}>
                                    Contact
                                </Link>
                            </li>
                            <li className="header__nav-item" onClick={handlerOnClickCloseMenu}>
                                <Button buttonColor="var(--color-light-red)">LOGIN</Button>
                            </li>
                        </ul>

                        <div className="header__social">
                            <div className="" onClick={handlerOnClickCloseMenu}>
                                <a className="header__social-facebook" href="https://www.facebook.com/" target={'_blank'}>
                                    <IconFacebook/>
                                </a>
                            </div>
                            <div className="" onClick={handlerOnClickCloseMenu}>
                                <a className="header__social-twitter" href="https://twitter.com/?lang=pl" target={'_blank'}>
                                    <IconTwitter/>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;