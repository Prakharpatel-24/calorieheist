import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Bmi from './screens/Bmi';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Homescreen from './screens/Homescreen';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      {/* Routing */}
      <Router>
        <Header />
        <Route exact path='/' component={Homescreen} />
        <Route exact path='/bmi' component={Bmi} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
