# Outfit Builder App

A modern web application built with Next.js and Material-UI that allows users to create and visualize outfit combinations through a drag-and-drop interface.

## Features

- **Interactive Drag & Drop Interface**: Easily drag clothing items onto the canvas
- **Grid-Based Layout**: Automatic alignment of clothing items in a neat grid pattern
- **Visual Feedback**: Real-time visual feedback during drag and drop operations
- **Outfit Management**:
  - Save multiple outfit combinations
  - Add outfits to shopping cart
  - Reset canvas to start fresh
- **Responsive Design**: Works seamlessly on different screen sizes
- **Modern UI**: Clean and intuitive interface using Material-UI components

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd outfit-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage Guide

1. **Creating an Outfit**:
   - Browse available clothing items in the left sidebar
   - Drag items onto the canvas
   - Items will automatically snap to the grid
   - Arrange items to create your desired outfit

2. **Managing Outfits**:
   - Click "Save Outfit" to save your current creation
   - Use "Add to Cart" to save for purchase
   - Click "Reset" to clear the canvas and start over

3. **Grid System**:
   - Items automatically align to the grid
   - Visual guides help with placement
   - Maintains consistent spacing between items

## Project Structure

```
outfit-builder/
├── public/
│   └── clothing/         # Clothing item images
├── src/
│   ├── components/       # React components
│   │   ├── OutfitBuilder.tsx
│   │   ├── OutfitCanvas.tsx
│   │   └── ClothingItem.tsx
│   ├── pages/           # Next.js pages
│   └── styles/          # CSS styles
├── package.json
└── README.md
```

## Technologies Used

- **Next.js**: React framework for production
- **Material-UI**: UI component library
- **React DnD**: Drag and drop functionality
- **TypeScript**: Type safety and better developer experience

## Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes
4. Push to your fork and submit a pull request

## Future Enhancements

- Save outfits to local storage
- User accounts and authentication
- Share outfits on social media
- More clothing items and categories
- Advanced outfit recommendations

## Troubleshooting

1. If images don't load:
   - Ensure all image files are in the correct directory
   - Check image paths in the code
   - Verify file permissions

2. If drag and drop doesn't work:
   - Clear browser cache
   - Check console for errors
   - Ensure React DnD is properly initialized

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any additional questions or feedback, please open an issue in the repository.
