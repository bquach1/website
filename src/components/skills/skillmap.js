import React from "react";
import styled from "styled-components";
import { Box, Typography, Tooltip } from "@mui/material";

import ReactIcon from "../../pages/images/react-svgrepo-com.svg";
import JavaScriptIcon from "../../pages/images/js-svgrepo-com.svg";
import PythonIcon from "../../pages/images/python-svgrepo-com.svg";
import TypeScriptIcon from "../../pages/images/typescript-svgrepo-com.svg";
import ReduxIcon from "../../pages/images/redux-svgrepo-com.svg";
import NodeIcon from "../../pages/images/nodejs-svgrepo-com.svg";
import MongoDBIcon from "../../pages/images/mongodb-svgrepo-com.svg";
import MySQLIcon from "../../pages/images/mysql-svgrepo-com.svg";
import PostgreSQLIcon from "../../pages/images/postgresql-svgrepo-com.svg";
import AWSIcon from "../../pages/images/aws-svgrepo-com.svg";
import JavaIcon from "../../pages/images/java-4-logo-svgrepo-com.svg";

// Skill data
const skills = [
  { id: 1, name: "React", experience: "4 years", icons: [ReactIcon] },
  { id: 2, name: "JavaScript", experience: "5 years", icons: [JavaScriptIcon] },
  { id: 3, name: "Python", experience: "6 years", icons: [PythonIcon] },
  { id: 4, name: "TypeScript", experience: "2 years", icons: [TypeScriptIcon] },
  { id: 5, name: "Redux", experience: "3 years", icons: [ReduxIcon] },
  {
    id: 6,
    name: "Node.js/Express.js",
    experience: "3 years",
    icons: [NodeIcon],
  },
  { id: 7, name: "MongoDB", experience: "1.5 years", icons: [MongoDBIcon] },
  {
    id: 8,
    name: "SQL DBs",
    experience: "2 years",
    icons: [MySQLIcon, PostgreSQLIcon],
  },
  { id: 9, name: "AWS", experience: "3 years", icons: [AWSIcon] },
  { id: 10, name: "Java", experience: "3 years", icons: [JavaIcon] },
];

// Styled components
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #ffffff, #f7f9fc);
  border-radius: 15px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
`;

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  padding-bottom: 20px;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
  width: 100%;
`;

const SkillItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #eeeeee;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-6px);
    box-shadow: 0px 8px 20px rgba(102, 187, 106, 0.5);
    border-color: #66bb6a;
  }
`;

const SkillText = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
  color: #555;
`;

const SkillIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const SkillTooltipContent = styled.div`
  text-align: center;
  font-size: 0.9rem;
`;

const SkillMap = () => {
  return (
    <SkillsWrapper>
      <Title variant="h5">Top Skills</Title>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Tooltip
            key={skill.id}
            title={
              <SkillTooltipContent>
                <Typography variant="body2" color="inherit">
                  {skill.name}
                </Typography>
                <Typography variant="caption" color="inherit">
                  {skill.experience}
                </Typography>
              </SkillTooltipContent>
            }
            arrow
            placement="top"
          >
            <SkillItem>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <SkillText>
                  {index + 1}. {skill.name}
                </SkillText>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                {skill.icons.map((icon, idx) => (
                  <SkillIcon key={idx} src={icon} alt={`${skill.name} icon`} />
                ))}
              </div>
            </SkillItem>
          </Tooltip>
        ))}
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default SkillMap;
