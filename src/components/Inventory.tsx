import "./Inventory.css"

type InventoryProps = {
  tileSize: number;
}

export default function Inventory({ tileSize }: InventoryProps) {
  const INVENTORY_SIZE_TEMP = 2

  return (
    <div className="inventory-wrapper">
      <div
        className="inventory-grid"
        style={{
          gridTemplateColumns: `repeat(${INVENTORY_SIZE_TEMP}, ${tileSize}px)`,
          gridTemplateRows: `repeat(${INVENTORY_SIZE_TEMP}, ${tileSize}px)`,
        }}
      >
        {Array.from({ length: INVENTORY_SIZE_TEMP * INVENTORY_SIZE_TEMP }).map((_, i) => {
          return <div
            key={i}
            className="inventory-slot"
            style={{
              width: tileSize,
              height: tileSize,
            }}
          />
        })}
      </div>
    </div>
  )
}
