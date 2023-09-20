
import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/*particles js */}

      {/*navbar */}

      {/*main page content*/}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
