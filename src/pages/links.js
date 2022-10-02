import React from 'react';
import '../css/links.css';
  
const Links = () => {
  return (
    <div class="wrapper">

      <div class="project">
        <h1 class="label">Paws Your Day (Geaux Hack LSU Hackathon)</h1>
        {/* <a href ="https://notify-soundbytes.web.app/" target="_blank" rel="noreferrer">
        <embed type="image/png" src={require('./images/soundbytes.png')} width="100%" height="100%"></embed>  
        </a>   */}
        <p>
          Paws Your Day is a mental health assistance app that I was going
          to create with a team of 4-5 people for Geaux Hack, a hackathon at
          Louisiana State University hosted by the Society of Asian Scientists
          and Engineers at LSU. It was coded in React, HTML/CSS, and Sketch.js
          and Tone.js.
        </p>
        <p>
          The function of the app was to rate your physical wellness and sleep
          regularity on the home screen, and it would recommend you exercises and
          sleeping schedules based on those quantities. We were experiencing a
          learning process the whole time and hope to expand the project further.
        </p>
      </div>

      <div class="project">
        <h1 class="label">SoundBytes (Spring 2022)</h1>
        <a href ="https://notify-soundbytes.web.app/" target="_blank" rel="noreferrer">
        <embed type="image/png" src={require('./images/soundbytes.png')} width="100%" height="100%"></embed>  
        </a>  
        <p>
          A class project for an object-oriented design class, SoundBytes is a 
          sound-based social media app that allows recording and uploading
          of sound files, multiple feeds and social interaction features,
          and basic search engine functionality.
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