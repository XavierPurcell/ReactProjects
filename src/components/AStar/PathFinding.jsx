import React, { Component } from "react";
import "../../Style/Tile.css"; //.. ===1 ===2
import NodeGraph from "./NodeGraph";
import AStar from "./AStar";

const gridColor = "#2185d0"; //"Black";

let myCanvas = "";

let target = 0;
let seeker = 0;

let Nodes = [];
let AStarHolder = [];

let mouseDown = false;

let clickFunction = 0;

let heightFromTop = 0;

let boardWidth = 900;

let boardHeight = 600;

class PathFinding extends Component {
  constructor(props) {
    super(props);
    myCanvas = "";
    Nodes = [];
    AStarHolder = [];
    //let k = window.innerWidth % 30;
    //k = window.innerWidth - k - 30;
    this.state = {
      width: boardWidth, //810,
      height: boardHeight, //600,
      blockSize: 30,
      coordinate: "0,0",

      // hexSize: 50,
      //hexOrigin: { x: 500, y: 100 },
    };
  }
  //

  componentDidMount() {
    document.title = "Pathfinding";

    //const canvas = this.refs.canvas;
    myCanvas = this.refs.canvas;
    //let k = window.innerWidth % 30;
    //k = window.innerWidth - k - 30;
    //this.setState({ width: k });

    this.DrawGrid(myCanvas);
    this.getHeight();
  }

  ReDrawGrid() {
    myCanvas = this.refs.canvas;
    Nodes = [];
    AStarHolder = [];

    this.DrawGrid(myCanvas);
    this.getHeight();
  }

  DrawGrid(canvasID) {
    // need our canvas context
    const canvasContext = canvasID.getContext("2d");

    // grid values we need
    let gridArrayWidth = this.state.width / this.state.blockSize;
    let gridArrayHeight = this.state.height / this.state.blockSize;

    // we need these values to create our grid and manage our nodes
    let totalLoop = gridArrayWidth * gridArrayHeight;

    let y = 0;
    let k = 0;

    // create a grid and a map
    for (let i = 0; i < totalLoop; i++) {
      // create Node
      Nodes.push(new NodeGraph(true, k, y));

      canvasContext.beginPath();
      canvasContext.rect(
        0 + this.state.blockSize * k,
        0 + this.state.blockSize * y,
        this.state.blockSize,
        this.state.blockSize
      );
      canvasContext.strokeStyle = gridColor;
      canvasContext.lineWidth = 1;
      canvasContext.stroke();

      k++;

      if (k >= gridArrayWidth) {
        k = 0;
        y++;
      }
    }

    // place red tiles on load
    for (let i = 0; i < gridArrayHeight - 1; i++) {
      Nodes[i * gridArrayWidth + 1]._walkNode = false;
      this.FillSquare(1, i, "Red");
    }

    for (let i = 1; i < gridArrayHeight; i++) {
      Nodes[i * gridArrayWidth + gridArrayWidth - 2]._walkNode = false;
      this.FillSquare(gridArrayWidth - 2, i, "Red");
    }

    // end of placing red tiles

    // place seeker and target and set nodes

    seeker = 0;
    target = totalLoop - 1;

    Nodes[seeker]._seeker = true;
    Nodes[target]._target = true;

    this.FillSquare(Nodes[seeker]._gridX, Nodes[seeker]._gridY, "Blue");
    this.FillSquare(Nodes[target]._gridX, Nodes[target]._gridY, "Yellow");

    // create a new Astar class we all the values we've provided. our map doesnt change in size so this is okay.

    let passMethod = this.FillSquare;

    AStarHolder = new AStar(
      Nodes,
      this.state.width,
      this.state.height,
      seeker,
      target,
      passMethod
    );
  }

  getHeight() {
    // get the height of our convas from the top of the page
    var someDiv = document.getElementById("canvasID");
    var distanceToTop = someDiv.getBoundingClientRect().top;

    heightFromTop = distanceToTop;
    //console.log(heightFromTop);
  }

  // when we click a button run aStar pathfind method from the class we made in the constructor
  RunAStar = () => {
    this.clearBoard();
    AStarHolder.FindPath(myCanvas, seeker, target);
  };

  clearBoard(clearAll) {
    const ctx = myCanvas.getContext("2d");

    let gridArrayWidth = this.state.width / this.state.blockSize;
    let gridArrayHeight = this.state.height / this.state.blockSize;

    // clearing grid
    let totalLoop = gridArrayWidth * gridArrayHeight;

    let y = 0;
    let k = 0;

    /// go through our grid and remove everything that isnt a seeker target or wall
    for (let i = 0; i < totalLoop; i++) {
      if (
        Nodes[i]._walkNode === false ||
        Nodes[i]._seeker === true ||
        Nodes[i]._target === true
      ) {
        if (
          clearAll === true &&
          Nodes[i]._seeker === false &&
          Nodes[i]._target === false
        ) {
          Nodes[i]._walkNode = true;
          ctx.clearRect(
            this.state.blockSize * k + 2,
            this.state.blockSize * y + 2,
            26,
            26
          );
        }
      } else {
        ctx.clearRect(
          this.state.blockSize * k + 2,
          this.state.blockSize * y + 2,
          26,
          26
        );
      }
      k++;
      if (k >= gridArrayWidth) {
        k = 0;
        y++;
      }
    }
  }

  mouseUp = () => {
    mouseDown = false;
  };

  mouseDown = (event) => {
    mouseDown = true;
    this.clickBrushFunction(event);
  };

  clickMe(event) {
    this.clickBrushFunction(event);
  }

  clickBrushFunction = (event) => {
    // if the event = mouse left click and the its down
    if (event.nativeEvent.which === 1 && mouseDown === true) {
      this.getHeight();
      //  we use setTimeout because it might come in handy later
      setTimeout(() => {
        // we're our x coordinate is negative make it 0 to stop error
        if (event.clientX < 0) {
          event.clientX = 0;
        }

        // if our y coordiante is too big make it = max height to stop error
        if (
          event.clientY - (heightFromTop - this.state.blockSize) >
          this.state.height
        ) {
          event.clientY =
            this.state.height + (heightFromTop - this.state.blockSize);
        }

        if (event.clientY < 0) {
          event.clientY = 0;
        }

        let gridArrayWidth = this.state.width / this.state.blockSize;
        let gridArrayHeight = this.state.height / this.state.blockSize;

        // get dead space around the grid. we get the deadspace because we need to get rid of the deadspace on the left.
        // if we get rid of the deadspace on the left coordiante 0 will = the start of the grid.
        let getX1 = window.innerWidth - this.state.width;

        getX1 = getX1 / 2; // we use half because our grid is in the middle. get rid of space on the left with this

        // if our screen is smaller than our grid do this
        if (window.innerWidth < this.state.width) {
          getX1 = event.clientX;
        } else {
          getX1 = event.clientX - getX1;
        }

        let x = getX1;

        // dp the same for y as we did for x
        //let getY1 = document.documentElement.clientHeight - this.state.height;
        //getY1 = getY1 / 2;
        //getY1 = event.clientY - getY1;

        //let y = getY1; // this only works if its center of the screen vertically
        let y = event.clientY - heightFromTop; // the 63 is the margin from the top // we use manual here

        let gridX = Math.floor(x / this.state.blockSize);
        let gridY = Math.floor(y / this.state.blockSize);

        // stop errors
        if (gridX < 0 || gridX === undefined) {
          gridX = 0;
        }

        if (gridY < 0 || gridY === undefined) {
          gridY = 0;
        }

        if (gridX > gridArrayWidth) {
          gridX = gridArrayWidth;
        }

        if (gridY > gridArrayHeight) {
          gridY = gridArrayHeight;
        }
        // end of stop errosr

        // get the location of our node via math
        let nodeLocation = gridX + gridY * gridArrayWidth;

        //let coorUpdate = x + "," + y;

        // give array coordinate
        let coorUpdate =
          Nodes[nodeLocation]._gridX + "," + Nodes[nodeLocation]._gridY; //myGridY[gridY];
        this.setState({ coordinate: coorUpdate });

        // 0 = create 1 = clear 2 = move seeker 3 = move target
        if (clickFunction === 0) {
          this.WallMode(nodeLocation, gridX, gridY, false);
        } else if (clickFunction === 1) {
          this.WallMode(nodeLocation, gridX, gridY, true);
        } else if (clickFunction === 2) {
          this.seekerBrush(nodeLocation, gridX, gridY);
        } else if (clickFunction === 3) {
          this.targetBrush(nodeLocation, gridX, gridY);
        }
      }, 0);
    }
  };

  // set the value we need to switch for our brush
  SetDrawMode(number) {
    clickFunction = number;
  }

  // set or clear walls depending on the clearMode variable
  WallMode(nodeLocation, gridX, gridY, clearMode) {
    if (clearMode === false) {
      if (
        Nodes[nodeLocation]._walkNode === true &&
        Nodes[nodeLocation]._seeker === false &&
        Nodes[nodeLocation]._target === false
      ) {
        this.FillSquare(gridX, gridY, "Red");
        Nodes[nodeLocation]._walkNode = false;
      }
    } else if (
      Nodes[nodeLocation]._seeker === false &&
      Nodes[nodeLocation]._target === false
    ) {
      Nodes[nodeLocation]._walkNode = true;
      this.clearGridSquare(gridX, gridY);
    }
  }

  // set the seeker
  seekerBrush(nodeLocation, gridX, gridY) {
    if (
      Nodes[nodeLocation]._walkNode === true &&
      Nodes[nodeLocation]._target === false
    ) {
      // clear our previous seeker square and its special node values
      this.clearGridSquare(Nodes[seeker]._gridX, Nodes[seeker]._gridY);

      Nodes[seeker]._seeker = false;
      Nodes[seeker]._walkNode = true;

      // set our new seeker square and its new node values
      this.FillSquare(gridX, gridY, "Blue");
      Nodes[nodeLocation]._seeker = true;
      seeker = nodeLocation;
    }
  }

  // set the target
  targetBrush(nodeLocation, gridX, gridY) {
    if (
      Nodes[nodeLocation]._walkNode === true &&
      Nodes[nodeLocation]._seeker === false
    ) {
      // clear our previous target square and its special node values
      this.clearGridSquare(Nodes[target]._gridX, Nodes[target]._gridY);

      Nodes[target]._target = false;
      Nodes[target]._walkNode = true;

      // set our new target square and its new node values
      this.FillSquare(gridX, gridY, "Yellow");
      Nodes[nodeLocation]._target = true;
      target = nodeLocation;
    }
  }

  // clear grid square
  clearGridSquare(x, y) {
    const ctx = myCanvas.getContext("2d");

    ctx.clearRect(
      this.state.blockSize * x + 2,
      this.state.blockSize * y + 2,
      26,
      26
    );
  }

  // fill a grid square
  FillSquare(x, y, color) {
    const ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(
      30 * x + 2, // this.state.blocksize
      30 * y + 2,
      26,
      26
    );
    ctx.stroke();
  }

  handleChange(event) {
    boardWidth = event.target.value;
    this.setState({ width: boardWidth }, () => {
      let k = this.state.width % 30;
      k = this.state.width - k;
      this.setState({ width: k }, () => {
        this.ReDrawGrid();
      });
    });
  }

  handleChangeHeight(event) {
    boardHeight = event.target.value;
    this.setState({ height: boardHeight }, () => {
      let k = this.state.height % 30;
      k = this.state.height - k;
      this.setState({ height: k }, () => {
        this.ReDrawGrid();
      });
    });
  }

  render() {
    //const { coordinate } = this.state;
    return (
      <div>
        <div>
          <div className="containerPathFinding" style={{ minHeight: "795px" }}>
            <h1
              className="ui header"
              style={{
                paddingTop: "24px",
                color: "white",
                marginTop: "1px",
              }}
            >
              AStar Pathfinding
            </h1>
            <div>
              <p
                style={{
                  color: "white",
                }}
              >
                {this.state.coordinate}
              </p>
            </div>
            <div id="canvasID">
              <canvas
                ref="canvas"
                width={this.state.width}
                height={this.state.height}
                //onClick={this.clickBrushFunction}
                onMouseDown={this.mouseDown}
                onMouseMove={(e) => {
                  this.clickMe(e);
                }} //{this.clickBrushFunction}
                onMouseUp={this.mouseUp}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="ui nine column grid blackBC">
            <div className="column black" style={{ maxWidth: "300px" }}>
              <h1>Width</h1>
              <input
                className="speed"
                type="range"
                min="90"
                max="900"
                value={this.state.width}
                onChange={this.handleChange.bind(this)}
              ></input>
              <div className="twoEnds">
                <div>Small</div> <div>Large</div>
              </div>
            </div>

            <div className="column black" style={{ maxWidth: "300px" }}>
              <h1>Height</h1>
              <input
                className="speed"
                type="range"
                min="90"
                max="600"
                value={this.state.height}
                onChange={this.handleChangeHeight.bind(this)}
              ></input>
              <div className="twoEnds">
                <div>Small</div> <div>Large</div>
              </div>
            </div>

            <div className="column black">
              <h1>Reset</h1>
              <button
                className="ui button red"
                onClick={() => {
                  this.clearBoard(true);
                }}
              >
                CLEAR ALL
              </button>
            </div>
            <div className="column black">
              <h1>Clean</h1>
              <button
                className="ui button primary"
                onClick={() => {
                  this.clearBoard(false);
                }}
              >
                CLEAN BOARD
              </button>
            </div>
            <div className="column black">
              <h1>Start</h1>
              <button className="ui button primary" onClick={this.RunAStar}>
                RUN ASTAR
              </button>
            </div>
            <div className="column black">
              <h1>Wall Brush</h1>
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(0);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "red" }}
                ></span>
                Create Walls
              </button>
            </div>
            <div className="column black">
              <h1>Clear Brush</h1>
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(1);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "black" }}
                ></span>
                Clear Walls
              </button>
            </div>
            <div className="column black">
              <h1>Move Seeker</h1>
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(2);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "Blue" }}
                ></span>
                Move Seeker
              </button>
            </div>
            <div className="column black">
              <h1>Move Target</h1>
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(3);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "Yellow" }}
                ></span>
                Move Target
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PathFinding;

/*
<div className="ui five column grid black centerContent" style={{}}>
            <div className="column black">
              <button className="ui button primary" onClick={this.RunAStar}>
                RUN ASTAR
              </button>
            </div>
            <div className="column black">
              <button
                className="ui button primary"
                onClick={() => {
                  this.clearBoard(true);
                }}
              >
                HARD RESET
              </button>
            </div>
            <div className="column black">
              <button
                className="ui button primary"
                onClick={() => {
                  this.clearBoard(false);
                }}
              >
                CLEAN BOARD
              </button>
            </div>
            <div className="column black" style={{ maxWidth: "300px" }}>
              <h1>Width</h1>
              <input
                className="speed"
                type="range"
                min="90"
                max={900}
                value={this.state.width}
                onChange={this.handleChange.bind(this)}
              ></input>
              <div className="twoEnds">
                <div>Small</div> <div>Large</div>
              </div>
            </div>
            <div className="column black" style={{ maxWidth: "300px" }}>
              <h1>Height</h1>
              <input
                className="speed"
                type="range"
                min="90"
                max="480"
                value={this.state.height}
                onChange={this.handleChangeHeight.bind(this)}
              ></input>
              <div className="twoEnds">
                <div>Small</div> <div>Large</div>
              </div>
            </div>
          </div>
          <div className="ui one column grid black centerContent">
            <div className="column black">
              <h1>Brushes</h1>
            </div>
          </div>
          <div className="ui four column grid black centerContent">
            <div className="column black">
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(0);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "red" }}
                ></span>
                Create Walls
              </button>
            </div>
            <div className="column black">
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(1);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "Black" }}
                ></span>
                Clear Walls
              </button>
            </div>
            <div className="column black">
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(2);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "Blue" }}
                ></span>
                Move Seeker
              </button>
            </div>
            <div className="column black">
              <button
                className="ui button"
                onClick={() => {
                  this.SetDrawMode(3);
                }}
              >
                <span
                  className="buttonBlock"
                  style={{ backgroundColor: "Yellow" }}
                ></span>
                Move Target
              </button>
            </div>
          </div>
        </div>
        */

/* speed bar
<div className="ui one column grid blackBC">
            <div className="column black" style={{ maxWidth: "300px" }}>
              <h1>Speed</h1>
              <input
                className="speed"
                type="range"
                min="6"
                max="100"
                value={this.state.speed}
                onChange={this.handleChange.bind(this)}
              ></input>
              <div className="twoEnds">
                <div>Fast</div> <div>Slow</div>
              </div>
            </div>
          </div>



// bottom button
<div className="ui one column grid blackBC">
              <div className="column black" style={{ maxWidth: "300px" }}>
                <button className="ui button primary" onClick={this.RunAStar}>
                  Clear Board
                </button>
              </div>
            </div>


          */
