import React, { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import EcoTimeline from "Assets/Data/EcoTimeline";
import classes from "../CSS/EcosystemTimeline.module.css";
const EcosystemTimeline = () => {
    const EcosystemTimeline = EcoTimeline.map((eco, index) => (
        <TimelineItem key={index}>
            <TimelineOppositeContent>
                <h4 className={classes.phase}>{eco.phase}</h4>
                <br></br>
                <Typography variant="p" component="span">
                    {eco.date}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                    sx={{
                        backgroundColor: "white",
                        width: "60px",
                        height: "60px",
                    }}
                >
                    <img
                        src={eco.logo}
                        alt={eco.id}
                        className={classes.iconPlacement}
                    />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            {eco.projects.map((project, index) => (
                <TimelineContent key={index} sx={{ py: "12px", px: 2 }}>
                    <h4 className={classes.projectTitle}>{project.title}</h4>
                    <ul>
                        {project.desc.map((d, index) => (
                            <li key={index}>{d}</li>
                        ))}
                    </ul>
                </TimelineContent>
            ))}
        </TimelineItem>
    ));
    return (
        <Fragment>
            <div id="timeline" className={classes.timelineDiv}>
                <h1 className={classes.header_}>Ecosystem's Timeline</h1>
                <Timeline>{EcosystemTimeline}</Timeline>
            </div>
        </Fragment>
    );
};

export default EcosystemTimeline;
