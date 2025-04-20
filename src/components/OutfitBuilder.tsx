// @ts-nocheck
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Container, Grid, Typography, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import ClothingItem from './ClothingItem';
import OutfitCanvas from './OutfitCanvas';
import Cart from './Cart';
import { useCart } from '../context/CartContext';

interface DroppedItem {
  id: number;
  name: string;
  image: string;
  position: { x: number; y: number };
}

const OutfitBuilder = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const { addToCart } = useCart();

  const clothingItems = [
    { id: 1, name: 'T-Shirt', image: '/clothing/t-shirt.png' },
    { id: 2, name: 'Pants', image: '/clothing/trousers.png' },
    { id: 3, name: 'Jacket', image: '/clothing/varsity-jacket.png' },
    { id: 4, name: 'Dress', image: '/clothing/blouse.png' },
    { id: 5, name: 'Cap', image: '/clothing/cap.png' },
    { id: 6, name: 'Shoes', image: '/clothing/sport-shoe.png' },
  ];

  const handleReset = () => {
    window.location.reload();
    setSnackbarMessage('Canvas cleared');
  };

  const handleSaveOutfit = () => {
    if (droppedItems.length === 0) {
      setSnackbarMessage('Add some items to the canvas first');
      return;
    }
    setSnackbarMessage('Outfit saved successfully');
  };

  const handleAddToCart = () => {
    if (droppedItems.length === 0) {
      setSnackbarMessage('Add some items to the canvas first');
      return;
    }
    addToCart(droppedItems);
    setSnackbarMessage('Added to cart successfully');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Outfit Builder
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: 4,
          bgcolor: '#f5f5f5',
          p: 4,
          borderRadius: 2
        }}>
          <Box sx={{ 
            width: '200px',
            p: 2,
            bgcolor: 'white',
            borderRadius: 1,
            boxShadow: 1
          }}>
            <Grid container spacing={2}>
              {clothingItems.map((item) => (
                <Grid item xs={12} key={item.id} component="div">
                  <ClothingItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Box sx={{ 
            flex: 1,
            bgcolor: 'white',
            borderRadius: 1,
            boxShadow: 1,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Typography variant="h6" align="center" sx={{ color: '#666' }}>
              CANVAS AREA
            </Typography>
            <OutfitCanvas onItemsChange={setDroppedItems} />
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center',
              mt: 2
            }}>
              <Button 
                variant="outlined" 
                onClick={handleReset}
                sx={{ minWidth: '120px' }}
              >
                Reset
              </Button>
              <Button 
                variant="outlined" 
                onClick={handleSaveOutfit}
                sx={{ minWidth: '120px' }}
              >
                Save Outfit
              </Button>
              <Button 
                variant="contained" 
                onClick={handleAddToCart}
                sx={{ minWidth: '120px' }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>

        <Cart />

        <Snackbar
          open={!!snackbarMessage}
          autoHideDuration={3000}
          onClose={() => setSnackbarMessage('')}

          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity="success">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </DndProvider>
  );
};

export default OutfitBuilder; 