import "./Plane.css"
import Player from "./Player"

type PlaneProps = {
  width: number;
  height: number;
  playerPosition: { x: number, y: number };
}

export default function Plane({ width, height, playerPosition }: PlaneProps) {
  const rows = Array.from({ length: height }, (_, y) => y)
  const cols = Array.from({ length: width }, (_, x) => x)

  return (
    <div className="plane">
      {rows.map((y) => (
        <div className="plane-row" key={`row-${y}`}>
          {cols.map((x) => (
            <div className="plane-cell" key={`${x}-${y}`}>
              {playerPosition.x === x && playerPosition.y === y && <Player />}
            </div>)
          )}
        </div>)
      )}
    </div>
  )
}
