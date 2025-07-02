import React from 'react'
import { Breadcrumb } from '../ui/breadcrumb'
import BreadCrumb from '../Breadcrumb/Breadcrumb'

export const Header = () => {
  return (
    <>
      <div className=' bg-gradient-to-r from-[#f4fbf8] to-[#e1f3ea] px-8 pt-10'>
        <div className="absolute inset-0 bg-[radial-gradient(#b9e6ce_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none z-0" />
          <div className="relative z-10">
        <BreadCrumb/>
        </div>
      </div>
    </>
  )
}
