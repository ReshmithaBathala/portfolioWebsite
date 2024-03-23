import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { ThemeProvider } from "./ThemeContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === "light" ? "dark" : "light" });
  };

  render() {
    return (
      <ThemeProvider>
        <div className={`App ${this.state.theme}`}>
          <Header toggleTheme={this.toggleTheme} theme={this.state.theme} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <MainContent />
          <Footer toggleTheme={this.toggleTheme} theme={this.state.theme} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
