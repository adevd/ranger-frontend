import { useState, useEffect } from "react"

type Position = { x: number; y: number }

export default function useGameController(gridWidth: number, gridHeight: number) {
	const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 });

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
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
	}, [gridHeight, gridWidth])


	return { playerPosition, setPlayerPosition }
}
