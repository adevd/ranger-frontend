import type { Vector2 } from "../physics/vector2";

export type MoveDirection = "up" | "down" | "left" | "right";

export type MoveCommand = {
	type: "move";
	direction: MoveDirection;
}

export type InteractCommand = {
	type: "interact";
	target?: string;
}

export type ReadyUpCommand = {
	type: "ready";
}

export type WaitCommand = {
	type: "wait";
}

export type UseItemCommand = {
	type: "use-item";
	itemId: string;
}


export type GameCommand =
	| MoveCommand
	| InteractCommand
	| ReadyUpCommand
	| WaitCommand
	| UseItemCommand;

export function isMoveCommand(cmd: GameCommand): cmd is MoveCommand {
	return cmd.type === 'move';
}

export function makeMoveCommand(direction: MoveDirection): MoveCommand {
	return {
		type: "move",
		direction
	}
}

export const directionOffsets: Record<MoveDirection, [dx: number, dy: number]> = {
	up: [0, -1],
	down: [0, 1],
	left: [-1, 0],
	right: [1, 0],
}

export function executeGameCommand(
	command: GameCommand,
	currentState: Vector2,
	bounds: Vector2,
): Vector2 {
	if (command.type === "move") {
		const [dx, dy] = directionOffsets[command.direction]
		const nextX = Math.min(Math.max(currentState.x + dx, 0), bounds.x - 1)
		const nextY = Math.min(Math.max(currentState.y + dy, 0), bounds.y - 1)
		return { x: nextX, y: nextY }
	}

	return currentState
}
