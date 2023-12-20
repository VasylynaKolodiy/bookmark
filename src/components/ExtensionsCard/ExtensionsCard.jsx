import React from 'react';
import "./ExtensionsCard.scss"
import Button from "../Button/Button";

const ExtensionsCard = ({extension}) => {
    const {name, imgUrl, version, address} = extension;

    return (
        <article className="card">
            <div className="card__image">
                <img src={imgUrl} alt="Browser logo"/>
            </div>

            <div className="card__info">
                <h4 className="card__title">Add to {name}</h4>
                <p className="card__version text">Minimum version {version}</p>
            </div>

            <div className="card__dots">
                <img
                    className="card__dots"
                    src="assets/images/bg-dots.svg"
                    alt="Dots"
                />
            </div>

            <a href={address} target="_blank">
                <Button buttonColor="var(--color-light-blue)">
                    Add & Install Extension
                </Button>
            </a>
        </article>
    );
};

export default ExtensionsCard;