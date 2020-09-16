
import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

function Search ({showAlert,showClear}){

  const githubContext = useContext(GithubContext);
  const [text,setText] = useState("");

  
   
  const handleChange=(e)=>setText(e.target.value);
  
  const onSubmit=(e)=>{
      e.preventDefault();


     if(text.trim().length===0){
         showAlert('Please enter something','light');
         return ;
     }

     githubContext.searchUsers(text);
       setText("");

  }

        return (
            <div> 
               <form onSubmit={onSubmit} className="form">
                     <input type="text" name="text" placeholder="Search Users..." value={text} onChange={handleChange}/>
                     <input type="submit" className="btn btn-dark btn-block" value="Search" />
               </form>  
              {githubContext.users.length>0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
            </div>
        )
    
}


 Search.propTypes={
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired
 }

export default Search;
