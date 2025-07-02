// import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import Introduction from "./pages/Introduction/Introduction"
import TailwindOverview from "./pages/Tailwind/TailwindOverview"
import TailwindInstallation from "./pages/Tailwind/TailwindInstallation"
import TailwindUsage from "./pages/Tailwind/TailwindUsage"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "introduction",
          element: <Introduction/>
        },
        {
          path: "tailwindoverview",
          element: <TailwindOverview/>
        },
        {
          path: "tailwindinstallation",
          element: <TailwindInstallation/>
        },
        {
          path: "tailwindusage",
          element: <TailwindUsage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
