import './page.css';
import slime from '../assets/slimemini.gif'
import robot from '../assets/botlegs.gif'
import lantern from '../assets/lflies.png'
import site from '../assets/site.png'
import tree from '../assets/tree.png'

function ProjectsPage()
{
  return(
    <div  className='frame'>
        <Project title='Prototype Tree Generator' imageurl={tree} 
        blurb="What started as a potential level idea for Tiny Robot Tactics became a week-long quest to create the perfect procedural tree generator, built based on an research paper I found online. Uses Djikstra's algorithm and guiding vectors to create natural-looking branch patterns. It ultimately didn't seem conducive to compelling gameplay, so it's currently sitting in disuse. It did, however, produce some visually interesting specimens."/>
        <Project title='Tiny Robot Tactics' imageurl={robot} 
        blurb="A micro-CRPG I am currently working on in Unity. It emulates the combat feel of Baldur's Gate 3 while extrapolating that gameplay into the third dimension and replacing all the characters with little robots. Makes extensive use of procedural animation to bring modular characters to life."/>
        <Project title="Don, Lanternflies, N'at" imageurl={lantern} link="https://globalgamejam.org/games/2024/don-lanternflies-nat-8"
        blurb="For the 2024 Global Game Jam, I joined an already-established team with a clear vision. Deviating from my typical coding focus, I modeled and rigged a spotted lanternfly for the team in 24 hours. Then, I helped the team debug their Unity code and complete their game. Download the finished product "/>
        <Project title='Slime Alchemist' imageurl={slime} link="https://store.steampowered.com/app/2567800/Slime_Alchemist/" 
        blurb="My first game, a roguelike deckbuilder I began developing while enrolled in web development bootcamp. Several months after finishing bootcamp, I released the game into Early Access on Steam. Although I'm proud of what I learned and accomplished making Slime Alchemist, my focus is now on sustainably finalizing the project to move onto better conceived works. Visit the steam page  "/>
        <Project title='yorblesnoot.github.io' imageurl={site} 
        blurb="You guessed it, it's this exact website! I made it in React to hone my js/html/css skills. I never claimed design was my strong suit, but I did make a dope navigation bar that I'm proud of."/>
        <Project title='MineSweeper' imageurl='https://img-9gag-fun.9cache.com/photo/av8WwvE_460s.jpg' 
        blurb="A clone of the popular(?) game MineSweeper for the Windows CLI, which I put together over the course of an 8-hour day of web development bootcamp instead of doing our actual assignment. The coolest part of it was writing the logic to reveal nearby squares when you reveal a square with no mines around it; that took some braining to figure out."/>
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
            <div className='projectimage'>
                <img src={imageurl} alt='project' width={300} height={300}/>
            </div>
            
            <div className='projectwords'>
                <h1>{title}</h1>
                {blurb}
                <a href={link}>{linkblurb}</a>
                <div style={{paddingTop: '50px'}}></div>
            </div>

        </div>
    )
}

export default ProjectsPage