//import React, { Component } from "react";
import "../../../Style/home.css";

const Pagination = (props) => {
  const pageLinks = [];
  for (let i = 1; i <= props.pages + 1; i++) {
    let active = "";

    if (props.currentPage === i) {
      active = "active";
    } else {
      active = "notactive";
    }

    // let active = props.currentpage - 1 == i ?  : "notactive";

    pageLinks.push(
      <span
        className={"spread "}
        key={i}
        onClick={() => {
          props.nextPage(i);
        }}
      >
        <button
          className={active}
          style={{
            cursor: "pointer",
            backgroundColor: "black",
            border: "0px",
            color: "blue",
          }}
        >
          {i}
        </button>
      </span>
    );

    if (i === 10) {
      break;
    }
  }

  /*

  <button href="" className={"ui secondary button " + active}>
          {i}
        </button>
  */

  return (
    <div
      className="container"
      style={{ paddingTop: "30px", paddingBottom: "30px" }}
    >
      <div className="row">
        <ul className="ui massive  horizontal list ">
          {props.currentPage > 1 ? (
            <span
              className={"spread"}
              onClick={() => {
                props.nextPage(props.currentPage - 1);
              }}
            >
              <button
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  border: "0px",
                  color: "white",
                }}
              >
                Prev
              </button>
            </span>
          ) : (
            <span className={"spread"}>
              <button
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  border: "0px",
                  color: "white",
                }}
              >
                Prev
              </button>
            </span>
          )}

          {pageLinks}

          {props.currentPage < props.pages + 2 ? (
            props.currentPage < props.pages + 1 && props.currentPage < 10 ? (
              <span
                className={"spread"}
                onClick={() => {
                  props.nextPage(props.currentPage + 1);
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "black",
                    border: "0px",
                    color: "white",
                  }}
                >
                  Next
                </button>
              </span>
            ) : (
              <span className={"spread"}>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "black",
                    border: "0px",
                    color: "white",
                  }}
                >
                  Next
                </button>
              </span>
            )
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
