import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import { useStateValue } from './components/StateProvider'
import { useMediaQuery } from '@material-ui/core'
import { Switch, Route, useHistory } from "react-router-dom";
import Signup from './components/Signup';
import React, { useEffect } from 'react'
import { auth } from './firebase';

function App() {
  const isPhone = useMediaQuery('(max-width: 600px)')
  const [{ user }, dispatch] = useStateValue()
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged(userCred => {
      if(userCred) {
        dispatch({
          type: "SET_USER",
          user: userCred
        })
      } else {
        history.push('/signup')
      }
    })
  }, [])


  return (
    <div className="app">
          <Switch>
            <Route exact path='/'>
              {user &&
              <>
              <Header />
              <div className="app__body">
                  {!isPhone &&
                    <Sidebar />
                  }
                  
                  <Feed />
                  
                  {!isPhone &&
                    <Widget />
                  }
              </div>
              </>
              }
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
