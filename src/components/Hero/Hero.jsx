import React from 'react';
import "./Hero.scss"
import Button from "../Button/Button";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero__container">
                <div className="hero__inner">
                    <div className="hero__left">
                        <h1 className="hero__title title">
                            A simple bookmark manager
                        </h1>

                        <p className="hero__text text">
                            A clean and simple interface to organize your favourite websites.
                            Open a new browser tab and see your sites load instantly.
                            Try it for free.
                        </p>

                        <div className="hero__buttons">
                            <Button buttonColor="var(--color-light-blue)">Get it on Chrome</Button>
                            <Button buttonColor="var(--color-light-gray)">Get it on Firefox</Button>
                        </div>
                    </div>
                    <div className="hero__right">
                        <img src='assets/images/illustration-hero.svg' alt='hero'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;