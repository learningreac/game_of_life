import React, { useState } from 'react'
import '../footer.css';

const FooterMenu = ({ handleNextClick,handleGenerateClick }) => {
  const [btnText, setBtnText] = useState('Start') 

  const handleStartClick = () => {
    if(btnText === 'Start') {
      setBtnText('Stop')
    } else {
      setBtnText('Start')
    }
  }
  return (
    <div className='footer_btns'>
       <button type="button"
        className="btn btn-primary btn-sm"
        onClick={handleGenerateClick}
      >
       Generate
      </button>
      <button type="button"
        className="btn btn-primary btn-lg"
        onClick={handleStartClick}
      >
        {btnText}
      </button>

      <button type="button"
        className="btn btn-primary btn-sm"
        onClick={handleNextClick}
      >
        Next State
      </button>


    </div>
  )
}

export default FooterMenu