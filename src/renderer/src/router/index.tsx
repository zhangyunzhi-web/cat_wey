import React from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Turnplate = React.lazy(() => import('@renderer/views/turnplate'))
const Welcome = React.lazy(() => import('@renderer/views/welcome'))
const Grid = React.lazy(() => import('@renderer/views/test/grid'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/welcome" />
  },
  {
    path: '/turnplate',
    element: <Turnplate />,
  },
  {
    path: '/welcome',
    element: <Welcome />
  },
  {
    path: '/grid',
    element: <Grid />
  }
]
export default routes
