
import React from 'react';

const TranslatedText = (props) => {
   return (
      <div className='translation-container'>
         <div className='translation-text'>
            {props.originalText}
         </div>
         <div className='translation-message'>
            Translated to morse code is
         </div>
         <div className='translation-text'>
            {props.translatedText}
         </div>
      </div>
   );
}

export default TranslatedText;