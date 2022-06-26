import React, { Component } from "react";
import "../../Style/unity.css"; //.. ===1 ===2
import ScrollThrough, { leftButton, rightButton } from "./SlideFunctions.jsx";

import VideoTemplate from "./VideoTemplate.jsx";

class UnityManager extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    document.title = "Unity Projects";
  }

  rightB() {
    const animationHolder = rightButton();
  }

  leftB() {
    const left = leftButton();
  }

  render() {
    return (
      <div className="container" style={{ minHeight: "90vh" }}>
        <h4 style={{ color: "white", paddingTop: "50px" }}>
          Some basic 2D mechanics I've implemented. Most of the effects aren't
          very polished been more concerned with just making things work.
        </h4>
        <VideoTemplate
          title1={"Water Effect"}
          display="block"
          link1={"https://gyazo.com/6f0b4843a35d9e9bc873834138f506e7"}
          src1={"https://i.gyazo.com/6f0b4843a35d9e9bc873834138f506e7.mp4"}
        />

        <VideoTemplate
          title1={"Dash Effect + UI"}
          display="none"
          link1={"https://gyazo.com/eebf8899ed544a594a13026ee6518eda"}
          src1={"https://i.gyazo.com/eebf8899ed544a594a13026ee6518eda.mp4"}
        />

        <VideoTemplate
          title1={"Lightning Effect"}
          display="none"
          link1={"https://gyazo.com/3106041ee379747640550dc5eac36b38"}
          src1={"https://i.gyazo.com/3106041ee379747640550dc5eac36b38.mp4"}
        />

        <VideoTemplate
          title1={"Fire Effect"}
          display="none"
          link1={"https://gyazo.com/f06231dc9ca1497785413492e1fb0178"}
          src1={"https://i.gyazo.com/f06231dc9ca1497785413492e1fb0178.mp4"}
        />

        <VideoTemplate
          title1={"Light Effect"}
          display="none"
          link1={"https://gyazo.com/45d2df5781e9bb4ff67def58f7609d4e"}
          src1={"https://i.gyazo.com/45d2df5781e9bb4ff67def58f7609d4e.mp4"}
        />

        <VideoTemplate
          title1={"Tile Attack"}
          display="none"
          link1={"https://gyazo.com/3b654ab210aff608d9cd0180fad21017"}
          src1={"https://i.gyazo.com/3b654ab210aff608d9cd0180fad21017.mp4"}
        />

        <VideoTemplate
          title1={"Unfinished Tile Attack"}
          display="none"
          link1={"https://gyazo.com/bd262878a22a5a8689c68b8165220123"}
          src1={"https://i.gyazo.com/bd262878a22a5a8689c68b8165220123.mp4"}
        />

        <VideoTemplate
          title1={"Trigonometry Movement"}
          display="none"
          link1={"https://gyazo.com/13c7a26642eae310c5b3b6d39418088c"}
          src1={"https://i.gyazo.com/13c7a26642eae310c5b3b6d39418088c.mp4"}
        />

        <VideoTemplate
          title1={"Boomerang + Bow"}
          display="none"
          link1={"https://gyazo.com/ed8954c99a1ea85c881b86de30488574"}
          src1={"https://i.gyazo.com/ed8954c99a1ea85c881b86de30488574.mp4"}
        />

        <VideoTemplate
          title1={"Simple Enemy Walk + Swing"}
          display="none"
          link1={"https://gyazo.com/3ac5336e7147f059bf8b919d34bd146c"}
          src1={"https://i.gyazo.com/3ac5336e7147f059bf8b919d34bd146c.mp4"}
        />

        <VideoTemplate
          title1={"Sword Swing With Trigonometry"}
          display="none"
          link1={"https://gyazo.com/74be24c66b5877137069f5b5bc402a33"}
          src1={"https://i.gyazo.com/74be24c66b5877137069f5b5bc402a33.mp4"}
        />

        <div class="caraButtons">
          <button
            className="ui button"
            onClick={() => this.rightB()} //}  //this.Promise()
          >
            Previous
          </button>
          <button
            className="ui button"
            onClick={() => this.leftB()} //}  //this.Promise()
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default UnityManager;
