import { useDrag } from 'react-dnd';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';

interface ClothingItemProps {
  item: {
    id: number;
    name: string;
    image: string;
  };
}

const ClothingItem = ({ item }: ClothingItemProps) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CLOTHING_ITEM',
    item: { id: item.id, name: item.name, image: item.image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(dragRef);

  return (
    <Box
      ref={dragRef}
      sx={{
        opacity: isDragging ? 0.4 : 1,
        cursor: 'move',
        width: '100%',
        border: '1px solid #eee',
        borderRadius: 1,
        p: 4,
        transition: 'all 0.2s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          transform: 'scale(1.02)',
        },
      }}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
      />
    </Box>
  );
};

export default ClothingItem; 