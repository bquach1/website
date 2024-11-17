import SkillMap from "../components/skills/skillmap";
import styled from "styled-components";
import ExperienceTimeline from "../components/skills/timeline";
import PdfViewer from "../components/skills/pdfResume";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-top: 2%;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <PdfViewer />
      <SkillMap />
      <ExperienceTimeline />
    </SkillsWrapper>
  );
};

export default Skills;
