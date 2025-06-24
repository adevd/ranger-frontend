import { useState, useEffect, useRef } from "react";

export default function useGameDimensions(gridWidth: number, gridHeight: number) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [tileSize, setTileSize] = useState(0)

	useEffect(() => {
		function updateSize() {
			const container = containerRef.current

			if (!container) return;

			const { width, height } = container.getBoundingClientRect()

			const newTileSize = Math.floor(
				Math.min(width / gridWidth, height / gridHeight)
			)

			setTileSize(newTileSize)
		}
		updateSize()
	}, [gridHeight, gridWidth])

	return { tileSize, containerRef }
}
