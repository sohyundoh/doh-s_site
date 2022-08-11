
import './App.css';
import {Route} from 'react-router-dom';
import Bar from './components/Bar';
import Home from './page/home/Home'
import Resume from './page/resume/Resume';
import Aboutme from './page/aboutme/Aboutme';
import Life from './page/life/Life';
import logo1 from './assets/image/logo1.png';
const App = () => {
  return (
    <div className = 'App'>
      <img className='Image' src = {logo1} alt='logo1'/>
      <Bar className = 'Bar'/>
      <Route exact = {true} path = "/" component ={Home}/>
      <Route path = "/aboutme" component ={Aboutme}/>
      <Route path = "/life" component ={Life}/>
      <Route path = "/resume" component = {Resume}/>
      <div className='footer'>
        <p className='footerline'>@this site made by Sohyun Doh.</p>
      </div>
    </div>
  );
};

export default App;
