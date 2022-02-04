import React, { useState } from "react";
import Speech from "./Speech";
import SpeechRecognition, {
  useSpeechRecognition,
  transcript,
} from "react-speech-recognition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
export default function Textbox(props) {
  const handleupclick = () => {
    // console.log("btn clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloclick = () => {
    // console.log("btn clicked")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclear = () => {
    // console.log("btn clicked")
    let newText = "";
    setText(newText);
  };

  const onChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
    // setText("new text");
  return (
    <>
      <h2> {props.text}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onChange}
          id="my box"
          rows="8"
          placeholder="enter text here"
          style={{backgroundColor:props.mode==='dark'?'gery':'light'}}
        ></textarea>

        <div className="container my-2">
          <button className="btn btn-dark mx-2" onClick={handleupclick}>
            convert to upper case
          </button>
          <button className="btn btn-dark mx-2" onClick={handleloclick}>
            convert to lower case
          </button>
          <button className="btn btn-dark mx-2" onClick={handleclear}>
            clear all
          </button>
          <button
            className="btn btn-light mx-2   "
            onClick={SpeechRecognition.startListening}
          >
            {" "}
            on{" "}
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={SpeechRecognition.stopListening}
          >
            <FontAwesomeIcon icon="fas fa-microphone" />
          </button>
          <i class="fas fa-microphone"></i>

          {/* {  <button className= "btn btn-dark mx-2" onClick={resetTranscript}>Reset</button> */} */}
        </div>
        <div className="component my-3">
          <h2>Your Text Summary</h2>
          <p>
            {" "}
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <h3> preview </h3>
          <p>{text}</p>
        </div>
      </div>
      <Speech />
    </>
  );
}
