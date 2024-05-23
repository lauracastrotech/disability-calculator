// Create form that has two inputs and one button
export default function TwpForm() {

    return (
        <>
            <div className = "container">
                <form>
                    <div className="form-group m-2">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="startDate">Date of Employment</label>
                        
                        <input type="date" className="form-control" id="startDate" aria-describedby="startDateHelp" placeholder="Enter the date that you started to work." />
                        {/* <small id="startDateHelp" className="form-text text-muted">If you are not sure, you can use the date of your first day.</small> */}
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="incomeInput">Monthly Income ($)</label>
                        <input type="number" className="form-control" id="incomeInput" placeholder="Monthly Income" />
                        <small id="incomeInputHelp" className="form-text text-muted">Do not include your monthly disability benefit.</small>
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </>
    )
}