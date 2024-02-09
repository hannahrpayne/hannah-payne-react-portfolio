
import { NavBar} from './NavBar';
import {Banner} from './Banner';
import {Skills} from './Skills';
import {Projects} from './Projects';
import {Footer} from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css'; 


export const HomePage = () => {
 

  return (
    <div className="HomePage">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />

    </div>

  );
}


