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
import { GitHub } from "@mui/icons-material";

const Wrapper = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  max-height: 80px;
  overflow-y: auto;
  color: #555;
`;

const AccordionContainer = styled(Accordion)`
  width: 100%;
  box-shadow: none;
  border-top: 1px solid #ddd;
  &:first-of-type {
    border-top: none;
  }
`;

const Links = () => {
  const projects = [
    {
      title: "Gus' Sonny Angel Collectors' Log",
      href: "https://gus-sonny-angels.onrender.com/",
      imgSrc: require("./images/gus-sonny-angels.png"),
      description:
        "Gus' Sonny Angel collection log is a fullstack web application made for a good friend of mine that helps users track their Sonny Angel figurine collection. It features Google OAuth authentication, wishlist/collection functionalities and hopes to expand to Smiski collections.",
      techDetails:
        "React.js, Redux, Flask, Styled Components, Render.com, Google OAuth, MongoDB, Mongoose, Material UI, Web Scraping",
      projectDetails:
        "Summer 2024; completed fullstack collection log functionalities; future implementations: Smiskis, complete authentication, unboxing simulations.",
      githubLink: "https://github.com/bquach1/gus-sonny-angels",
    },
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
      githubLink: "https://github.com/bquach1/project_proudme",
    },
    {
      title: "Psy-ki",
      href: "https://sasehack2023.onrender.com/",
      imgSrc: require("./images/psy-ki.png"),
      description:
        "Psy-Ki is a mental health assistance app that allows users to track their feelings and summaries about their days. It also uses GPT4 to provide chatbot functionalities focused around therapeutic advice, as well as feedback on how to improve themselves.",
      techDetails:
        "React.js, MongoDB, Flask, Ant Design, Material UI, OpenAI/GPT APIs",
      projectDetails:
        "Fall 2023; submission for the SASE (Society of Asian Scientists and Engineers) national convention hackathon surrounding mental wellness as a prompt.",
      githubLink: "https://github.com/bquach1/sasehack2023",
    },
    {
      title: "Sepsis Diagnosis Tool",
      href: "https://www.lsu.edu/winning-teams/2024-25/sepsis-diagnosis.php",
      imgSrc: require("./images/sepsis-diagnosis-tool.png"),
      description:
        "This sepsis diagnosis tool leverages LangChain and machine learning models to predict sepsis onset in patients using clinical data, aiming to support early diagnosis and improve patient outcomes. The proof of concept was developed in collaboration with critical care specialists at Our Lady of the Lake Medical Center in Baton Rouge, along with the medical diagnostics company Cytovale.",
      techDetails:
        "LLM Architecture/LangChain, Fine-Tuning Models, React.js, Flask",
      projectDetails:
        "Spring 2024 honors course project for LLM Application Development/Deployment; worked briefly on fullstack application but focused on refining fine-tuning model for patient data.",
      githubLink: "https://github.com/blakebollinger/sepsis-diagnosis",
    },
    {
      title: "Palate Passport",
      href: "https://www.projectproudme.com/",
      imgSrc: require("./images/palate-passport.png"),
      description:
        "Palate Passport is a fullstack web application submitted for a hackathon that has itinerary tracking and restaurant searching with the Yelp API to help users track their food adventures.",
      techDetails:
        "React.js, TypeScript, Redux, Yelp API, Material UI, SCSS, CORS Anywhere",
      projectDetails:
        "Fall 2023; mostly completed frontend functionality with itinerary tracking and Redux state persistence.",
      githubLink: "https://github.com/aaronchenghs/Code_Bros",
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
      githubLink: "https://github.com/bquach1/geaux-hack",
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
      githubLink: "https://github.com/Emmanuel747/Soundbytes",
    },
  ];

  return (
    <Wrapper>
      <h2 style={{ marginBottom: "2%" }}>Notable Projects</h2>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          "& > :nth-of-type(3n+1)": {
            // Adjust this according to the items per row
            marginLeft: 0,
          },
        }}
      >
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <a href={project.href} target="_blank" rel="noreferrer">
              <CardMedia
                component="img"
                height="180"
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
            <AccordionContainer>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <GitHub />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    GitHub Link
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="caption" color="text.secondary">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    {project.githubLink}
                  </a>
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
