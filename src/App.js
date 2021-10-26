
import './App.css';
import NavBBar from './components/NavBBar';
import Bio from './components/Bio'
import Projjects from './components/Projjects';
import Conactme from './components/Conactme';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBBar name ='Joe Doe' />
      <Bio name ='Joe Doe' />
      <Projjects/>
      <Conactme/>
      <Footer/>
    </div>
  );
}

export default App;
