import HomePage from './pages/HomePage'
import App from './App'
import UsersListPage from './pages/UsersListPage'
import AdminsListPage from './pages/AdminsListPage'
import NotFoundPage from './pages/NotFoundPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
