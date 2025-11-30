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
  const [cups, setCups] = useState<string>("")
  const [cmessage, setCmessage] = useState<string>("")

  useEffect(() => {
    const storedWaist = localStorage.getItem("waist")
    const storedChest = localStorage.getItem("chest")
    const storedThigh = localStorage.getItem("thigh")
    const storedBiceps = localStorage.getItem("biceps")
    const storedBpress = localStorage.getItem("bpress")
    const storedSquat = localStorage.getItem("squat")
    const storedDeadlift = localStorage.getItem("deadlift")
    const storedCups = localStorage.getItem("cups")

    if (storedCups) setCups(storedCups)

    if (storedWaist) setWaist(Number(storedWaist))
    if (storedChest) setChest(Number(storedChest))
    if (storedThigh) setThigh(Number(storedThigh))
    if (storedBiceps) setBiceps(Number(storedBiceps))
    if (storedBpress) setBpress(Number(storedBpress))
    if (storedSquat) setSquat(Number(storedSquat))
    if (storedDeadlift) setDeadlift(Number(storedDeadlift))
  }, [])

  useEffect(() => {
    if (cups !== "") {
      localStorage.setItem("cups", cups)
      const cupNumber = Number(cups)
      if (cupNumber < 8) {
        setCmessage("You should drink more water!")
      } else if (cupNumber >= 8 && cupNumber <= 13) {
        setCmessage("Good job on staying hydrated!")
      } else {
        setCmessage("Be careful not to overhydrate!")
      }
    }
  }, [cups])

  useEffect(() => {
    if (waist !== "") {
      localStorage.setItem("waist", waist.toString())
    }
  }, [waist])
  useEffect(() => {
    if (cups !== "") {
      localStorage.setItem("cups", cups.toString())
    }
  }, [cups])

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
    <div className="h-screen w-full bg-linear-to-b overflow-hidden from-[#00eeff] to-[#0281a8]">
      <SnowBackground />
      <div className="w-full fixed z-50">
        <NavBarComponent />
      </div>
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <div className="w-11/12 sm:w-4/5 max-w-4xl h-4/5 flex flex-col text-3xl rounded-4xl bg-[#1d1d1d] p-4 sm:p-10 mx-auto overflow-hidden">
          <div className="w-full p-5 flex items-center text-2xl font-bold text-white justify-center  border-b-2 border-black">
            <p>Progress Tracker</p>
          </div>
          <div className="w-full h-full overflow-y-auto">
            <div className="w-full h-10/12 flex flex-row flex-wrap ">
              <div className="flex-1   md:p-5 flex flex-col justify-center w-full md:w-1/2 border-r md:border-r md:border-black min-h-64 md:min-h-112">
                <div className="w-full flex h-1/12 items-center justify-center ">
                  <p className="font-bold text-white text-xl"> Measurements</p>
                </div>
                <div className="w-full font-bold items-center gap-5 justify-center text-white flex flex-col">
                  <div className="flex gap-4 items-center w-full justify-between">
                    <p className="shrink-0">Waist:</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="cm"
                      onChange={(e) =>
                        setWaist(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                      value={waist}
                      className="w-20 sm:w-28 md:w-40 max-w-full border-black border rounded-md p-2 sm:p-4"
                    />
                  </div>
                  <div className="flex gap-4 items-center w-full justify-between">
                    <p className="shrink-0">Chest:</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="cm"
                      onChange={(e) =>
                        setChest(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                      value={chest}
                      className="w-24 sm:w-32 md:w-40 max-w-full border-black border rounded-md p-2 sm:p-4"
                    />
                  </div>
                  <div className="flex gap-4 items-center w-full justify-between">
                    <p className="shrink-0">Thigh:</p>
                    <input
                      type="number"
                      placeholder="cm"
                      value={thigh}
                      onChange={(e) =>
                        setThigh(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                      min="0"
                      className="w-24 sm:w-32 md:w-40 max-w-full border-black border rounded-md p-2 sm:p-4"
                    />
                  </div>
                  <div className="flex gap-4 items-center w-full justify-between">
                    <p className="shrink-0">Biceps:</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="cm"
                      value={biceps}
                      onChange={(e) =>
                        setBiceps(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                      className="w-24 sm:w-32 md:w-40 max-w-full border-black border rounded-md p-2 sm:p-4"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  items-center justify-center flex flex-col w-full md:w-1/2 md:border-l md:border-black md:p-5 min-h-64 md:min-h-112">
                <div className="w-full flex items-center justify-center">
                  <p className="font-bold text-white text-xl">Maxes</p>
                </div>
                <div className="w-full gap-5 flex flex-col justify-center items-center font-bold text-white">
                  <div className="flex gap-4 items-center w-full justify-between">
                    <p className="shrink-0">Bench Press:</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="kg"
                      value={bpress}
                      className="w-24 sm:w-32 md:w-40 max-w-full border-black border rounded-md p-2 sm:p-4"
                      onChange={(e) =>
                        setBpress(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-4 items-center w-full justify-between">
                    <p className="shrink-0">Squat:</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="kg"
                      value={squat}
                      className="w-24 sm:w-32 md:w-40 max-w-full border-black border rounded-md p-2 sm:p-4"
                      onChange={(e) =>
                        setSquat(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-4 items-center w-full justify-between">
                    <p className="shrink-0">DeadLift:</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="kg"
                      className="w-24 sm:w-32 md:w-40 max-w-full border-black border rounded-md p-2 sm:p-4"
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

            <div className="w-full mt-4 flex flex-col items-center gap-2">
              <p className="text-white font-bold">Remember to drink water</p>
              <p className="text-white font-bold text-xs">{cmessage}</p>
              <input
                type="number"
                placeholder="cups"
                min="0"
                value={cups}
                className="w-24 sm:w-28 md:w-32 font-bold h-10 p-2 text-white"
                onChange={(e) => setCups(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
