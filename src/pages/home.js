import './page.css';
import selfie from '../assets/selfie.jpg';

function HomePage()
  {
    return(
      <div className='frame'>
        
        <div className='block' style={{justifyContent:'center', line: '0'}}>
          <img src = {selfie} alt='ED' width="30%" height="30%"/>
            
        </div>
        <div className='block' style={{marginLeft: '10%', marginRight: '10%'}}>
          <div className='innerblock' style={{justifyContent:'center'}}>
            <div className='med-word'>
            Hi! My name is <span className='big-word'>Eduardo Korb</span>, and I'm a Game and Web Developer! 
            </div>
            <div className='thin-column'>
              I'm particularly interested in Unity, React, procedural generation, pathfinding algorithms, 3D modeling, and VFX; and I like to incorporate all those elements into my game development!
            </div>
            <br></br>
            <div className='thin-column'>Before rebooting my career as a software developer, I was a technical writer, editor, and tutor in algebra, calculus, physics, geometry, SAT, GRE, english, spanish, and logic.
            I love to teach and I love to learn.
              If you're looking for a quick study, a deep and eclectic pool of knowledge, and a touch of whimsy—I'm your guy!</div>
          </div>
        </div>
      </div>
    )
  }

  export default HomePage