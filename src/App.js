import './App.scss';
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom" 

function App() {
  return <Router>
    <Routes>
    <Route paths=" /" element = {<Home />}/>
    </Routes>
  </Router>
}

export default App;
