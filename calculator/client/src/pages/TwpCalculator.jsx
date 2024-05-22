/* eslint-disable no-unused-vars */
// Add brief description of what the calculator does
import React from "react"
import TwpForm from "../components/TwpForm"

export default function TwpCalculator() {

    return(
        <>
            <div className = "container">
                <p>If you are enrolled in Ticket to Work, you know that you continue to receive disability benefits. This calculator takes your monthly income and the date that you began working. It will give you then month that you may lose your benefit.</p>
                
                <div className="row">
                    <div className="col-6">
                        < TwpForm />
                    </div>
                    
                    <div className="col-6">
                         {/* < TwpDate /> */}
                    </div>
                 
                </div>
            </div>
        </>
    )
}