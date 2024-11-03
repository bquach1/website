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
import styled from "styled-components";

const Wrapper = styled(Box)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  max-width: 345px;
  border-radius: 20px;
  margin: 20px;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const Links = () => {
  const projects = [
    {
      title: "Project ProudME",
      href: "https://www.projectproudme.com/",
      imgSrc: require("./images/proudme_journal.png"),
      description:
        "Project ProudME is a fullstack web application funded by Dr. Senlin Chen at LSU and his kinesiology lab. It helps middle school-aged children record activities to combat obesity.",
      techDetails:
        "React.js, MongoDB, Node.js/Express.js, Render.com, Cloudflare, bcrypt.js, SendGrid API, Material UI.",
    },
    {
      title: "Paws Your Day",
      href: "https://bquach1.github.io/geaux-hack/",
      imgSrc: require("./images/geaux-hack.png"),
      description:
        "Paws Your Day is a mental health assistance app built during Geaux Hack at LSU in Spring 2022. It provides wellness ratings and suggests exercises and sleep schedules.",
      techDetails: "React, HTML/CSS, Sketch.js, Tone.js.",
    },
    {
      title: "SoundBytes",
      href: "https://notify-soundbytes.web.app/",
      imgSrc: require("./images/soundbytes.png"),
      description:
        "SoundBytes is a sound-based social media app created as a class project. It features sound uploads, social interactions, and search functionality.",
      techDetails: "TypeScript, Firebase.",
    },
  ];

  return (
    <Wrapper>
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
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-content-${index}`}
                  id={`panel-header-${index}`}
                >
                  <Typography variant="body2" color="text.secondary">
                    Tech Stack
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" color="text.secondary">
                    {project.techDetails}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </StyledCard>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default Links;
