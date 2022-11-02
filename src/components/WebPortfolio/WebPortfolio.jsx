<<<<<<< HEAD
import "../../Style/WebPortfolio.css"; //.. ===1 ===2
import cs from "../../Pictures/cs-town-planning.png";
import uq from "../../Pictures/UQ Res.png";
import pp from "../../Pictures/pasta-poetry.png";
import gg from "../../Pictures/gas-guyz.png";
import cm from "../../Pictures/chriss-moss.png";
import tp from "../../Pictures/twitter pic.png";
import ap from "../../Pictures/Apple Clone.png";
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
          paddingTop: "25px",
        }}
      >
        Projects
      </h1>

      <Project
        backgroundColor={"black"}
        titleInfo="UQ Residence (University of Queensland)"
        urlInfo="https://uqres.com/"
        roleInfo="Wordspress site"
        extraInfo="Using Starrez API's created the Student booking system for the University of Queensland. It sold out! (500+ rooms). It has seasonal functionality."
        projectImage={uq}
      ></Project>

      <Project
        backgroundColor={"#131313"}
        titleInfo="Twitter Clone"
        urlInfo="https://twitter-clone-delta-three.vercel.app/"
        roleInfo="NextJS/Firebase Site"
        extraInfo="Log in with Github/Gmail to see a basic CRUD website made with Firebase and NextJS"
        projectImage={tp}
      ></Project>


      <Project
        backgroundColor={"black"}
        titleInfo="Apple Ecommerce Clone"
        urlInfo="https://appleclone-xavierpurcell.vercel.app/"
        roleInfo="NextJS/Sanity/Stripe Site"
        extraInfo="Created an Ecommerce site that runs using the Stripe API and a Sanity backend."
        projectImage={ap}
      ></Project>

      <Project
        backgroundColor={"#131313"}
        titleInfo="CS Town Planning"
        urlInfo="https://www.cstownplanning.com.au/"
        roleInfo="Wordpress site"
        extraInfo="Created the site in 5 Weeks for CS Town Planning. Used ACF and custom Gutenberg blocks."
        projectImage={cs}
      ></Project>

      <Project
        backgroundColor={"black"}
        titleInfo="Gas Guyz"
        urlInfo="https://gasguyz.com.au/"
        roleInfo="Shopify site"
        extraInfo="Added additional features/support using Liquid and JS"
        projectImage={gg}
      ></Project>

      <Project
        backgroundColor={"#131313"}
        titleInfo="Pasta Poetry"
        urlInfo="https://pastapoetry.com.au/"
        roleInfo="Shopify site"
        extraInfo="Customized the site using JS and Liquid."
        projectImage={pp}
      ></Project>

      <Project
        backgroundColor={"black"}
        titleInfo="Chriss Moss"
        urlInfo="https://www.chrismoss.com.au/"
        roleInfo="Wordpress site"
        extraInfo="Provided Bugfixes/support"
        projectImage={cm}
      ></Project>
    </content>
  );
}

export default Welcome;
=======
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
>>>>>>> 0f4f1b07df421e0fb95242e2c2cd46e7352b252e
