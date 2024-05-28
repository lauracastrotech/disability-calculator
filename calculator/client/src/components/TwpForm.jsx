/* eslint-disable no-unused-vars */
// import{ TwpDateContext } from "../App"
import { useState } from "react";
import {useTwpDateContext} from '../context/TwpDateContext'
import { DateTime } from "luxon";

// Create form that has two inputs and one button
export default function TwpForm() {
    // import API key and assign it to a variable
    // create a function to translate text with in the form
    // const translateForm = (text) =>



    const EMPTY_USER_FORM = {
        firstName: '',
        lastName: '',
        startDate: '',
        incomeInput: ''
      };

    const [newUser, setNewUser] = useState(EMPTY_USER_FORM);

    const {twpDate, setTwpDate} = useTwpDateContext();
    const now = DateTime.now(); //test adding dates
    const plus9Months = now.plus({months:9});//add 9 month to get date the benefits will stop
    
    function handleChange(event) {

        const name = event.target.name; 
        const value = event.target.value; 
    
        setNewUser((state) => ({...state, [name]:value}))
      
      }
    
    function handleSubmit(event) {
        event.preventDefault(); //important to always include this
        
        // Convert startDate input to a Luxon DateTime instance 
        let convertInput = DateTime.fromISO(newUser.startDate);

        // Add 9 months
        let afterConvert = convertInput.plus({months:9});

        // console.log(`This is 9 months from now ${plus9Months}`);
        console.log(`date input => ${newUser.startDate}`);
        console.log(`This is the converted date input ${afterConvert}`);
        setTwpDate(afterConvert);
        console.log(`The previous twpDate value... ${twpDate}`);
        
        
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