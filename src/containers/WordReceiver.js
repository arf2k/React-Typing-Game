import React, {useState, useEffect} from 'react';
import axios from "axios";

let api_key = process.env.REACT_APP_API_KEY 

const WordReceiver = () => {
     
     const [randWord, setRandWord] = useState("")
     

     useEffect(() => {
        const getWord = () => {
             axios.get(`https://api.wordnik.com/v4/words.json/randomWord?api_key=${api_key}`)
             .then((response) => {
                  setRandWord(response.data.word)
             })
        }
        getWord()
      
     }, []) 

     return (
          <>
          <h1>Word</h1>
         <h1>{randWord}</h1> 
         </>
     )


}

export default WordReceiver