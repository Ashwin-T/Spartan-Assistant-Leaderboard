import gold from './images/first.jpg'
import silver from './images/second.jpg'
import bronze from './images/third.jpg'
const LeaderBar = ({name, major, minor, spelling, place}) => {
    const images = [
        gold,
        silver, 
        bronze
    ]

    return (  
        <>
            <div className="bar flex" style = {{justifyContent: 'space-around', alignItems: 'center'}}>
                <img src = {images[place - 1]} alt = "place" />
                <div className="flexbox column center">
                    <h3>{name}</h3>
                    <br />
                    <h4>Total: {major * 5 + minor * 3 + spelling * 1}pts</h4>
                </div>
                <br />
                <div className="bar-content flex" style = {{justifyContent: 'space-around', alignItems: 'center'}}>
                    <p>Major: {major}</p>
                    <p>Minor: {minor}</p>
                    <p>Spelling: {spelling}</p>
                </div>
               
            </div>        
        </>
    );
}
 
export default LeaderBar;