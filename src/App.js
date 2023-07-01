import './App.css';
import HomePage from './pages/home.js';
import ProjectsPage from './pages/projects.js';
import ContactPage from './pages/contact.js';
import { useState } from 'react';

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  const pageTitles = ['Home', 'Projects', 'Contact'];
  const pageDestinations = [HomePage, ProjectsPage, ContactPage];
  const pages = pageTitles.map((title, index) => {return (<NavigationButton text={title} link={index} change={setPageIndex} key={index} highlight={highlightCurrent(index)}/>)}
  );

  function highlightCurrent(i)
  {
    if(i === pageIndex)
    {
      return true;
    }
    else return false;
  }
  const currentPage = pageDestinations[pageIndex]();
  return (
    <>
      <div className='navbar'>
        <h1 className='navname'>ED KORB</h1><div></div><div></div><div></div><div></div><div></div>
      {pages}
      </div>
      {currentPage}
    </>
  );
}

function NavigationButton({text, link, change, highlight}){
  let wordColor = '';
  let underline = '';
  if(highlight === true)
  {
    wordColor = 'white';
    underline = '5px solid white';
  }
  return(
  <div className='navbutton' onClick={()=> change(link)} style={{color: wordColor, borderBottom: underline}}>{text}</div>
  );
}


export default App;
