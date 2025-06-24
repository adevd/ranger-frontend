import Game from "./Game";
import "./GameScreen.css"

export default function GameScreen() {
  return (
    <div className="outer-shell">
      <div className="game-container" >
        <div className="ui-grid">
          <Game />
        </div>
      </div>
    </div>
  )
}
