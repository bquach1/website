import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box, Paper, Chip, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const positions = [
    {
      title: "Software Engineer II",
      company: "PMG",
      location: "Dallas, TX",
      period: "June 2024 - Present",
      description: [
        "Led frontend architecture for a rule-based table visualization tool enabling self-service data categorization via SQL, reducing analyst workload by 15+ hours/week and supporting $2M+ in new client onboarding.",
        "Built scalable Node.js services with Cube.js and OpenAI’s responses/assistant APIs to streamline SQL generation via natural language, simplifying Redshift, BigQuery, and Snowflake data retrieval for 60+ clients.",
        "Developed an AI agent-driven dashboard app architecting visualizations using Highcharts JS, speeding digital marketers’ time to insights by 80% and reducing data analysts’ workload by 20+ hours weekly.",
        "Optimized React.js and Redux apps to reduce digital marketing report and chart generation time from ~8 seconds to ~4 seconds, achieving a 50% performance improvement for 10,000+ daily report requests.",
        "Redesigned dashboard applications with TypeScript and custom design systems, increasing user adoption 5x.",
      ],
    },
    {
      title: "Software Developer",
      company: "Timbalier Resources",
      location: "Baton Rouge, LA (Remote, Part-Time)",
      period: "November 2023 - Present",
      description: [
        "Architected React/TypeScript web dashboards with Bootstrap components, Highcharts visualizations, ArcGIS, and FEMA’s web APIs, helping local and state governments save up to $2 million in flood insurance premiums.",
        "Deployed Flask apps to AWS (Docker, EB, Cloudfront, and S3) to assess natural disaster risks in 100+ counties.",
        "Designed AWS/SQL database connections to cache community API data, decreasing load times by up to 90%.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Tesla",
      location: "Fremont, CA",
      period: "May 2023 - August 2023",
      description: [
        "Enhanced React.js tools built with Ant Design and D3.js to streamline vehicle quality engineer workflow, boosting Craftsmanship team efficiency and a projected $5 billion Cybertruck revenue.",
        "Designed Python ElementTree XML parsing to create Pandas DataFrames via Django endpoints, reducing vehicle design file download times from 15 minutes to 30 seconds (98% improvement) for graphical model construction.",
        "Improved application performance up to 80% with Redux.js to efficiently access PostgreSQL enterprise data.",
      ],
    },
    {
      title: "Software Development Junior Associate",
      company: "Sparq",
      location: "Baton Rouge, LA (Hybrid)",
      period: "August 2022 - December 2022",
      description: [
        "Developed scalable Java/Spring Boot application endpoints, improving internal scheduling efficiency by 25%.",
        "Built data access layers with Spring Data JPA supporting 15,000+ user records across MySQL and H2 databases.",
      ],
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1100px",
        margin: "auto",
        overflowX: "auto",
        px: { xs: 2, md: 3 },
        py: { xs: 3, md: 4 },
        borderRadius: 3,
        background:
          "linear-gradient(180deg, rgba(245,247,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { xs: "1.3rem", md: "1.7rem" },
          fontWeight: 700,
          mb: 0.5,
          color: "#1c2a4b",
        }}
      >
        Professional Timeline
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mb: 3,
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        Experience building scalable products, analytics platforms, and
        AI-driven workflows.
      </Typography>

      <Timeline
        position={isMobile ? "right" : "alternate"}
        sx={{
          p: 0,
          m: 0,
          [`& .MuiTimelineItem-root:before`]: {
            flex: isMobile ? 0 : 1,
            padding: isMobile ? 0 : "6px 16px",
          },
        }}
      >
        {positions.map((position, index) => (
          <TimelineItem key={index} sx={{ mb: 1.5 }}>
            <TimelineOppositeContent sx={{ mt: 1 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                {position.period}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color="primary"
                sx={{ boxShadow: "0 0 0 4px rgba(25, 118, 210, 0.12)" }}
              />
              {index < positions.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ textAlign: "left" }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 2.5,
                  border: "1px solid rgba(28, 42, 75, 0.1)",
                  backgroundColor: "#fff",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(17, 24, 39, 0.08)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#1b2b52",
                    lineHeight: 1.3,
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  {position.title}
                </Typography>
                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Chip
                    label={position.company}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      bgcolor: "rgba(25, 118, 210, 0.08)",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {position.location}
                  </Typography>
                </Box>

                <Box
                  component="ul"
                  sx={{
                    mt: 1.5,
                    mb: 0,
                    pl: 2,
                    pr: 0,
                    listStylePosition: "outside",
                    textAlign: "left",
                    "& li": {
                      mb: 1,
                      color: "#28364f",
                    },
                    "& li::marker": {
                      color: "#1976d2",
                    },
                  }}
                >
                  {position.description.map((desc, i) => (
                    <li key={i}>
                      <Typography variant="body2" sx={{ lineHeight: 1.55 }}>
                        {desc}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default ExperienceTimeline;
