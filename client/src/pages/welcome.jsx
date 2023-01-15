import { Link } from 'react-router-dom';
import video1 from "./videos/1.mp4";
import Header from './Header';
function Welcome () {
  return (
    <section>
      <Header />

      <div className='welcome'>
        {/* <header>
        <p id="rbc">Royal Bank</p>
      </header> */}

        <h1>Welcome to Canada</h1>
        <div className='video'>
          <video src={video1} width="800" height="500" controls="controls" autoplay="true" />
        </div>
        <div>
          <nav>
            <ul>
              <button><li class="button"><Link to="/student"> <h3>Housing</h3></Link></li></button>
              <button><li class="button"><Link to='/worker'><h3>Rentals</h3></Link></li></button>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )

}

export default Welcome

