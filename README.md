# Outfit Builder App

A modern web application that allows users to create and customize outfits by dragging and dropping clothing items onto a canvas. Built with Next.js, TypeScript, and Material-UI.

## Features

- 🎨 Interactive canvas for outfit creation
- 👕 Drag and drop clothing items
- 🛒 Shopping cart functionality
- 📱 Responsive design
- 🎯 Grid-based positioning system
- 🔄 Real-time updates
- 🎨 Modern UI with Material-UI components

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd outfit
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the App Locally

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## How to Use

1. **Creating an Outfit**:
   - Drag clothing items from the left sidebar onto the canvas
   - Items will snap to a grid for precise positioning
   - Multiple items can be added to create a complete outfit

2. **Managing Your Cart**:
   - Click "Add to Cart" to save your current outfit
   - View your cart by clicking the shopping cart icon in the top-right corner
   - Remove items from cart using the delete button
   - Clear the entire cart using the "Clear Cart" button

3. **Canvas Controls**:
   - Use the "Reset" button to clear the canvas
   - "Save Outfit" to save your current creation
   - "Add to Cart" to add the current outfit to your cart

## Project Structure

```
src/
├── components/         # React components
├── context/           # React context providers
├── pages/             # Next.js pages
└── styles/            # Global styles
```

## Technologies Used

- Next.js
- TypeScript
- Material-UI
- React DnD (Drag and Drop)
- React Context API

## Additional Notes

- The app uses a grid-based system for item placement
- All images are optimized using Next.js Image component
- The cart state is persisted using React Context
- Responsive design works on both desktop and mobile devices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
