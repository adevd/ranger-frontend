import type { GameCommand } from "../core/commands/game-command";
import { cx } from "../utils/utils";
import "./ActionQueue.css"

type ActionQueueProps = {
  tileSize: number;
  selectedSlot: number;
  actionQueue: GameCommand[];

}

export default function ActionQueue({ tileSize, selectedSlot, actionQueue }: ActionQueueProps) {
  return (
    <div className="action-queue">
      {Array.from({ length: 5 }).map((_, i) => {
        const isSelected = i === selectedSlot
        return <div
          key={i}
          className={cx("action-slot", isSelected && "selected")}
          style={{
            width: tileSize,
            height: tileSize,
            border: "1px solid #999",
            background: isSelected ? "#66f" : "#339",
          }}
        />
      })}
    </div>
  )
}
