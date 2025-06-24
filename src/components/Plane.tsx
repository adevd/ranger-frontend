import "./Plane.css"
import Player from "./Player"

type PlaneProps = {
  width: number;
  height: number;
  playerPosition: { x: number, y: number };
}

export default function Plane({ width, height, playerPosition }: PlaneProps) {

  return (
    <div className="plane" style={{ "--plane-width": width, "--plane-height": height } as React.CSSProperties}>
      {Array.from({ length: width * height }, (_, i) => {
        const x = i % width;
        const y = Math.floor(i / width);
        return (
          <div className="plane-cell" key={`${x}-${y}`}>
            {playerPosition.x === x && playerPosition.y === y && <Player />}
          </div>
        )
      })}
    </div>
  )
}
