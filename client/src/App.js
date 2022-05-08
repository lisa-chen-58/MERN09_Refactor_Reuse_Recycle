import Main from './views/Main';
import OneProduct from './components/OneProduct';
import {Router } from '@reach/router';
import './App.css';
import ModifyProduct from './components/ModifyProduct';

function App() {
  return (
    // <div onWheel = {() => console.log("hello")}
    // className="App">
    <div className="App">
      <Router>
        {/* MOVED TO MAIN.JS
        <ProductForm path = "/"/>
        <Display path = "/"/> */}
        <Main path="/"/>
        <OneProduct path = "/products/:id"/>
        <ModifyProduct path="/products/update/:id"/>
      </Router>
    </div>
  );
}

export default App;
