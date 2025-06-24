import "./Player.css"

type PlayerProps = {
  position: { x: number, y: number }
  tileSize: number;
}

export default function Player({ position, tileSize }: PlayerProps) {
  const style = {
    position: "absolute" as const,
    transform: `translate(${position.x * tileSize}px, ${position.y * tileSize}px)`,
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    backgroundColor: "red",
    borderRadius: "4px",
  }
  return <div className="player" style={style} />
}
