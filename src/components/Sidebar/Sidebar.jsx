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
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiMui, SiPrimereact, SiChakraui, SiAntdesign} from "react-icons/si";
import { UiLibraryMenu } from "@/components/uilibrarymenu"
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
          url: "/introduction",
        },
      ]
    }
  ],
  navMain: [
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
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
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
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Usage Example",
          url: "#",
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
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Usage Example",
          url: "#",
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
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Usage Example",
          url: "#",
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
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Usage Example",
          url: "#",
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
        <UiLibraryMenu items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
