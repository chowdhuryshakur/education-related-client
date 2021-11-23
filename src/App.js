import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './custome/components/header/Header'
import './App.css';
import Home from './custome/home/Home'
import Courses from './custome/courses/Courses';
import Teachers from './custome/teacher/Teachers';
import AboutUs from './custome/aboutus/AboutUs';
import NotFound from './custome/NotFound';
import Footer from './custome/components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/courses'>
          <Courses></Courses>
        </Route>
        <Route exact path='/teachers'>
          <Teachers></Teachers>
        </Route>
        <Route exact path='/about'>
          <AboutUs></AboutUs>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

