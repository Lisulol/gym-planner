import { IconMenu2 } from "@tabler/icons-react"
import Link from "next/link"

export default function NavBarComponent() {
  return (
    <div className="w-full bg-[#161616] text-white items-center text-2xl h-25 border-b-6 border-[#393d3d] justify-between flex">
      <div>
        <IconMenu2 size={30} />
      </div>
      <div>
        <Link href="/">
          <p className=" bg-clip-text text-transparent bg-linear-to-b from-[#ffffff] to-[#6e6e6e] font-bold">
            Gym Planner
          </p>
        </Link>
      </div>
      <div></div>
    </div>
  )
}
