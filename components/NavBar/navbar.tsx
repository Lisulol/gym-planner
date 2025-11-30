"use client"
import { IconBrandGithub, IconMenu2 } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

export default function NavBarComponent() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>
      <div className="w-full bg-[#161616] text-white text-2xl h-16 border-b-6 border-[#393d3d] flex items-center">
        <div className="flex items-center px-3">
          <button
            className="hover:bg-gray-600 rounded p-3"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <IconMenu2 size={30} />
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <Link href="/">
            <p className="bg-clip-text text-transparent bg-linear-to-b from-[#00eeff] to-[#8d01ff] font-bold">
              Winter Gym Planner
            </p>
          </Link>
        </div>

        <div className="flex items-center px-3">
          <a
            href="https://github.com/Lisulol/gym-planner"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:bg-gray-600 rounded p-3">
              <IconBrandGithub />
            </button>
          </a>
        </div>
      </div>
      {openMenu && (
        <div className="h-screen w-30 items-center justify-center gap-50 bg-[#161616] text-white flex flex-col border-r-6 border-[#393d3d]">
          <Link href="/Workout">
            <p className="hover:bg-gray-600 rounded p-3">Workout Planner</p>
          </Link>
          <Link href="/progress">
            <p className="hover:bg-gray-600 rounded p-3">Progress Tracker</p>
          </Link>
          <Link href="/splits">
            <p className="hover:bg-gray-600 rounded p-3">Splits</p>
          </Link>
        </div>
      )}
    </div>
  )
}
