import SkillMap from "../components/skills/skillmap";
import styled from "styled-components";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <h2>Top Skills</h2>
      <SkillMap />
    </SkillsWrapper>
  );
};

export default Skills;
