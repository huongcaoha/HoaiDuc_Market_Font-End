import React from 'react'
import Home from '../page/permitAll/Home'

export const publicRouter = [
    {
        path: "/",
        element: <Home />,
        children: []
    },
]