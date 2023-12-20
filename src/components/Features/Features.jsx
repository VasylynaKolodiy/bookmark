import React, {useState} from 'react';
import "./Features.scss";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Tab} from "@mui/material";
import {featuresData} from "./featuresData";
import TabPanelInfo from "../TabPanelInfo/TabPanelInfo";

const Features = () => {

    const [value, setValue] = useState("0");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features__inner">

                    <div className="features__info info">
                        <h2 className="features__title title">
                            Features
                        </h2>

                        <p className="features__text text">
                            Our aim is to make it quick and easy for you to access your favourite websites.
                            Your bookmarks sync between your devices so you can access them on the go.
                        </p>
                    </div>
                </div>
            </div>

            <TabContext value={value}>
                <TabList onChange={handleChange}>
                    {featuresData.map((feature, index) => (
                        <Tab label={feature.title} value={index.toString()} key={feature.id}/>
                    ))}
                </TabList>
                <div className="tabpanel__container">
                    {featuresData.map((feature, index) => (
                        <TabPanel value={index.toString()} key={feature.id}>
                            <TabPanelInfo feature={feature}/>
                        </TabPanel>
                    ))}
                </div>
            </TabContext>
        </section>
    );
};

export default Features;