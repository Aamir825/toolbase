// import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import TailwindOverview from "./pages/Tailwind/TailwindOverview"
import TailwindInstallation from "./pages/Tailwind/TailwindInstallation"
import TailwindUsage from "./pages/Tailwind/TailwindUsage"
import { ShadcnOverview } from "./pages/Shadcn/ShadcnOverview"
import { ShadcnInstallation } from "./pages/Shadcn/ShadcnInstallation"
import { ShadcnUsage } from "./pages/Shadcn/ShadcnUsage"

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
        },
        {
          path: "shadcnoverview",
          element: <ShadcnOverview/>
        },
        {
          path: "shadcninstallation",
          element: <ShadcnInstallation/>
        },
        {
          path: "shadcnusage",
          element: <ShadcnUsage/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
