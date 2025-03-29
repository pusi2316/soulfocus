import react from "react";
import { ReactComponent as LeftQuote } from "./quote-left-solid.svg";
import card from "./shape.png";


const TestemonialCard = () => {
    return(
        <div className="testimonialContainer">
          <div className="testimonialHeader">
            <div className="imageContainer">
              <img
                height="50px"
                style={{ borderRadius: "70%" }}
                src={card}
                alt="krittibas"
              />
            </div>
            <div className="nameContainer">
              <h4 className="nameContainerh4">Jane Doe</h4>
              <p className="nameContainerp">Bay FC</p>
            </div>
            <div className="iconContainer">
              <LeftQuote style={{ fill: "grey" }} className="icon" />
            </div>
          </div>
          <div className="testimonialBody">
            <p className="testimonialBodyText">
              "Soul Focus helped us to build a dedicated fan base. Their love for sport was instrumental in our successful first season"
            </p>
          </div>
        </div>
    )
}

export default TestemonialCard;