import './App.css';
import HomePage from './pages/home.js';
import ProjectsPage from './pages/projects.js';
import ContactPage from './pages/contact.js';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(HomePage);
  return (
    <>
      <div className='navbar'>
      <NavigationButton text='Ed Korb' link={HomePage}/>
      <NavigationButton text='Projects' link={ProjectsPage}/>
      <NavigationButton text='Contact' link={ContactPage}/>
      </div>
      {currentPage}
    </>
  );

  function NavigationButton({text, link}){
    return(
    <div className='navbutton' onClick={()=> setCurrentPage(link)}>{text}</div>
    );
  }
}



export default App;
