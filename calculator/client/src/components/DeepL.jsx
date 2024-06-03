/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-refresh/only-export-components
// import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as deepl from "deepl-node";

const DeepLTranslator = () => {
  const [translation, setTranslation] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("hello");

  const authKey = process.env.API_KEY;
  const translator = new deepl.Translator(authKey);

  (async () => {
    const result = await translator.translateText("Hello, world!", null, "fr");
    console.log(result.text); // Bonjour, le monde !
  })();
  const options = {
    method: "POST",
    url: "https://api-free.deepl.com/v2/translate",
    headers: {
      "content-type": "application/json"
    },
    data: {
      source_lang: "en",
      target_lang: "fr",
      text: textToTranslate
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(options);
      setTranslation(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //     useEffect(() => {
  //             getData();
  //         }, []);

  //     const handleInputChange = (e) => {
  //     setTextToTranslate(e.target.value);
  // };

  //   return (
  //     <div>
  //       <input type="text" value={textToTranslate} onChange={handleInputChange} />
  //       <p>Translation: {translation}</p>
  //     </div>
  //   );
};

// export default DeepLTranslator;
