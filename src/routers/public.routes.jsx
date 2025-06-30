import React from 'react'
import Home from '../page/permitAll/Home'
import Login from '../page/permitAll/Login'

export const publicRouter = [
    {
        path: "/",
        element: <Home />,
        children: []
    },
    {
        path: "/login",
        element: <Login />,
        children: []
    },

]