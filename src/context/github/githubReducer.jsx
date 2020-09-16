import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
 }from '../types';

 
 const GithubReducer = (state,action) =>{

   switch(action.type){

     case SET_LOADING:
              return {
                  ...state,
                  loading:true
              }



     case SEARCH_USERS:
         return {
             ...state,
             users:action.payload,
             loading:false

         }

     case CLEAR_USERS:
         return {
             ...state,
             users:[],
             loading:false
        }

     case GET_USER:
         return {
             ...state,
             loading:false,
             user:action.payload
         }

     case GET_REPOS:
         return {
             ...state,
             loading:false,
             repos:action.payload
         }

     default:
         return state;

   }

 }

 export default GithubReducer;