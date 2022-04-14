import React, { Component } from "react";
import SearchArea from "./MovieComponents/SearchArea.jsx";
import MovieList from "./MovieComponents/MovieList.jsx";
import MovieInfo from "./MovieComponents/MovieInfo.jsx";

import Pagination from "./MovieComponents/Pagination.jsx";
//import MoveList from "./MovieComponents/MovieList.jsx";

class MovieHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    };
    this.apiKey = process.env.REACT_APP_API; // this works offline for hiding our key and when we deplay the enviornment variable wont be deployed.

    if (this.apiKey === undefined || this.apiKey === "") {
      this.apiKey = "fa12b6aa6d82e63276b97f21664efd3a"; // this is not best practise. You should make api calls with a private key through a server
      // E.G handle submit (the method below this) should run on a server with the key stored there away from client eyes.
      // then can call that servers function and it will return our data.
      //https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app 2nd answer here for details
      // tldr anything stored on the client can be read by the client. General rule.
    }
    //console.log(this.apiKey);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchTerm.length !== 0) {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          this.apiKey +
          "&query=" +
          this.state.searchTerm
      )
        .then((data) => data.json())
        .then((data) => {
          //console.log(data);
          this.setState({
            movies: [...data.results],
            totalResults: data.total_results,
          });

          let array1 = [];
          for (let i = 0; i < this.state.movies.length; i++) {
            array1.push(this.state.movies[i]);
          }
          this.setState({ movies: array1 });

          //console.log(data.total_results);
          //console.log(this.state.totalResults);
        });
    } else {
    }
    /*console.log(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        this.apiKey +
        "&query=" +
        this.state.searchTerm
    );*/
  };

  componentDidMount() {
    document.title = "Movie Search API";
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        this.apiKey +
        "&query=" +
        "A"
    )
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });

        let array1 = [];
        for (let i = 0; i < this.state.movies.length; i++) {
          array1.push(this.state.movies[i]);
        }
        this.setState({ movies: array1, searchTerm: "a" });

        //console.log(data.total_results);
        //console.log(this.state.totalResults);
      });
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = (pageNumber) => {
    let array1 = [];

    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        this.apiKey +
        "&query=" +
        this.state.searchTerm +
        "&page=" +
        pageNumber
    )
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);

        this.setState({ movies: [...data.results], currentPage: pageNumber });
        //
        for (let i = 0; i < this.state.movies.length; i++) {
          array1.push(this.state.movies[i]);
        }
        this.setState({ movies: array1 });
      });
  };

  viewMovieInfo = (id) => {
    //console.log("this.viewMovieInfo");
    const filteredMovie = this.state.movies.filter((movie) => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    //console.log(currentMovie);

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        {this.state.currentMovie == null ? (
          <div className="container" style={{ minHeight: "100vh" }}>
            <h1 style={{ color: "white", paddingTop: "25px" }}>
              Movie Search (TMDB API)
            </h1>
            <SearchArea
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
            />
          </div>
        ) : (
          <MovieInfo
            currentMovie={this.state.currentMovie}
            closeMovieInfo={this.closeMovieInfo}
          />
        )}

        {this.state.totalResults > 20 && this.state.currentMovie == null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MovieHome;

/*

// let w = pageNumber - 1;
    //console.log(w);
    // let additionalInfo = 0;

    /*if (pageNumber > 1) {
      additionalInfo = 2;
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          this.apiKey +
          "&query=" +
          this.state.searchTerm +
          "&page=" +
          w
      )
        .then((data) => data.json())
        .then((data) => {
          console.log(data);

          this.setState({ movies: [...data.results], currentPage: pageNumber });
          //

          for (let i = 0; i < this.state.movies.length - 18; i++) {
            array1.push(this.state.movies[i]);
          }
          this.setState({ movies: array1 });
        });
    }*/
