import React from 'react';
  
const Links = () => {
  return (
    <div class="wrapper">
      <h1 class="label">SoundBytes</h1>
       <a href ="https://notify-soundbytes.web.app/" target="_blank" rel="noreferrer">
       <embed type="image/png" src={require('./images/soundbytes.png')} width="100%" height="100%"></embed>  
       </a>  
       <p>
         A class project made in Spring 2022, SoundBytes is a 
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
    
  );
};
  
export default Links;