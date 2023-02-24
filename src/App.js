import Home from './router/Home'
import VoiceMenu from './router/VoiceMenu';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/voice'  element={<VoiceMenu/>}/>
          <Route path="*" element={"Not Fond"} />
        </Routes>
      </Router>
  );
}

export default App;
