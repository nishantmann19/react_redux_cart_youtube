import React, { useEffect } from 'react'
import { IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VoiceSearch({ sendData }) {

    const {
        finalTranscript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        if (!listening && finalTranscript !== '') {
            sendData(finalTranscript, resetTranscript)
        };
    }, [finalTranscript]);

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListening = () => SpeechRecognition.stopListening();

    const handleSpeech = (e) => {
        e.preventDefault();
        if (!listening) startListening();
        else stopListening();
    };

    if (!browserSupportsSpeechRecognition) {
        console.warn('::Browser Not Supported For Speech Recognition');
    };

    return (
        <IconButton
            onClick={handleSpeech}
            title="Press to talk"
            sx={{
                background: "#6175ce", color: 'white', "&:hover": {
                    backgroundColor: "#000b9482",
                    transform: "scale(1.05)",
                    color: "#fff",
                }
            }}
        >
            {listening ? <MicIcon /> : <MicOffIcon />}
        </IconButton>
    )
}

export default VoiceSearch