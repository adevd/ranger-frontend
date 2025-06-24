import "./Plane.css"
import Player from "./Player"
import useGameDimensions from "../hooks/use-game-dimensions"

type PlaneProps = {
  width: number;
  height: number;
  playerPosition: { x: number, y: number };
}

export default function Plane({ width, height, playerPosition }: PlaneProps) {

  const { tileSize } = useGameDimensions(width, height)
  return (
    <div className="plane-wrapper">
      <div className="tile-layer" style={{ "--plane-width": width, "--plane-height": height } as React.CSSProperties}>
        {Array.from({ length: width * height }, (_, i) => <div className="plane-tile" key={i} />)}
      </div>

      <div className="entity-layer">
        <Player position={playerPosition} tileSize={tileSize} />
      </div>
    </div>
  )
}
