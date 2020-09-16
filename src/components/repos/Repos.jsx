import React from 'react'
import ReposItem from "./RepoItem";
import PropTypes from 'prop-types';


function Repos({repos}) {
    return (
              
                repos.map((reposItem,index)=>{
                return <ReposItem repo={reposItem} key={repos.id} /> 
               })
              
           
    )
}

Repos.propTypes={
     repos:PropTypes.array.isRequired
}

export default Repos;
