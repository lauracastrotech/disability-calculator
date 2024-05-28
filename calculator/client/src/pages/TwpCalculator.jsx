/* eslint-disable no-unused-vars */
// Add brief description of what the calculator does
import React from "react"
import TwpForm from "../components/TwpForm"
import TwpDate from "../components/TwpDate"
import {TwpDateProvider} from '../context/TwpDateContext'

// addUserDate
    // take form data object as a parameter
    // send data to database
  
  // calculateTwpDate
    // take income and date
    // initialize income  limit
    // if income >= 1110
      // add 9 months to the date
      // return date that is the first of the 10 month

export default function TwpCalculator() {

    return(
        <>
        <TwpDateProvider>
            <div className = "container">
                <p className="m-2">If you are enrolled in Ticket to Work, you know that you continue to receive disability benefits. This calculator takes your monthly income and the date that you began working. It will give you the month that you will stop receiving benefits.</p>
                
                <div className="row">
                    <div className="col-6">
                        < TwpForm />
                    </div>
                    
                    <div className="col-6">
                         {/* < TwpDate /> */}
                    </div>
                 
                </div>
            </div>
        </TwpDateProvider>
        </>
    )
}