import useGameController from "../hooks/use-game-controller"
import Plane from "./Plane"

const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;

export default function Game() {
  const { playerPosition } = useGameController(GRID_WIDTH, GRID_HEIGHT)

  return (
    <div>
      <Plane
        width={GRID_WIDTH}
        height={GRID_HEIGHT}
        playerPosition={playerPosition}
      />
    </div>
  )
}
