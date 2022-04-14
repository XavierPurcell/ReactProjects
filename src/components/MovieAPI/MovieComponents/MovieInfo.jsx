//import React, { Component } from "react";

const MovieInfo = (props) => {
  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="row" style={{ paddingTop: 50 }}>
          <i className="fa fas fa-arrow-left">
            <span
              onClick={props.closeMovieInfo}
              style={{
                cursor: "pointer",
                maxWidth: "800px",
                fontSize: "1.3em",
                marginRight: 725,
                marginLeft: "15px",
                color: "blue",
              }}
            >
              Go Back
            </span>
          </i>
        </div>
        <div
          className="ui two column grid"
          style={{ margin: "auto", maxWidth: "800px" }}
        >
          <div className="column">
            {props.currentMovie.poster_path == null ? (
              <img
                src={
                  "https://d2hqr1s9kfm9jo.cloudfront.net/production/images/sales_agents/17095/data.profile.?1577457456"
                }
                alt="card"
                style={{ width: "100%", height: 360 }}
              />
            ) : (
              <img
                src={
                  "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
                  props.currentMovie.poster_path
                }
                alt="card"
                style={{ width: "100%", height: 360 }}
              />
            )}
          </div>
          <div className="column" style={{}}>
            <div className="info-container" style={{ color: "white" }}>
              <p>{props.currentMovie.title}</p>
              <p>
                {props.currentMovie.release_date
                  .substring(7, 10)
                  .split("-")
                  .concat(props.currentMovie.release_date.substring(5, 7))
                  .concat(props.currentMovie.release_date.substring(0, 4))
                  .join("/")
                  .substring(1)}
              </p>
              <p> {props.currentMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
