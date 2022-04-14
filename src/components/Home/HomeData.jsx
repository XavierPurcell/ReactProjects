import React, { Component } from "react";

class HomeData extends Component {
  state = {};

  componentDidMount() {
    document.title = "Xavier Purcell's Portfolio";
  }

  render() {
    return (
      <div>
        <h1 style={{ paddingTop: "50px", color: "white" }}>Home</h1>
        <p
          style={{
            color: "white",
            paddingTop: "50px",
            fontSize: "20px",
            maxWidth: "920px",
            margin: "auto",
          }}
        >
          This is a GitHub Page I originally created to learn Javascript and
          React. Here you can find a few different projects I've created. I
          might change this site into a portfolio website in the future.
        </p>
        <p
          style={{
            color: "white",
            paddingTop: "25px",
            marginBottom: "0px",
            fontSize: "20px",
          }}
        >
          Most projects are proof of concepts rather than polished products.
          Haven't added any media queries so smaller screens/mobile won't work!
        </p>
        <p
          style={{
            color: "white",
            paddingTop: "25px",
            marginBottom: "0px",
            fontSize: "20px",
          }}
        >
          Click on the tabs at the top to visit the different projects. Use the
          buttons at the bottom to play around with them.
        </p>
        <p
          style={{
            color: "white",
            paddingTop: "25px",
            marginBottom: "0px",
            fontSize: "20px",
          }}
        >
          I've added an about section to see how it interacts with SEO.
        </p>
        <p
          style={{
            color: "white",
            paddingTop: "25px",
            marginBottom: "0px",
            fontSize: "20px",
          }}
        >
          Email: xpurcell@live.com
        </p>

        <h1 style={{ paddingTop: "250px", color: "white" }}>About</h1>
        <p
          style={{
            color: "white",
            paddingTop: "25px",
            marginBottom: "0px",
            fontSize: "16px",
            maxWidth: "920px",
            margin: "auto",
          }}
        >
          My name is Xavier Purcell, I'm a computer scientist. I have experience
          in game development and web development. I very much believe in the
          keep it simple, stupid! Principle.
        </p>
      </div>
    );
  }
}

export default HomeData;
