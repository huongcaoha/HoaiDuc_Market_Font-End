import Admin from "../page/admin/Admin";
import Dashboard from "../page/admin/dashboard";

import React from 'react'
export const protectedRouter = [
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },

        ]
    },
]