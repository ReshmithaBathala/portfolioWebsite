// About.js (similar for other components)
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <img
        src="https://imagetolink.com/ib/pQM1HWIMSr.png"
        alt="gesture"
        className="hand"
      />
      <div>
        <h1>This is it. ;)</h1>
        <p>
          Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with
          a passion for designing beautiful and fuctional user experiences.
          Typically, he’s Driven & permanently Curious. He’s obsessed with
          designing things and even more obsessed with designing cool & clean
          stuff for the web and mobile. He has been in the business of creating
          since he hung his first painting on the wall when he was 11. He holds
          a bachelor degree in Computer Applications. During his graduation, he
          has been actively involved in the web design community for the last 3
          years. he has designed websites for small businesses, events,
          nonprofits and more. Currently he’s based in Bihar, India. Where he’s
          working as an independent creative. His interests, however, extend
          beyond the web and he loves helping people with branding and print
          design. He even loves designing 3D floor plan. When he’s not
          designing, he’s probably hanging out with his girlfriend, watching
          series, sketching or messing around on something inspired by YouTube
          tutorials.
        </p>
      </div>
      <img
        src="https://imagetolink.com/ib/ASbQyOgbkx.png"
        alt="vector3"
        className="curve"
      />
    </div>
  );
};

export default About;
