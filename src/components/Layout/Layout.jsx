import React from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from '../Sidebar/Sidebar';
import { Advertisement } from '../Advertisement/Advertisement';

export const Layout = () => {
  return (

    <div className=' flex h-screen'>
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <div className=' flex flex-col flex-1'>
        <Header />
        <div className="flex flex-1 overflow-y-auto relative bg-gradient-to-r from-[#f4fbf8] to-[#e1f3ea]">
          <main className="flex-1 p-4 ">
            <div className="absolute inset-0 bg-[radial-gradient(#b9e6ce_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none z-0" />
            <div className="relative z-10">
              <Outlet />
            </div>
          </main>
          <div className='lg:flex md:flex hidden w-52 p-4 border-l border-[#cde7e7] z-10'>
            <Advertisement />
          </div>
        </div>
      </div>
    </div>
  )
}
