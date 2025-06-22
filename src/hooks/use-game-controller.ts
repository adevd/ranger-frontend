import { useState, useEffect } from "react"

type Position = { x: number; y: number }
type InputMode = "map" | "chat"

export default function useGameController(gridWidth: number, gridHeight: number) {
	const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 });
	const [inputMode, setInputMode] = useState<InputMode>("map")

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {

			if (e.key === "Tab") {
				e.preventDefault()
				setInputMode((currentMode) => currentMode === "map" ? "chat" : "map")
				return
			}

			if (inputMode !== "map") return;


			setPlayerPosition((pos) => {
				const next = { ...pos }
				if (e.key === "ArrowUp") next.y = Math.max(0, pos.y - 1)
				if (e.key === "ArrowDown") next.y = Math.min(gridHeight - 1, pos.y + 1)
				if (e.key === "ArrowLeft") next.x = Math.max(0, pos.x - 1)
				if (e.key === "ArrowRight") next.x = Math.min(pos.x + 1, gridWidth - 1)
				return next
			})
		}
		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [gridHeight, gridWidth, inputMode])


	return { playerPosition, setPlayerPosition, inputMode, setInputMode }
}
