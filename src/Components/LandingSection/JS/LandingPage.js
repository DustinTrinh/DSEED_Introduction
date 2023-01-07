import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Button from 'react-bootstrap/Button';

import classes from "../CSS/LandingPage.module.css";
import landingPageBackground from "Assets/Images/landingPageBackground.svg";
import illu from "Assets/Images/PH_Test.svg";

const LandingPage = () => {
    return (
        <Fragment>
            <div
                id="landing"
                style={{ backgroundImage: `url(${landingPageBackground})` }}
                className={classes.bg}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <div className={classes.centeredContent}>
                            <h1>The Ecosystem</h1>
                            <p>
                                A long black shadow slid across the pavement
                                near their feet and the five Venusians, very
                                much startled, looked overhead. They were barely
                                in time to see the huge gray form of the
                                carnivore before it vanished behind a sign atop
                                a nearby building which bore the mystifying
                                information "Pepsi-Cola.
                            </p>
                            <Button variant="success">
                                Button as link
                            </Button>
                        </div>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        sm={6}
                        className={classes.illuGrid}
                    >
                        <img
                            src={illu}
                            alt="EcosystemIllustration"
                            className={classes.illustrationSizing}
                        />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
};

export default LandingPage;
