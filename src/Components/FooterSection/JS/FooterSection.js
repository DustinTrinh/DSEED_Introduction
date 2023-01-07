import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

import classes from "../CSS/FooterSection.module.css";

const FooterSection = () => {
    return (
        <Fragment>
            <footer className={classes.footerDiv}>
                <Grid className={classes.footerGrid} container spacing={2} justifyContent="flex-end">
                    <Grid className={classes.brandSocial} item xs={12} md={4} lg={4}>
                        <FaLinkedin size={60} />
                        <h2>Brand & Social</h2>
                        <Stack direction="row" spacing={2}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://google.ca"
                            >
                                <FaGoogle size={30} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://google.ca"
                            >
                                <FaGithub size={30} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://google.ca"
                            >
                                <FaLinkedin size={30} />
                            </a>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <h2>Quick Links</h2>
                        <Row>
                            <Col>
                                <a href="#overview">Overview</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="#timeline">Ecosystem's Timeline</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="#participants">Participants</a>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <h2 className={classes.newsletterHeader}>Newsletter</h2>
                        <InputGroup className={classes.emailInput} size="md">
                            <InputGroup.Text id="inputGroup-sizing-lg">
                                Email
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        <Button
                            className={classes.subscriptionButton}
                            variant="primary"
                        >
                            Keep Me Update!
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        className={classes.copyright}
                    >
                        <p>&copy; Copyright 2022</p>
                    </Grid>
                </Grid>
            </footer>
        </Fragment>
    );
};

export default FooterSection;
