import Sidebar from './Components/Sidebar'
import './App.css';
import Home from "./Components/Home"
import Mail from './Components/Mail'
import Account from './Components/Account'
import Gallery from './Components/Gallery'
import Setting from './Components/Setting'
import { Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/mail" component={Mail}/>
      <Route exact path="/account" component={Account}/>
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/setting" component={Setting}/>
    </div>
  );
}

export default App;
