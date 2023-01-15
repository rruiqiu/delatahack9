import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from '../pages/welcome';
import Housing from '../pages/findbank';
import Banking from '../pages/banking';
import Rental from '../pages/rental';
// import Visitor from '../pages/housing';
function App () {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/bank' element={<Banking />} />
      <Route path='/rental' element={<Rental />} />
      {/* <Route path='/visitor' element={<Visitor />} /> */}
    </Routes>
  );
}

export default App;
