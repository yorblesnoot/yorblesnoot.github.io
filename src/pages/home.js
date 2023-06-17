import './page.css';
import selfie from '../assets/selfie.jpg';

function HomePage()
  {
    return(
      <div className='frame'>
        <div className='block'>
          <img src = {selfie} alt='ED' width="20%" height="20%"/>
            <div className='innerblock'>
              <h1>Ed Korb</h1>
              Hi! I'm Eduardo "Ed" Korb and I'm a software developer for-hire. Before that I was a technical writer, editor, and tutor in algebra/calculus/physics/geometry/SAT/GRE/english/spanish/logic/other stuff I've forgotten!
              I majored in philosophy at the University of Puerto Rico in Rio Piedras and I've been pretty much doing whatever since.

              <div>All that to say that I'll leap at any chance to learn something new, and I love to share information with my fellow travelers!
                If you're looking for a quick study, a deep and eclectic pool of knowledge, and a touch of whimsicality—I'm your guy!</div>
              <div style={{fontSize:'.7em'}}>But seriously, if you have employment opportunities please reach out!</div>
            </div>
        </div>


      </div>
    )
  }

  export default HomePage