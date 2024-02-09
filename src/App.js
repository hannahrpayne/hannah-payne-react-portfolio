import logo from './logo.svg';
import {React, useEffect } from 'react';
import './App.css';
// import { NavBar} from './components/NavBar';
// import {Banner} from './components/Banner';
// import {Skills} from './components/Skills';
// import {Projects} from './components/Projects';
// import {Footer} from './components/Footer';
import {Contact} from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {HomePage} from './components/HomePage';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'; 



const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index element={ <HomePage/> } />
    <Route path="/contact" element={ <Contact /> } />
    <Route path='/home' element={HomePage}></Route>
  </Route>
));
function App() {
  // useEffect(() => {
  //   fetch('/api')
  //   .then((res) => res.json())
  //   .then((data) => { console.log(data)})
  // }, [])


  return (

    <RouterProvider router={appRouter} />
  );
}

// function App() {
//   // return (
//   //   <div className="App">
//   //     <NavBar />
//   //     <Banner />
//   //     <Skills />
//   //     <Projects />
//   //     <Footer />
//   //   </div>


//   return (
//     <HomePage />

//   );
// }

export default App;
