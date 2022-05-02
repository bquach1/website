import React from "react";
  
const About = () => {
  return (
    <div class="wrapper">
      <img src={require('./images/personal_profile.jpg')} alt="Headshot" width="500" height ="600"/>
      <h1>
        Greetings!
      </h1>
        <p>
          Hi, I'm Bruce. I'm a second year computer science student at 
          Louisiana State University.
        </p>
      <h1>
        Who I Am
      </h1>
        <p>
          I'm an incoming technical intern at DXC
          Technology in New Orleans for summer 2022 and member of 
          the SciQuel web development team.
        </p>  
      <h1>
        My Qualifications and Professional Interests
      </h1>
        <p>
          I have a good deal of front-end development and some back-end
          development experiences from classwork and student worker experiences.
          I'm working towards acquiring a CS degree with a concentration in
          software engineering, so I'm primarily interested in that field.
          I really like working with UI/UX development and learning more about
          web API and framework development, though. Please see "Contact" info 
          if interested in working with me, as I'm always willing 
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