import React from "react";
import "../css/links.css";

const Links = () => {
  return (
    <div class="wrapper">
      <div class="project">
        <a
          href="https://www.projectproudme.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h1 class="label">
            Project ProudME (React.js, MongoDB, Node.js, Express.js)
          </h1>
        </a>
        <a
          href="https://www.projectproudme.com/"
          target="_blank"
          rel="noreferrer"
        >
          <embed
            type="image/png"
            src={require("./images/proudme_journal.png")}
            width="100%"
            height="100%"
            style={{
              borderRadius: 20,
              width: "90%",
              margin: "auto",
              display: "flex",
            }}
          ></embed>
        </a>
        <p>
          Project ProudME is a fullstack web application funded by Dr. Senlin
          Chen at LSU and his kinesiology lab. The goal of the website is for
          middle school-aged children to login and record their activity in four
          behaviors (physical exercise, screentime, eating fruits/vegetables,
          and sleep) and their own goals to combat obesity and improve youth
          lifestyles in Louisiana.
        </p>
        <p>
          This project increased my proficiency with React.js and working with
          MongoDB and API connections with Node.js/Express.js. It also required
          me to develop an entire fullstack app that needed to be fully
          functional for external student users after iterating through Figma
          designs. Aside from the base tech stack, I had to utilize Render.com
          for server/website hosting, Cloudflare for custom domain and DNS
          registration, bcrypt.js for password/account hashing and security,
          SendGrid API for email update/account confirmation functionalities,
          and Material UI for efficient and appealing UI tools.
        </p>
      </div>

      <div class="project">
        <a
          href="https://bquach1.github.io/geaux-hack/"
          target="_blank"
          rel="noreferrer"
        >
          <h1 class="label">
            Paws Your Day (Geaux Hack LSU Hackathon Spring 2022)
          </h1>
        </a>
        <a
          href="https://bquach1.github.io/geaux-hack/"
          target="_blank"
          rel="noreferrer"
        >
          <embed
            type="image/png"
            src={require("./images/geaux-hack.png")}
            width="100%"
            height="100%"
            style={{
              borderRadius: 20,
              width: "90%",
              margin: "auto",
              display: "flex",
            }}
          ></embed>
        </a>
        <p>
          Paws Your Day is a mental health assistance app that I was going to
          create with a team of 4-5 people for Geaux Hack, a hackathon at
          Louisiana State University hosted by the Society of Asian Scientists
          and Engineers at LSU. It was coded in React, HTML/CSS, and Sketch.js
          and Tone.js.
        </p>
        <p>
          The function of the app was to rate your physical wellness and sleep
          regularity on the home screen, and it would recommend you exercises
          and sleeping schedules based on those quantities. We were experiencing
          a learning process the whole time and hope to expand the project
          further.
        </p>
      </div>

      <div class="project">
        <a
          href="https://notify-soundbytes.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h1 class="label">SoundBytes (Spring 2022)</h1>
        </a>
        <a
          href="https://notify-soundbytes.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <embed
            type="image/png"
            src={require("./images/soundbytes.png")}
            width="100%"
            height="100%"
            style={{
              borderRadius: 20,
              width: "90%",
              margin: "auto",
              display: "flex",
            }}
          ></embed>
        </a>
        <p>
          A class project for an object-oriented design class, SoundBytes is a
          sound-based social media app that allows recording and uploading of
          sound files, multiple feeds and social interaction features, and basic
          search engine functionality.
        </p>
        <p>
          I mainly worked on the backend for this project and made the
          class/functions that built posts and connected them to the feeds,
          using TypeScript in conjunction with Firebase to achieve this.
        </p>
      </div>
    </div>
  );
};

export default Links;
