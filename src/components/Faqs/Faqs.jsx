import React from 'react';
import "./Faqs.scss";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {ReactComponent as IconArrow} from "../../assets/images/icon-arrow.svg";
import {faqsData} from "./faqsData";
import Button from "../Button/Button";

const Faqs = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className="faqs">
            <div className="container">
                <div className="faqs__info info">
                    <h2 className="faqs__title title">
                        Frequently Asked Questions
                    </h2>
                    <p className="faqs__text text">
                        Here are some of our FAQs.
                        If you have any other questions you'd like answered please feel free to email us.
                    </p>
                </div>

                <div className="accordion">
                    {faqsData.map((question, index) => (
                        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}
                                   key={question.id}>
                            <AccordionSummary
                                expandIcon={<IconArrow/>}
                                id="panel1bh-header"
                            >
                                <div className='accordion__title'>{question.question}</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='accordion__text'>{question.answer}</div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <div className="info">
                    <Button buttonColor="var(--color-light-blue)">
                        More Info
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Faqs;