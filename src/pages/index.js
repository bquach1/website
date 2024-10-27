import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { ReactComponent as DevPost } from "../assets/devpost.svg";

const HomeWrapper = styled.div`
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
  font-family: "Roboto", sans-serif;
  color: #333;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  background-color: #f7f7f7;
  color: #333;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 2%;
`;

const LeftCard = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;

  div:first-child {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div:nth-child(2) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 200px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const IconFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Card>
        <LeftCard>
          <div>Hi, I'm Bruce</div>
          <div>
            I'm a passionate software developer with a keen interest in building
            scalable and efficient applications. I love solving complex problems
            and collaborating with teams to deliver high-quality products. I'm
            always open to working with new technologies and contributing to fun
            and/or useful projects.
          </div>
        </LeftCard>
        <ProfileImage
          src={require("../assets/profile_pic.png")}
          alt="Bruce PFP"
        />
      </Card>
      <Card>
        <LeftCard>
          <div>About Me</div>
          <div>
            I'm currently at PMG as a Software Engineer I working on the Data
            pillar, focused on frontend development for proprietary marketing
            tech. I graduated from Louisiana State University in May 2024 with a
            Bachelor's in Computer Science concentrating in software
            engineering, as well as minors in math and Chinese.
          </div>
        </LeftCard>
        <Image src={require("../assets/pmg_logo.png")} alt="PMG Logo" />
      </Card>
      <Card>
        <LeftCard>
          <div>Fun Stuff</div>
          <div>
            I'm a big fan of all things Snoopy and pandas. In my free time, I
            like reviewing food on my&nbsp;
            <a
              href="https://www.instagram.com/master_of_flavors/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            (feel free to request to follow). I enjoy tracking the NBA, watching
            shows and gaming in addition to making projects.
          </div>
        </LeftCard>
        <ProfileImage
          src={require("../assets/pickleball_snoopy.png")}
          alt="Pickleball Snoopy"
        />
      </Card>
      <IconFooter>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          rel="noreferrer"
        >
          <a href="https://github.com/bquach1" target="_blank">
            <GitHub />
          </a>
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <a
            href="https://www.linkedin.com/in/bruce-quach/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <a
            href="https://www.linkedin.com/in/bruce-quach/"
            target="_blank"
            rel="noreferrer"
          >
            <DevPost style={{ width: 25, height: 25 }} />
          </a>
        </IconButton>
      </IconFooter>
    </HomeWrapper>
  );
};

export default Home;
