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

const SnowflakeSVG = ({ size, opacity }: { size: number; opacity: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    style={{ opacity }}
    className="pointer-events-none"
  >
    <polyline
      style={{ fill: '#9BFBFF' }}
      points="311.652,478.609 311.652,411.826 345.043,411.826 345.043,445.217 411.826,445.217 411.826,411.826 445.217,411.826 445.217,345.043 411.826,345.043 411.826,311.652 478.609,311.652 478.609,278.261 478.609,278.26 478.609,278.261 512,278.261 512,233.739 478.609,233.739 478.609,200.348 411.826,200.348 411.826,166.957 445.217,166.957 445.217,100.174 411.826,100.174 411.826,66.783 345.043,66.783 345.043,100.174 311.652,100.174 311.652,33.391 278.261,33.391 278.259,33.391 278.261,33.391 278.261,0 233.739,0 233.739,33.391 233.737,33.391 200.348,33.391 200.348,100.174 166.957,100.174 166.957,66.783 100.174,66.783 100.174,100.174 66.783,100.174 66.783,166.957 100.174,166.957 100.174,200.348 33.391,200.348 33.391,233.739 0,233.739 0,278.261 33.391,278.261 33.391,278.26 33.391,278.261 33.391,311.652 100.174,311.652 100.174,345.043 66.783,345.043 66.783,411.826 100.174,411.826 100.174,445.217 166.957,445.217 166.957,411.826 200.348,411.826 200.348,478.609 233.737,478.609 233.739,478.609 233.739,512 278.261,512 278.261,478.609 278.259,478.609"
    />
    <rect x="233.739" width="44.522" height="33.391" style={{ fill: '#9BFBFF' }} />
    <rect x="100.174" y="66.783" width="66.783" height="33.391" style={{ fill: '#9BFBFF' }} />
    <rect x="66.783" y="100.174" width="33.391" height="66.783" style={{ fill: '#9BFBFF' }} />
    <polygon points="166.957,200.348 133.565,200.348 133.565,166.957 100.174,166.957 100.174,200.348 33.391,200.348 33.391,233.739 166.957,233.739" style={{ fill: '#9BFBFF' }} />
    <polygon points="200.348,133.565 200.348,166.957 233.739,166.957 233.739,133.565 233.739,100.174 233.739,33.391 200.348,33.391 200.348,100.174 166.957,100.174 166.957,133.565" style={{ fill: '#9BFBFF' }} />
  </svg>
)

export default function SnowBackground() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const generateSnowflakes = () => {
      const newSnowflakes: Snowflake[] = []
      for (let i = 0; i < 50; i++) {
        newSnowflakes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        })
      }
      setSnowflakes(newSnowflakes)
    }

    generateSnowflakes()

    const animateSnowflakes = () => {
      setSnowflakes((prevSnowflakes) =>
        prevSnowflakes
          .map((snowflake) => ({
            ...snowflake,
            y: snowflake.y + snowflake.speed,
            x: snowflake.x + Math.sin(snowflake.y * 0.01) * 0.5, // Slight horizontal drift
          }))
          .map((snowflake) => ({
            ...snowflake,
            y: snowflake.y > window.innerHeight ? -snowflake.size : snowflake.y,
            x:
              snowflake.x < -snowflake.size
                ? window.innerWidth + snowflake.size
                : snowflake.x > window.innerWidth + snowflake.size
                ? -snowflake.size
                : snowflake.x,
          }))
      )
    }

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
            transform: `rotate(${snowflake.id * 45}deg)`, // Rotate each snowflake differently
          }}
        >
          <SnowflakeSVG size={snowflake.size} opacity={snowflake.opacity} />
        </div>
      ))}
    </div>
  )
}
