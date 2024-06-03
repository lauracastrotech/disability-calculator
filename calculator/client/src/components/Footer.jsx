import "../styles/footerStyles.css";
import logo from "../assets/logo.png";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  return (
    <>
      <div className="container row">
        <div className="container col-7 p-4">
          <h5 id="head-title" className="row col-6">
            Ticket to Work Period Calculator
          </h5>
          <div className="container row col-6">
            <img
              id="discord"
              className="social col-4"
              src={discord}
              alt="Discord"
            />

            <img
              id="github"
              className="social col-4"
              src={github}
              alt="Github Repository"
            />

            <img
              id="linkedin"
              className="social col-4"
              src={linkedin}
              alt="LinkedIn profile"
            />
          </div>
        </div>
        <div className="container col-2 p-4">
          <h5 className="foot-green row">Profile</h5>
          <p className="row text-grey">Login</p>
          <p className="row text-grey">Create Account</p>
        </div>
        <div className="container col-2 p-4">
          <h5 className="foot-green row">Resources</h5>
          <p className="row text-grey">Factsheets</p>
          <p className="row text-grey">Work Incentive Programs</p>
        </div>
        <div className="container col-1">
          <p id="foot-grey" className="text-end">
            CREATED BY
          </p>
          <img id="logo" src={logo} alt="Quill Web Design Logo" />
        </div>
      </div>
    </>
  );
}
