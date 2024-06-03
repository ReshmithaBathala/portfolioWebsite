import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects-container">
      <div>
        <h1>Projects</h1>
        <h2>Nxt Trendz (ECommerce Clone)</h2>
        <a href="http://nxttrenresh.ccbp.tech/" className="project-link">
          Project link
        </a>
        <p>
          Nxt Trendz is an innovative e-commerce platform patterned after Amazon
          and Flipkart. I designed pages for login, products, and product
          details using React Router and React components. The project ensures
          user security through JWT tokens, REST API calls, and local storage,
          providing a seamless and secure shopping experience.
        </p>

        <h2>Jobby App</h2>
        <a href="http://jobbyappresh.ccbp.tech/" className="project-link">
          Project link
        </a>
        <p>
          Jobby App is a comprehensive job search platform. I built pages for
          login, home, jobs, and job item details using React components, form
          inputs, and event handlers. The app ensures secure authentication with
          JWT tokens and REST API calls, and it maintains login state
          persistence and protected routes with React Router.
        </p>

        <h2>Todos Application</h2>
        <a
          href="https://github.com/ReshmithaBathala/foodhunch"
          className="project-link"
        >
          Project link
        </a>
        <p>
          The Todos Application is a productivity tool designed for efficient
          task management. I created a user-friendly interface using HTML, CSS,
          and Bootstrap, enabling effortless task management with
          JavaScript-based CRUD operations and dynamic UI updates. Tasks are
          securely stored using local storage methods to ensure persistence.
        </p>
      </div>
    </div>
  );
};

export default Projects;
