import React, { useState } from 'react'

const FooterMenu = ({ handleNextClick }) => {
  const [btnText, setBtnText] = useState('Start') 

  const handleStartClick = () => {
    if(btnText === 'Start') {
      setBtnText('Stop')
    } else {
      setBtnText('Start')
    }
  }
  return (
    <div>
      <button type="button"
        className="btn btn-primary"
        onClick={handleStartClick}
      >
        {btnText}
      </button>

      <button type="button"
        className="btn btn-primary"
        onClick={handleNextClick}
      >
        Next State
      </button>


    </div>
  )
}

export default FooterMenu