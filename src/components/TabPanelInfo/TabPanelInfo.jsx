import React from 'react';
import "./TabPanelInfo.scss"
import Button from "../Button/Button";
import {scrollToSection} from "../../helpers";

const TabPanelInfo = ({feature, setIsModalClose = null}) => {

    const handlerButtonClick = (event) => {
        if (setIsModalClose) {
            setIsModalClose(true);
            setTimeout(() => {
                scrollToSection(event, "features");
            }, 500);
        } else {
            scrollToSection(event, "#");
        }
    }

    return (
        <div className="tabpanel__inner">
            <div className="tabpanel__left">
                <img src={feature.imgUrl} alt={feature.title}/>
            </div>

            <div className="tabpanel__right">
                <h3>{feature.subTitle}</h3>
                <p>{feature.description}</p>

                <Button
                    buttonColor="var(--color-light-blue)"
                    onClick={handlerButtonClick}
                >
                    More Info
                </Button>
            </div>
        </div>
    );
};

export default TabPanelInfo;