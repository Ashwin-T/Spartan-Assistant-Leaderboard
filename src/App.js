import Source from './Source';
import {Routes, Route} from "react-router-dom";
const App = ()=>{

  return (
   <>
        <Routes>
          <Route path="/" element={<Source />}></Route>
        </Routes>
   </>
  );
}

export default App;
