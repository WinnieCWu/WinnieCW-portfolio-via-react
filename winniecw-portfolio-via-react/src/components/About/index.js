import React from 'react';
import coverImage from '../../assets/cover-image.jpg';
import developerPhoto from '../../assets/developer-photo_10.jpg';

function About() {
  return (
    <section className="my-5">
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <img src ={developerPhoto} alt="developer photo"/>
        <p>
          Hi everyone! My name is Winnie Wu, and I am a soon-to-be UC Berkeley Extension Coding Bootcamp graduate starting 6/1/2022!<br></br>
          I really look forward to applying my newfound coding and development skills in the field, helping the world become a better place for all.<br></br>
          Prior to coding, I have been in both the healthcare and education sector, with a focus on preventative work so individuals can be equipped with resources and knowledge to excel and live a healthy lifestyle.<br></br>
          I hope to integrate my interests in both tech and preventative work!
        </p>
      </div>
    </section>
  );
}

export default About;