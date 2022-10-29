import React from 'react'
import { Route, Redirect } from 'react-router'
import { useSelector } from 'react-redux'

/**
* @author
* @function PrivateRoute
**/

export const PrivateRoute = ({ children, ...rest }) => {

    let isLoggedIn = useSelector(state => {
        return state.auth.isLoggedIn
    })

    return (
        <Route {...rest}
            render={
                ({ location }) => {
                    return !isLoggedIn ? (
                        <Redirect
                            to={{ pathname: "/login", state: { location } }}

                        />
                    ) : (children)
                }
            }


        />
    )
}
