import React, {useEffect} from 'react';
import {featuresData} from "../Features/featuresData";
import TabPanelInfo from "../TabPanelInfo/TabPanelInfo";
import "./Modal.scss";
import {ReactComponent as IconClose} from "../../assets/images/icon-close.svg";

const Modal = ({isModalClose, setIsModalClose}) => {
    const feature = featuresData[2];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalClose(false);
        }, 30000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`modal ${isModalClose ? 'close' : ''}`}>
            <div className="modal__overflow" onClick={() => setIsModalClose(true)}/>
            <div className="modal__inner">
                <div className="modal__header">
                    <h2 className="modal__title title">Download The Extension</h2>
                    <div className="modal__close" onClick={() => setIsModalClose(true)}>
                        <IconClose/>
                    </div>
                </div>
                <TabPanelInfo feature={feature} setIsModalClose={setIsModalClose}/>
            </div>
        </div>
    );
};

export default Modal;