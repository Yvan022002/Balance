import { useState } from 'react'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashBoardLayout'
import { Transactions } from './pages/Transactions'
import { Contacts } from './pages/Contacts'
import { Settings } from './pages/Settings'
import { Dashboard } from './pages/Dashbord'
import { Analytics } from './pages/Analytics'
import { Cards } from './pages/Cards'

const router= createBrowserRouter(
  [
    {
      path:"/",
      element:<DashboardLayout/>,
      children:[
        {
          path:"Transactions",
          element:<Transactions/>
        },
        {
          path:"Contacts",
          element:<Contacts/>
        },
        {
          path:"Settings",
          element:<Settings/>
        },
        {
          path:"Dashboard",
          element:<Dashboard/>
        },
        {
          path:"Cards",
          element:<Cards/>
        },
        {
          path:"Analytics",
          element:<Analytics/>
        }
       
      ]
    }
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
        <RouterProvider router={router}/>
  )
}

export default App
