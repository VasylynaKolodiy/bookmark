import React from 'react';
import "./Extensions.scss";
import {extensionsData} from "./extensionsData";
import ExtensionsCard from "../ExtensionsCard/ExtensionsCard";

const Extensions = () => {
    return (
        <section className="extensions" id="extensions">
            <div className="container">
                <div className="extensions__inner">
                    <div className="extensions__info info">
                        <h2 className="extensions__title title">
                            Download the extension
                        </h2>
                        <p className="extensions__text text">
                            We've got more browsers in the pipeline.
                            Please do let us know if you've got a favourite you'd like us to prioritize.
                        </p>
                    </div>

                    <div className="extensions__list">
                        {extensionsData.map((extension) => (
                            <ExtensionsCard extension={extension} key={extension.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extensions;