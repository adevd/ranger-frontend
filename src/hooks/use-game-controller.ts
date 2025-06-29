import { useState, useEffect } from "react"
import { equals, type Vector2 } from "../core/physics/vector2";
import { defaultInputMap } from "../config/default-input-map";
import { executeGameCommand } from "../core/commands/game-command";

type InputMode = "game" | "chat"

export default function useGameController(gridWidth: number, gridHeight: number) {
	const [playerPosition, setPlayerPosition] = useState<Vector2>({ x: 0, y: 0 });
	const [inputMode, setInputMode] = useState<InputMode>("game")
	const [inputMap,] = useState(defaultInputMap)

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Tab") {
				e.preventDefault()
				setInputMode((currentMode) => currentMode === "game" ? "chat" : "game")
				return
			}

			if (inputMode !== "game") return;


			const command = inputMap[e.key]
			if (!command) return;

			const nextPosition = executeGameCommand(
				command,
				playerPosition,
				{ x: gridWidth, y: gridHeight }
			)

			if (!equals(nextPosition, playerPosition)) {
				setPlayerPosition(nextPosition)
			}

		}
		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [gridHeight, gridWidth, inputMode, playerPosition])


	return { playerPosition, setPlayerPosition, inputMode, setInputMode }
}
