"use client"
import NavBarComponent from "@/components/NavBar/navbar"
import SnowBackground from "@/components/SnowBackground/back"
import { Context } from "@/providers/Context"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu"
import { IconPlus, IconX } from "@tabler/icons-react"
import { useContext, useState, useEffect } from "react"

interface Exercise {
  name: string
  reps: number
  weight: number
}

interface Workout {
  name: string
  exercises: Exercise[]
}

export default function WorkoutPage() {
  const [monday, setMonday] = useState<Workout[]>([])
  const [tuesday, setTuesday] = useState<Workout[]>([])
  const [wednesday, setWednesday] = useState<Workout[]>([])
  const [thursday, setThursday] = useState<Workout[]>([])
  const [friday, setFriday] = useState<Workout[]>([])
  const [saturday, setSaturday] = useState<Workout[]>([])
  const [sunday, setSunday] = useState<Workout[]>([])
  const { splits } = useContext(Context)!
  const [openWorkoutMenu, setOpenWorkoutMenu] = useState<boolean>(false)
  const [workoutday, setWorkoutday] = useState<string>("")
  const [editIndex, setEditIndex] = useState<number>(-1)
  const [editValue, setEditValue] = useState<string>("")

  const [exercises, setExercises] = useState<Exercise[]>([])

  useEffect(() => {
    setMonday(JSON.parse(localStorage.getItem("monday") || "[]"))
    setTuesday(JSON.parse(localStorage.getItem("tuesday") || "[]"))
    setWednesday(JSON.parse(localStorage.getItem("wednesday") || "[]"))
    setThursday(JSON.parse(localStorage.getItem("thursday") || "[]"))
    setFriday(JSON.parse(localStorage.getItem("friday") || "[]"))
    setSaturday(JSON.parse(localStorage.getItem("saturday") || "[]"))
    setSunday(JSON.parse(localStorage.getItem("sunday") || "[]"))
  }, [])

  useEffect(() => {
    localStorage.setItem("monday", JSON.stringify(monday))
  }, [monday])

  useEffect(() => {
    localStorage.setItem("tuesday", JSON.stringify(tuesday))
  }, [tuesday])

  useEffect(() => {
    localStorage.setItem("wednesday", JSON.stringify(wednesday))
  }, [wednesday])

  useEffect(() => {
    localStorage.setItem("thursday", JSON.stringify(thursday))
  }, [thursday])

  useEffect(() => {
    localStorage.setItem("friday", JSON.stringify(friday))
  }, [friday])

  useEffect(() => {
    localStorage.setItem("saturday", JSON.stringify(saturday))
  }, [saturday])

  useEffect(() => {
    localStorage.setItem("sunday", JSON.stringify(sunday))
  }, [sunday])

  function OpenMenu(day: string, index: number) {
    const getWorkout = (d: string, i: number): Workout => {
      switch (d) {
        case "Monday":
          return monday[i]
        case "Tuesday":
          return tuesday[i]
        case "Wednesday":
          return wednesday[i]
        case "Thursday":
          return thursday[i]
        case "Friday":
          return friday[i]
        case "Saturday":
          return saturday[i]
        case "Sunday":
          return sunday[i]
        default:
          throw new Error("Invalid day")
      }
    }
    const currentWorkout = getWorkout(day, index)
    setEditValue(currentWorkout.name)
    setExercises(currentWorkout.exercises)
    setOpenWorkoutMenu(true)
    setWorkoutday(day)
    setEditIndex(index)
  }
  function saveEdit() {
    if (!editValue.trim()) return
    switch (workoutday) {
      case "Monday":
        const newMonday = [...monday]
        newMonday[editIndex] = { name: editValue, exercises }
        setMonday(newMonday)
        break
      case "Tuesday":
        const newTuesday = [...tuesday]
        newTuesday[editIndex] = { name: editValue, exercises }
        setTuesday(newTuesday)
        break
      case "Wednesday":
        const newWednesday = [...wednesday]
        newWednesday[editIndex] = { name: editValue, exercises }
        setWednesday(newWednesday)
        break
      case "Thursday":
        const newThursday = [...thursday]
        newThursday[editIndex] = { name: editValue, exercises }
        setThursday(newThursday)
        break
      case "Friday":
        const newFriday = [...friday]
        newFriday[editIndex] = { name: editValue, exercises }
        setFriday(newFriday)
        break
      case "Saturday":
        const newSaturday = [...saturday]
        newSaturday[editIndex] = { name: editValue, exercises }
        setSaturday(newSaturday)
        break
      case "Sunday":
        const newSunday = [...sunday]
        newSunday[editIndex] = { name: editValue, exercises }
        setSunday(newSunday)
        break
    }
    setOpenWorkoutMenu(false)
  }
  function updateExercise(
    index: number,
    field: keyof Exercise,
    value: string | number
  ) {
    const newExercises = [...exercises]
    newExercises[index] = { ...newExercises[index], [field]: value }
    setExercises(newExercises)
  }
  function showexerciseinput() {
    const exerciseName = prompt("Enter exercise:")
    if (exerciseName) {
      const newExercise: Exercise = { name: exerciseName, reps: 0, weight: 0 }
      setExercises([...exercises, newExercise])
    }
  }
  function handleAddWorkout(day: string) {
    const workout = prompt(`Enter workout for ${day}:`)
    if (!workout) return

    const newWorkout: Workout = { name: workout, exercises: [] }

    switch (day) {
      case "Monday":
        setMonday([...monday, newWorkout])
        break
      case "Tuesday":
        setTuesday([...tuesday, newWorkout])
        break
      case "Wednesday":
        setWednesday([...wednesday, newWorkout])
        break
      case "Thursday":
        setThursday([...thursday, newWorkout])
        break
      case "Friday":
        setFriday([...friday, newWorkout])
        break
      case "Saturday":
        setSaturday([...saturday, newWorkout])
        break
      case "Sunday":
        setSunday([...sunday, newWorkout])
        break
    }
  }
  return (
    <div className="h-screen w-full flex">
      <SnowBackground />
      <div className="fixed w-full z-10">
        <NavBarComponent />
      </div>
      <div className="w-full relative h-full flex items-center justify-center">
        <div className="w-4/5 h-4/5 flex flex-col text-3xl justify-between rounded-4xl bg-[#1d1d1d] p-10">
          {openWorkoutMenu && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              onClick={() => setOpenWorkoutMenu(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-[#121212] flex flex-col gap-6 p-5 rounded-2xl shadow-lg"
              >
                <div className="flex justify-between">
                  <p className="text-xl  text-white font-bold mb-4">
                    Edit Workout for {workoutday}
                  </p>
                  <p className="text-xl text-white font-bold mb-4">
                    Split : {splits}
                  </p>
                </div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border border-gray-300 text-white p-2 rounded w-full mb-4"
                />
                <div className="w-full gap-5 h-full flex flex-col overflow-y-hidden">
                  {exercises.map((exercise, i) => (
                    <div
                      className="w-full text-sm flex items-center flex-row justify-between text-white rounded-2xl p-5 bg-[#212121]"
                      key={i}
                    >
                      <div className="flex">{exercise.name}</div>
                      <div className="flex gap-5 flex-row text-xs">
                        <div className="flex items-center gap-1">
                          <p>Reps</p>
                          <input
                            type="number"
                            min="0"
                            value={exercise.reps}
                            onChange={(e) =>
                              updateExercise(
                                i,
                                "reps",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-13"
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <p>Weight</p>
                          <input
                            type="number"
                            min="0"
                            value={exercise.weight}
                            onChange={(e) =>
                              updateExercise(
                                i,
                                "weight",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-13"
                          />
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              setExercises(
                                exercises.filter((_, idx) => idx !== i)
                              )
                            }
                            className="p-1 hover:bg-red-500 rounded"
                          >
                            <IconX />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={showexerciseinput}
                    className="bg-[#6b6b6b] hover:bg-gray-600 border border-[#121212] rounded-3xl w-full p-5 flex items-center justify-center"
                  >
                    <IconPlus />
                  </button>
                </div>
                <div className="flex  justify-between gap-2">
                  <button
                    onClick={saveEdit}
                    className="bg-[#ffffff] text-black border px-4 py-2 rounded-2xl hover:bg-gray-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setOpenWorkoutMenu(false)}
                    className="bg-gray-500 border text-white px-4 py-2 rounded-2xl hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="w-full items-center justify-between flex border-[#747474] border-2 rounded-3xl p-5 text-white">
            <div className="flex flex-row justify-center items-center gap-5">
              <div className="h-3 w-3 rounded-full border-2"></div>
              <p>Monday</p>
              {monday.length > 0 && (
                <div className="flex items-center justify-center gap-5 border-2 rounded-3xl ">
                  {monday.map((workout, i) => (
                    <ContextMenu key={i}>
                      <ContextMenuTrigger>
                        <p className="text-sm hover:bg-gray-700 h-10 rounded-3xl p-1 items-center flex justify-center font-bold ">
                          {workout.name}
                        </p>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-white text-sm gap-2 flex flex-col text-black border border-[#b3b3b3] rounded p-2">
                        <ContextMenuItem
                          onSelect={() => {
                            const newMonday = monday.filter((_, ii) => ii !== i)
                            setMonday(newMonday)
                          }}
                          className=" p-2 border rounded-md items-center justify-center flex hover:bg-gray-700"
                        >
                          Delete
                        </ContextMenuItem>
                        <ContextMenuItem
                          onSelect={() => OpenMenu("Monday", i)}
                          className="p-2 items-center justify-center flex border rounded-md hover:bg-gray-700"
                        >
                          Edit
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 bg-[#3b3939] rounded hover:bg-[#525050]"
              onClick={() => handleAddWorkout("Monday")}
            >
              <IconPlus />
            </button>
          </div>
          <div className="w-full items-center justify-between flex text-white border-[#747474] border-2 rounded-3xl p-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2"></div>
              <p>Tuesday</p>
              {tuesday.length > 0 && (
                <div className="flex items-center justify-center gap-5 border-2 rounded-3xl ">
                  {tuesday.map((workout, i) => (
                    <ContextMenu key={i}>
                      <ContextMenuTrigger>
                        <p className="text-sm hover:bg-gray-700 h-10 rounded-3xl p-1 items-center flex justify-center font-bold ">
                          {workout.name}
                        </p>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-white text-sm gap-2 flex flex-col text-black border border-[#b3b3b3] rounded p-2">
                        <ContextMenuItem
                          onSelect={() => {
                            const newTuesday = tuesday.filter(
                              (_, ii) => ii !== i
                            )
                            setTuesday(newTuesday)
                          }}
                          className=" p-2 border rounded-md items-center justify-center flex hover:bg-gray-700"
                        >
                          Delete
                        </ContextMenuItem>
                        <ContextMenuItem
                          onSelect={() => OpenMenu("Tuesday", i)}
                          className="p-2 items-center justify-center flex border rounded-md hover:bg-gray-700"
                        >
                          Edit
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 bg-[#3b3939] rounded hover:bg-[#525050]"
              onClick={() => handleAddWorkout("Tuesday")}
            >
              <IconPlus />
            </button>
          </div>
          <div className="w-full items-center justify-between flex text-white border-[#747474] border-2 rounded-3xl p-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2"></div>
              <p>Wednesday</p>
              {wednesday.length > 0 && (
                <div className="flex items-center justify-center gap-5 border-2 rounded-3xl ">
                  {wednesday.map((workout, i) => (
                    <ContextMenu key={i}>
                      <ContextMenuTrigger>
                        <p className="text-sm hover:bg-gray-700 h-10 rounded-3xl p-1 items-center flex justify-center font-bold ">
                          {workout.name}
                        </p>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-white text-sm gap-2 flex flex-col text-black border border-[#b3b3b3] rounded p-2">
                        <ContextMenuItem
                          onSelect={() => {
                            const newWednesday = wednesday.filter(
                              (_, ii) => ii !== i
                            )
                            setWednesday(newWednesday)
                          }}
                          className=" p-2 border rounded-md items-center justify-center flex hover:bg-gray-700"
                        >
                          Delete
                        </ContextMenuItem>
                        <ContextMenuItem
                          onSelect={() => OpenMenu("Wednesday", i)}
                          className="p-2 items-center justify-center flex border rounded-md hover:bg-gray-700"
                        >
                          Edit
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 bg-[#3b3939] rounded hover:bg-[#525050]"
              onClick={() => handleAddWorkout("Wednesday")}
            >
              <IconPlus />
            </button>
          </div>
          <div className="w-full items-center justify-between flex text-white border-[#747474] border-2 rounded-3xl p-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2"></div>
              <p>Thursday</p>
              {thursday.length > 0 && (
                <div className="flex items-center justify-center gap-5 border-2 rounded-3xl ">
                  {thursday.map((workout, i) => (
                    <ContextMenu key={i}>
                      <ContextMenuTrigger>
                        <p className="text-sm hover:bg-gray-700 h-10 rounded-3xl p-1 items-center flex justify-center font-bold ">
                          {workout.name}
                        </p>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-white text-sm gap-2 flex flex-col text-black border border-[#b3b3b3] rounded p-2">
                        <ContextMenuItem
                          onSelect={() => {
                            const newThursday = thursday.filter(
                              (_, ii) => ii !== i
                            )
                            setThursday(newThursday)
                          }}
                          className=" p-2 border rounded-md items-center justify-center flex hover:bg-gray-700"
                        >
                          Delete
                        </ContextMenuItem>
                        <ContextMenuItem
                          onSelect={() => OpenMenu("Thursday", i)}
                          className="p-2 items-center justify-center flex border rounded-md hover:bg-gray-700"
                        >
                          Edit
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 bg-[#3b3939] rounded hover:bg-[#525050]"
              onClick={() => handleAddWorkout("Thursday")}
            >
              <IconPlus />
            </button>
          </div>
          <div className="w-full items-center justify-between flex text-white border-[#747474] border-2 rounded-3xl p-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2"></div>
              <p>Friday</p>
              {friday.length > 0 && (
                <div className="flex items-center justify-center gap-5 border-2 rounded-3xl ">
                  {friday.map((workout, i) => (
                    <ContextMenu key={i}>
                      <ContextMenuTrigger>
                        <p className="text-sm hover:bg-gray-700 h-10 rounded-3xl p-1 items-center flex justify-center font-bold ">
                          {workout.name}
                        </p>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-white text-sm gap-2 flex flex-col text-black border border-[#b3b3b3] rounded p-2">
                        <ContextMenuItem
                          onSelect={() => {
                            const newFriday = friday.filter((_, ii) => ii !== i)
                            setFriday(newFriday)
                          }}
                          className=" p-2 border rounded-md items-center justify-center flex hover:bg-gray-700"
                        >
                          Delete
                        </ContextMenuItem>
                        <ContextMenuItem
                          onSelect={() => OpenMenu("Friday", i)}
                          className="p-2 items-center justify-center flex border rounded-md hover:bg-gray-700"
                        >
                          Edit
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 bg-[#3b3939] rounded hover:bg-[#525050]"
              onClick={() => handleAddWorkout("Friday")}
            >
              <IconPlus />
            </button>
          </div>
          <div className="w-full items-center justify-between flex text-white border-[#747474] border-2 rounded-3xl p-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2"></div>
              <p>Saturday</p>
              {saturday.length > 0 && (
                <div className="flex items-center justify-center gap-5 border-2 rounded-3xl ">
                  {saturday.map((workout, i) => (
                    <ContextMenu key={i}>
                      <ContextMenuTrigger>
                        <p className="text-sm hover:bg-gray-700 h-10 rounded-3xl p-1 items-center flex justify-center font-bold ">
                          {workout.name}
                        </p>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-white text-sm gap-2 flex flex-col text-black border border-[#b3b3b3] rounded p-2">
                        <ContextMenuItem
                          onSelect={() => {
                            const newSaturday = saturday.filter(
                              (_, ii) => ii !== i
                            )
                            setSaturday(newSaturday)
                          }}
                          className=" p-2 border rounded-md items-center justify-center flex hover:bg-gray-700"
                        >
                          Delete
                        </ContextMenuItem>
                        <ContextMenuItem
                          onSelect={() => OpenMenu("Saturday", i)}
                          className="p-2 items-center justify-center flex border rounded-md hover:bg-gray-700"
                        >
                          Edit
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 bg-[#3b3939] rounded hover:bg-[#525050]"
              onClick={() => handleAddWorkout("Saturday")}
            >
              <IconPlus />
            </button>
          </div>
          <div className="w-full items-center justify-between flex text-white border-[#747474] border-2 rounded-3xl p-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2"></div>
              <p>Sunday</p>
              {sunday.length > 0 && (
                <div className="flex items-center justify-center gap-5 border-2 rounded-3xl ">
                  {sunday.map((workout, i) => (
                    <ContextMenu key={i}>
                      <ContextMenuTrigger>
                        <p className="text-sm hover:bg-gray-700 h-10 rounded-3xl p-1 items-center flex justify-center font-bold ">
                          {workout.name}
                        </p>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-white text-sm gap-2 flex flex-col text-black border border-[#b3b3b3] rounded p-2">
                        <ContextMenuItem
                          onSelect={() => {
                            const newSunday = sunday.filter((_, ii) => ii !== i)
                            setSunday(newSunday)
                          }}
                          className=" p-2 border rounded-md items-center justify-center flex hover:bg-gray-700"
                        >
                          Delete
                        </ContextMenuItem>
                        <ContextMenuItem
                          onSelect={() => OpenMenu("Sunday", i)}
                          className="p-2 items-center justify-center flex border rounded-md hover:bg-gray-700"
                        >
                          Edit
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 bg-[#3b3939] rounded hover:bg-[#525050]"
              onClick={() => handleAddWorkout("Sunday")}
            >
              <IconPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
