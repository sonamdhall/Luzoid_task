import React from 'react';
import {Link} from 'react-router-dom';
import './Task_css.css';

function Main() {
  return (
  <>
  <div class="main">
  <div class="row">
    <div class="col-sm-8">
		<h1>React Forms</h1>
	</div>
	<div class="col-sm-4">
		  <Link to="/signup" id="link1" className="btn btn-info border-primary">Signup</Link>
		  <Link to="/login" id="link2" className="btn btn-info border-primary">Login</Link>
	</div>
</div>
  </div>

  </>
  );
}

export default Main;
