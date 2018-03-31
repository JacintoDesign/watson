import React from 'react';

const VoiceRecorder = (props) => {
   return (
      <div>
        <div className='record-instructions'>
            Press "Start Recording" to record your message. Press "Stop Recording" to output morse code.
        </div>
        <div>
          <button className='btn btn-outline-danger btn-lg' onClick={props.recordButtonHandler}>Start Recording</button>
          <button className='btn btn-outline-success btn-lg' onClick={props.stopRecordHandler}>Stop Recording</button>
        </div>
      </div>
   );
}

export default VoiceRecorder;