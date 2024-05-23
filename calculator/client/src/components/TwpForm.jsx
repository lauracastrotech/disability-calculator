import{ TwpDateContext } from "../App"
import { useContext, useState } from "react";


// GETTING WARNING THAT VALUE PROP IS REQUIRED FOR CONTEXT PROVIDER


// Create form that has two inputs and one button
export default function TwpForm() {
    // console.log(TwpDateContext);
    const twpDate = useContext(TwpDateContext);
   
    const EMPTY_USER_FORM = {
        firstName: '',
        lastName: '',
        startDate: '',
        incomeInput: ''
      };

    const [newUser, setNewUser] = useState(EMPTY_USER_FORM);

    function handleChange(event) {

        const name = event.target.name; 
        const value = event.target.value; 
    
        setNewUser((state) => ({...state, [name]:value}))
      
      }
    
    function handleSubmit(event) {
        event.preventDefault(); //important to always include this
        console.log(newUser);
        // console.log(twpDate);
        // update user data - function should be defined in App component
        // addUserTwp
        
      }

    return (
        <>
            <div className = "container">
                <form>
                    <div className="form-group m-2">
                        <label htmlFor="firstName" className="mb-1">First Name</label>
                        <input type="text" className="form-control" name="firstName"
                               value={newUser.firstName} 
                               id="firstName" 
                               onChange= {(e)=> handleChange(e)}
                        />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="lastName" className="mb-1">Last Name</label>
                        <input type="text" className="form-control" name="lastName" 
                               value={newUser.lastName}
                               id="lastName" 
                               onChange= {(e)=> handleChange(e)}
                        />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="startDate" className="mb-1">Date of Employment</label>
                        <input type="date" className="form-control" name="startDate" 
                               value={newUser.startDate} 
                               id="startDate"
                               onChange= {(e)=> handleChange(e)}
                        />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="incomeInput" className="mb-1">Monthly Income ($)</label>
                        <input type="number" className="form-control" name="incomeInput" 
                               value={newUser.incomeInput}
                               id="incomeInput"
                               onChange= {(e)=> handleChange(e)}
                        />
                        <small id="incomeInputHelp" className="form-text text-muted">Do not include your monthly disability benefit.</small>
                    </div>
                    <button className="btn btn-primary btn-sm m-2" onClick={(e) => handleSubmit(e)}>Submit</button> 
                    {/* type="submit" */}
                </form>
            </div>
        </>
    )
}