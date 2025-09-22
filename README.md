# E-Commerce React Application

A modern, fully responsive e-commerce web application built with React featuring advanced product filtering, shopping cart functionality, and mobile-optimized design.

## 🌟 Features

- Responsive **Header** with logo and cart section  
- **Navigation menu** that becomes a dropdown in mobile view  
- Clean and modern UI with CSS styling  
- Built using **React + CSS Modules** 

## 📂 Project Structure

```
e-commerce/
├── public/
│   ├── index.html
│   └── image.png                 # Hero banner image
├── src/
│   ├── components/
│   │   ├── Cart.jsx              
│   │   ├── FilterPanel.jsx       
│   │   ├── Footer.jsx            
│   │   ├── Pagination.jsx        
│   │   ├── ProductCard.jsx       
│   │   ├── ProductCard.css      
│   │   ├── Sidebar.jsx           
│   │   └── Sidebar.css           
│   ├── App.js                   
│   ├── App.css                   
│   ├── Header.jsx               
│   ├── Header.css               
│   ├── ProductGrid.jsx           
│   ├── ProductGrid.css          
│   ├── products.js               
│   └── index.js                  
├── package.json                 
└── README.md                     
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js**: Version 14.0 or higher
- **npm**: Version 6.0 or higher (comes with Node.js)
- **Git**: For cloning the repository (optional)

### Step-by-Step Installation

1. **Navigate to project directory**
   ```bash
   cd "c:\Users\Neha Reddy\OneDrive\Pictures\Documents\user interface\e-commerce"
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```

3. **Install React Scripts (if missing)**
   ```bash
   npm install react-scripts@5.0.1
   ```

4. **Install additional dependencies**
   ```bash
   npm install lucide-react
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm start
```
- Opens `http://localhost:3000` in your browser
- Hot reload enabled - changes reflect automatically
- Development tools and error reporting active

### Production Build
```bash
npm run build
```
- Creates optimized production build in `build/` folder
- Minified and optimized for deployment





## 🎯 Key Functionalities

### Product Filtering
- **Brand Filter**: Nike, Adidas, Samsung, Apple, Sony
- **Category Filter**: Electronics, Fashion, Sports, Home, Accessories
- **Color Filter**: Visual color picker with multiple selections
- **Price Range**: Dual slider with min/max values and visual fill
- **Rating Filter**: Minimum rating selector

### Hot Deals
- **Quick Filters**: One-click filtering for trending products
- **Toggle Selection**: Click to select/deselect with blue highlighting
- **All Option**: Reset filters to show all products

### Shopping Cart
- **Add Items**: Click products to add to cart
- **Real-time Updates**: Item count and total update instantly
- **Cart Panel**: Slide-out panel with item management
- **Remove Items**: Remove individual items from cart

### Mobile Sidebar
- **Drag Handle**: Fixed position handle on left edge
- **Slide Animation**: Smooth slide-in/out transitions
- **Close Options**: X button, overlay click, or outside tap
- **Full Filters**: All desktop filters available on mobile
<<<<<<< HEAD
=======

>>>>>>> d289cb8fc5f0b5063fdc511a0a42b1edeb9bd2ff
