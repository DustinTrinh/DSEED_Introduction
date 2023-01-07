import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

import classes from "../CSS/Overview.module.css";
import CarouselData from "Assets/Data/CarouselData";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "animate.css/animate.min.css";

const OverviewCarousel = () => {
    const CarouselDisplay = CarouselData.map((info, index) => (
        <Carousel.Item key={index}>
            <img
                className={`${classes.carouselImg} d-block w-70`}
                src={info.img}
                alt={info.label}
            />
            <Carousel.Caption className={classes.carouselContent}>
                <h3 className={classes.carouselHeader}>{info.label}</h3>
                <p className={classes.carouselDesc}>{info.desc}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ));

    const label = "Nexty";
    const customNextIcon = (
        <span className={classes.nextIconStyling} aria-hidden="true"><SlArrowRight size={30}/> </span>
    );

    const customPrevIcon = (
        <span className={classes.prevIconStyling} aria-hidden="true"><SlArrowLeft size={30}/> </span>
    );

    return (
        <Fragment>
            <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOut="fadeOut"
                duration={1.5}
                delay={0}
            >
                <div id="overview" className={classes.overviewDiv}>
                    <h1 className={classes.header}>
                        Overview of Ecosystem's Products
                    </h1>
                    <Carousel
                        nextLabel={label}
                        nextIcon={customNextIcon}
                        prevIcon={customPrevIcon}
                        className={classes.carouselControl}
                    >
                        {CarouselDisplay}
                    </Carousel>
                </div>
            </AnimationOnScroll>
        </Fragment>
    );
};

export default OverviewCarousel;
