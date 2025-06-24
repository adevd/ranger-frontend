import useGameController from "../hooks/use-game-controller"
import ChatBox from "./ChatBox";
import Plane from "./Plane"
import "./Game.css"
import { cx } from "../utils/utils";

const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;

export default function Game() {
  const { playerPosition, inputMode } = useGameController(GRID_WIDTH, GRID_HEIGHT)

  return (
    <>
      <div className={cx("game-pane", inputMode === "game" && "focussed")}>
        <Plane
          width={GRID_WIDTH}
          height={GRID_HEIGHT}
          playerPosition={playerPosition}
        />
      </div>
      <div className={cx("chat-pane", inputMode === "chat" && "focussed")}>
        <ChatBox playerPosition={playerPosition} />
      </div>
    </>
  )
}
