import { BrowserRouter as Router, Route} from 'react-router-dom';
import AddNotes from './components/AddNotes';
import Notes from './components/Notes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Route path='/' exact>
          <Notes/>
        </Route>

        <Route path='/notes'>
          <Notes/>
        </Route>

        <Route path='/add'>
          <AddNotes/>
        </Route>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
