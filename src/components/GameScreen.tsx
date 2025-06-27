import Game from "./Game";
import "./GameScreen.css";
import useGameDimensions from "../hooks/use-game-dimensions";

export default function GameScreen() {
  const {
    tileSize,
    containerRef,
    gridColumns,
    gridRows
  } = useGameDimensions()


  return (
    <div className="outer-shell">
      <div className="game-container" ref={containerRef}>
        <div
          style={{
            width: `${tileSize * gridColumns}px`,
            height: `${tileSize * gridRows}px`,
            "--grid-cols": gridColumns,
            "--grid-rows": gridRows,
          } as React.CSSProperties
          }
          className="ui-grid"
        >
          <Game tileSize={tileSize} />
        </div>
      </div>
    </div>
  )
}
