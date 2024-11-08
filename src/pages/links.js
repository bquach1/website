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
  max-width: 400px;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const ScrollableDescription = styled(Typography)`
  max-height: 80px; /* Adjusted height for better visual balance */
  overflow-y: auto;
  color: #555;
`;

const AccordionContainer = styled(Accordion)`
  width: 100%;
  box-shadow: none;
  border-top: 1px solid #ddd; /* Subtle border for separation */
  &:first-of-type {
    border-top: none;
  }
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
      projectDetails:
        "Spring 2022; entry for a local hackathon with prompt to create a mental well-being app for college students. Novice skill level project.",
    },
    {
      title: "SoundBytes",
      href: "https://notify-soundbytes.web.app/",
      imgSrc: require("./images/soundbytes.png"),
      description:
        "SoundBytes is a sound-based social media app created as a class project. It features sound uploads, social interactions, and search functionality.",
      techDetails: "TypeScript, Firebase",
      projectDetails:
        "Spring 2022; object-oriented programming class semester project. Mostly involved with backend work in TypeScript.",
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
                height="180" /* Adjusted height for mobile optimization */
                image={project.imgSrc}
                alt={project.title}
              />
            </a>
            <CardContent>
              <a href={project.href} target="_blank" rel="noreferrer">
                <StyledTitle>{project.title}</StyledTitle>
              </a>
              <ScrollableDescription variant="body2" color="text.secondary">
                {project.description}
              </ScrollableDescription>
            </CardContent>
            <AccordionContainer>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LaptopIcon />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    Tech Stack
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="caption" color="text.secondary">
                  {project.techDetails}
                </Typography>
              </AccordionDetails>
            </AccordionContainer>
            <AccordionContainer>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InfoIcon />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    Project Details
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="caption" color="text.secondary">
                  {project.projectDetails}
                </Typography>
              </AccordionDetails>
            </AccordionContainer>
          </StyledCard>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default Links;
