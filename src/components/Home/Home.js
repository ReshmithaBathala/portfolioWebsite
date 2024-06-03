import React from "react";
import "./Home.css";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  // const onClickResume = () => {
  //   navigate("/resume");
  //   // const cvPath = "../../Reshmitha_resume_updated.pdf"; //`/Reshmitha_CV.pdf`;f
  //   // const link = document.createElement("a");
  //   // link.href = cvPath;
  //   // link.setAttribute("download", "Reshmitha_resume_updated.pdf");
  //   // document.body.appendChild(link);
  //   // link.click();
  //   // document.body.removeChild(link);
  // };
  // const onClickGetInTouch = () => {
  //   navigate("/contact");
  // };
  return (
    <div className="content-container">
      {/* <div className="profile-container-1">
      </div> */}
      <div>
        <h1 className="hello-heading">Hello!</h1>
        <h1>
          I’m <span>Reshmitha</span>
          <img
            src="https://i.pinimg.com/originals/c7/e9/48/c7e948d145620182b07dd4c9cba1178c.png"
            className="hi-emoji"
            alt="Hi"
          />
        </h1>
        <p>
          Fullstack Developer.
          <br /> Based in India
        </p>
        {/* <div>
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
        </div> */}
      </div>
      <div className="profile-container">
        <img
          src="https://imagetolink.com/ib/M1SwUMtjwM.jpg"
          alt="profile"
          className="my-image"
        />
      </div>
    </div>
  );
};

export default Home;
