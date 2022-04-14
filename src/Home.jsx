import React, { Component } from "react";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Input, Menu, Segment } from "semantic-ui-react";
//import pic1 from "./Pictures/sortingvisualizer.png";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";
import SortingManager from "./components/SortingVisualizer/SortingManager.jsx";
import PathFinding from "./components/AStar/PathFinding.jsx";
import MovieHome from "./components/MovieAPI/MovieHome.jsx";
import HomeData from "./components/Home/HomeData";
import UnityManager from "./components/Unity/UnityManager.jsx";
import WebPortfolio from "./components/WebPortfolio/WebPortfolio.jsx";

import "./Style/SortingVisualizer.css"; // my css

let width = window.innerWidth;
let limit = 900;
let limitS = "900";

const divStyle = {
  color: "white",
};

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  handleEntailmentRequest = (e) => {
    /*window.open(
      "https://support.wwf.org.uk/earth_hour/index.php?type=individual",
      "_blank" // <- This is what makes it open in a new window.
    );*/
    window.location.assign("https://github.com/xavierpurcell");
  };

  render() {
    if (width < limit) {
      return (
        <div>
          <h2 style={divStyle}>
            Please Use a Screen that has a Width > {"" + limit}
          </h2>
        </div>
      );
    }
    return (
      <div>
        <Router basename="/">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomeData />
            </Route>
            <Route exact path="/sortingvisualizer">
              <SortingManager />
            </Route>
            <Route exact path="/pathfinding">
              <PathFinding />
            </Route>
            <Route exact path="/moviesearchapi">
              <MovieHome />
            </Route>
            <Route exact path="/unity">
              <UnityManager />
            </Route>
            <Route exact path="/WebPortfolio">
              <WebPortfolio />
            </Route>
            <Route exact path="/GitHub">
              {this.handleEntailmentRequest}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;

/*

 <p style={{ color: "white", padding: "50px", fontSize: "20px" }}>
                I created this site to learn Javascript and React. Here you can
                find a few different projects I've created.
              </p>
              <div
                className="ui three column grid blackBC"
                style={{ maxWidth: "1480px", margin: "auto" }}
              >
                <div className="column black" style={{ maxWidth: "100%" }}>
                  <div>
                    A Sorting visualizer. It features merge sort, quick sort,
                    heap sort and bubble sort.
                    <p
                      style={{
                        position: "absolute",
                        top: "50%",
                        width: "100%",
                        fontSize: "30px",
                        backgroundColor: "black",
                      }}
                    >
                      Sorting Visualizer
                    </p>
                    <img src={pic1} style={{ maxWidth: "100%" }}></img>
                  </div>
                </div>
                <div className="column black" style={{ maxWidth: "100%" }}>
                  <img src={pic1} style={{ maxWidth: "100%" }}></img>
                </div>
                <div className="column black" style={{ maxWidth: "100%" }}>
                  <img
                    src="https://mined-gatech.github.io/EAB-AM-Project/img/316L_AM_IPF.png"
                    style={{ maxWidth: "100%" }}
                  ></img>
                </div>
              </div>
              <div
                className="ui three column grid blackBC"
                style={{ maxWidth: "1480px", margin: "auto" }}
              >
                <div className="column black" style={{ maxWidth: "100%" }}>
                  <div>
                    A Sorting visualizer. It features merge sort, quick sort,
                    heap sort and bubble sort.
                    <p style={{ position: "absolute" }}>sss</p>
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20200619155542/sorting_quick_sort.png"
                      style={{ maxWidth: "100%" }}
                    ></img>
                  </div>
                </div>
                <div className="column black" style={{ maxWidth: "100%" }}>
                  <img
                    src="https://mined-gatech.github.io/EAB-AM-Project/img/316L_AM_IPF.png"
                    style={{ maxWidth: "100%" }}
                  ></img>
                </div>
                <div className="column black" style={{ maxWidth: "100%" }}>
                  <img
                    src="https://mined-gatech.github.io/EAB-AM-Project/img/316L_AM_IPF.png"
                    style={{ maxWidth: "100%" }}
                  ></img>
                </div>
              </div>

              */

/*

              if (
                this.homeChecker() === "home" ||
                this.homeChecker() === "/" ||
                this.homeChecker() === "Home" ||
                this.homeChecker() === "XavierPurcell" ||
                this.homeChecker() === "Xavier Purcell"
              ) {
                document.title = "Xavier Purcell";
              } else {
                //console.log(this.homeChecker());
              }
              */
/*

homeChecker() {
    // make page active whnen we go directly to there this was a quick fix need work
    let location = window.location.href;
    let counter = -1;
    let counterArray = [];
    for (let i = 0; i < location.length; i++) {
      if (location[i] === "/") {
        counter++;
        counterArray.push([i]);
      }
    }

    let startPoint = counterArray[counter];

    let locationString = "";
    let falsey = false;
    for (let i = startPoint; i < location.length; i++) {
      if (falsey === true) {
        locationString = locationString.concat(location[i]);
      } else {
        falsey = true;
      }
    }

    if (locationString === "" || locationString === "/") {
      locationString = "home";
    }

    let tempLocationString = locationString;

    for (let i = 0; i < location.length; i++) {
      if (location[i] !== "#") {
        locationString = "Home";
      } else if (location[i] === "#") {
        locationString = tempLocationString;
        break;
      }
    }

    return locationString;
  }

  */

/*
  <NavBar
            activeItem1={activeItem}
            handleItemClickPass={this.handleItemClick}
            handleItemClickNormalPass={this.handleItemClickNormal}
          />


  */

/*

 // make page active whnen we go directly to there this was a quick fix need work
    let location = window.location.href;
    let counter = -1;
    let counterArray = [];
    for (let i = 0; i < location.length; i++) {
      if (location[i] === "/") {
        counter++;
        counterArray.push([i]);
      }
    }

    let startPoint = counterArray[counter];

    let locationString = "";
    let falsey = false;
    for (let i = startPoint; i < location.length; i++) {
      if (falsey === true) {
        locationString = locationString.concat(location[i]);
      } else {
        falsey = true;
      }
    }

    if (locationString === "" || locationString === "/") {
      locationString = "home";
    }

    let tempLocationString = locationString;

    for (let i = 0; i < location.length; i++) {
      if (location[i] !== "#") {
        locationString = "Home";
      } else if (location[i] === "#") {
        locationString = tempLocationString;
        break;
      }
    }
    //console.log(locationString);
    // end of quick fix

    this.state = {
      activeItem: locationString,
    };

          */

/* const {active} = this.state; */

/*



  handleItemClick = (e, { name }) => {
    let result = name.split(" ").join("");

    //console.log(result);
    this.setState({ activeItem: result });
  };

  handleItemClickNormal = (e, { name }) => {
    let result = name.split(" ").join("");
    //result = "" + result;
    //console.log(result);
    this.setState({ activeItem: result });
  };

  */
