import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
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
  display: flex;
  flex-direction: column;
  background: var(--page-background);
  min-height: 100vh;
  width: 100%;
  padding: 0;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 40px 60px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 56px 20px 40px;
  }
`;

const PageLabel = styled.div`
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 50px;
  letter-spacing: -1px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  gap: 40px;
  margin-bottom: 60px;
  width: 100%;
`;

const StyledCard = styled(Card)`
  max-width: 100%;
  min-width: 0;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--surface-border);
  background-color: var(--card-background);
  color: var(--text-on-surface);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 8px 24px rgba(226, 167, 125, 0.2);
    transform: translateY(-4px);
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 1.3em;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 10px;
`;

const ScrollableDescription = styled(Typography)`
  max-height: none;
  overflow-y: visible;
  color: var(--text-on-surface);
  line-height: 1.6;
`;

const AccordionContainer = styled(Accordion)`
  width: 100%;
  box-shadow: none;
  border-top: 1px solid rgba(226, 167, 125, 0.25);
  background-color: var(--card-background);
  &:first-of-type {
    border-top: none;
  }

  .MuiAccordionSummary-root {
    color: var(--text-on-surface);
  }

  .MuiAccordionDetails-root {
    color: var(--text-on-surface);
  }
`;

const StyledMedia = styled(CardMedia)`
  width: 100%;
  height: 220px;
  object-fit: contain;
  background: var(--page-background);

  @media (max-width: 600px) {
    height: 190px;
  }
`;

const Links = () => {
  const projects = [
    {
      title: "Repository of Rips",
      href: "https://repository-of-rips.vercel.app/",
      imgSrc:
        "https://public.getcollectr.com/public-assets/products/product_712743.jpg?optimizer=image&format=webp&width=1200&quality=80&strip=metadata",
      description:
        "Repository of Rips is a TCG portfolio tracker and spend analyzer for monitoring card collections, market value, profit and loss, and related spending across One Piece, Pokemon, and Riftbound.",
      techDetails: "React.js, JavaScript, Python, Plaid, Playwright, Vercel",
      projectDetails:
        "2026; built a card collection and financial tracking experience with Collectr portfolio exports and Chase, Venmo, and Zelle spend synchronization.",
      githubLink: "https://github.com/bquach1/repository_of_rips",
    },
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
      <Content>
        <PageLabel>Notable Projects</PageLabel>
        <PageTitle>Selected Work</PageTitle>

        <ProjectGrid>
          {projects.map((project, index) => (
            <StyledCard key={index}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <StyledMedia
                  component="img"
                  image={project.imgSrc}
                  alt={project.title}
                />
              </a>
              <CardContent
                sx={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <StyledTitle>{project.title}</StyledTitle>
                </a>
                <ScrollableDescription variant="body2">
                  {project.description}
                </ScrollableDescription>

                <div style={{ marginTop: "auto" }}>
                  <AccordionContainer>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel-content-${index}`}
                      id={`panel-header-${index}`}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <LaptopIcon sx={{ fontSize: "1.2rem" }} />
                        <Typography variant="body2">Tech Stack</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="caption">
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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <InfoIcon sx={{ fontSize: "1.2rem" }} />
                        <Typography variant="body2">Project Details</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="caption">
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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <GitHub sx={{ fontSize: "1.2rem" }} />
                        <Typography variant="body2">GitHub Link</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="caption">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#c9956e" }}
                        >
                          {project.githubLink}
                        </a>
                      </Typography>
                    </AccordionDetails>
                  </AccordionContainer>
                </div>
              </CardContent>
            </StyledCard>
          ))}
        </ProjectGrid>
      </Content>
    </Wrapper>
  );
};

export default Links;
