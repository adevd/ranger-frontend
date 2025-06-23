import useGameController from "../hooks/use-game-controller"
import ChatBox from "./ChatBox";
import Plane from "./Plane"
import "./Game.css"

const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;

export default function Game() {
  const { playerPosition, inputMode } = useGameController(GRID_WIDTH, GRID_HEIGHT)

  return (
    <div className="game">
      <div style={{ marginBottom: "1rem", fontFamily: "monospace" }} >
        🕹️ Input Mode: <strong>{inputMode.toUpperCase()}</strong> (press TAB to toggle)
      </div>
      <Plane
        width={GRID_WIDTH}
        height={GRID_HEIGHT}
        playerPosition={playerPosition}
      />
      <ChatBox playerPosition={playerPosition} />
    </div>
  )
}
