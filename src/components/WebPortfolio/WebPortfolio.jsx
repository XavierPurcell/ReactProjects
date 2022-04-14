import "../../Style/WebPortfolio.css"; //.. ===1 ===2
import cs from "../../Pictures/cs-town-planning.png";
import uq from "../../Pictures/UQ Res.png";
import pp from "../../Pictures/pasta-poetry.png";
import gg from "../../Pictures/gas-guyz.png";
import cm from "../../Pictures/chriss-moss.png";
import React, { useState, useEffect } from "react";
import Project from "./CreateProject";

function Welcome(props) {
  useEffect(() => {
    document.title = "Web Portfolio";
  });

  let messageState = useState("sd");
  const [count, setCount] = useState(0);

  return (
    <content>
      <h1
        style={{
          color: "white",
          backgroundColor: "black",
          margin: "0px",
          paddingTop: "50px",
        }}
      >
        I've worked on a bunch of websites. Here's a select few:
      </h1>

      <Project
        backgroundColor={"black"}
        titleInfo="CS Town Planning"
        urlInfo="https://www.cstownplanning.com.au/"
        roleInfo="Project Lead"
        extraInfo="Custom Wordpress site."
        projectImage={cs}
      ></Project>

      <Project
        backgroundColor={"#131313"}
        titleInfo="UQ Residence (University of Queensland)"
        urlInfo="https://uqres.com/"
        roleInfo="Using Starrez API's I created the Student booking system. It sold out! (500+ rooms). Also created some features."
        extraInfo="Note: Booking is seasonal so the form may or may not be available currently on the site. See the image below."
        projectImage={uq}
      ></Project>

      <Project
        backgroundColor={"black"}
        titleInfo="Pasta Poetry"
        urlInfo="https://pastapoetry.com.au/"
        roleInfo="Lead Developer."
        extraInfo="Customized Shopify site."
        projectImage={pp}
      ></Project>

      <Project
        backgroundColor={"#131313"}
        titleInfo="Gas Guyz"
        urlInfo="https://gasguyz.com.au/"
        roleInfo="Adding additional features/support"
        extraInfo="Shopify site"
        projectImage={gg}
      ></Project>

      <Project
        backgroundColor={"#black"}
        titleInfo="Chriss Moss"
        urlInfo="https://www.chrismoss.com.au/"
        roleInfo="Bugfixes/support."
        extraInfo="Wordpress site."
        projectImage={cm}
      ></Project>
    </content>
  );
}

export default Welcome;
