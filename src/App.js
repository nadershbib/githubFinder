import React,{Fragment,useState} from 'react';
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert"
import About from "./components/pages/About";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import GithubState from "../src/context/github/GithubState"





function App()  {

 
  const [alert,setAlert] = useState(null)
  







// setAlert
const showAlert= (message,type)=>{
   setAlert({message,type})
   setTimeout(()=>setAlert(null),2000)
}


  return (
        <GithubState>

         <Router>
           <div className="App">
             <Navbar />
             
             <div className="container">
                  <Alert alert={alert} />
                  <Switch>
                     <Route exact path="/" render={props=> (
                           <Fragment>
                                <Search  
                                        showAlert={showAlert}
                                />  
                                 <Users />
                            </Fragment>

                     )} />
                     <Route exact path="/about" component={About} />
                     <Route exact path='/user/:login' render={props=> (
                        <User {...props} />
                     )} />
                  </Switch>
                  
              </div>
           </div>
          </Router>  
        </GithubState>
  );
 }


export default App;
