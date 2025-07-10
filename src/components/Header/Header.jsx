import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '../ui/breadcrumb'
import BreadCrumb from '../Breadcrumb/Breadcrumb'
import { MdKeyboardCommandKey, MdOutlineLightMode } from 'react-icons/md'
import { SearchDialog } from '../SearchDialog/SearchDialog'

export const Header = () => {

  const [model, setModel] = useState(false);
  // Ctrl+K Shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setModel(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className=' bg-gradient-to-r from-[#f4fbf8] to-[#e1f3ea] px-8 pt-10 pb-4'>
        <div className="absolute inset-0 bg-[radial-gradient(#b9e6ce_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none z-0" />
        <div className="z-10 flex justify-between items-center">
          <BreadCrumb />
          <div className=' flex items-center gap-3'>
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search documentation..."
                readOnly
                onClick={() => setModel(true)}
                className="w-full pl-4 pr-16 py-2 text-sm rounded-lg border border-[#319795] bg-white/90 dark:bg-black/30 shadow-sm outline-none"
              />
              {/* Keyboard Shortcut UI */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <MdKeyboardCommandKey className="w-4 h-4 text-[#319795]" />
                <span className="text-xs font-medium text-[#319795]">K</span>
              </div>
            </div>
            <div className=' py-2 px-2 bg-amber-300 rounded-full shadow-sm'>
              <MdOutlineLightMode className='' />
            </div>
          </div>
        </div>
      </div>
      <SearchDialog model={model} setModel={setModel} />
    </>
  )
}
