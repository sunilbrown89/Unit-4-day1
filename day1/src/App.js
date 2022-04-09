
import './App.css';
import {List1, List2} from './Q1/List'
import JoinUs from './Q2/JoinUs'
import Settings from './Q2/Settings'
import Login from './Q2/Login'
import ContactUs from './Q2/ContactUs'
import Search from './Q2/Search'
import Help from './Q2/Help'
import Home from './Q2/Home'
import Download from './Q2/Download'


function App() {
  return (
    <>
    <div className="App">
      <List1/>
      <List2/>
    </div>
    <div className="buttons">
      <JoinUs/>
      <Settings/>
      <Login/>
      <ContactUs/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
    </div>
    </>
  );
}

export default App;
