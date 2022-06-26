import React from "react";

const SearchArea = (props) => {
  return (
    <div className="container" style={{ padding: "25px", fontSize: "1.3em" }}>
      <div className="row">
        <section className="col">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="ui icon input">
              <input
                placeholder="Search movie"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchArea;
