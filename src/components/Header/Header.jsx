import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import {scrollToSection} from "../../helpers";
import Button from "../Button/Button";
import "../../variables/variables.scss";
import {ReactComponent as IconLogo} from "../../assets/images/logo-bookmark.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="#" onClick={(event) => scrollToSection(event, "hero")}>
                            <IconLogo/>
                        </Link>
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
                            <li className="header__nav-item">
                                <Button buttonColor="var(--color-light-red)">LOGIN</Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;