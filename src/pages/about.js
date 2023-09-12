import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div class="wrapper">
      <img
        style={styles.profilePicture}
        src={require("./images/personal_picture.jpg")}
        alt="Headshot"
      />
      <h1 class="header">Greetings!</h1>
      <p>
        Hi, I'm Bruce. I'm a senior student at Louisiana State University in
        Baton Rouge, currently studying computer science with a concentration in
        software engineering and a minor in Chinese. I'm excited and passionate
        about developing full-stack software systems and love contributing to
        all kinds of innovative and impactful software engineering solutions.
      </p>
      <h1 class="header">Who I Am</h1>
      <p>
        Aside from working on completing my bachelor's degree in computer
        science at LSU, I've also been actively working on a MERN stack web
        application to support an LSU professor's kinesiology research for a few
        months, and I'm also involved in research creating an Android app in
        Kotlin to monitor voice calls for mobile security.
      </p>
      <h1 class="header">My Qualifications and Professional Interests</h1>
      <p>
        I'm mostly focused on front-end development but have experiences working
        with multiple database architectures and machine learning models. I most
        recently completed a software engineering internship at Tesla in
        Fremont, CA, where I contributed to mechanical engineering auxiliary
        applications with advanced React.js and Redux.js frontend skills and
        Django/PostgreSQL database architecture. I've also completed internships
        at Sparq, working to increase software consulting efficiency on a
        scheduling app built in Spring Boot, MySQL, and React.js, as well as DXC
        Technology, a software consulting company in New Orleans, LA, working
        with AWS and MySQL databases to perform data ETL services, and Runatek,
        a medtech startup in Dallas, Texas, working with React Native, Arduino
        code, and materials to create marketable and beneficial medical devices.
        I'm primarily interested in fullstack or frontend roles, but am quite
        interested in exploring quantitative development, machine learning, and
        any innovative software engineering solutions. I really enjoy working
        with UI/UX development and learning more about web API and framework
        development. Please see "Contact" info if interested in working with me,
        as I'm always willing to work with new people and learn more about
        software, web development, and other subjects!
      </p>
      <h1 class="header">Some Fun Facts</h1>
      <p>
        I really enjoy watching anime; my favorite anime right now are probably
        Bleach, Black Clover, and Bungo Stray Dogs. I'm always willing to watch
        and listen to new things! I'm also a big foodie and enjoy posting on my
        food Instagram; I have some project ideas I've been working on related
        to bringing my software skills to the food industry.
      </p>
    </div>
  );
};

export default About;

let styles = {
  profilePicture: {
    borderRadius: 15,
    width: 500,
    height: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#DAC4F7",
  },
};
