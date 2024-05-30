<<<<<<< HEAD
import React, { useEffect, useState } from "react";
// import * as deepl from 'deepl-node';
=======
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
>>>>>>> database

export default function Header() {
    const [translatedText, setTranslatedText] = useState('');

    const apikey = process.env.API_KEY;

    useEffect(() => {
        const fetchTranslation = async () => {
            try {
                const response = await fetch('/translate');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTranslatedText(data.text);
            } catch (error) {
                console.error("Error fetching translation:", error);
            }
        };
        
        fetchTranslation();
    }, []);

    // const authKey = process.env.API_KEY;
    // const authKey = "307929f4-cbdb-4ab3-967e-b278c212bdcf:fx";
    // const translator = new deepl.Translator(authKey);
    
    // (async () => {
    //     const result = await translator.translateText('Hello, world!', null, 'fr');
    //     console.log(result.text); // Bonjour, le monde !
    // })();

    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        const fetchTranslation = async () => {
            try {
                const response = await fetch('/translate');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTranslatedText(data.text);
            } catch (error) {
                console.error("Error fetching translation:", error);
            }
        };
        
        fetchTranslation();
    }, []);
    
    return (
        <div className="container">
            <h4>
                <span className="material-symbols-outlined m-2">confirmation_number</span>
                Ticket to Work Period Calculator
            </h4>
            <p className="m-2">
                If you are enrolled in Ticket to Work, you know that you continue to receive disability benefits.
                This calculator takes your monthly income and the date that you began working. It will give you the
                month that you will stop receiving benefits.
            </p>
            <p>{translatedText}</p>
        </div>
    );
}


// export default function Header() {

//     return (
//         <>
//             <div className="container">
//                 <h4>
//                 <span className="material-symbols-outlined m-2"> confirmation_number</span>
//                 Ticket to Work Period Calculator
//                 </h4>
//                 <p className="m-2">If you are enrolled in Ticket to Work, you know that you continue to receive disability benefits. This calculator takes your monthly income and the date that you began working. It will give you the month that you will stop receiving benefits.</p>
//             </div>
//         </>
//     )
// }

