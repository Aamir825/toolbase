import React from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from '../Sidebar/Sidebar';

export const Layout = () => {
  return (

    <div className=' flex h-screen'>
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <div className=' flex flex-col flex-1'>
        <Header />
        <main className=' overflow-y-auto flex-1 bg-gradient-to-b from-[#f4fbf8] to-[#e1f3ea]'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
