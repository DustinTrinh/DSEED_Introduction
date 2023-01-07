import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { BsBehance } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaReadme } from "react-icons/fa";
import "animate.css/animate.min.css";
import classes from "../CSS/Participants.module.css";
import dog from "Assets/Images/PH_cat.svg";
import dustin from "Assets/Images/dustin.svg";
import sherry from "Assets/Images/sherry.svg";

const Participants = () => {
    return (
        <Fragment>
            <div id="participants" className={classes.participantDiv}>
                <h1 className={classes.header_}>Participants</h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid spacing={8} container direction="row">
                        <Grid
                            className={classes.dustin}
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <AnimationOnScroll
                                animateIn="animate__bounceInLeft"
                                animateOut="fadeOut"
                                duration={1.5}
                                delay={0}
                            >
                                <Card style={{ width: "20rem" }}>
                                    <center>
                                        <Card.Img
                                            className={classes.avatar}
                                            variant="top"
                                            src={dustin}
                                        />
                                    </center>
                                    <Card.Body>
                                        <Card.Title
                                            className={classes.cardTitle}
                                        >
                                            Dustin Trinh
                                        </Card.Title>
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <ul>
                                                <li>Software Developer</li>
                                                <li>Project Manager</li>
                                                <li>Product Owner</li>
                                            </ul>
                                        </CardContent>
                                        <Stack
                                            alignItems="center"
                                            justifyContent="center"
                                            direction="row"
                                            spacing={3}
                                            className={classes.stackContent}
                                        >
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://dustintrinh.com"
                                            >
                                                <FaReadme size={35} />
                                            </a>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://github.com/DustinTrinh"
                                            >
                                                <FaGithub size={35} />
                                            </a>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.linkedin.com/in/dustin-trinh-263ba5140/"
                                            >
                                                <FaLinkedin size={35} />
                                            </a>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </AnimationOnScroll>
                        </Grid>
                        <Grid
                            className={classes.sherry}
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            container
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <AnimationOnScroll
                                animateIn="animate__bounceInRight"
                                animateOut="fadeOut"
                                duration={1.5}
                                delay={0}
                            >
                                <Card style={{ width: "20rem" }}>
                                    <center>
                                        <Card.Img
                                            className={classes.avatar}
                                            variant="top"
                                            src={sherry}
                                        />
                                    </center>
                                    <Card.Body>
                                        <Card.Title
                                            className={classes.cardTitle}
                                        >
                                            Sherry Nguyen
                                        </Card.Title>
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <ul>
                                                <li>UI/UX Designer</li>
                                                <li>Graphic Designer</li>
                                                <li>Product Owner</li>
                                            </ul>
                                        </CardContent>
                                        <Stack
                                            alignItems="center"
                                            justifyContent="center"
                                            direction="row"
                                            spacing={3}
                                            className={classes.stackContent}
                                        >
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.behance.net/sherryng_uiux"
                                            >
                                                <BsBehance size={35} />
                                            </a>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.linkedin.com/in/sherry-nguyen-180268245/"
                                            >
                                                <FaLinkedin size={35} />
                                            </a>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </AnimationOnScroll>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Fragment>
    );
};

export default Participants;
