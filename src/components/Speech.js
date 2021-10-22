import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



   

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <h2>Microphone: {listening ? 'on' : 'off'}</h2>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;