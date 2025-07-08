// import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import TailwindOverview from "./pages/UiLibraries/Tailwind/TailwindOverview"
import TailwindInstallation from "./pages/UiLibraries/Tailwind/TailwindInstallation"
import TailwindUsage from "./pages/UiLibraries/Tailwind/TailwindUsage"
import { ShadcnOverview } from "./pages/UiLibraries/Shadcn/ShadcnOverview"
import { ShadcnInstallation } from "./pages/UiLibraries/Shadcn/ShadcnInstallation"
import { ShadcnUsage } from "./pages/UiLibraries/Shadcn/ShadcnUsage"
import { MaterialuiOverview } from "./pages/UiLibraries/Materialui/MaterialuiOverview"
import { MaterialuiInstallation } from "./pages/UiLibraries/Materialui/MaterialuiInstallation"
import { MaterialuiUsage } from "./pages/UiLibraries/Materialui/MaterialuiUsage"
import { PrimereactOverview } from "./pages/UiLibraries/Primereact/PrimereactOverview"
import { PrimereactInstallation } from "./pages/UiLibraries/Primereact/PrimereactInstallation"
import { PrimereactUsage } from "./pages/UiLibraries/Primereact/PrimereactUsage"
import { ChakrauiOverview } from "./pages/UiLibraries/Chakraui/ChakrauiOverview"
import { ChakrauiInstallation } from "./pages/UiLibraries/Chakraui/ChakrauiInstallation"
import { ChakrauiUsage } from "./pages/UiLibraries/Chakraui/ChakrauiUsage"
import { AntdesignOverview } from "./pages/UiLibraries/AntDesign/AntdesignOverview"
import { AntdesignInstallation } from "./pages/UiLibraries/AntDesign/AntdesignInstallation"
import { AntdesignUsage } from "./pages/UiLibraries/AntDesign/AntdesignUsage"
import {ReactOverview} from "./pages/FrontendFrameworks/React/ReactOverview"
import {ReactInstallation} from "./pages/FrontendFrameworks/React/ReactInstallation"
import {ReactExamples} from "./pages/FrontendFrameworks/React/ReactExamples"
import {AngularOverview} from "./pages/FrontendFrameworks/Angular/AngularOverview"
import {AngularInstallation} from "./pages/FrontendFrameworks/Angular/AngularInstallation"
import {AngularExamples} from "./pages/FrontendFrameworks/Angular/AngularExamples"
import {VueOverview} from "./pages/FrontendFrameworks/Vue/VueOverview"
import {VueInstallation} from "./pages/FrontendFrameworks/Vue/VueInstallation"
import {VueExamples} from "./pages/FrontendFrameworks/Vue/VueExamples"
import { NextOverview } from "./pages/FrontendFrameworks/Next/NextOverview"
import { NextInstallation } from "./pages/FrontendFrameworks/Next/NextInstallation"
import { NextExamples } from "./pages/FrontendFrameworks/Next/NextExamples"

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
          path: "reactoverview",
          element: <ReactOverview/>
        },
        {
          path: "reactinstallation",
          element: <ReactInstallation/>
        },
        {
          path: "reactexamples",
          element: <ReactExamples/>
        },
        {
          path: "angularoverview",
          element: <AngularOverview/>
        },
        {
          path: "angularinstallation",
          element: <AngularInstallation/>
        },
        {
          path: "angularexamples",
          element: <AngularExamples/>
        },
        {
          path: "vueoverview",
          element: <VueOverview/>
        },
        {
          path: "vueinstallation",
          element: <VueInstallation/>
        },
        {
          path: "vueexamples",
          element: <VueExamples/>
        },
        {
          path: "nextjsoverview",
          element: <NextOverview/>
        },
        {
          path: "nextjsinstallation",
          element: <NextInstallation/>
        },
        {
          path: "nextjsexamples",
          element: <NextExamples/>
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
        {
          path: "materialuioverview",
          element: <MaterialuiOverview/>
        },
        {
          path: "materialuiinstallation",
          element: <MaterialuiInstallation/>
        },
        {
          path: "materialuiusage",
          element: <MaterialuiUsage/>
        },
        {
          path: "primereactoverview",
          element: <PrimereactOverview/>
        },
        {
          path: "primereactinstallation",
          element: <PrimereactInstallation/>
        },
        {
          path: "primereactusage",
          element: <PrimereactUsage/>
        },
        {
          path: "chakrauioverview",
          element: <ChakrauiOverview/>
        },
        {
          path: "chakrauiinstallation",
          element: <ChakrauiInstallation/>
        },
        {
          path: "chakrauiusage",
          element: <ChakrauiUsage/>
        },
        {
          path: "antdesignoverview",
          element: <AntdesignOverview/>
        },
        {
          path: "antdesigninstallation",
          element: <AntdesignInstallation/>
        },
        {
          path: "antdesignusage",
          element: <AntdesignUsage/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
