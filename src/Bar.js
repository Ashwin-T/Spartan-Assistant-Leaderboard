const Bar = ({name, major, minor, spelling, place}) => {

    return ( 
            <>
                <div className="bar flex" style = {{justifyContent: 'space-around', alignItems: 'center'}}>
                    <h3>{place}. {name}</h3>
                    <h4>Total: {major * 5 + minor * 3 + spelling * 1}pts</h4>
                    <div className="bar-content flex" style = {{justifyContent: 'space-around', alignItems: 'center'}}>
                        <p>Major: {major}</p>
                        <p>Minor: {minor}</p>
                        <p>Spelling: {spelling}</p>
                    </div>
                </div>
        </>
    );
}
 
export default Bar;