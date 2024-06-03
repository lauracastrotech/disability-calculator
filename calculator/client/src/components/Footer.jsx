import "../styles/footerStyles.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <div className="container row">
        <div className="container col-7 p-4">
          <h5 id="head-title" className="row col-6">
            Ticket to Work Period Calculator
          </h5>
          <p id="social" className="row col-6">
            Social Media Icons
          </p>
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
          {/* <p id="foot-grey" className="text-end">
            CREATED BY
          </p> */}
          <img id="logo" src={logo} alt="Quill Web Design Logo" />
        </div>
      </div>
    </>
  );
}
