import "./ActionQueue.css"

type ActionQueueProps = {
  tileSize: number;
}

export default function ActionQueue({ tileSize }: ActionQueueProps) {
  return (
    <div className="action-queue">
      {Array.from({ length: 5 }).map((_, i) => {
        return <div
          key={i}
          className="action-slot"
          style={{
            width: tileSize,
            height: tileSize,
            border: "1px solid #999",
            background: "#339",
          }}
        />
      })}
    </div>
  )
}
