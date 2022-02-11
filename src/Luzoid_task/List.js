import React from 'react';

function List() {
	
 return (
  <>
  <div className="container">
   <h1 className="text-dark text-center">Signed up users</h1>
   <table class=" container table table-bordered border-primary w-50">
   <tr>
   <th class="bg-success">Email</th>
   <th class="bg-success">Password</th>
   </tr>
   <tr>
   <td>{localStorage.getItem('email')}</td>
   <td>{localStorage.getItem('password')}</td>
   </tr>
   </table>
   
     
 </div>
  </>
  );
}

export default List;
