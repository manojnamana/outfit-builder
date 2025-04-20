import { useDrop } from 'react-dnd';
import { Box } from '@mui/material';
import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface DroppedItem {
  id: number;
  name: string;
  image: string;
  position: { x: number; y: number };
}

interface OutfitCanvasProps {
  onItemsChange?: (items: DroppedItem[]) => void;
}

const GRID_SIZE = 120; // Size of each grid cell
const ITEM_SIZE = 100; // Size of each item

const OutfitCanvas = ({ onItemsChange }: OutfitCanvasProps) => {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsChange) {
      onItemsChange(droppedItems);
    }
  }, [droppedItems, onItemsChange]);

  const calculateGridPosition = useCallback((items: DroppedItem[], dropX: number, dropY: number) => {
    // Calculate the number of items that can fit in a row
    const containerWidth = dropRef.current?.clientWidth || 600;
    const itemsPerRow = Math.floor(containerWidth / GRID_SIZE);
    
    // Find the next available grid position
    let row = Math.floor(dropY / GRID_SIZE);
    let col = Math.floor(dropX / GRID_SIZE);
    
    // Ensure we don't place items outside the container
    col = Math.min(col, itemsPerRow - 1);
    
    // Calculate the actual pixel position
    const x = (col * GRID_SIZE) + (GRID_SIZE / 2);
    const y = (row * GRID_SIZE) + (GRID_SIZE / 2);
    
    return { x, y };
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CLOTHING_ITEM',
    drop: (item: any, monitor) => {
      const offset = monitor.getClientOffset();
      const dropTargetRect = dropRef.current?.getBoundingClientRect();
      
      if (offset && dropTargetRect) {
        const dropX = offset.x - dropTargetRect.left;
        const dropY = offset.y - dropTargetRect.top;
        
        const position = calculateGridPosition(droppedItems, dropX, dropY);
        
        const newItem = {
          ...item,
          position,
        };

        setDroppedItems(prev => [...prev, newItem]);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  drop(dropRef);

  return (
    <Box
      ref={dropRef}
      sx={{
        height: 500,
        border: '2px dashed #ccc',
        borderRadius: 2,
        backgroundColor: isOver ? 'rgba(0, 0, 0, 0.02)' : 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
      
      {droppedItems.map((item) => (
        <Box
          key={item.id + item.position.x + item.position.y}
          sx={{
            position: 'absolute',
            left: item.position.x,
            top: item.position.y,
            transform: 'translate(-50%, -50%)',
            width: ITEM_SIZE,
            height: ITEM_SIZE,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <Image
            src={item.image}
            alt={item.name}
            width={ITEM_SIZE}
            height={ITEM_SIZE}
            style={{ 
              objectFit: 'contain',
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))'
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default OutfitCanvas; 