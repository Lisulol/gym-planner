"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export default function SnowBackground() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  function generateSnowflakes() {
    const newSnowflakes: Snowflake[] = []
    for (let i = 0; i < 100; i++) {
      newSnowflakes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 50,
        speed: Math.random() * 2,
        opacity: Math.random() * 0.8,
      })
    }
    setSnowflakes(newSnowflakes)
  }
  function animateSnowflakes() {
    setSnowflakes((prevSnowflakes) =>
      prevSnowflakes.map((snowflake) => ({
        ...snowflake,
        y: snowflake.y + snowflake.speed,
        x: snowflake.x + Math.sin(snowflake.speed) * 0.5,
      }))
    )
  }
  function handleResize() {
    generateSnowflakes()
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    generateSnowflakes()
    setInterval(() => {
      generateSnowflakes()
    }, 50000)
    const animationInterval = setInterval(animateSnowflakes, 50)

    return () => clearInterval(animationInterval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute"
          style={{
            left: snowflake.x,
            top: snowflake.y,
          }}
        >
          <img
            src="/snowflake.svg"
            alt="*"
            width={snowflake.size}
            height={snowflake.size}
            style={{ opacity: snowflake.opacity }}
            className="pointer-events-none"
          />
        </div>
      ))}
    </div>
  )
}
