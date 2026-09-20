import React from "react";
import styled from "styled-components";
import { IconButton, Box } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { ReactComponent as DevPost } from "../assets/devpost.svg";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1f1f1f;
  font-family: "Poppins", sans-serif;
  color: #f5f1ed;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 80px 40px;
`;

const Section = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionLabel = styled.div`
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: #c9956e;
  font-weight: 600;
  text-transform: uppercase;
`;

const ContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: #f5f1ed;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #b3aba3;
    margin-bottom: 15px;

    a {
      color: #c9956e;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        color: #a8d5a8;
      }
    }
  }
`;

const ImageContent = styled.div`
  flex-shrink: 0;

  img {
    width: 280px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(201, 149, 110, 0.2);
    border: 2px solid rgba(201, 149, 110, 0.3);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  a {
    color: #b3aba3;
    transition: color 0.3s;
    display: flex;
    align-items: center;

    &:hover {
      color: #c9956e;
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        {/* Intro Section */}
        <Section>
          <SectionLabel>Who I Am</SectionLabel>
          <ContentRow>
            <TextContent>
              <h2>Hi, I'm Bruce</h2>
              <p>
                I'm a passionate software developer with a keen interest in
                building scalable and efficient applications. I love solving
                complex problems and collaborating in teams to deliver
                high-quality products. I'm always open to working with new
                technologies and contributing to fun and/or useful projects.
              </p>
            </TextContent>
            <ImageContent>
              <img src={require("../assets/profile_pic.png")} alt="Bruce PFP" />
            </ImageContent>
          </ContentRow>
        </Section>

        {/* About Section */}
        <Section>
          <SectionLabel>Current Focus</SectionLabel>
          <ContentRow>
            <TextContent>
              <h2>About Me</h2>
              <p>
                I'm currently at PMG as an AI & Software Engineer II working on
                the Data pillar, focused on frontend development for proprietary
                marketing tech. I graduated from Louisiana State University in
                May 2024 with a Bachelor's in Computer Science concentrating in
                software engineering, as well as minors in mathematics and
                Chinese.
              </p>
            </TextContent>
            <ImageContent>
              <img src={require("../assets/pmg_logo.png")} alt="PMG Logo" />
            </ImageContent>
          </ContentRow>
        </Section>

        {/* Fun Section */}
        <Section>
          <SectionLabel>When I'm Not Coding</SectionLabel>
          <ContentRow>
            <TextContent>
              <h2>Fun Stuff</h2>
              <p>
                I'm a big foodie, fan of Snoopy and pandas, and enjoy collecting
                and playing trading card games (namely One Piece, Riftbound, and
                Pokemon). In my free time, I like reviewing food on my{" "}
                <a
                  href="https://www.instagram.com/master_of_flavors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>{" "}
                and posting{" "}
                <a
                  href="https://www.instagram.com/master_of_rips/"
                  target="_blank"
                  rel="noreferrer"
                >
                  trading card content
                </a>{" "}
                (feel free to follow). I enjoy tracking the NBA, watching shows
                and gaming in addition to making projects.
              </p>
            </TextContent>
            <ImageContent>
              <img
                src={require("../assets/pickleball_snoopy.png")}
                alt="Pickleball Snoopy"
              />
            </ImageContent>
          </ContentRow>
        </Section>

        {/* Social Links */}
        <Box
          sx={{
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(201, 149, 110, 0.2)",
          }}
        >
          <SocialIcons>
            <a
              href="https://github.com/bquach1"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/bruce-quach/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://devpost.com/bquach1"
              target="_blank"
              rel="noreferrer"
            >
              <DevPost style={{ width: 28, height: 28 }} />
            </a>
          </SocialIcons>
        </Box>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
