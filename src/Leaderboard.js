import Bar from './Bar';
import LeaderBar from './LeaderBar';
const Leaderboard = () => {

    const scores = [
        {
            name: 'Ryan D',
            major: 0,
            minor: 0,
            spelling: 1,
            place: 4
        },
    ]

    const leaders = [
        {
            name: 'Wyatt C',
            major: 0,
            minor: 1,
            spelling: 2,
            place: 1
        },
        {
            name: 'Cameron W',
            major: 0,
            minor: 1,
            spelling: 1,
            place: 2
        },
        {
            name: 'Natalie P',
            major: 0,
            minor: 0,
            spelling: 3,
            place: 3
        },
        
    ]

   

    return (  
        <>
            <div className="leaderboard">
                {
                    leaders.map((leader, index) => {
                        return (
                            <LeaderBar key = {index} {...leader} />
                        )
                    })
                }
                {
                    scores.map((scores, index) => {
                        return(
                            <Bar {...scores} key = {index}/>
                        )
                    })
                }
            </div>
            
        </>
    );
}
 
export default Leaderboard;