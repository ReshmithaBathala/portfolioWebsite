import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onClickResume = () => {
    navigate("/resume");
  };
  const onClickGetInTouch = () => {
    navigate("/contact");
  };
  return (
    <div className="content-container">
      <div className="profile-container-1">
        <img
          src="https://imagetolink.com/ib/817NlZlfXU.jpg"
          alt="profile"
          className="my-image"
        />
      </div>
      <div>
        <h1 className="hello-heading">Hello!</h1>
        <h1>
          I’m <span>Anish</span>
          <img
            src="https://i.pinimg.com/originals/c7/e9/48/c7e948d145620182b07dd4c9cba1178c.png"
            className="hi-emoji"
            alt="Hi"
          />
        </h1>
        <p>
          UI/UX Designer, Front-End Developer & Thinker.
          <br /> Based in India
        </p>
        <div>
          <button
            type="button"
            className="download-cv-button"
            onClick={onClickResume}
          >
            Download CV
          </button>

          <button
            type="button"
            className="get-in-touch-button"
            onClick={onClickGetInTouch}
          >
            Get In Touch
          </button>
        </div>
      </div>
      <div className="profile-container">
        <img
          src="https://imagetolink.com/ib/817NlZlfXU.jpg"
          alt="profile"
          className="my-image"
        />
      </div>
    </div>
  );
};

export default Home;
