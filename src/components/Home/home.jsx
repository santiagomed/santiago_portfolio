import React, { Component } from "react";
import resume from "../../assets/SantiagoMedinaResume.pdf";
import vision from "./Vision.png";
import cx from "classnames";

import styles from "./Home.module.css";

class Home extends Component {
  render() {
    const icons = [
      "cplusplus",
      "python",
      "javascript",
      "html5",
      "react",
      "bootstrap",
      "git",
      "npm",
    ];

    return (
      <div>
        <div className="center">
          <h1 className="center-text m-4">Hi I am Santiago Medina,</h1>
          <p className="center-text">
            a student at the University of Michigan--Ann Arbor pursuing a
            bachelor's degree in Computer Science.
          </p>
          <center>
            <a href={resume} className="btn btn-primary" download>
              Resume
            </a>
          </center>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={cx("row", styles.cardstyle)}>
                <div>
                  <h2>About me</h2>
                  <p>
                    Born and raised in Barranquilla, Colombia, I decided to
                    attend college in the United States with the hope of
                    exploring my passion in the technology industry and to
                    encounter opportunities that will help me further develop my
                    vision of making a positive impact on the world through
                    technological advancements.
                  </p>
                </div>
              </div>
              <div className={cx("row", styles.cardstyle)}>
                <h2>Skills and Technologies</h2>
                <div className="row">
                  {icons.map((icon, i) => (
                    <i
                      key={i}
                      className={cx(`devicon-${icon}-plain`, styles.devIcon)}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <img src={vision} alt={"Vision.png"} className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
