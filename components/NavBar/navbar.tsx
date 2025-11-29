"use client"
import { IconMenu2 } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

export default function NavBarComponent() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>
      <div className="w-full bg-[#161616] text-white items-center text-2xl h-25 border-b-6 border-[#393d3d] justify-between flex">
        <div>
          <button
            className="hover:bg-gray-600 rounded p-3"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <IconMenu2 size={30} />
          </button>
        </div>
        <div>
          <Link href="/">
            <p className="bg-clip-text text-transparent bg-linear-to-b from-[#ffffff] to-[#6e6e6e] font-bold">
              Gym Planner
            </p>
          </Link>
        </div>
        <div></div>
      </div>
      {openMenu && (
        <div className="h-screen w-30 items-center justify-center gap-50 bg-[#161616] text-white flex flex-col border-r-6 border-[#393d3d]">
          <Link href="/Workout">
            <p className="hover:bg-gray-600 rounded p-3">Workout</p>
          </Link>
          <Link href="/splits">
            <p className="hover:bg-gray-600 rounded p-3">Splits</p>
          </Link>
        </div>
      )}
    </div>
  )
}
