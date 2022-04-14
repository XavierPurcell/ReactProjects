import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
//import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import React, { Input, Segement } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <nav>
      <Menu attached="top" tabular>
        <Menu.Item as={NavLink} exact to="/" name="Home" />
        <Menu.Item
          as={NavLink}
          exact
          to="/sortingvisualizer"
          name="Sorting Visualizer"
        />
        <Menu.Item as={NavLink} exact to="/pathfinding" name="Pathfinding" />
        <Menu.Item
          as={NavLink}
          exact
          to="/moviesearchapi"
          name="Movie Search API"
        />
        <Menu.Item as={NavLink} exact to="/Unity" name="Unity Projects" />
        <Menu.Item as={NavLink} exact to="/WebPortfolio" name="Web Portfolio" />
        <Menu.Item
          as={NavLink}
          exact
          to="/GitHub"
          name="Github"
          style={{
            right: "0",
            position: "absolute",
          }}
        />
      </Menu>
    </nav>
  );
};

export default NavBar;

/*    <div class="ui tabular menu">
        <a class="item active">Sorting Algorithms</a>
        <a class="item">Photos</a>
      </div>*/

/*

     <div class="ui menu">
     <a class="item">Browse</a>
     <a class="item">Submit</a>
     <div class="right menu">
       <a class="item">Sign Up</a>
       <a class="item">Help</a>
     </div>
   </div>
   */

/*export const NavBar = (props) => {
  return (
    <nav>
      <Menu attached="top" tabular>
        <Link to="/">
          <Menu.Item
            name="Home"
            active={
              props.activeItem1 === "Home" || props.activeItem1 === "home"
            }
            onClick={props.handleItemClickNormalPass}
          />
        </Link>
        <Link to="/sortingvisualizer">
          {console.log(props.activeItem1)}
          <Menu.Item
            name="Sorting Visualizer"
            active={
              props.activeItem1 === "SortingVisualizer" ||
              props.activeItem1 === "sortingvisualizer"
            }
            onClick={props.handleItemClickPass}
          />
        </Link>
        <Link to="/pathfinding">
          {console.log(props.activeItem1)}
          <Menu.Item
            name="Pathfinding"
            active={
              props.activeItem1 === "Pathfinding" ||
              props.activeItem1 === "pathfinding"
            }
            onClick={props.handleItemClickNormalPass}
          />
        </Link>
        <Link to="/moviesearchapi">
          {console.log(props.activeItem1)}
          <Menu.Item
            name="Movie Search API"
            active={
              props.activeItem1 === "moviesearchapi" ||
              props.activeItem1 === "MovieSearchAPI"
            }
            onClick={props.handleItemClickPass}
          />
        </Link>
        <Link
          to="GitHub"
          style={{
            right: "0",
            position: "absolute",
          }}
        >
          <Menu.Item
            name="GitHub"
            active={
              props.activeItem1 === "GitHub" || props.activeItem1 === "Github"
            }
            onClick={props.handleItemClickNormalPass}
          />
        </Link>
      </Menu>
    </nav>
  );
};
*/
