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
import { Typography, Box } from "@mui/material";

const ExperienceTimeline = () => {
  const positions = [
    {
      title: "Software Engineer I",
      company: "PMG",
      location: "Dallas, TX",
      period: "June 2024 - Present",
      description: [
        "Enhanced React.js/Redux analytics applications to achieve a ~20% improvement in report retrieval speed.",
        "Streamlined insights visualizations with Tailwind CSS, Ant Design, and custom TypeScript components.",
        "Augmented AI-powered chatbot applications for SQL generation, reducing marketers’ workload by up to 80%.",
      ],
    },
    {
      title: "Software Developer",
      company: "Timbalier Resources",
      location: "Baton Rouge, LA (Remote, Part-Time)",
      period: "November 2023 - Present",
      description: [
        "Architected React/Bootstrap web dashboards with TypeScript and Highcharts.",
        "Deployed Esri ArcGIS-based tools and AWS Dockerized Flask apps for Elastic Beanstalk.",
        "Designed AWS/SQL connections to cache community API data, decreasing load times by up to 90%.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Tesla",
      location: "Fremont, CA",
      period: "May 2023 - August 2023",
      description: [
        "Enhanced React.js tools with Ant Design and D3.js, contributing to $5 billion Cybertruck revenue.",
        "Improved application performance up to 90% using Redux.js with PostgreSQL.",
        "Implemented Python ElementTree XML parsing for RESTful Django API endpoints.",
      ],
    },
    {
      title: "Software Development Junior Associate",
      company: "Sparq",
      location: "Baton Rouge, LA (Hybrid)",
      period: "August 2022 - December 2022",
      description: [
        "Engineered scalable Java web apps/REST API endpoints, increasing scheduling efficiency by 25%.",
        "Leveraged Spring Boot and Spring Data JPA for React.js interfaces.",
        "Integrated JUnit testing to decrease collaboration overhead up to 15%.",
      ],
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "auto",
        overflowX: "auto",
        padding: "20px",
      }}
    >
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        Recent Professional Timeline
      </Typography>
      <Timeline position="alternate">
        {positions.map((position, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {position.period}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < positions.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                {position.title}
              </Typography>
              <Typography variant="subtitle1">{position.company}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {position.location}
              </Typography>
              <ul
                style={{
                  padding: 0,
                  margin: "10px 0 0 0",
                  listStyleType: "circle",
                }}
              >
                {position.description.map((desc, i) => (
                  <li key={i} style={{ marginBottom: "5px" }}>
                    <Typography variant="body2">{desc}</Typography>
                  </li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default ExperienceTimeline;
