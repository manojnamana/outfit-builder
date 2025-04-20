import { Box, Typography, IconButton, Badge, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { ShoppingCart as CartIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <>
      <IconButton 
        color="primary" 
        onClick={() => setIsOpen(true)}
        sx={{ position: 'fixed', top: 20, right: 20 }}
      >
        <Badge badgeContent={cartItems.length} color="secondary">
          <CartIcon />
        </Badge>
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
          
          {cartItems.length === 0 ? (
            <Typography color="text.secondary">
              Your cart is empty
            </Typography>
          ) : (
            <>
              <List>
                {cartItems.map((cartItem) => (
                  <ListItem
                    key={cartItem.id}
                    secondaryAction={
                      <IconButton 
                        edge="end" 
                        onClick={() => removeFromCart(cartItem.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{ 
                      border: '1px solid #eee',
                      borderRadius: 1,
                      mb: 1,
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <ListItemText
                      primary={`Outfit #${cartItem.id}`}
                      secondary={new Date(cartItem.timestamp).toLocaleString()}
                    />
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 1, 
                      flexWrap: 'wrap',
                      mt: 1
                    }}>
                      {cartItem.items.map((item) => (
                        <Box
                          key={item.id}
                          sx={{
                            width: 50,
                            height: 50,
                            position: 'relative',
                          }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={clearCart}
                  fullWidth
                >
                  Clear Cart
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    // Implement checkout logic
                    alert('Proceeding to checkout...');
                  }}
                  fullWidth
                >
                  Checkout
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
} 