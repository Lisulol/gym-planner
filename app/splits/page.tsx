"use client"
import NavBarComponent from "@/components/NavBar/navbar"
import { IconArrowLeft, IconPlus } from "@tabler/icons-react"
import { useEffect, useState, useContext } from "react"
import { Context } from "@/providers/Context"
import SnowBackground from "@/components/SnowBackground/back"

export default function Spilts() {
  const [showlsplits, setShowlsplits] = useState(false)
  const [showcsplits, setShowcsplits] = useState(false)
  const [page, setPage] = useState(0)
  const { splits, setSplits } = useContext(Context)!

  useEffect(() => {
    setPage(0)
  }, [showlsplits])

  return (
    <div className="h-screen w-full flex bg-linear-to-b from-[#00eeff] to-[#0281a8]">
      <SnowBackground />
      <div className="fixed w-full z-10">
        <NavBarComponent />
      </div>
      <div className="w-full h-full flex relative">
        {showlsplits && (
          <div
            onClick={() => setShowlsplits(false)}
            className="fixed w-full h-full flex items-center justify-center z-20"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex w-4/5 h-4/5 flex-col bg-[#222222] rounded-4xl border-2"
            >
              <div className="w-full p-10 flex items-center justify-center border-b-4 border-black">
                <p className="font-bold text-2xl text-white">
                  Learn your splits
                </p>
              </div>
              {page === 0 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex items-center justify-center h-4/5">
                    <p className="text-white  font-bold text-center w-3/5">
                      Splits are a way to organize your workouts throughout the
                      week
                      <br />
                      to target different muscle groups on different days.
                      <br />
                      This allows for better recovery and more focused training
                      sessions.
                      <br />
                      The most important thing is choosing how many days a week
                      can you train.
                      <br />
                      Some splits may be better, some may be worse.
                      <br />
                      Try to hit every muscle group at least twice a week
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex"></div>
                    <div className="flex">
                      <button
                        onClick={() => setPage(page + 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {page === 1 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex flex-col items-center justify-center h-4/5">
                    <div className="w-full flex items-center justify-center">
                      <p className="font-bold text-2xl text-white">
                        Body Part Splits
                      </p>
                    </div>
                    <p className="text-white  font-bold text-center w-3/5">
                      Choose a split that fits your schedule and goals. Below
                      are the most common options
                      <br />• Full-Body: Train all major muscle groups each
                      session.
                      <br />• Upper/Lower: Alternate upper and lower body days.
                      <br />• Push/Pull/Legs (PPL): Separate push, pull and leg
                      days.
                      <br />• Body-Part (Bro) Split: One or two muscle groups
                      per day.
                      <br />• Hybrid: Mix approaches to match availability and
                      goals.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex">
                      <button
                        onClick={() => setPage(page - 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Prev
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => setPage(page + 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {page === 2 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex flex-col items-center justify-center h-4/5">
                    <div className="w-full flex items-center justify-center">
                      <p className="font-bold text-2xl text-white">FBW</p>
                    </div>
                    <p className="text-white  font-bold text-center w-full p-20 ">
                      FBW aka Full Body Workout is a training split where you
                      work out all major muscle groups in a single session. This
                      split is typically performed 3 times a week, allowing for
                      adequate recovery between sessions. FBW is ideal for
                      beginners and those with limited time to train, as it
                      maximizes efficiency and promotes overall muscle balance.
                      This is the best split for less then 3 days a week
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex">
                      <button
                        onClick={() => setPage(page - 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Prev
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => setPage(page + 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {page === 3 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex flex-col items-center justify-center h-4/5">
                    <div className="w-full flex items-center justify-center">
                      <p className="font-bold text-2xl text-white">PPL</p>
                    </div>
                    <p className="text-white  font-bold text-center w-full p-20 ">
                      PPL aka Push Pull Legs is a training split that divides
                      workouts into three categories: push exercises (chest,
                      shoulders, triceps), pull exercises (back, biceps), and
                      leg exercises (quads, hamstrings, calves). This split is
                      typically performed 6 days a week, allowing for each
                      muscle group to be trained twice. PPL is suitable for
                      intermediate to advanced lifters looking to increase
                      training volume and frequency. This is the best split for
                      4-6 days a week
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex">
                      <button
                        onClick={() => setPage(page - 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Prev
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => setPage(page + 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {page === 4 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex flex-col items-center justify-center h-4/5">
                    <div className="w-full flex items-center justify-center">
                      <p className="font-bold text-2xl text-white">
                        Upper/Lower
                      </p>
                    </div>
                    <p className="text-white  font-bold text-center w-full p-20 ">
                      Upper/Lower Split is a training split that alternates
                      upper and lower body days. Typically, you would train your
                      upper body on one day (focusing on chest, back, shoulders,
                      arms) and your lower body on the next (targeting quads,
                      hamstrings, glutes, calves). This split is usually
                      performed 4 days a week, allowing for sufficient recovery
                      between sessions. The Upper/Lower Split is versatile and
                      can be adjusted for beginners to advanced lifters, making
                      it a popular choice for those looking to balance training
                      volume and frequency.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex">
                      <button
                        onClick={() => setPage(page - 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Prev
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => setPage(page + 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {page === 5 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex flex-col items-center justify-center h-4/5">
                    <div className="w-full flex items-center justify-center">
                      <p className="font-bold text-2xl text-white">
                        Hybrid Splits
                      </p>
                    </div>
                    <p className="text-white  font-bold text-center w-full p-20 ">
                      Hybrid Split is a flexible training approach that combines
                      elements from various workout splits to create a
                      personalized routine. This method allows individuals to
                      tailor their training based on their specific goals,
                      preferences, and schedule. For example, one might combine
                      Full-Body workouts with Push/Pull/Legs sessions or
                      alternate between Upper/Lower and Body-Part splits. The
                      Hybrid Split is ideal for those seeking variety in their
                      workouts while ensuring all muscle groups are adequately
                      targeted throughout the week.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex">
                      <button
                        onClick={() => setPage(page - 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Prev
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => setPage(page + 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {page === 6 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex flex-col items-center justify-center h-4/5">
                    <div className="w-full flex items-center justify-center">
                      <p className="font-bold text-2xl text-white">
                        BRO SPLITS!!!
                      </p>
                    </div>
                    <p className="text-white  font-bold text-center w-full p-20 ">
                      Body-Part (Bro) Split is a training split that dedicates
                      each workout session to one or two specific muscle groups.
                      For example, you might train chest on Monday, back on
                      Tuesday, legs on Wednesday, and so on. This split is
                      typically performed 5-6 days a week, allowing for high
                      volume and intensity for each muscle group. The Body-Part
                      Split is popular among bodybuilders and advanced lifters
                      aiming for maximum hypertrophy and muscle definition.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex">
                      <button
                        onClick={() => setPage(page - 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Prev
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => setPage(page + 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {page === 7 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                  <div className="w-full flex flex-col items-center justify-center h-4/5">
                    <div className="w-full flex items-center justify-center">
                      <p className="font-bold text-2xl text-white">
                        Yea I think you get it
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-5 w-full">
                    <div className="flex">
                      <button
                        onClick={() => setPage(page - 1)}
                        className="font-bold text-white border border-black p-5  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                      >
                        Prev
                      </button>
                    </div>
                    <div className="flex"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {showcsplits && (
          <div
            onClick={() => setShowcsplits(false)}
            className="fixed w-full h-full flex items-center justify-center z-20"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex w-4/5 h-4/5 flex-col bg-[#222222] rounded-4xl border-2"
            >
              <div className="w-full p-10 flex items-center justify-center border-b-4 border-black">
                <p className="font-bold text-2xl text-white">
                  Choose your splits
                </p>
              </div>

              <div className="w-full font-bold text-white h-full flex flex-col items-center justify-center gap-10">
                <p>Choose it</p>

                <div className="flex flex-col gap-2">
                  <div>
                    <input
                      type="radio"
                      id="fbw"
                      name="split"
                      value="FBW"
                      checked={splits === "FBW"}
                      onChange={(e) =>
                        setSplits(
                          e.target.value as
                            | "FBW"
                            | "PPL"
                            | "UpperLower"
                            | "Hybrid"
                            | "BroSplit"
                        )
                      }
                    />
                    <label htmlFor="fbw">Full Body Workout (FBW)</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="ppl"
                      name="split"
                      value="PPL"
                      checked={splits === "PPL"}
                      onChange={(e) =>
                        setSplits(
                          e.target.value as
                            | "FBW"
                            | "PPL"
                            | "UpperLower"
                            | "Hybrid"
                            | "BroSplit"
                        )
                      }
                    />
                    <label htmlFor="ppl">Push Pull Legs (PPL)</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="upperlower"
                      name="split"
                      value="UpperLower"
                      checked={splits === "UpperLower"}
                      onChange={(e) =>
                        setSplits(
                          e.target.value as
                            | "FBW"
                            | "PPL"
                            | "UpperLower"
                            | "Hybrid"
                            | "BroSplit"
                        )
                      }
                    />
                    <label htmlFor="upperlower">Upper Lower</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="hybrid"
                      name="split"
                      value="Hybrid"
                      checked={splits === "Hybrid"}
                      onChange={(e) =>
                        setSplits(
                          e.target.value as
                            | "FBW"
                            | "PPL"
                            | "UpperLower"
                            | "Hybrid"
                            | "BroSplit"
                        )
                      }
                    />
                    <label htmlFor="hybrid">Hybrid Split</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="brosplit"
                      name="split"
                      value="BroSplit"
                      checked={splits === "BroSplit"}
                      onChange={(e) =>
                        setSplits(
                          e.target.value as
                            | "FBW"
                            | "PPL"
                            | "UpperLower"
                            | "Hybrid"
                            | "BroSplit"
                        )
                      }
                    />
                    <label htmlFor="brosplit">Bro Split</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 flex border-2 border-black flex-col text-3xl justify-between rounded-4xl bg-[#1d1d1d] pt-10">
            <div className="w-full  border-b-2 border-black  p-5 flex items-center justify-center">
              <p className="font-bold text-white">Splits </p>
            </div>
            <div className="flex w-full h-full items-center justify-center">
              <div className="flex w-4/5 gap-5 h-4/5 items-center">
                <button
                  onClick={() => setShowlsplits(true)}
                  className="font-bold text-white border border-black p-15  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                >
                  Learn your Splits
                </button>
                <button
                  onClick={() => setShowcsplits(true)}
                  className="font-bold text-white border border-black p-15  items-center justify-center flex rounded-4xl hover:bg-[#333333] hover:border-white "
                >
                  Choose your splits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
