import React, { Fragment, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import classes from "../CSS/NavBar.module.css";

const NavBar = () => {
    const [navActive, setNavActive] = useState(false);

    const changeNavBackground = () => {
        if (window.scrollY >= 300) {
            setNavActive(true);
        } else {
            setNavActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBackground);

        return () => {
            window.removeEventListener("scroll", changeNavBackground);
        };
    }, [window.scrollY]);
    return (
        <Fragment>
            <Navbar
                fixed="top"
                className={
                    navActive
                        ? `${classes.nav} ${classes.active}`
                        : `${classes.nav}`
                }
            >
                <Container className="justify-content-center">
                    <Nav>
                        <Navbar.Brand
                            className={classes.ecoBrand}
                            href="#landing"
                        >
                            Ecosystem
                        </Navbar.Brand>
                        <Nav.Link href="#overview">Overview</Nav.Link>
                        <Nav.Link href="#timeline">Timeline</Nav.Link>
                        <Nav.Link href="#participants">Participants</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default NavBar;
