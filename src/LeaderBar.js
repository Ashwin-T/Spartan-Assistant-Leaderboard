const LeaderBar = ({name, major, minor, spelling, place}) => {
    const images = [
        'images/first.jpg',
        'images/second.jpg',
        'images/third.jpg',
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