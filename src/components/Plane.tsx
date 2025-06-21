import "./Plane.css"

const GRID_SIZE = 8

export default function Plane() {
  const rows = Array.from({ length: GRID_SIZE }, (_, y) => y)
  const cols = Array.from({ length: GRID_SIZE }, (_, x) => x)

  return (
    <div className="plane">
      {rows.map((y) => (
        <div className="plane-row" key={`row-${y}`}>
          {cols.map((x) => (
            <div className="plane-cell" key={`${x}-${y}`}>
              {/* this represents a spacial cell*/}
            </div>)
          )}
        </div>)
      )}
    </div>
  )
}
