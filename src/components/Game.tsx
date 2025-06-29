import useGameController from "../hooks/use-game-controller"
import ChatBox from "./ChatBox";
import Plane from "./Plane"
import "./Game.css"
import { cx } from "../utils/utils";
import ActionQueue from "./ActionQueue";
import Inventory from "./Inventory";
import { useState } from "react";
import type { GameCommand } from "../core/commands/game-command";

const GRID_WIDTH = 7;
const GRID_HEIGHT = 6;


type GameProps = {
  tileSize: number;
}

export default function Game({ tileSize }: GameProps) {
  const { playerPosition, inputMode, selectedSlot, setSelectedSlot } = useGameController(GRID_WIDTH, GRID_HEIGHT)
  const [actionQueue, setActionQueue] = useState<GameCommand[]>([]);

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
        <ActionQueue tileSize={tileSize} selectedSlot={selectedSlot}, actionQueue={actionQueue} />
      </div >
      <div className={cx("chat-pane", inputMode === "chat" && "focussed")}>
        <ChatBox playerPosition={playerPosition} />
      </div>
    </>
  )
}
