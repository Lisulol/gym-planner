"use client"
import NavBarComponent from "@/components/NavBar/navbar"
import SnowBackground from "@/components/SnowBackground/back"
import { useEffect, useState } from "react"

export default function ProgressPage() {
  const [waist, setWaist] = useState<number | "">("")
  const [chest, setChest] = useState<number | "">("")
  const [thigh, setThigh] = useState<number | "">("")
  const [biceps, setBiceps] = useState<number | "">("")

  useEffect(() => {
    const storedWaist = localStorage.getItem("waist")
    const storedChest = localStorage.getItem("chest")
    const storedThigh = localStorage.getItem("thigh")
    const storedBiceps = localStorage.getItem("biceps")

    if (storedWaist) setWaist(Number(storedWaist))
    if (storedChest) setChest(Number(storedChest))
    if (storedThigh) setThigh(Number(storedThigh))
    if (storedBiceps) setBiceps(Number(storedBiceps))
  }, [])

  useEffect(() => {
    if (waist !== "") {
      localStorage.setItem("waist", waist.toString())
    }
  }, [waist])

  useEffect(() => {
    if (chest !== "") {
      localStorage.setItem("chest", chest.toString())
    }
  }, [chest])

  useEffect(() => {
    if (thigh !== "") {
      localStorage.setItem("thigh", thigh.toString())
    }
  }, [thigh])

  useEffect(() => {
    if (biceps !== "ss") {
      localStorage.setItem("biceps", biceps.toString())
    }
  }, [biceps])

  return (
    <div className="h-screen w-full">
      <SnowBackground />
      <div className="w-full fixed z-50">
        <NavBarComponent />
      </div>
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <div className="w-4/5 h-4/5 flex flex-col text-3xl rounded-4xl bg-[#1d1d1d] ">
          <div className="w-full p-5 flex items-center text-2xl font-bold text-white justify-center  border-b-2 border-black">
            <p>Progress Tracker</p>
          </div>
          <div className="w-full h-full flex ">
            <div className="flex p-5 flex-col justify-center h-full w-1/2 border-r border-black">
              <div className="w-full flex h-1/12 items-center justify-center ">
                <p className="font-bold text-white text-xl"> Measurements</p>
              </div>
              <div className="w-full font-bold items-center  text-white h-11/12 flex flex-col">
                <div className="flex gap-5  items-center">
                  <p>Waist:</p>{" "}
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setWaist(e.target.value)}
                    value={waist}
                    className="w-20"
                  />
                </div>
                <div className="flex gap-5  items-center">
                  <p>Chest:</p>{" "}
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setChest(e.target.value)}
                    value={chest}
                    className="w-20"
                  />
                </div>
                <div className="flex  gap-5  items-center">
                  <p>Thigh:</p>{" "}
                  <input
                    type="number"
                    value={thigh}
                    onChange={(e) => setThigh(e.target.value)}
                    min="0"
                    className="w-20"
                  />
                </div>
                <div className="flex gap-5  items-center">
                  <p>Biceps:</p>
                  <input
                    type="number"
                    min="0"
                    value={biceps}
                    onChange={(e) => setBiceps(e.target.value)}
                    className="w-20"
                  />
                </div>
              </div>
            </div>
            <div className="flex  p-5 items-center justify-center h-full w-1/2 border-l border-black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
