import React from 'react'

const FooterMenu = ({handleNextClick}) => {
  return (
    <div>
        <button type="button" 
                className="btn btn-primary"
                onClick = {handleNextClick}>
                    Next State</button>
    </div>
  )
}

export default FooterMenu