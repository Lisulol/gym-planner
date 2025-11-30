"use client"
import { IconBrandGithub, IconMenu2 } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

export default function NavBarComponent() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>
      <div className="w-full bg-[#161616] text-white text-2xl h-16 gradient-border-bottom flex items-center">
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
        <>
          <div
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/50 z-30"
            onClick={() => setOpenMenu(false)}
          />

          <div className="fixed top-16 left-0 bottom-0 w-4/5 sm:w-64 bg-[#161616] text-white z-40 border-r border-[#393d3d] shadow-lg transform transition-transform">
            <div className="h-full flex flex-col py-4 justify-center">
              <Link
                href="/Workout"
                onClick={() => setOpenMenu(false)}
                className="block w-full text-left hover:bg-gray-600 rounded p-3"
              >
                <p>Workout Planner</p>
              </Link>
              <Link
                href="/progress"
                onClick={() => setOpenMenu(false)}
                className="block w-full text-left hover:bg-gray-600 rounded p-3"
              >
                <p>Progress Tracker</p>
              </Link>
              <Link
                href="/splits"
                onClick={() => setOpenMenu(false)}
                className="block w-full text-left hover:bg-gray-600 rounded p-3"
              >
                <p>Splits</p>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
