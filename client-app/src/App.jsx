import LoginApp from './LoginApp'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeApp from './HomeApp';
import CreateApp from './CreateApp';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginApp/>} exact/>
          <Route path='/home' element={<HomeApp/>} exact/>
          <Route path='/create-order' element={<CreateApp/>} exact/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
