"use client"
import NavBarComponent from "@/components/NavBar/navbar"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MainPage() {
  function isFirstLoad() {
    const lastvisit = localStorage.getItem("lastvisit")
    const today = new Date().toDateString()

    if (lastvisit !== today) {
      localStorage.setItem("lastvisit", today)
      setShowPushup(true)
    }
    setShowPushup(false)
  }

  useEffect(() => {
    isFirstLoad()
  }, [])

  const [showPushup, setShowPushup] = useState(false)
  return (
    <div className="h-screen w-screen overflow-hidden flex-col">
      <div className="fixed w-full">
        <NavBarComponent />
      </div>
      {showPushup && (
        <div className="h-screen w-screen fixed z-80 items-center justify-center flex">
          <div className="flex rounded-4xl h-4/5 w-4/5 text-3xl flex-col text-white font-bold bg-[#1d1d1d] border-4 border-[#1f1f1f]">
            <div className="w-full items-center h-2/12 justify-center flex flex-col p-10">
              <p>Build your habit</p>
            </div>
            <div className="w-full p-12 items-center flex justify-center h-8/12">
              <p>
                I see this is your first login so build your habit by doing 10
                pushups
              </p>
            </div>
            <div className="w-full flex h-2/12 items-center justify-center">
              <button
                onClick={() => setShowPushup(false)}
                className="bg-gray-500 hover:bg-gray-600 border-4 border-[#202020] rounded-3xl h-3/4 w-1/4"
              >
                Let's go!
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full flex items-center  justify-center">
        <div className="flex h-4/5 w-4/5 items-center gap-1 font-bold justify-center">
          <Link href="/Workout" className="flex h-1/3 w-1/3 ">
            <div className="flex h-full w-full hover:bg-[#1d1d1d] items-center text-white justify-center rounded-4xl border-2 border-[#141414] bg-[#000000]">
              Plan your workouts
            </div>
          </Link>

          <div className="flex h-1/3 w-1/3 hover:bg-[#1d1d1d] items-center text-white justify-center rounded-4xl border-2 border-[#141414] bg-[#000000]">
            Track your progress
          </div>
          <Link href="/splits" className="flex h-1/3 w-1/3 ">
            <div className="flex h-full w-full hover:bg-[#1d1d1d] items-center text-white justify-center rounded-4xl border-2 border-[#141414] bg-[#000000]">
              Choose your splits
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
