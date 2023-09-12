import React from "react";
import "../css/qualifications.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LocationOn from "@mui/icons-material/LocationOn";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";

const QualificationsWrapper = styled.div`
  .sub-list {
    margin-left: 5%;
  }
`;

const Qualifications = () => {
  return (
    <QualificationsWrapper className="experience">
      <h1 style={{ textAlign: "center" }}>Professional Experience</h1>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2020 - May 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Louisiana State University, Baton Rouge, LA, USA
          </h3>
          <p>B.S. Computer Science (Software Engineering), Minor in Chinese</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - August 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern -{" "}
            <a href="https://www.tesla.com/" target="_blank">
              Tesla
            </a>
          </h3>
          {/* <div className="vertical-timeline-element-title">
            <Tooltip title={"Hello"} placement="bottom-start">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                  backgroundColor: "rgba(232,231,244,1)",
                  width: "20%",
                  justifyContent: "center",
                  borderRadius: 5,
                  marginLeft: 5,
                }}
              >
                <LightbulbIcon style={{ color: "#A0816C", marginLeft: 5 }} />
                <div>Skills</div>
              </div>
            </Tooltip>
          </div> */}
          <div
            className="vertical-timeline-element-title"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <LocationOn style={{ color: "red", marginLeft: 5 }} />
            <h3 style={{ marginLeft: -8 }}>Fremont, CA</h3>
          </div>
          <ul className="sub-list">
            <li>
              Enhanced React.js tools built with Ant Design and D3.js used
              extensively by vehicle quality engineers.
            </li>
            <li>
              Improved application performance up to 90% with Redux.js to access
              extensive PostgreSQL enterprise data.
            </li>
            <li>
              Implemented Python ElementTree XML parsing for creation of Pandas
              dataframes uploaded to RESTful Django API endpoints, decreasing
              vehicle design file download times by up to 50% for graphical
              model construction.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2023 - May 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mobile App Development Intern -{" "}
            <a href="https://furtrieve.com/" target="_blank">
              Furtrieve
            </a>
          </h3>
          <div
            className="vertical-timeline-element-title"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <LocationOn style={{ color: "red", marginLeft: 5 }} />
            <h3 style={{ marginLeft: -8 }}>Fishers, IN (Remote)</h3>
          </div>
          <ul className="sub-list">
            <li>
              Developed React Native features for a social networking mobile
              application in Xcode.
            </li>
            <li>
              Augmented React.js security administration pages to monitor
              communications by fetching MongoDB user data.
            </li>
            <li>
              Implemented new community-based features through social posting
              and notification mechanisms.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - January 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web/Mobile App Developer Intern -{" "}
            <a href="https://sciquel.org/" target="_blank">
              SciQuel
            </a>
          </h3>
          <div
            className="vertical-timeline-element-title"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <LocationOn style={{ color: "red", marginLeft: 5 }} />
            <h3 style={{ marginLeft: -8 }}>Boston, MA (Remote)</h3>
          </div>
          <ul className="sub-list">
            <li>
              Designed the home feed page for a React Native science media
              mobile application utilizing Node.js API calls and collaboration
              with MongoDB developers to link to internal articles.
            </li>
            <li>
              Constructed 3+ mobile application and website pages with HTML,
              CSS, and React Native views.
            </li>
            <li>
              Optimized React Native state/prop usage for navigable,
              user-friendly pages and accessible content.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2022 - December 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Junior Associate -{" "}
            <a href="https://www.teamsparq.com/" target="_blank">
              Sparq
            </a>
          </h3>
          <div
            className="vertical-timeline-element-title"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <LocationOn style={{ color: "red", marginLeft: 5 }} />
            <h3 style={{ marginLeft: -8 }}>Baton Rouge, LA (Hybrid)</h3>
          </div>
          <ul className="sub-list">
            <li>
              Designed efficient, scalable Java web apps/API endpoints to
              increase client sourcing efficiency by up to 25%.
            </li>
            <li>
              Built functional backend systems using Spring Boot and mastery of
              the Agile software development lifecycle.
            </li>
            <li>
              Integrated JUnit testing and Spring Data JPA to develop responsive
              MySQL databases and React.js connections.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - August 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Intern -{" "}
            <a href="https://dxc.com/" target="_blank">
              DXC Technology
            </a>
          </h3>
          <div
            className="vertical-timeline-element-title"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <LocationOn style={{ color: "red", marginLeft: 5 }} />
            <h3 style={{ marginLeft: -8 }}>New Orleans, LA (Hybrid)</h3>
          </div>
          <ul className="sub-list">
            <li>
              Designed an ETL pipeline to consolidate data into an AWS
              relational database for machine learning queries.
            </li>
            <li>
              Automated data transformation with extensive Python scripts in AWS
              Lambda to increase weekly hiring manager efficiency in locating
              developers for client projects by up to 40%.
            </li>
            <li>
              Collaborated with frontend engineers to create Excel uploading
              mechanisms with React and Ionic components.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - August 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern -{" "}
            <a href="https://www.runatek.com/" target="_blank">
              Runatek
            </a>
          </h3>
          <div
            className="vertical-timeline-element-title"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <LocationOn style={{ color: "red", marginLeft: 5 }} />
            <h3 style={{ marginLeft: -8 }}>Dallas, TX (Remote)</h3>
          </div>
          <ul className="sub-list">
            <li>
              Built C++ Arduino code used in circuits communicating between
              React Native frontend GUI and medical devices.
            </li>
            <li>
              Enhanced web application GUI by reconstructing Python Tkinter
              interfaces in React Native.
            </li>
            <li>
              Led startup medical software projects and collaborated with
              product/material engineers to develop prototypes.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2021 - August 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer/Instructor -{" "}
            <a href="https://www.brbytes.org/" target="_blank">
              BRBytes @ LSU
            </a>
          </h3>
          <div
            className="vertical-timeline-element-title"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <LocationOn style={{ color: "red", marginLeft: 5 }} />
            <h3 style={{ marginLeft: -8 }}>Baton Rouge, LA</h3>
          </div>
          <ul className="sub-list">
            <li>
              Built web pages on an educational program website with the Dhall
              configuration language and Alpine.js.
            </li>
            <li>
              Updated UI information with HTML/CSS knowledge and a
              detail-oriented focus.
            </li>
            <li>
              Instructed Louisiana teachers for certifications in Cybersecurity,
              Computer Science, and other STEM courses.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </QualificationsWrapper>
  );
};

export default Qualifications;
