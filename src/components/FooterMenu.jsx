import './footer.css';

const PlayBtn = ({ isStart, handleStartClick }) => {

  if (!isStart) {
    return (
      <button type="button" style={{ display: 'block' }}
        className="btn btn-primary btn-lg"
        onClick={handleStartClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        <span> Start</span>
      </button>
    )
  } else {
    return (
      <button type="button" style={{ display: 'block' }}
        className="btn btn-primary btn-lg"
        onClick={handleStartClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
        <span> Stop</span>
      </button>
    )
  }
}


const FooterMenu = ({ isStart, handleNextClick, handleRestartClick, handleStartClick }) => {


  return (
    <div id='footer_container'>
      <button type="button" style={{ display: 'block' }}
        className="btn btn-primary "
        onClick={handleRestartClick}
      >
        <span>Restart</span>
      </button>

      <PlayBtn isStart={isStart} handleStartClick={handleStartClick} />

      <button type="button" style={{ display: 'block' }}
        className="btn btn-primary "
        onClick={handleNextClick}
      >
        <span>Next State</span>
      </button>
    </div>
  )
}

export default FooterMenu