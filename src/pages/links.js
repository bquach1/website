import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaptopIcon from "@mui/icons-material/Laptop";
import InfoIcon from "@mui/icons-material/Info";
import styled from "styled-components";

const Wrapper = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2%;
`;

const StyledCard = styled(Card)`
  max-width: 345px;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column; /* Make the card content stack vertically */
  height: 100%; /* Ensure the card takes full height */

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const FullWidthAccordion = styled(Accordion)`
  width: 100%;
  box-shadow: none;
`;

const Links = () => {
  const projects = [
    {
      title: "Project ProudME",
      href: "https://www.projectproudme.com/",
      imgSrc: require("./images/proudme_journal.png"),
      description:
        "Project ProudME is a fullstack web application funded by Dr. Senlin Chen at LSU and his kinesiology lab. It helps middle school-aged children record activities to combat obesity with an interactive journal, chart visualizations, and physical activity guides/curriculums.",
      techDetails:
        "React.js, MongoDB, Node.js/Express.js, Render.com, Cloudflare, bcrypt.js, SendGrid API, Material UI, Highcharts",
      projectDetails:
        "December 2022 - May 2024; independently completed fullstack web functionalities with UI/UX designer and project manager feedback.",
    },
    {
      title: "Paws Your Day",
      href: "https://bquach1.github.io/geaux-hack/",
      imgSrc: require("./images/geaux-hack.png"),
      description:
        "Paws Your Day is a mental health assistance app built during Geaux Hack at LSU. It provides wellness ratings and suggests exercises and sleep schedules.",
      techDetails: "React.js, HTML/CSS, Sketch.js, Tone.js",
    },
    {
      title: "SoundBytes",
      href: "https://notify-soundbytes.web.app/",
      imgSrc: require("./images/soundbytes.png"),
      description:
        "SoundBytes is a sound-based social media app created as a class project. It features sound uploads, social interactions, and search functionality.",
      techDetails: "TypeScript, Firebase",
    },
  ];

  return (
    <Wrapper>
      <h2 style={{ marginBottom: "2%" }}>Projects</h2>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <a href={project.href} target="_blank" rel="noreferrer">
              <CardMedia
                component="img"
                height="200"
                image={project.imgSrc}
                alt={project.title}
              />
            </a>
            <CardContent>
              <a href={project.href} target="_blank" rel="noreferrer">
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
              </a>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <FullWidthAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LaptopIcon />
                  <Typography variant="body2" color="text.secondary">
                    Tech Stack
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="caption" color="text.secondary">
                  {project.techDetails}
                </Typography>
              </AccordionDetails>
            </FullWidthAccordion>
            <FullWidthAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InfoIcon />
                  <Typography variant="body2" color="text.secondary">
                    Project Details
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="caption" color="text.secondary">
                  {project.projectDetails}
                </Typography>
              </AccordionDetails>
            </FullWidthAccordion>
          </StyledCard>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default Links;
