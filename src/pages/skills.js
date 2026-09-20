import SkillMap from "../components/skills/skillmap";
import styled from "styled-components";
import ExperienceTimeline from "../components/skills/timeline";
import PdfViewer from "../components/skills/pdfResume";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1f1f1f;
  min-height: 100vh;
  width: 100%;
  padding: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 80px 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const PageLabel = styled.div`
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: #c9956e;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #f5f1ed;
  margin-bottom: 60px;
  letter-spacing: -1px;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <Container>
        <PageLabel>Skills & Résumé</PageLabel>
        <PageTitle>Craft & Capability</PageTitle>
        <PdfViewer />
        <SkillMap />
        <ExperienceTimeline />
      </Container>
    </SkillsWrapper>
  );
};

export default Skills;
