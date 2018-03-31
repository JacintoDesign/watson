import React from 'react';
import './Translator.css';
import TranslatedText from './TranslatedText';
import VoiceRecorder from './VoiceRecorder';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

class Translator extends React.Component {
   constructor() {
      super();
      this.state = {
         originalText: '',
         translatedText: '',
         voiceStream: null
      }
   }

   recordButtonHandler = (event) => {
      fetch('http://localhost:3002/api/speech-to-text/token')
      .then(response => {
         return response.text();
      })
      .then(token => {
         let stream = recognizeMicrophone({
            token: token,
            objectMode: true, // send objects instead of text
            extractResults: true, // converty {results: [{alternatives[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: true // optional - performs basic formatting on the results such as capitals and periods
         });

         stream.on('data', (data) => {
            this.setState({
               originalText: data.alternatives[0].transcript
            });
         });

         stream.on('error', (err) => {
            console.log(err);
         });

         this.setState({
            voiceStream: stream
         });
      })
      .catch(error => {
         console.log(error);
      });
   }

   stopRecordHandler = (event) => {
      //If a recording stream is active, stop it.
      if (this.state.voiceStream != null) {
         this.state.voiceStream.stop();
         this.setState({
            voiceStream: null
         });
      }

      //Call the API to translate the text into morse code.
      let { originalText } = this.state;
      fetch(`https://api.funtranslations.com/translate/morse.json?text=${originalText}`)
      .then(response => response.json())
      .then(data => {
         if (data.contents) {
            this.setState({
               translatedText: data.contents.translated
            });
         } else {
            this.setState({
               translatedText: data.error.message
            });
         }
      })
      .catch(error => {
         console.log(error);
      });
   }

   render() {
      return(
         <div className="main">
            <div className="section text-center">
               {
                  this.state.selectedLanguage !== '' ?
                  <VoiceRecorder
                     recordButtonHandler={this.recordButtonHandler.bind(this)}
                     stopRecordHandler={this.stopRecordHandler.bind(this)}
                  />
                  : null
               }
               {
                  this.state.originalText !== '' ?
                  <TranslatedText
                     originalText={this.state.originalText}
                     selectedLanguage={this.state.selectedLanguage}
                     translatedText={this.state.translatedText}
                  />
                  : null
               }
            </div>
         </div>
      );
   }
}

export default Translator;