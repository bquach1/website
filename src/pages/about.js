import React from "react";
  
const About = () => {
  return (
    <div style={styles.wrapper} class="wrapper">
      <img style={styles.profilePicture} src={require('./images/personal_picture.jpg')} alt="Headshot"/>
      <h1>
        Greetings!
      </h1>
        <p>
          Hi, I'm Bruce. I'm a junior computer science student at 
          Louisiana State University.
        </p>
      <h1>
        Who I Am
      </h1>
        <p>
          Aside from completing two years at LSU studying software engineering,
          I'm also a Software Development Junior Associate at Rural Sourcing, Inc.
          in the Baton Rouge development center, a web development intern at
          SciQuel, a science media project and startup, and a senior student
          worker at LSU IT Services. I'm always looking to expand my project
          horizons and learn new skills.
        </p>  
      <h1>
        My Qualifications and Professional Interests
      </h1>
        <p>
          I have a good deal of front-end development and some back-end
          development experiences from classwork and student worker experiences.
          I've also completed an internship in summer 2022 at DXC Technology, 
          a software consulting company in New Orleans, LA, working with AWS and
          MySQL databases to perform data ETL services, as well as a summer 2022 internship at
          Runatek, a medtech startup in Dallas, Texas, working with React Native, Arduino
          code, and materials to work towards creating useful and beneficial medical devices.
          I'm working towards acquiring a software engineering degree, so I'm 
          primarily interested in that field. I really like working with UI/UX development 
          and learning more about web API and framework development, though. Please see 
          "Contact" info if interested in working with me, as I'm always willing 
          to work with new people and learn more about software, web development,
          and other subjects!
        </p>
      <h1>
        Some Fun Facts
      </h1>
        <p>
          I really like listening to K-Pop and watching anime and K-Dramas.
          My favorite anime right now are probably Bleach, Black Clover,
          and Bungo Stray Dogs. I'm always willing to watch and listen to
          new things!
        </p>
      <h1>
        Why I Made This Website
      </h1>
        <p>
          This website is one of my first real solo web development
          projects that I'm developing, and I hope to use it as 
          a personal website. 
        </p>
    </div>
  );
};
  
export default About;

let styles = {
  profilePicture: {
    borderRadius: 15,
    width: 500,
    height: 'auto'
  },
  wrapper: {
    width: '50%',
    margin: 'auto',
  }
}