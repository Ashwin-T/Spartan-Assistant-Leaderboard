import Leaderboard from './Leaderboard';

const Source = () =>{
    
const handleNewLink = (url)=>{
    window.open(url, '_blank');
    }
    const url1 = 'https://the-spartan-assistant.web.app/';
    const url2 = 'https://the-spartan-assistant.web.app/';

return(
    <div className="container flex column center">
    <br />
    <div className="flex column center center">
        <h1>Spartan Assistant Leaderboard</h1>
        <br />
        <Leaderboard />
        <h3>
            Bugs Solved: 12       
        </h3>
        <br/>
        <div className="buttons flex center">
            <button onClick = {()=>handleNewLink(url1)}>Visit the Site</button>
            <button onClick = {()=>handleNewLink(url2)}>Report a Bug</button>
        </div>
    </div>
    </div>
)
}
export default Source;