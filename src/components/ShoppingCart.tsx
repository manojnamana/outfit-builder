import { Box, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';

interface OutfitItem {
  id: number;
  name: string;
  image: string;
}

const ShoppingCart = () => {
  const [outfits, setOutfits] = useState<OutfitItem[]>([]);

  const handleAddToCart = () => {
    // This would be connected to the OutfitCanvas to get the current outfit
    const newOutfit = {
      id: Date.now(),
      name: 'Custom Outfit',
      image: '/outfit-preview.png', // This would be generated from the canvas
    };
    setOutfits((prev) => [...prev, newOutfit]);
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        onClick={handleAddToCart}
        sx={{ mb: 2 }}
      >
        Add to Cart
      </Button>
      <List>
        {outfits.map((outfit) => (
          <ListItem key={outfit.id}>
            <ListItemAvatar>
              <Avatar>
                <Image
                  src={outfit.image}
                  alt={outfit.name}
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={outfit.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ShoppingCart; 