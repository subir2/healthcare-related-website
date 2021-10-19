import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {users}=useAuth();
    return (
        <Route
        {...rest}
        render={({location})=>users.email ? children : <Redirect
        to={{
            pathname: "/Login",
            state: { from: location }
          }}
        >

        </Redirect>

        }
        >
            
        </Route>
    );
};

export default PrivateRoute;