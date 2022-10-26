import React, { useState } from 'react'
import './footer.css';

const FooterMenu = ({ handleNextClick,handleGenerateClick,handleStartClick }) => {
  const [btnText, setBtnText] = useState('Start') 

  // const handleStartClick = () => {
  //   if(btnText === 'Start') {
  //     setBtnText('Stop')
  //   } else {
  //     setBtnText('Start')
  //   }
  // }
  return (
    <div id='footer_container'>
       <button type="button" style={{display:'block'}}
        className="btn btn-primary btn-sm"
        onClick={handleGenerateClick}
      >
       Generate New
      </button>
      <button type="button"  style={{display:'block'}}
        className="btn btn-primary btn-lg"
        onClick={handleStartClick}
      >
        {btnText}
      </button>

      <button type="button"  style={{display:'block'}}
        className="btn btn-primary btn-sm"
        onClick={handleNextClick}
      >
        Next State
      </button>
    </div>
  )
}

export default FooterMenu