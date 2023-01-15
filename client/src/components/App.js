import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from '../pages/welcome';
import Student from '../pages/student';
import Worker from '../pages/worker';
import Visitor from '../pages/visitor';
function App () {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/student' element={<Student />} />
      <Route path='/worker' element={<Worker />} />
      <Route path='/visitor' element={<Visitor />} />
    </Routes>


  );
}

export default App;
