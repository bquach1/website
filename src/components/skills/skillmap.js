import React from "react";
import styled from "styled-components";
import { Box, Typography, Tooltip, Icon } from "@mui/material";
import { keyframes } from "styled-components";
import StarIcon from "@mui/icons-material/Star";

const skills = [
  { id: 1, name: "JavaScript", experience: "3 years" },
  { id: 2, name: "React", experience: "2 years" },
  { id: 3, name: "Node.js", experience: "2 years" },
  { id: 4, name: "TypeScript", experience: "1 year" },
  { id: 5, name: "Python", experience: "3 years" },
  { id: 6, name: "HTML/CSS", experience: "4 years" },
  { id: 7, name: "Redux", experience: "1.5 years" },
  { id: 8, name: "SQL", experience: "2 years" },
  { id: 9, name: "Git", experience: "3 years" },
  { id: 10, name: "Testing", experience: "1 year" },
];

const staggerAnimation = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;
  width: 80%;
  margin: auto;
  padding-top: 2%;
`;

const SkillItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${staggerAnimation} 0.5s ease forwards;
  &:hover {
    cursor: pointer;
    color: #66bb6a;
  }
`;

const SkillTooltipContent = styled.div`
  text-align: center;
`;

const SkillMap = () => {
  return (
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
          <SkillItem style={{ animationDelay: `${index * 0.1}s` }}>
            <Icon component={StarIcon} />
            <Typography variant="body1">{skill.id}</Typography>
          </SkillItem>
        </Tooltip>
      ))}
    </SkillsContainer>
  );
};

export default SkillMap;
