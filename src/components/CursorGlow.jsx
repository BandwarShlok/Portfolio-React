import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }

  }, [])

  return (
    <div
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-30 bg-purple-600 -z-10"
      style={{
        left: position.x - 250,
        top: position.y - 250,
      }}
    />
  )
}

export default CursorGlow