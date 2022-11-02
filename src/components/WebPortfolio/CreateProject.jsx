<<<<<<< HEAD
let CreateProject = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: "white",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <div>
          <h2> {props.titleInfo}</h2>
          <h3>
            <a href={props.urlInfo}>{props.urlInfo}</a>
          </h3>
          <h4>{props.roleInfo}</h4>
          {props.extraInfo !== "" ? <h4>{props.extraInfo}</h4> : ""}
        </div>
        <img
          src={props.projectImage}
          style={{ maxWidth: "800px", marginTop: "50px" }}
        ></img>
      </div>
    </div>
  );
};

export default CreateProject;
=======
let CreateProject = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: "white",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <div>
          <h2>Site: {props.titleInfo}</h2>
          <h3>
            URL: <a href={props.urlInfo}>{props.urlInfo}</a>
          </h3>
          <h4>Role: {props.roleInfo}</h4>
          {props.extraInfo !== "" ? <h4>{props.extraInfo}</h4> : ""}
        </div>
        <img
          src={props.projectImage}
          style={{ maxWidth: "800px", marginTop: "50px" }}
        ></img>
      </div>
    </div>
  );
};

export default CreateProject;
>>>>>>> 0f4f1b07df421e0fb95242e2c2cd46e7352b252e
