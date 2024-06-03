import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div>
        <h1>B Reshmitha</h1>
        <p>
          Address: Andhra Pradesh,
          <br /> India Email: reshmithabathala26@gmail.com
        </p>
        <h1>Summary:</h1>
        <p>
          Hello! I’m Reshmitha Bathala, a Full-stack Developer based in Andhra
          Pradesh, India. I'm pursuing a B.Tech in Computer Science Engineering
          from Jawaharlal Nehru Technological University, Ananthapur, and an
          industry-ready certification in Full-stack Development from Nxtwave.
          With expertise in frontend and backend technologies, I have built
          various web applications, including e-commerce platforms and job
          search tools, demonstrating my skills in creating user-friendly and
          secure solutions. I'm eager to contribute to impactful projects and
          collaborate with innovative teams.
        </p>
        <h1>Education</h1>
        <ul>
          <li>
            Jawaharlal Nehru Technological University,Ananthapur
            <br />
            <span> 2021- 2025</span>
            <br />
            <span>
              BTech (Bachelor of Technology)_Computer Science Engineering (CSE)
            </span>
          </li>
          <li>
            Narayana junior college, Tirupati
            <br />
            <span> 2019- 2021</span>
            <br />
            <span>Intermediate_MPC (98.7%)</span>
          </li>
          <li>
            Vijayavani Residential School(ICSE),, chowdepalli, chittoor district
            <br />
            <span> 2018- 2019</span>
            <br />
            <span>Secondary School Of Certificate (92.67%)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
