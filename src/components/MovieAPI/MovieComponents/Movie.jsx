//import React, { Component } from "react";

const Movie = (props) => {
  return (
    <div className="column">
      <div
        className="card"
        style={{ padding: "5px", backgroundColor: "white" }}
      >
        <div className="">
          {props.image == null ? (
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
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + props.image
              }
              alt="card"
              style={{ width: "100%", height: 360 }}
            />
          )}
        </div>
        <div className="card-content">
          <p>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                border: "0px",
                color: "blue",
              }}
              onClick={() => {
                props.viewMovieInfo(props.movieId);
                // console.log(props);
                //console.log(viewMovieInfo)
              }}
            >
              View Details
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
