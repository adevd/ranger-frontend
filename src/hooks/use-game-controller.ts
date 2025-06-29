import { useState, useEffect, useRef } from "react"
import { equals, type Vector2 } from "../core/physics/vector2";
import { defaultInputMap } from "../config/default-input-map";
import { executeGameCommand, isMoveCommand, type MoveDirection } from "../core/commands/game-command";

type InputMode = "game" | "chat"

export default function useGameController(gridWidth: number, gridHeight: number) {
	const [playerPosition, setPlayerPosition] = useState<Vector2>({ x: 0, y: 0 });
	const playerRef = useRef(playerPosition)
	const [inputMode, setInputMode] = useState<InputMode>("game")
	const [inputMap,] = useState(defaultInputMap)
	const [selectedSlot, setSelectedSlot] = useState(0)
	const shiftHeldRef = useRef(false)


	useEffect(() => {
		playerRef.current = playerPosition
	}, [playerPosition])

	useEffect(() => {

		function handleKeyUp(e: KeyboardEvent) {
			if (e.key === "Shift") shiftHeldRef.current = false
		}

		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Tab") {
				e.preventDefault()
				setInputMode((currentMode) => currentMode === "game" ? "chat" : "game")
				return
			}

			if (inputMode !== "game") return;

			if (e.key === "Shift") {
				shiftHeldRef.current = true
			}

			const command = inputMap[e.key.toLowerCase()]
			if (!command) return;

			if (shiftHeldRef.current && isMoveCommand(command)) {
				const queueNavHandlers: Record<MoveDirection, () => void> = {
					up: () => setSelectedSlot(4),
					down: () => setSelectedSlot(0),
					left: () => setSelectedSlot(s => Math.max(s - 1, 0)),
					right: () => setSelectedSlot(s => Math.min(s + 1, 4))
				}
				queueNavHandlers[command.direction]?.()
				return
			}


			const nextPosition = executeGameCommand(
				command,
				playerRef.current,
				{ x: gridWidth, y: gridHeight }
			)

			if (!equals(nextPosition, playerRef.current)) {
				setPlayerPosition(nextPosition)
			}

		}
		window.addEventListener("keydown", handleKeyDown)
		window.addEventListener("keyup", handleKeyUp)
		return () => {
			window.removeEventListener("keydown", handleKeyDown)
			window.removeEventListener("keyup", handleKeyUp)
		}
	}, [gridHeight, gridWidth, inputMode])



	return { playerPosition, setPlayerPosition, inputMode, setInputMode, selectedSlot, setSelectedSlot }
}
