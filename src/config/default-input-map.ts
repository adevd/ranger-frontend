import { type GameCommand, makeMoveCommand } from "../core/commands/game-command"

export const defaultInputMap: Record<string, GameCommand> = {

	w: makeMoveCommand("up"),
	a: makeMoveCommand("left"),
	s: makeMoveCommand("down"),
	d: makeMoveCommand("right"),
	ArrowUp: makeMoveCommand("up"),
	ArrowLeft: makeMoveCommand("left"),
	ArrowDown: makeMoveCommand("down"),
	ArrowRight: makeMoveCommand("right"),
	k: makeMoveCommand("up"),
	h: makeMoveCommand("left"),
	j: makeMoveCommand("down"),
	l: makeMoveCommand("right"),

	e: { type: "interact" },

	Enter: { type: "ready" }

}
