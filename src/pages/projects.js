import './page.css';
import slime from '../assets/slimemini.gif'
import robot from '../assets/pathing.gif'
import lantern from '../assets/lflies.png'
import site from '../assets/site.png'
import tree from '../assets/trees.gif'
import ctq from '../assets/ctq.gif'
import monkey from '../assets/monkey.gif'
import dash from '../assets/daydash.gif'

function ProjectsPage()
{
  return(
    <div  className='frame'>
        <div className='projectholder'>
            <div className='projectcolumn' style={{alignSelf: 'right'}}>
                <Project title='Tiny Robot Tactics' imageurl={robot} 
                blurb="A micro-CRPG I am currently working on in Unity. It emulates the combat feel of Baldur's Gate 3 while extrapolating that gameplay into the third dimension and replacing all the characters with little robots. Uses a Breadth-First Search to allow units to pathfind in a fully 3-D space, and procedural animation with inverse kinematics to animate their bodies."/>
                <Project title='Hyper Light Monkey' imageurl={monkey} link="https://trashmaker.itch.io/hyper-light-monkey"
                blurb="Help a tail-less monkey with two grappling hooks hurdle through space, while (unsuccesfully) navigating a technicolor obstacle course. Within the 72 hours of the 2024 Academy Pittsburgh Game Jam, I modeled the monkey, designed VFX for the environment, and built the ragdoll and procedural animation. Download the finished game "/>
                <Project title='Prototype Tree Generator' imageurl={tree} 
                blurb="What started as a potential level idea for Tiny Robot Tactics became a week-long quest to create the perfect procedural tree generator, built based on a research paper I found online. Uses Djikstra's algorithm and guiding vectors to create natural-looking branch patterns. It ultimately didn't seem conducive to compelling gameplay, so it's currently sitting in disuse. It did, however, produce some visually interesting specimens."/>
                <Project title="Don, Lanternflies, N'at" imageurl={lantern} link="https://globalgamejam.org/games/2024/don-lanternflies-nat-8"
                blurb="For the 2024 Global Game Jam, I joined an already-established team with a clear vision. Deviating from my typical coding focus, I modeled and rigged a spotted lanternfly for the team in 24 hours. Then, I helped the team debug their Unity code and complete their game. Download the finished product "/>
            </div>
            <div className='projectcolumn' style={{alignSelf: 'left'}}>
                <Project title='Slime Alchemist' imageurl={slime} link="https://store.steampowered.com/app/2567800/Slime_Alchemist/" 
                blurb="A roguelike deckbuilder I began developing while enrolled in web development bootcamp. Several months after finishing bootcamp, I released the game into Early Access on Steam. I designed the gameplay and visual effects, wrote the entirety of the game's code, and built the environments from store-bought assets. Visit the steam page  "/>
                <Project title='Care Team Quest' imageurl={ctq} 
                blurb='A Pacman clone and "medical education experience" I made in Unity while working for Brandgage. I programmed the entirety of the game logic and worked alongside a designer to bring the game to life.'/>
                <Project title='Day of Giving Dash' imageurl={dash} link="https://pittgame.academypgh.com/"
                blurb="A Canabalt clone made for the University of Pittsburgh's website. I worked with multiple different artists and did the majority of the gameplay and UI programming. Play the finished game "/>
                <Project title='yorblesnoot.github.io' imageurl={site} 
                blurb="You guessed it, it's this exact website! I built it in react to serve as a simple online portfolio for my development work."/>
            </div>
        </div>
    </div>
  )
}

function Project({title, imageurl, blurb, link})
{
    let linkblurb = "";
    if(link)
    {
        linkblurb = "here!"
    }
    return(
        <div className='projectdisplay'>
            <div className='flip-display'>
                <div className='flip-front'>
                    <img src={imageurl} alt='project'/>
                </div>
                <div className='flip-back'>
                    <div className='back-text'>
                        <h1>{title}</h1>
                        {blurb}
                        <a href={link}>{linkblurb}</a>
                        <div style={{paddingTop: '50px'}}></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage