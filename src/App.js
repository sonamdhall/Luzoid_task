import React,{Fragment} from 'react';
import Main from './Luzoid_task/Main';
import Signup from './Luzoid_task/Signup';
import Login from './Luzoid_task/Login';
import List from './Luzoid_task/List';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
<Router>
<Fragment>
<Main/>

	<Routes>
	<Route exact path='/signup' element={<Signup/>}/>
	<Route exact path='/login' element={<Login/>}/>
	<Route exact path='/list' element={<List/>}/>
	</Routes>
	
</Fragment>
 </Router>

  </>
  );
}

export default App;
