import React, { Component } from "react";
import { BubbleSort } from "./SortingAlgorithms/BubbleSort.jsx";
import { HeapSort } from "./SortingAlgorithms/HeapSort.jsx";
import { MergeSort } from "./SortingAlgorithms/MergeSort.jsx";
//import { MergeSort2 } from "./SortingAlgorithms/MergeSort2.jsx";
import { QuickSort } from "./SortingAlgorithms/QuickSort.jsx";

/*
import "../.././Style/SortingVisualizer.css"; // my css
import "../.././Style/Tile.css";
import "../.././Style/home.css";
*/

// higher = slower
let ANIMATION_SPEED_MS = 4;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 16;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#2185d0"; //"rgba(66, 134, 244, 0.8)";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

let myArray = [];

let sorted = false;

class SortingManager extends Component {
  constructor(props) {
    super(props);
    NUMBER_OF_ARRAY_BARS = this.maxBars(); //

    this.state = {
      array: myArray,
      speed: ANIMATION_SPEED_MS,
      size: NUMBER_OF_ARRAY_BARS,
    };

    sorted = false;
  }

  maxBars() {
    return (window.innerWidth - 60) / 10;
  }

  resetArray(noResetBars) {
    let highestTimeoutId = window.setTimeout(function () {}, 0);
    //let highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    let newArray = [];
    //NUMBER_OF_ARRAY_BARS = 16; // remove
    // optional arugment to reset bars in accourdance ot screensize
    if (noResetBars !== true) {
      NUMBER_OF_ARRAY_BARS = this.maxBars();
      // NUMBER_OF_ARRAY_BARS = 16; // remove
      this.setState({ size: NUMBER_OF_ARRAY_BARS });
    }

    // reset the array
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(5, 610)); // 30
    }

    // newArray = [45, 233, 22, 11, 5, 73, 42, 99, 45, 233, 22, 11, 5, 73, 42, 99];
    // enable the speedslider
    this.enableSlider();

    // set the sorted value
    sorted = false;

    // make the bars the right colour
    this.SetGreen();

    // update the array values
    this.setState({ array: newArray });
  }

  SortingAlgorithms(ourSort) {
    // if our arrayed is already sorted/sorting do this
    if (sorted === true) {
      this.AlreadySortedAnimation();
      return;
    }
    //array = this.state.array;
    // make an array thats equal to the ret urn value of the sort. this also holds the values for our animation swaps
    const animationHolder = ourSort(this.state.array);

    let timerEnd = animationHolder[0].length;

    // get all of or bar values
    const arrayBars = document.getElementsByClassName("array-bar");

    // go through all our animations
    for (let i = 0; i < animationHolder[0].length; i++) {
      const barOneIdx = animationHolder[0][i]; // first value
      const barTwoIdx = animationHolder[0][i + 1]; // second value

      // get styles if arraybars[index] is undefined get null
      const barOneStyle = arrayBars[barOneIdx]
        ? arrayBars[barOneIdx].style
        : {};

      const barTwoStyle = arrayBars[barTwoIdx]
        ? arrayBars[barTwoIdx].style
        : {};

      // first timer event
      setTimeout(() => {
        let barOneHeight = barOneStyle.height;
        let barTwoHeight = barTwoStyle.height;

        let convertPixelToIntOne = parseInt(barOneHeight, 10);

        let convertPixelToIntTwo = parseInt(barTwoHeight, 10);

        // if our first bar is > than our second bar swap the two elements
        if (convertPixelToIntOne > convertPixelToIntTwo) {
          // swap values
          let temp = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }

        // change the colour to red
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = SECONDARY_COLOR;

        // end timeouts event (changing the bars back to the original colour once swapped)
        setTimeout(() => {
          // change colour back
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
          // once this coumter = 0 we have finished the animation and can do the next steps. we take 2 off the value coz we swap 2 elements
          timerEnd = timerEnd - 2;
          if (timerEnd === 0) {
            // not 100% sure why i have to do this. but its important
            this.setState({ array: animationHolder[1] });
            // enable the slider
            this.enableSlider();
            // play the finish animation method
            this.FinishAnimation();
          }
        }, ANIMATION_SPEED_MS); // second argument for settimeout = the timeout time
      }, i * ANIMATION_SPEED_MS); // linear increasing timeout time based off I from the for loop

      i = i + 1; // we swapped two elements so we plus 2;
    }

    // this finishes before the first timeout starts, we already want 1 sort happening so set sorted == true
    sorted = true;

    // dont want the speed slider moving during the sorting
    this.disableSlider();
  }

  SortingAlgorithmsMerge(ourSort) {
    // if our arrayed is already sorted/sorting do this
    if (sorted === true) {
      this.AlreadySortedAnimation();
      return;
    }

    // make an array thats equal to the ret urn value of the sort. this also holds the values for our animation swaps
    const animationHolder = ourSort(this.state.array);

    let timerEnd = animationHolder[0].length;

    // get all of or bar values
    const arrayBars = document.getElementsByClassName("array-bar");

    // go through all our animations
    for (let i = 0; i < animationHolder[0].length; i++) {
      const barOneIdx = animationHolder[0][i]; // first value
      const barTwoIdx = animationHolder[0][i + 1]; // second value
      const barThreeIdx = animationHolder[0][i + 2]; // second value

      // get styles if arraybars[index] is undefined get null
      const barOneStyle = arrayBars[barOneIdx]
        ? arrayBars[barOneIdx].style
        : {};

      const barTwoStyle = arrayBars[barTwoIdx]
        ? arrayBars[barTwoIdx].style
        : {};

      let strings = barThreeIdx.toString() + "px";

      // first timer event
      setTimeout(() => {
        // take the bar
        // put it at the start of the array we dont know what the start is unless we pass it through
        // so we need to pass through startvalue and value1

        barOneStyle.height = strings;
        //barTwoStyle.height = temp;

        // change the colour to red
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = SECONDARY_COLOR;

        // end timeouts event (changing the bars back to the original colour once swapped)
        setTimeout(() => {
          // change colour back
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
          // once this coumter = 0 we have finished the animation and can do the next steps. we take 2 off the value coz we swap 2 elements
          timerEnd = timerEnd - 3;
          if (timerEnd === 0) {
            // not 100% sure why i have to do this. but its important
            this.setState({ array: animationHolder[1] });
            // enable the slider
            this.enableSlider();
            // play the finish animation method
            this.FinishAnimation();
          }
        }, ANIMATION_SPEED_MS); // second argument for settimeout = the timeout time
      }, i * ANIMATION_SPEED_MS); // linear increasing timeout time based off I from the for loop

      i = i + 2; // we swapped two elements so we plus 2;
    }

    // this finishes before the first timeout starts, we already want 1 sort happening so set sorted == true
    sorted = true;

    // dont want the speed slider moving during the sorting
    this.disableSlider();
  }

  SortingAlgorithmsQuick(ourSort) {
    // if our arrayed is already sorted/sorting do this
    if (sorted === true) {
      this.AlreadySortedAnimation();
      return;
    }

    // make an array thats equal to the ret urn value of the sort. this also holds the values for our animation swaps
    const animationHolder = ourSort(this.state.array);

    let timerEnd = animationHolder[0].length;

    // get all of or bar values
    const arrayBars = document.getElementsByClassName("array-bar");

    let previosPivot = 0;
    // go through all our animations
    for (let i = 0; i < animationHolder[0].length; i++) {
      const barOneIdx = animationHolder[0][i]; // first value
      const barTwoIdx = animationHolder[0][i + 1]; // second value
      const barThreeIdx = animationHolder[0][i + 2]; // second value

      // get styles if arraybars[index] is undefined get null
      const barOneStyle = arrayBars[barOneIdx]
        ? arrayBars[barOneIdx].style
        : {};

      const barTwoStyle = arrayBars[barTwoIdx]
        ? arrayBars[barTwoIdx].style
        : {};

      const barThreeStyle = arrayBars[barThreeIdx]
        ? arrayBars[barThreeIdx].style
        : {};

      // first timer event
      setTimeout(() => {
        let indexA = barThreeIdx;

        let barOneHeight = barOneStyle.height;
        let barTwoHeight = barTwoStyle.height;

        let convertPixelToIntOne = parseInt(barOneHeight, 10);

        let convertPixelToIntTwo = parseInt(barTwoHeight, 10);

        // if our first bar is > than our second bar swap the two elements
        if (convertPixelToIntOne > convertPixelToIntTwo) {
          // swap values
          let temp = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }

        // change the colour to red
        if (barOneStyle === barThreeStyle) {
        } else {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
        }

        if (barTwoStyle === barThreeStyle) {
        } else {
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }

        if (previosPivot !== indexA) {
          let barThreeStyle2 = arrayBars[previosPivot].style;
          //barThreeStyle2 = PRIMARY_COLOR;
          previosPivot = indexA;
          barThreeStyle.backgroundColor = "#FFFFFF";
        }

        // end timeouts event (changing the bars back to the original colour once swapped)
        setTimeout(() => {
          // change colour back

          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;

          //if (barThreeStyle)

          // once this coumter = 0 we have finished the animation and can do the next steps. we take 2 off the value coz we swap 2 elements
          timerEnd = timerEnd - 3;
          if (timerEnd === 0) {
            // not 100% sure why i have to do this. but its important
            this.setState({ array: animationHolder[1] });
            // enable the slider
            this.enableSlider();
            // play the finish animation method
            this.FinishAnimation();
          }
        }, ANIMATION_SPEED_MS); // second argument for settimeout = the timeout time
      }, i * ANIMATION_SPEED_MS); // linear increasing timeout time based off I from the for loop

      i = i + 2; // we swapped two elements so we plus 2;
    }

    // this finishes before the first timeout starts, we already want 1 sort happening so set sorted == true
    sorted = true;

    // dont want the speed slider moving during the sorting
    this.disableSlider();
  }

  // make all bars red going upwards once we finish a sort. it looks cool
  FinishAnimation() {
    // get all bars, we could pass this in as argument from the previos sort method if we wanted
    const arrayBars = document.getElementsByClassName("array-bar");
    let barsLength = arrayBars.length;
    // go through each bar
    for (let i = 0; i < arrayBars.length; i++) {
      // first timer
      setTimeout(() => {
        //set the first bar = to the chosen colour
        arrayBars[i].style.backgroundColor = SECONDARY_COLOR;
        // lower the count
        barsLength--;
        // if we have no more bars that we need to colour make them all starting colour blue
        if (barsLength === 0) {
          // timer event
          setTimeout(() => {
            // go through each bar and make them blue
            for (let i = 0; i < arrayBars.length; i++) {
              arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
            }
          }, 250); //speed 2nd argument for timeout event
        }
      }, i * 10); // speed 2nd argument for timeout event. make it the delay increase via the loop value I
    }
  }

  // re-enable the ability to click the speedbar and reset the styles
  enableSlider() {
    let speedBar = document.getElementsByClassName("speed");
    let speedBarStyle = speedBar[0].style;
    speedBarStyle.pointerEvents = "all";
    speedBarStyle.backgroundColor = "#d3d3d3";
  }

  // disable the speed slider during sorting animation
  disableSlider() {
    // get speed bar and disable the ability to click it via the pointerevents. this the easiest way to disable
    let speedBar = document.getElementsByClassName("speed");
    let speedBarStyle = speedBar[0].style;
    speedBarStyle.pointerEvents = "none";
    speedBarStyle.backgroundColor = "red";
  }

  // if we've trying to sort already sorted data run this animation
  AlreadySortedAnimation() {
    // get bars
    const arrayBars = document.getElementsByClassName("array-bar");

    // go through bars and change colour
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = SECONDARY_COLOR;
    }
    setTimeout(() => {
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
      }
    }, 500); // change all bars colour to red then after half a second change all colours back to the original colour
  }

  // set all bars to the colour green
  SetGreen() {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
    }
  }

  // not 100% sure we these

  handleChange(event) {
    ANIMATION_SPEED_MS = event.target.value;
    this.setState({ speed: ANIMATION_SPEED_MS });
  }

  handleChangeSize(event) {
    NUMBER_OF_ARRAY_BARS = event.target.value;
    this.setState({ size: NUMBER_OF_ARRAY_BARS });
    this.resetArray(true);
  }

  // reset the array when we create this class
  componentDidMount() {
    document.title = "Sorting Visualizer";

    this.resetArray(true);
  }

  setStateFunction() {}

  render() {
    return (
      <div className="container">
        <h1
          className="ui header"
          style={{
            paddingTop: "24px",
            color: "white",
            marginTop: "1px",
          }}
        >
          Sorting Visualizer
        </h1>
        <div className="array-container">
          {this.state.array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="ui nine column grid blackBC">
          <div className="column black">
            <h1>Speed</h1>
            <input
              className="speed"
              type="range"
              min="4"
              max="100"
              value={this.state.speed}
              onChange={this.handleChange.bind(this)}
            ></input>
            <div className="twoEnds">
              <div>Fast</div> <div>Slow</div>
            </div>
          </div>
          <div className="column black"></div>
          <div className="column black">
            <h1>Size</h1>
            <input
              type="range"
              className="size"
              min="10"
              max={this.maxBars()}
              value={this.state.size}
              onChange={this.handleChangeSize.bind(this)}
            ></input>
            <div className="twoEnds">
              <div>Small</div> <div> Large</div>
            </div>
          </div>
          <div className="column black"></div>
          <div className="column black">
            <h1>Reset</h1>
            <button
              className="ui primary button"
              onClick={() => this.resetArray()}
            >
              Generate New Array
            </button>
          </div>
          <div className="column black">
            <h3>Merge Sort</h3>
            <button
              className="ui button"
              onClick={() => this.SortingAlgorithmsMerge(MergeSort)} //this.mergeSort()}
            >
              <p>Merge Sort</p>
            </button>
          </div>
          <div className="column black">
            <h3>Quick Sort</h3>
            <button
              className="ui button"
              onClick={() => this.SortingAlgorithms(QuickSort)} //}  //this.Promise()
            >
              <p>Quick Sort </p>
            </button>
          </div>
          <div className="column black">
            <h3>Heap Sort</h3>
            <button
              className="ui button"
              onClick={() => this.SortingAlgorithms(HeapSort)}
            >
              <p>Heap Sort</p>
            </button>
          </div>
          <div className="column black">
            <h3>Bubble Sort</h3>
            <button
              className="ui button"
              onClick={() => this.SortingAlgorithms(BubbleSort)}
            >
              <p>Bubble Sort</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SortingManager;
// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
