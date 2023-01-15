import { Link } from 'react-router-dom';
import video1 from "./videos/1.mp4";
import Header from './Header';
function Welcome () {
  return (
    <section>
      {/* <Header /> */}

      <div className='welcome'>
        {/* <header>
        <p id="rbc">Royal Bank</p>
      </header> */}

        <h1 className='WelcomeCaword'>Welcome to Canada!</h1>
        <div className='video'>
          <video src={video1} width="350" height="500" controls="controls" autoplay="true" />
        </div>
        {/* <div>
          <nav>
            <ul className='button-design'>
              <button><li className='button-home'><Link to="/bank" style={{ textDecoration: 'none', }}> BANK</Link></li></button>
              <button><li className='button-home'><Link to='/rental' style={{ textDecoration: 'none' }}>RENTALS</Link></li></button>
            </ul>
          </nav>
        </div> */}

        <div className='button-welcome'>
          <nav>
            <button className="custom-button1"><Link to="/bank" style={{ textDecoration: 'none', }}>BANKING</Link></button>
            <button className="custom-button2"><Link to='/rental' style={{ textDecoration: 'none' }}>RENTALS</Link></button>
          </nav>

        </div>
      </div>
    </section>
  )

}

export default Welcome

