import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiMui, SiPrimereact, SiChakraui, SiAntdesign, SiRedux, SiReactquery, SiNgrx} from "react-icons/si";
import { GiPanda, GiPineapple } from "react-icons/gi";
import { UiLibraryMenu } from "@/components/uilibrarymenu/uilibrarymenu"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Overview } from "../overview"
import { FrontendFrameworksMenus } from "@/components/frontendframeworksmenu/frontendframeworksmenu";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { StateManagementMenus } from "../statemanagementmenu/statemanagementmenu";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  overview: [
    {
      title: "Overview",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "/",
        },
      ]
    }
  ],
  frontendFrameworks: [
    {
      title: "React",
      url: "#",
      icon: FaReact,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/reactoverview",
        },
        {
          title: "Getting Started",
          url: "/reactinstallation",
        },
        {
          title: "Core Example",
          url: "/reactexamples",
        },
      ],
    },
    {
      title: "Angular",
      url: "#",
      icon: FaAngular,
      items: [
        {
          title: "Overview",
          url: "/angularoverview",
        },
        {
          title: "Getting Started",
          url: "/angularinstallation",
        },
        {
          title: "Core Example",
          url: "/angularexamples",
        },
      ],
    },
    {
      title: "Vue",
      url: "#",
      icon: FaVuejs,
      items: [
        {
          title: "Overview",
          url: "/vueoverview",
        },
        {
          title: "Getting Started",
          url: "/vueinstallation",
        },
        {
          title: "Core Example",
          url: "/vueexamples",
        },
      ],
    },
    {
      title: "Next",
      url: "#",
      icon: RiNextjsFill,
      items: [
        {
          title: "Overview",
          url: "/nextjsoverview",
        },
        {
          title: "Getting Started",
          url: "/nextjsinstallation",
        },
        {
          title: "Core Example",
          url: "/nextjsexamples",
        },
      ],
    },
  ],
  uilibrary: [
    {
      title: "Tailwind CSS",
      url: "#",
      icon: RiTailwindCssFill,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/tailwindoverview",
        },
        {
          title: "Installation",
          url: "/tailwindinstallation",
        },
        {
          title: "Usage Example",
          url: "/tailwindusage",
        },
      ],
    },
    {
      title: "Shadcn UI",
      url: "#",
      icon: SiShadcnui,
      items: [
        {
          title: "Overview",
          url: "/shadcnoverview",
        },
        {
          title: "Installation",
          url: "/shadcninstallation",
        },
        {
          title: "Usage Example",
          url: "/shadcnusage",
        },
      ],
    },
    {
      title: "Material UI",
      url: "#",
      icon: SiMui,
      items: [
        {
          title: "Overview",
          url: "/materialuioverview",
        },
        {
          title: "Installation",
          url: "/materialuiinstallation",
        },
        {
          title: "Usage Example",
          url: "/materialuiusage",
        },
      ],
    },
    {
      title: "PrimeReact",
      url: "#",
      icon: SiPrimereact,
      items: [
        {
          title: "Overview",
          url: "/primereactoverview",
        },
        {
          title: "Installation",
          url: "/primereactinstallation",
        },
        {
          title: "Usage Example",
          url: "/primereactusage",
        },
      ],
    },
    {
      title: "Chakra UI",
      url: "#",
      icon: SiChakraui,
      items: [
        {
          title: "Overview",
          url: "/chakrauioverview",
        },
        {
          title: "Installation",
          url: "/chakrauiinstallation",
        },
        {
          title: "Usage Example",
          url: "/chakrauiusage",
        },
      ],
    },
    {
      title: "Ant Design",
      url: "#",
      icon: SiAntdesign,
      items: [
        {
          title: "Overview",
          url: "/antdesignoverview",
        },
        {
          title: "Installation",
          url: "antdesigninstallation",
        },
        {
          title: "Usage Example",
          url: "/antdesignusage",
        },
      ],
    },
  ],
  statemanagement: [
    {
      title: "Redux Toolkit",
      url: "#",
      icon: SiRedux,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/reduxoverview",
        },
        {
          title: "Setup Guide",
          url: "/reduxsetup",
        },
        {
          title: "Usage Example",
          url: "/reduxexamples",
        },
      ],
    },
    {
      title: "Zustand",
      url: "#",
      icon: GiPanda,
      items: [
        {
          title: "Overview",
          url: "/zustandoverview",
        },
        {
          title: "Setup Guide",
          url: "/zustandsetup",
        },
        {
          title: "Usage Example",
          url: "/zustandexamples",
        },
      ],
    },
    {
      title: "Tanstack Query",
      url: "#",
      icon: SiReactquery,
      items: [
        {
          title: "Overview",
          url: "/tanstackoverview",
        },
        {
          title: "Setup Guide",
          url: "/tanstacksetup",
        },
        {
          title: "Usage Example",
          url: "/tanstackexamples",
        },
      ],
    },
    {
      title: "NgRx",
      url: "#",
      icon: SiNgrx,
      items: [
        {
          title: "Overview",
          url: "/ngrxoverview",
        },
        {
          title: "Setup Guide",
          url: "/ngrxsetup",
        },
        {
          title: "Usage Example",
          url: "/ngrxexamples",
        },
      ],
    },
    {
      title: "Pinia",
      url: "#",
      icon: GiPineapple,
      items: [
        {
          title: "Overview",
          url: "/piniaoverview",
        },
        {
          title: "Setup Guide",
          url: "/piniasetup",
        },
        {
          title: "Usage Example",
          url: "/piniaexamples",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <Overview items={data.overview}/>
        <FrontendFrameworksMenus items={data.frontendFrameworks}/>
        <UiLibraryMenu items={data.uilibrary} />
        <StateManagementMenus items={data.statemanagement}/>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
