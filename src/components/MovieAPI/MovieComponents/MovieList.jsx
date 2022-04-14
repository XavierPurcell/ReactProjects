import React from "react";
import Movie from "./Movie.jsx";

const MoveList = (props) => {
  return (
    <div className="container">
      <div
        className="container2"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      >
        <div
          className="ui five column grid"
          style={{ maxWidth: "1400px", margin: "auto" }}
        >
          {props.movies.map((movie, i) => {
            return (
              <Movie
                key={i}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                image={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoveList;
