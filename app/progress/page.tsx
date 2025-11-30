"use client"
import NavBarComponent from "@/components/NavBar/navbar"
import SnowBackground from "@/components/SnowBackground/back"
import { useEffect, useState } from "react"

export default function ProgressPage() {
  const [waist, setWaist] = useState<number | "">("")
  const [chest, setChest] = useState<number | "">("")
  const [thigh, setThigh] = useState<number | "">("")
  const [biceps, setBiceps] = useState<number | "">("")
  const [bpress, setBpress] = useState<number | "">("")
  const [squat, setSquat] = useState<number | "">("")
  const [deadlift, setDeadlift] = useState<number | "">("")

  useEffect(() => {
    const storedWaist = localStorage.getItem("waist")
    const storedChest = localStorage.getItem("chest")
    const storedThigh = localStorage.getItem("thigh")
    const storedBiceps = localStorage.getItem("biceps")
    const storedBpress = localStorage.getItem("bpress")
    const storedSquat = localStorage.getItem("squat")
    const storedDeadlift = localStorage.getItem("deadlift")

    if (storedWaist) setWaist(Number(storedWaist))
    if (storedChest) setChest(Number(storedChest))
    if (storedThigh) setThigh(Number(storedThigh))
    if (storedBiceps) setBiceps(Number(storedBiceps))
    if (storedBpress) setBpress(Number(storedBpress))
    if (storedSquat) setSquat(Number(storedSquat))
    if (storedDeadlift) setDeadlift(Number(storedDeadlift))
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
    if (biceps !== "") {
      localStorage.setItem("biceps", biceps.toString())
    }
  }, [biceps])
  useEffect(() => {
    if (bpress !== "") {
      localStorage.setItem("bpress", bpress.toString())
    }
  }, [bpress])
  useEffect(() => {
    if (squat !== "") {
      localStorage.setItem("squat", squat.toString())
    }
  }, [squat])
  useEffect(() => {
    if (deadlift !== "") {
      localStorage.setItem("deadlift", deadlift.toString())
    }
  }, [deadlift])

  return (
    <div className="h-screen w-full bg-linear-to-b from-[#00eeff] to-[#0281a8]">
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
              <div className="w-full font-bold items-center gap-5 justify-center text-white h-11/12 flex flex-col">
                <div className="flex gap-5  items-center">
                  <p>Waist:</p>{" "}
                  <input
                    type="number"
                    min="0"
                    onChange={(e) =>
                      setWaist(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    value={waist}
                    className="w-30 border-black border rounded-md p-5"
                  />
                </div>
                <div className="flex gap-5  items-center">
                  <p>Chest:</p>{" "}
                  <input
                    type="number"
                    min="0"
                    onChange={(e) =>
                      setChest(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    value={chest}
                    className="w-30 border-black border rounded-md p-5"
                  />
                </div>
                <div className="flex  gap-5  items-center">
                  <p>Thigh:</p>{" "}
                  <input
                    type="number"
                    value={thigh}
                    onChange={(e) =>
                      setThigh(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    min="0"
                    className="w-30 border-black border rounded-md p-5"
                  />
                </div>
                <div className="flex gap-5  items-center">
                  <p>Biceps:</p>
                  <input
                    type="number"
                    min="0"
                    value={biceps}
                    onChange={(e) =>
                      setBiceps(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    className="w-30 border-black border rounded-md p-5"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-full flex-col w-1/2 border-l border-black">
              <div className="w-full h-1/12 flex items-center justify-center">
                <p className="font-bold text-white text-xl">Maxes</p>
              </div>
              <div className="h-11/12 w-full gap-5 flex  justify-center items-center flex-col font-bold text-white">
                <div className="flex gap-5 items-center">
                  <p>Bench Press:</p>
                  <input
                    type="number"
                    min="0"
                    value={bpress}
                    className="w-30 border-black border rounded-md p-5"
                    onChange={(e) =>
                      setBpress(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <p>Squat:</p>
                  <input
                    type="number"
                    min="0"
                    value={squat}
                    className="w-30 border-black border rounded-md p-5"
                    onChange={(e) =>
                      setSquat(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <p>DeadLift:</p>
                  <input
                    type="number"
                    min="0"
                    className="w-30 border-black border rounded-md p-5"
                    value={deadlift}
                    onChange={(e) =>
                      setDeadlift(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
