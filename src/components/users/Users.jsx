import React,{useContext} from 'react'
import UserItem from './UserItem';
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const  Users= ()=> {
    
    const githubContext = useContext(GithubContext);
     const {loading,users} = githubContext;
        return (
            <div style={userStyle}>
                {loading && <Spinner />}                
                {users.map((user,index)=>{
                    return <UserItem key={index} user={user} />
                })}
                
            </div>
        )
    }

const userStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

Users.propTypes={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}



export default Users;
