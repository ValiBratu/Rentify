import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/LoginPage';
import NotFound from './components/pages/NotFoundPage';
import Register from './components/pages/RegisterPage';
import UserProfile from './components/pages/profile/UserProfile';
import { UserContext } from './components/utils/AuthContext';


import './custom.css'

function App() {
  

    const[user, setUser] = useState({
        Id: "",
        Name: "",
        Email: "",
        Role: "",
        Auth: false

    });


    const login = (userData) => {
        setUser({
            Id: userData.Id,
            Name: userData.Name,
            Email: userData.Email,
            Role: userData.Role,
            Auth: true
        });

    }


    const logout = () => {
        setUser({
            Id: "",
            Name: "",
            Email: "",
            Role: "",
            Auth: false
        });
    }



    return (
  <>
     <UserContext.Provider value={{ user, login, logout }}>
            <Layout>
                <Switch> 
                  <Route exact path='/' component={Home} />

                  <Route exact path='/register' component={Register} />

                  <Route exact path='/login' component={Login} />

                  <Route exact path='/profile/:id' component={UserProfile}/>

                 <Route path="*" component={NotFound} />
             </Switch>
        </Layout>

     </UserContext.Provider>
 </>
    );
}
export default App;
