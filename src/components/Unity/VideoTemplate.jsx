import React, { Component } from "react";

class VideoTemplate extends Component {
  render() {
    return (
      <div>
        <div class="unityCard" style={{ display: this.props.display }}>
          <h1 style={{ color: "white" }}>{this.props.title1}</h1>
          <div class="unityCardMiddle">
            <a href={this.props.link1}>
              <video
                alt="Video from Gyazo"
                width="920"
                autoplay
                muted
                loop
                playsinline
                controls
                id="vidBox"
              >
                <source src={this.props.src1} type="video/mp4" />
              </video>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoTemplate;
