// Add link to pdf with details about ticket to work

export default function Footer() {
  return (
    <>
      <div className="container row">
        <div className="container col-6">
          <h5 className="row col-6">Ticket to Work Period Calculator</h5>
          <p className="row col-6">Social Media Icons</p>
        </div>
        <div className="container col-2">
          <h5 className="row">Profile</h5>
          <h6 className="row">Login</h6>
          <h6 className="row">Create Account</h6>
        </div>
        <div className="container col-2">
          <h5 className="row">Resources</h5>
          <h6 className="row">Factsheets</h6>
          <h6 className="row">Work Incentive Programs</h6>
        </div>
        <div className="container col-2">
          <h6 className="row">Created By</h6>
        </div>
      </div>
    </>
  );
}
