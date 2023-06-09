import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/DSC_0419.JPG";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Vishwanath Badiger  </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Yadgir, Karnataka(India)
                </span>
                . I have completed my graduation in B.E (Mechanical Engineering)
                from{" "}
                <span className="different">
                New Horizon College of Engineering (NHCE) 
                </span>
                {/* . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school. */}
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                eSports Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Sports{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
