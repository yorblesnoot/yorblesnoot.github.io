import './page.css';

function ProjectsPage()
{
  return(
    <div className='frame'>
        <Project title='yorblesnoot.github.io' imageurl='https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg' blurb="You guessed it, it's this exact website! I made it in React to hone my js/html/css skills. I never claimed design was my strong suit, but I did make a dope navigation bar that I'm proud of."/>
        <Project title='BlueJam' imageurl='https://www.masalaherb.com/wp-content/uploads/2017/07/blueberry-jam-2.jpg' blurb="Made in Unity/C# and definitely not done yet, this project reflects my irrational commitment to building my dream game with minimal experience or preparation. It's going pretty well, actually, and has taught me a ton of stuff about coding, game design, app architecture, and perseverence. "/>
        <Project title='MineSweeper' imageurl='https://img-9gag-fun.9cache.com/photo/av8WwvE_460s.jpg' blurb="A clone of the popular(?) game MineSweeper for the Windows CLI, which I put together over the course of an 8-hour day of web development bootcamp instead of doing our actual assignment. The coolest part of it was writing the logic to reveal nearby squares when you reveal a square with no mines around it; that took some braining to figure out."/>
    </div>
  )
}

function Project({title, imageurl, blurb})
{
    return(
        <div className='projectdisplay'>
            <img src={imageurl} width={300} height={300}/>
            <div className='projectwords'>
                <h1>{title}</h1>
                {blurb}
                <div style={{paddingTop: '50px'}}>{"(Images to be replaced with gifs... at some point)"}</div>
            </div>

        </div>
    )
}

export default ProjectsPage