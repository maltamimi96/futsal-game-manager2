import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { FaBeer } from "react-icons/fa"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar w-full relative  ">
      <div className=" grid grid-cols-2 justify-items-stretch items-center justify-center px-4 md:px-8 py-4 bg-slate-600">
        <div className="relative">
          <h1 className="text-4xl font-extrabold text-cyan-600 italic tracking-[20px]">
            FGM
          </h1>
          <h2 className="text-xl font-semibold tracking-wider">
            Futsal Game Manager
          </h2>
        </div>

        <div className="ml-auto">
          <div className="inline-flex md:hidden">
            <Bars3Icon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
