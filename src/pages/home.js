import './page.css';
import selfie from '../assets/selfie.jpg';

function HomePage()
  {
    return(
      <div className='frame'>
        
        <div className='block' style={{justifyContent:'center'}}>
          <img src = {selfie} alt='ED' width="40%" height="40%"/>
            
        </div>
        <div className='block' style={{justifyContent:'center'}}>
          <div className='innerblock' style={{justifyContent:'center'}}>
            <div className='med-word'>
              Hi! My name is <span className='big-word'>Eduardo "Ed" Korb</span> and I'm a Unity and React Developer. 
            </div>
            <br></br>
            <div className='thin-column'>Before that I was a technical writer, editor, and tutor in algebra, calculus, physics, geometry/, SAT, GRE, english,spanish and logic.
            I love to teach, and I love to learn.
              If you're looking for a quick study, a deep and eclectic pool of knowledge, and a touch of whimsy—I'm your guy!</div>
          </div>
        </div>
      </div>
    )
  }

  export default HomePage