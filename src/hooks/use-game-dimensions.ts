import { useState, useEffect, useRef } from "react";
import {
	UI_GRID_ROWS,
	UI_GRID_COLS,
	BASE_TILE_SIZE,
	MIN_TILE_SIZE,
	MAX_TILE_SIZE
} from "../config/gameLayout"

export default function useGameDimensions() {
	const containerRef = useRef<HTMLDivElement>(null)
	const [tileSize, setTileSize] = useState(BASE_TILE_SIZE)

	useEffect(() => {
		const container = containerRef.current
		if (!container) return;

		const updateSize = () => {
			const { width, height } = container.getBoundingClientRect()
			const rawTileSize = Math.min(width / UI_GRID_COLS, height / UI_GRID_ROWS)
			const rounded = Math.floor(rawTileSize / BASE_TILE_SIZE) * BASE_TILE_SIZE
			const clamped = Math.max(MIN_TILE_SIZE, Math.min(rounded, MAX_TILE_SIZE))
			setTileSize(clamped)
		}

		const resizeObserver = new ResizeObserver(updateSize)
		resizeObserver.observe(container)

		updateSize()

		return () => resizeObserver.disconnect()

	}, [])

	return {
		tileSize,
		containerRef,
		totalWidth: tileSize * UI_GRID_COLS,
		totalHeight: tileSize * UI_GRID_ROWS,
		gridColumns: UI_GRID_COLS,
		gridRows: UI_GRID_ROWS,
	}
}
