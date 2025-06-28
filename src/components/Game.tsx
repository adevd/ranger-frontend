import useGameController from "../hooks/use-game-controller"
import ChatBox from "./ChatBox";
import Plane from "./Plane"
import "./Game.css"
import { cx } from "../utils/utils";
import ActionQueue from "./ActionQueue";
import Inventory from "./Inventory";

const GRID_WIDTH = 7;
const GRID_HEIGHT = 6;


type GameProps = {
  tileSize: number;
}

export default function Game({ tileSize }: GameProps) {
  const { playerPosition, inputMode } = useGameController(GRID_WIDTH, GRID_HEIGHT)

  return (
    <>
      <div className={cx("plane-pane", inputMode === "game" && "focussed")}>
        <Plane
          width={GRID_WIDTH}
          height={GRID_HEIGHT}
          playerPosition={playerPosition}
          tileSize={tileSize}
        />
      </div>
      <div className={cx("inventory-pane", inputMode === "game" && "focussed")}>
        <Inventory tileSize={tileSize} />
      </div >
      <div className={cx("action-queue-pane", inputMode === "game" && "focussed")}>
        <ActionQueue tileSize={tileSize} />
      </div >
      <div className={cx("chat-pane", inputMode === "chat" && "focussed")}>
        <ChatBox playerPosition={playerPosition} />
      </div>
    </>
  )
}
